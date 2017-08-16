var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var	util = require('util');
var http = require('http');
var aws4 = require('aws4');

var server = http.createServer(function (req, res) {
	if (req.method.toLowerCase() == 'get'){
		displayForm(res);
	} else if (req.method.toLowerCase() == 'post') {
		processAllFieldsOfTheForm(req, res);
	}
});


function displayForm(res) {
    fs.readFile('input.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function processAllFieldsOfTheForm(req, res) {
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
		console.log('-> post done');
		res.writeHead(200, {'content-type': 'text/plain'});
		res.end('received fields:\n\n '+util.inspect(fields));
		console.log(fields);
		dateconvert(fields);
	  });
	form.parse(req);
	/**
	form.parse(req, function (err, fields, files) {
		//Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        res.writeHead(200, {
        	'Content-Type': 'text/plain'
        });
        res.write('Received the input:\n\n');
        res.end(
			//util.inspect({fields: fields});
			out = res
			//console.log("Hi")
		);
	});
	**/
}

server.listen(1185);
console.log("server listening on 1185");

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
	if (typeof Interval != 'undefined')
	{
		Interval = miliseconds(0, 15);
	}
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
	const bucketName = obj.bucket;
	getRange(bucketName, Start, End, Interval, () => {
		console.log(objArray);
	});
}
