function callApi(startTime, endTime) {
	const http = require('http');
	const aws4 = require('aws4');

	// Input AWS access key, secret key, and session token.
	const accessKeyId = 'accessKey1';
	const secretAccessKey = 'verySecretKey1';
	const token = '';
	const bucketName = 'utapi-bucket';
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
	const credentials = { accessKeyId, secretAccessKey, token };
	const options = aws4.sign(header, credentials);
	const request = http.request(options, response => {
		const body = [];
		response.on('data', chunk => body.push(chunk));
		response.on('end', () => process.stdout.write(`${body.join('')}\n`));
	});
	request.on('error', e => process.stdout.write(`error: ${e.message}\n`));
	request.write(requestBody);
	request.end();
}

function miliseconds(hrs,min)
{
    return((hrs*60*60+min*60)*1000);
}

var Start = new Date(2017, 7, 14, 17, 0, 0, 0).getTime();
var End = new Date(2017, 7, 14, 22, 0, 0, 0).getTime() - 1;
var Interval = miliseconds(0, 15);

function getRange(Start, End, Interval)
{
	var callLimit = 10;
	var checkLimit = Math.floor((End - Start) / Interval);
	if (checkLimit > callLimit)
	{
		Interval = Math.ceil((End - Start) / callLimit);
	}
	Interval = Math.ceil(Interval / 900000.0) * 900000;
	var next = Start + Interval - 1;
	for (var i = Start; i < End; i += Interval)
	{
		callApi(i, next);
		next += Interval;
	}
}
getRange(Start, End, Interval);
