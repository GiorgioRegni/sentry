var http = require('http');
function getJSON(options, cb){
	http.request(options, function(res){
		var body = '';
		res.on('data', function(chunk){
			body += chunk;
		});
		res.on('end', function(){
			result = body;
			cb(null, body);
		});
		res.on(error, cb);
	})
	.on('error', cb)
	.end();
}

const aws4 = require('aws4');
const accessKeyId = 'accessKey1';
const secretAccessKey = 'verySecretKey1';
const token = '';
const bucketName = 'utapi-bucket';
const startTime = new Date(2017, 7, 14, 17, 0, 0, 0).getTime();
const endTime = new Date(2017, 7, 14, 22, 0, 0, 0).getTime() - 1;
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

/**
getJSON(options, functions(err, result => {
	if (err) {
		return console.log("Error while getting API");
	}
	var out = JSON.parse(result);
	console.log(out);
}
**/
getJSON(options, function(err, result){
	if (err) {
		return console.log("error in api");
	}
});
