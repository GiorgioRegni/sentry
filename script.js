/**
 * @Author: Anhelina Shulha <anhelinashulha>
 * @Date:   Aug-13-2017
 * @Email:  anhelina.shulha@gmail.com
 * @Filename: script.js
 * @Last modified by:   anhelinashulha
 * @Last modified time: Aug-15-2017
 */

// "use strict";

// let data1 =
// 	{	"timeRange":[1501570800000,1504249199999],
// 		"storageUtilized":[0,6],
// 		"incomingBytes":6,
// 		"outgoingBytes":0,
// 		"numberOfObjects":[0,1],
// 		"operations":
// 		{
// 			"s3:DeleteBucket":0,
// 			"s3:DeleteBucketCors":0,
// 			"s3:DeleteBucketWebsite":0,
// 			"s3:DeleteObjectTagging":0,
// 			"s3:ListBucket":0,
// 			"s3:GetBucketAcl":0,
// 			"s3:GetBucketCors":0,
// 			"s3:GetBucketWebsite":0,
// 			"s3:GetBucketLocation":0,
// 			"s3:CreateBucket":1,
// 			"s3:PutBucketAcl":0,
// 			"s3:PutBucketCors":0,
// 			"s3:PutBucketWebsite":0,
// 			"s3:PutObject":1,
// 			"s3:CopyObject":0,
// 			"s3:UploadPart":0,
// 			"s3:ListBucketMultipartUploads":0,
// 			"s3:ListMultipartUploadParts":0,
// 			"s3:InitiateMultipartUpload":0,
// 			"s3:CompleteMultipartUpload":0,
// 			"s3:AbortMultipartUpload":0,
// 			"s3:DeleteObject":0,
// 			"s3:MultiObjectDelete":0,
// 			"s3:GetObject":0,
// 			"s3:GetObjectAcl":0,
// 			"s3:GetObjectTagging":0,
// 			"s3:PutObjectAcl":0,
// 			"s3:PutObjectTagging":0,
// 			"s3:HeadBucket":0,
// 			"s3:HeadObject":0,
// 			"s3:PutBucketVersioning":0,
// 			"s3:GetBucketVersioning":0,
// 			"s3:PutBucketReplication":0,
// 			"s3:GetBucketReplication":0,
// 			"s3:DeleteBucketReplication":0
// 		},
// 		"bucketName":"utapi-bucket"
// 	};
//
// let data2 =
// 	{	"timeRange":[1501570800000,1504249199999],
// 		"storageUtilized":[0,6],
// 		"incomingBytes":12,
// 		"outgoingBytes":0,
// 		"numberOfObjects":[0,2],
// 		"operations":
// 		{
// 			"s3:DeleteBucket":0,
// 			"s3:DeleteBucketCors":0,
// 			"s3:DeleteBucketWebsite":0,
// 			"s3:DeleteObjectTagging":0,
// 			"s3:ListBucket":0,
// 			"s3:GetBucketAcl":0,
// 			"s3:GetBucketCors":0,
// 			"s3:GetBucketWebsite":0,
// 			"s3:GetBucketLocation":0,
// 			"s3:CreateBucket":1,
// 			"s3:PutBucketAcl":0,
// 			"s3:PutBucketCors":0,
// 			"s3:PutBucketWebsite":0,
// 			"s3:PutObject":2,
// 			"s3:CopyObject":0,
// 			"s3:UploadPart":0,
// 			"s3:ListBucketMultipartUploads":0,
// 			"s3:ListMultipartUploadParts":0,
// 			"s3:InitiateMultipartUpload":0,
// 			"s3:CompleteMultipartUpload":0,
// 			"s3:AbortMultipartUpload":0,
// 			"s3:DeleteObject":0,
// 			"s3:MultiObjectDelete":0,
// 			"s3:GetObject":0,
// 			"s3:GetObjectAcl":0,
// 			"s3:GetObjectTagging":0,
// 			"s3:PutObjectAcl":0,
// 			"s3:PutObjectTagging":0,
// 			"s3:HeadBucket":0,
// 			"s3:HeadObject":0,
// 			"s3:PutBucketVersioning":0,
// 			"s3:GetBucketVersioning":0,
// 			"s3:PutBucketReplication":0,
// 			"s3:GetBucketReplication":0,
// 			"s3:DeleteBucketReplication":0
// 		},
// 		"bucketName":"utapi-bucket"
// 	};
//
// let data3 =
// 	{	"timeRange":[1501570800000,1504249199999],
// 		"storageUtilized":[0,6],
// 		"incomingBytes":18,
// 		"outgoingBytes":0,
// 		"numberOfObjects":[0,3],
// 		"operations":
// 		{
// 			"s3:DeleteBucket":0,
// 			"s3:DeleteBucketCors":0,
// 			"s3:DeleteBucketWebsite":0,
// 			"s3:DeleteObjectTagging":0,
// 			"s3:ListBucket":0,
// 			"s3:GetBucketAcl":0,
// 			"s3:GetBucketCors":0,
// 			"s3:GetBucketWebsite":0,
// 			"s3:GetBucketLocation":0,
// 			"s3:CreateBucket":1,
// 			"s3:PutBucketAcl":0,
// 			"s3:PutBucketCors":0,
// 			"s3:PutBucketWebsite":0,
// 			"s3:PutObject":3,
// 			"s3:CopyObject":0,
// 			"s3:UploadPart":0,
// 			"s3:ListBucketMultipartUploads":0,
// 			"s3:ListMultipartUploadParts":0,
// 			"s3:InitiateMultipartUpload":0,
// 			"s3:CompleteMultipartUpload":0,
// 			"s3:AbortMultipartUpload":0,
// 			"s3:DeleteObject":0,
// 			"s3:MultiObjectDelete":0,
// 			"s3:GetObject":0,
// 			"s3:GetObjectAcl":0,
// 			"s3:GetObjectTagging":0,
// 			"s3:PutObjectAcl":0,
// 			"s3:PutObjectTagging":0,
// 			"s3:HeadBucket":0,
// 			"s3:HeadObject":0,
// 			"s3:PutBucketVersioning":0,
// 			"s3:GetBucketVersioning":0,
// 			"s3:PutBucketReplication":0,
// 			"s3:GetBucketReplication":0,
// 			"s3:DeleteBucketReplication":0
// 		},
// 		"bucketName":"utapi-bucket"
// 	};
//
// let data4 =
// 	{	"timeRange":[1501570800000,1504249199999],
// 		"storageUtilized":[0,6],
// 		"incomingBytes":12,
// 		"outgoingBytes":0,
// 		"numberOfObjects":[0,3],
// 		"operations":
// 		{
// 			"s3:DeleteBucket":0,
// 			"s3:DeleteBucketCors":0,
// 			"s3:DeleteBucketWebsite":0,
// 			"s3:DeleteObjectTagging":0,
// 			"s3:ListBucket":0,
// 			"s3:GetBucketAcl":0,
// 			"s3:GetBucketCors":0,
// 			"s3:GetBucketWebsite":0,
// 			"s3:GetBucketLocation":0,
// 			"s3:CreateBucket":1,
// 			"s3:PutBucketAcl":0,
// 			"s3:PutBucketCors":0,
// 			"s3:PutBucketWebsite":0,
// 			"s3:PutObject":3,
// 			"s3:CopyObject":0,
// 			"s3:UploadPart":0,
// 			"s3:ListBucketMultipartUploads":0,
// 			"s3:ListMultipartUploadParts":0,
// 			"s3:InitiateMultipartUpload":0,
// 			"s3:CompleteMultipartUpload":0,
// 			"s3:AbortMultipartUpload":0,
// 			"s3:DeleteObject":0,
// 			"s3:MultiObjectDelete":0,
// 			"s3:GetObject":0,
// 			"s3:GetObjectAcl":0,
// 			"s3:GetObjectTagging":0,
// 			"s3:PutObjectAcl":0,
// 			"s3:PutObjectTagging":0,
// 			"s3:HeadBucket":0,
// 			"s3:HeadObject":0,
// 			"s3:PutBucketVersioning":0,
// 			"s3:GetBucketVersioning":0,
// 			"s3:PutBucketReplication":0,
// 			"s3:GetBucketReplication":0,
// 			"s3:DeleteBucketReplication":0
// 		},
// 		"bucketName":"utapi-bucket"
// 	};
//
// let data5 =
// 	{	"timeRange":[1501570800000,1504249199999],
// 		"storageUtilized":[0,6],
// 		"incomingBytes":24,
// 		"outgoingBytes":0,
// 		"numberOfObjects":[0,3],
// 		"operations":
// 		{
// 			"s3:DeleteBucket":0,
// 			"s3:DeleteBucketCors":0,
// 			"s3:DeleteBucketWebsite":0,
// 			"s3:DeleteObjectTagging":0,
// 			"s3:ListBucket":0,
// 			"s3:GetBucketAcl":0,
// 			"s3:GetBucketCors":0,
// 			"s3:GetBucketWebsite":0,
// 			"s3:GetBucketLocation":0,
// 			"s3:CreateBucket":1,
// 			"s3:PutBucketAcl":0,
// 			"s3:PutBucketCors":0,
// 			"s3:PutBucketWebsite":0,
// 			"s3:PutObject":3,
// 			"s3:CopyObject":0,
// 			"s3:UploadPart":0,
// 			"s3:ListBucketMultipartUploads":0,
// 			"s3:ListMultipartUploadParts":0,
// 			"s3:InitiateMultipartUpload":0,
// 			"s3:CompleteMultipartUpload":0,
// 			"s3:AbortMultipartUpload":0,
// 			"s3:DeleteObject":0,
// 			"s3:MultiObjectDelete":0,
// 			"s3:GetObject":0,
// 			"s3:GetObjectAcl":0,
// 			"s3:GetObjectTagging":0,
// 			"s3:PutObjectAcl":0,
// 			"s3:PutObjectTagging":0,
// 			"s3:HeadBucket":0,
// 			"s3:HeadObject":0,
// 			"s3:PutBucketVersioning":0,
// 			"s3:GetBucketVersioning":0,
// 			"s3:PutBucketReplication":0,
// 			"s3:GetBucketReplication":0,
// 			"s3:DeleteBucketReplication":0
// 		},
// 		"bucketName":"utapi-bucket"
// 	};
//
// let arr = [data1, data2, data3, data4, data5];

function chartIncomingBytes(arr) {
	let	width = 500,
		height = 500,
		padding = 25,
		bar_width = 30;

	let incomingBytesArr = arr.map(function(i) { return i.incomingBytes; });

	console.log(incomingBytesArr);

	let canvas = d3.select("body").append("svg")
					.attr("width", width)
					.attr("height", height);

	let bars = 	canvas.selectAll("rect")
					.data(incomingBytesArr)
					.enter()
					.append("rect")
					.attr("x", function(d, i) { return i * width / incomingBytesArr.length; })
					.attr("y", function(d) { return height - (d * 10) })
					.attr("width", width / incomingBytesArr.length - padding)
					.attr("height", function(d) { return d * 10; })
					.attr("fill", function(d) {
						return "rgb(244, " + (d * 10 - 20) + ", " + (d * 10 - 30) + ")"; });

}

var res = [];
var counter = 0;
var iterations;
var jsonarray = function (body)
{
	res.push(body);
	counter += 1;
	if (iterations == counter)
	{
		chartIncomingBytes(res);
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
