var express = require('express');
var path = require('path');
var aws4 = require('aws4');
var http = require('http');
var formidable = require("formidable");
var app = express();
const jsdom = require("jsdom");
var totalData;

/** controllers to run files **/

app.get('/script.js',function(req,res){
    res.sendFile(path.join(__dirname + '/script.js'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/', function(req, res) {
    res.redirect('/index.html');
});


app.get('/user', function(req, res, next) {
  res.json(totalData);
});

app.listen(8080);
console.log("Listening on Port 8080");


/** rendering data from form and posting it to file.html for graphs to parse **/

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
		dateconvert(fields, (data) => {
			res.sendFile(path.join(__dirname + '/file.html'));
		});
	  });
	form.parse(req);
});


/** controllers to run html plugins **/

app.get('/img/zenko-logo.png',function(req,res){
    res.sendFile(path.join(__dirname + '/img/zenko-logo.png'));
});

app.get('/css/jquery.fullPage.css',function(req,res){
    res.sendFile(path.join(__dirname + '/css/jquery.fullPage.css'));
});

app.get('/css/style.css',function(req,res){
    res.sendFile(path.join(__dirname + '/css/style.css'));
});

app.get('/js/jquery.fullPage.min.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/jquery.fullPage.min.js'));
});


/** call to service api, with authentication and parsing parameters from the form **/
var objArray = [];
function callServiceApi(name, accessKeyId, secretAccessKey, startTime, endTime, cb) {
	console.log("Service Api called");
	const token = '';
	const requestBody = JSON.stringify({
		service: ['s3'],
		timeRange: [startTime, endTime],
	});
	const header = {
		host: 'localhost',
		port: 8100,
		method: 'POST',
		service: 's3',
		path: '/service?Action=ListMetrics',
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

/** call to bucket api, with authentication and parsing parameters from the form **/

function callBucketApi(name, accessKeyId, secretAccessKey, startTime, endTime, cb) {
	console.log("Bucket Api called");
	const token = '';
	const requestBody = JSON.stringify({
		buckets: [name],
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


/** range to caluclate the interval and make sure doesn't exceed the api call limit **/

function getRange(name, accessKeyId, secretAccessKey, option, Start, End, Interval, cb) {
	var counter = 0;
	var iterations;
	var callLimit = 10;
	var checkLimit = Math.floor((End - Start) / Interval);
	if (checkLimit > callLimit)
	{
		Interval = Math.ceil((End - Start) / callLimit);
	}
	Interval = Math.ceil(Interval / 900000.0) * 900000;
	var Next = Start + Interval - 1;
	iterations = Math.ceil((End - Start) / Interval);

	console.log("Name", name);
	console.log("Interval", Interval);
	console.log("Start", Start);
	console.log("End", End);
	console.log("Option", option);

	if (option == 0)
	{
		for (var i = Start; i < End; i += Interval)
		{
			callServiceApi(name, accessKeyId, secretAccessKey, i, Next, function(err, result) {
				objArray.push(result);
				counter += 1;
				if (counter == iterations) {
					console.log("API Output", objArray.length)
					cb(null, objArray);
				} });
				Next += Interval;
			}
	}
	else
	{
		for (var i = Start; i < End; i += Interval)
		{
			callBucketApi(name, accessKeyId, secretAccessKey, i, Next, function(err, result) {
				objArray.push(result);
				counter += 1;
				if (counter == iterations) {
					console.log("API Output", objArray.length)
					cb(null, objArray);
				} });
				Next += Interval;
		}
	}
}

/** time conversions from the timeStamp parameter from form **/

function dateconvert(obj, cb){
	const accessKeyId = obj.accesskey;
	const secretAccessKey = obj.secretkey;
	var option;
	if (obj.type == 'Service Level')
		option = 0;
	else
		option = 1;
	var Start = new Date(obj.dateStart + 'T' + obj.timeStart).getTime();
	var End = new Date(obj.dateEnd + 'T' + obj.timeEnd).getTime();
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
	var name = obj.name;
	getRange(name, accessKeyId, secretAccessKey, option, Start, End, Interval, () => {
		console.log(objArray);
		totalData = JSON.stringify(objArray);
		cb(null, totalData);
	});
}
