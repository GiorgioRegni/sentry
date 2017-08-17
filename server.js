var express = require('express');
var app = express();
var path = require('path');
var formidable = require("formidable");
var aws4 = require('aws4');
var http = require('http');
//var d3 = require('d3');
// var d3 = require('d3-node');
//var jsdom = require('jsdom');
//var ejs = require('ejs');

// var document = jsdom.jsdom(),
// 	svg = d3.select(document.body).append("svg");

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/file.html'));
// });


app.get('/script.js',function(req,res){
    res.sendFile(path.join(__dirname + '/script.js'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/', function(req, res) {
    res.redirect('/file.html');
});

app.listen(8080);
console.log("Listening on Port 8080");


app.post('/', function(req, res, next) {
	var	form = new formidable.IncomingForm();
	fields = {};

	form
	  .on('error', function(err) {
		res.writeHead(500, {'content-type': 'text/plain'});
		res.end('error:\n\n'+util.inspect(err));
		console.error(err);
	  })
	  .on('field', function(field, value) {
		console.log(field, value);
		fields[field] = value;
	  })
	  .on('end', function() {
		console.log(fields);
		dateconvert(fields);
	  });
	form.parse(req);
});


var objArray = [];
function callApi(bucketName, startTime, endTime, cb) {

	const accessKeyId = 'accessKey1';
	const secretAccessKey = 'verySecretKey1';
	const token = '';
	const requestBody = JSON.stringify({
		buckets: [bucketName],
		timeRange: [startTime, endTime],
	});
	const header = {
		host: 'localhost',
		port: 8100,
		method: 'POST',
		service: 's3',
		path: '/buckets?Action=ListMetrics',
		signQuery: false,
		body: requestBody,
	};
	const credentials = { accessKeyId, secretAccessKey, token };
	const options = aws4.sign(header, credentials);
	const request = http.request(options, response => {
		const body = [];
		response.on('data', chunk => body.push(chunk));
		response.on('end', () => cb(null, `${body.join('')}`));
	});
	request.on('error', e => process.stdout.write(`error: ${e.message}\n`));
	request.write(requestBody);
	request.end();
}

function miliseconds(hrs,min)
{
    return((hrs*60*60+min*60)*1000);
}

function getRange(bucketName, Start, End, Interval, cb)
{
	var counter = 0;
	var iterations;
	var callLimit = 5;
	var checkLimit = Math.floor((End - Start) / Interval);
	if (checkLimit > callLimit)
	{
		Interval = Math.ceil((End - Start) / callLimit);
	}
	Interval = Math.ceil(Interval / 900000.0) * 900000;
	var Next = Start + Interval - 1;
	iterations = Math.ceil((End - Start) / Interval);

	console.log("Bucket Name", bucketName);
	console.log("Interval", Interval);
	console.log("Start", Start);
	console.log("End", End);

	for (var i = Start; i < End; i += Interval)
	{
		callApi(bucketName, i, Next, function(err, result) {
			objArray.push(result);
			counter += 1;
			if (counter == iterations) {
				cb(null, objArray);
			} });
		Next += Interval;
	}
}

function dateconvert(obj){
	console.log(obj);
	var Start;
	var End;
	var Start = new Date(obj.dateStart + 'T' + obj.timeStart).getTime();
	var End = new Date(obj.dateEnd + 'T' + obj.timeEnd).getTime();
	if (obj.hasOwnProperty('dataStart') == false || obj.hasOwnPropery('timeStart') == false)
	{
		Start = new Date(2017, 7, 1, 0, 0, 0, 0).getTime();
	}
	if (obj.hasOwnProperty('dataEnd') == false || obj.hasOwnPropery('timeEnd') == false)
	{
		End = new Date(2017, 9, 1, 0, 0, 0, 0).getTime();
	}
	var Interval;
	if (obj.timeStamp == '15 min')
		Interval = miliseconds(0, 15);
	else if (obj.timeStamp == '30 min')
		Interval = miliseconds(0, 30);
	else if (obj.timeStamp == '01 hr')
		Interval = miliseconds(1, 0);
	else if (obj.timeStamp == '06 hrs')
		Interval = miliseconds(6, 0);
	else if (obj.timeStamp == '12 hrs')
		Interval = miliseconds(12, 0);
	else if (obj.timeStamp == '01 day')
		Interval = miliseconds(24, 0);
	else if (obj.timeStamp == '15 days')
		Interval = miliseconds(360, 0);
	else if (obj.timeStamp == '01 month')
		Interval = miliseconds(720, 15);
	else
		Interval = miliseconds(0, 30);

	bucketName = obj.bucket;
	bucketName = 'test';
	getRange(bucketName, Start, End, Interval, () => {
		var send = [];
		for (var i = 0; i < objArray.length; i++)
		{
	 		send.push((JSON.parse(objArray[i]))[0]);
		}
		buildChart(send);
	});
}
