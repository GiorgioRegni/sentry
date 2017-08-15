var res = [];
var counter = 0;
var iterations;
var jsonarray = function (body)
{
	res.push(body);
	counter += 1;
	if (iterations == counter)
	{
		console.log("Res Length", res.length);
	}
}

function callApi(bucketName, startTime, endTime) {
	const http = require('http');
	const aws4 = require('aws4');

	// Input AWS access key, secret key, and session token.
	const accessKeyId = 'accessKey1';
	const secretAccessKey = 'verySecretKey1';
	const token = '';
	// Get the start and end times for a range of one month.
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
	var fs = require('fs');
	const credentials = { accessKeyId, secretAccessKey, token };
	const options = aws4.sign(header, credentials);
	const request = http.request(options, response => {
		const body = [];
		response.on('data', chunk => body.push(chunk));
		response.on('end', () => jsonarray(`${body.join('')}`));
	});
	request.on('error', e => process.stdout.write(`error: ${e.message}\n`));
	request.write(requestBody);
	request.end();
}

function miliseconds(hrs,min)
{
    return((hrs*60*60+min*60)*1000);
}

var Start = new Date(2017, 7, 13, 17, 0, 0, 0).getTime();
var End = new Date(2017, 7, 14, 22, 0, 0, 0).getTime() - 1;
var Interval = miliseconds(0, 15);
const bucketName = 'utapi-bucket';

function getRange(Start, End, Interval)
{
	var callLimit = 5;
	var checkLimit = Math.floor((End - Start) / Interval);
	if (checkLimit > callLimit)
	{
		Interval = Math.ceil((End - Start) / callLimit);
	}
	Interval = Math.ceil(Interval / 900000.0) * 900000;
	var next = Start + Interval - 1;
	iterations = Math.ceil((End - Start) / Interval);
	console.log('Iterations', iterations)
	for (var i = Start; i < End; i += Interval)
	{
		callApi(bucketName, i, next);
		next += Interval;
	}
}
getRange(Start, End, Interval);
