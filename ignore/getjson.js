var res = [];
function callApi(bucketName, startTime, endTime, cb) {
	const http = require('http');
	const aws4 = require('aws4');

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

var Start = new Date(2017, 7, 13, 17, 0, 0, 0).getTime();
var End = new Date(2017, 7, 14, 22, 0, 0, 0).getTime() - 1;
var Interval = miliseconds(0, 15);
const bucketName = 'utapi-bucket';

function getRange(Start, End, Interval, cb)
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
	for (var i = Start; i < End; i += Interval)
	{
		callApi(bucketName, i, Next, function(err, result) {
			res.push(result);
			counter += 1;
			if (counter == iterations) {
				cb(null, res);
			}
		});
		Next += Interval;
	}
}
getRange(Start, End, Interval, () => {
	console.log(res.length);
});
