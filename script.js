/**
 * @Author: Anhelina Shulha <anhelinashulha>
 * @Date:   Aug-14-2017
 * @Email:  anhelina.shulha@gmail.com
 * @Filename: script.js
 * @Last modified by:   anhelinashulha
 * @Last modified time: Aug-17-2017
 */

let data1 =
	{	"timeRange":[1501570800000,1504249199999],
		"storageUtilized":[0,6],
		"incomingBytes":6,
		"outgoingBytes":0,
		"numberOfObjects":[0,1],
		"operations":
		{
			"s3:DeleteBucket":0,
			"s3:DeleteBucketCors":0,
			"s3:DeleteBucketWebsite":0,
			"s3:DeleteObjectTagging":0,
			"s3:ListBucket":0,
			"s3:GetBucketAcl":0,
			"s3:GetBucketCors":0,
			"s3:GetBucketWebsite":0,
			"s3:GetBucketLocation":0,
			"s3:CreateBucket":1,
			"s3:PutBucketAcl":0,
			"s3:PutBucketCors":0,
			"s3:PutBucketWebsite":0,
			"s3:PutObject":1,
			"s3:CopyObject":0,
			"s3:UploadPart":0,
			"s3:ListBucketMultipartUploads":0,
			"s3:ListMultipartUploadParts":0,
			"s3:InitiateMultipartUpload":0,
			"s3:CompleteMultipartUpload":0,
			"s3:AbortMultipartUpload":0,
			"s3:DeleteObject":0,
			"s3:MultiObjectDelete":0,
			"s3:GetObject":0,
			"s3:GetObjectAcl":0,
			"s3:GetObjectTagging":0,
			"s3:PutObjectAcl":0,
			"s3:PutObjectTagging":0,
			"s3:HeadBucket":0,
			"s3:HeadObject":0,
			"s3:PutBucketVersioning":0,
			"s3:GetBucketVersioning":0,
			"s3:PutBucketReplication":0,
			"s3:GetBucketReplication":0,
			"s3:DeleteBucketReplication":0
		},
		"bucketName":"utapi-bucket"
	};

let data2 =
	{	"timeRange":[1501570800000,1504249199999],
		"storageUtilized":[0,6],
		"incomingBytes":12,
		"outgoingBytes":0,
		"numberOfObjects":[0,2],
		"operations":
		{
			"s3:DeleteBucket":0,
			"s3:DeleteBucketCors":0,
			"s3:DeleteBucketWebsite":0,
			"s3:DeleteObjectTagging":0,
			"s3:ListBucket":0,
			"s3:GetBucketAcl":0,
			"s3:GetBucketCors":0,
			"s3:GetBucketWebsite":0,
			"s3:GetBucketLocation":0,
			"s3:CreateBucket":1,
			"s3:PutBucketAcl":0,
			"s3:PutBucketCors":0,
			"s3:PutBucketWebsite":0,
			"s3:PutObject":2,
			"s3:CopyObject":0,
			"s3:UploadPart":0,
			"s3:ListBucketMultipartUploads":0,
			"s3:ListMultipartUploadParts":0,
			"s3:InitiateMultipartUpload":0,
			"s3:CompleteMultipartUpload":0,
			"s3:AbortMultipartUpload":0,
			"s3:DeleteObject":0,
			"s3:MultiObjectDelete":0,
			"s3:GetObject":0,
			"s3:GetObjectAcl":0,
			"s3:GetObjectTagging":0,
			"s3:PutObjectAcl":0,
			"s3:PutObjectTagging":0,
			"s3:HeadBucket":0,
			"s3:HeadObject":0,
			"s3:PutBucketVersioning":0,
			"s3:GetBucketVersioning":0,
			"s3:PutBucketReplication":0,
			"s3:GetBucketReplication":0,
			"s3:DeleteBucketReplication":0
		},
		"bucketName":"utapi-bucket"
	};

let data3 =
	{	"timeRange":[1501570800000,1504249199999],
		"storageUtilized":[0,6],
		"incomingBytes":18,
		"outgoingBytes":0,
		"numberOfObjects":[0,3],
		"operations":
		{
			"s3:DeleteBucket":0,
			"s3:DeleteBucketCors":0,
			"s3:DeleteBucketWebsite":0,
			"s3:DeleteObjectTagging":0,
			"s3:ListBucket":0,
			"s3:GetBucketAcl":0,
			"s3:GetBucketCors":0,
			"s3:GetBucketWebsite":0,
			"s3:GetBucketLocation":0,
			"s3:CreateBucket":1,
			"s3:PutBucketAcl":0,
			"s3:PutBucketCors":0,
			"s3:PutBucketWebsite":0,
			"s3:PutObject":3,
			"s3:CopyObject":0,
			"s3:UploadPart":0,
			"s3:ListBucketMultipartUploads":0,
			"s3:ListMultipartUploadParts":0,
			"s3:InitiateMultipartUpload":0,
			"s3:CompleteMultipartUpload":0,
			"s3:AbortMultipartUpload":0,
			"s3:DeleteObject":0,
			"s3:MultiObjectDelete":0,
			"s3:GetObject":0,
			"s3:GetObjectAcl":0,
			"s3:GetObjectTagging":0,
			"s3:PutObjectAcl":0,
			"s3:PutObjectTagging":0,
			"s3:HeadBucket":0,
			"s3:HeadObject":0,
			"s3:PutBucketVersioning":0,
			"s3:GetBucketVersioning":0,
			"s3:PutBucketReplication":0,
			"s3:GetBucketReplication":0,
			"s3:DeleteBucketReplication":0
		},
		"bucketName":"utapi-bucket"
	};

let data4 =
	{	"timeRange":[1501570800000,1504249199999],
		"storageUtilized":[0,6],
		"incomingBytes":12,
		"outgoingBytes":0,
		"numberOfObjects":[0,3],
		"operations":
		{
			"s3:DeleteBucket":0,
			"s3:DeleteBucketCors":0,
			"s3:DeleteBucketWebsite":0,
			"s3:DeleteObjectTagging":0,
			"s3:ListBucket":0,
			"s3:GetBucketAcl":0,
			"s3:GetBucketCors":0,
			"s3:GetBucketWebsite":0,
			"s3:GetBucketLocation":0,
			"s3:CreateBucket":1,
			"s3:PutBucketAcl":0,
			"s3:PutBucketCors":0,
			"s3:PutBucketWebsite":0,
			"s3:PutObject":3,
			"s3:CopyObject":0,
			"s3:UploadPart":0,
			"s3:ListBucketMultipartUploads":0,
			"s3:ListMultipartUploadParts":0,
			"s3:InitiateMultipartUpload":0,
			"s3:CompleteMultipartUpload":0,
			"s3:AbortMultipartUpload":0,
			"s3:DeleteObject":0,
			"s3:MultiObjectDelete":0,
			"s3:GetObject":0,
			"s3:GetObjectAcl":0,
			"s3:GetObjectTagging":0,
			"s3:PutObjectAcl":0,
			"s3:PutObjectTagging":0,
			"s3:HeadBucket":0,
			"s3:HeadObject":0,
			"s3:PutBucketVersioning":0,
			"s3:GetBucketVersioning":0,
			"s3:PutBucketReplication":0,
			"s3:GetBucketReplication":0,
			"s3:DeleteBucketReplication":0
		},
		"bucketName":"utapi-bucket"
	};

let data5 =
	{	"timeRange":[1501570800000,1504249199999],
		"storageUtilized":[0,6],
		"incomingBytes":24,
		"outgoingBytes":0,
		"numberOfObjects":[0,3],
		"operations":
		{
			"s3:DeleteBucket":0,
			"s3:DeleteBucketCors":0,
			"s3:DeleteBucketWebsite":0,
			"s3:DeleteObjectTagging":0,
			"s3:ListBucket":0,
			"s3:GetBucketAcl":0,
			"s3:GetBucketCors":0,
			"s3:GetBucketWebsite":0,
			"s3:GetBucketLocation":0,
			"s3:CreateBucket":1,
			"s3:PutBucketAcl":0,
			"s3:PutBucketCors":0,
			"s3:PutBucketWebsite":0,
			"s3:PutObject":3,
			"s3:CopyObject":0,
			"s3:UploadPart":0,
			"s3:ListBucketMultipartUploads":0,
			"s3:ListMultipartUploadParts":0,
			"s3:InitiateMultipartUpload":0,
			"s3:CompleteMultipartUpload":0,
			"s3:AbortMultipartUpload":0,
			"s3:DeleteObject":0,
			"s3:MultiObjectDelete":0,
			"s3:GetObject":0,
			"s3:GetObjectAcl":0,
			"s3:GetObjectTagging":0,
			"s3:PutObjectAcl":0,
			"s3:PutObjectTagging":0,
			"s3:HeadBucket":0,
			"s3:HeadObject":0,
			"s3:PutBucketVersioning":0,
			"s3:GetBucketVersioning":0,
			"s3:PutBucketReplication":0,
			"s3:GetBucketReplication":0,
			"s3:DeleteBucketReplication":0
		},
		"bucketName":"utapi-bucket"
	};
let data6 =
	{	"timeRange":[1501570800000,1504249199999],
		"storageUtilized":[0,6],
		"incomingBytes":0,
		"outgoingBytes":0,
		"numberOfObjects":[0,3],
		"operations":
		{
			"s3:DeleteBucket":0,
			"s3:DeleteBucketCors":0,
			"s3:DeleteBucketWebsite":0,
			"s3:DeleteObjectTagging":0,
			"s3:ListBucket":0,
			"s3:GetBucketAcl":0,
			"s3:GetBucketCors":0,
			"s3:GetBucketWebsite":0,
			"s3:GetBucketLocation":0,
			"s3:CreateBucket":1,
			"s3:PutBucketAcl":0,
			"s3:PutBucketCors":0,
			"s3:PutBucketWebsite":0,
			"s3:PutObject":3,
			"s3:CopyObject":0,
			"s3:UploadPart":0,
			"s3:ListBucketMultipartUploads":0,
			"s3:ListMultipartUploadParts":0,
			"s3:InitiateMultipartUpload":0,
			"s3:CompleteMultipartUpload":0,
			"s3:AbortMultipartUpload":0,
			"s3:DeleteObject":0,
			"s3:MultiObjectDelete":0,
			"s3:GetObject":0,
			"s3:GetObjectAcl":0,
			"s3:GetObjectTagging":0,
			"s3:PutObjectAcl":0,
			"s3:PutObjectTagging":0,
			"s3:HeadBucket":0,
			"s3:HeadObject":0,
			"s3:PutBucketVersioning":0,
			"s3:GetBucketVersioning":0,
			"s3:PutBucketReplication":0,
			"s3:GetBucketReplication":0,
			"s3:DeleteBucketReplication":0
		},
		"bucketName":"utapi-bucket"
	};

let data7 =
	{	"timeRange":[1501570800000,1504249199999],
		"storageUtilized":[0,6],
		"incomingBytes":6,
		"outgoingBytes":0,
		"numberOfObjects":[0,3],
		"operations":
		{
			"s3:DeleteBucket":0,
			"s3:DeleteBucketCors":0,
			"s3:DeleteBucketWebsite":0,
			"s3:DeleteObjectTagging":0,
			"s3:ListBucket":0,
			"s3:GetBucketAcl":0,
			"s3:GetBucketCors":0,
			"s3:GetBucketWebsite":0,
			"s3:GetBucketLocation":0,
			"s3:CreateBucket":1,
			"s3:PutBucketAcl":0,
			"s3:PutBucketCors":0,
			"s3:PutBucketWebsite":0,
			"s3:PutObject":3,
			"s3:CopyObject":0,
			"s3:UploadPart":0,
			"s3:ListBucketMultipartUploads":0,
			"s3:ListMultipartUploadParts":0,
			"s3:InitiateMultipartUpload":0,
			"s3:CompleteMultipartUpload":0,
			"s3:AbortMultipartUpload":0,
			"s3:DeleteObject":0,
			"s3:MultiObjectDelete":0,
			"s3:GetObject":0,
			"s3:GetObjectAcl":0,
			"s3:GetObjectTagging":0,
			"s3:PutObjectAcl":0,
			"s3:PutObjectTagging":0,
			"s3:HeadBucket":0,
			"s3:HeadObject":0,
			"s3:PutBucketVersioning":0,
			"s3:GetBucketVersioning":0,
			"s3:PutBucketReplication":0,
			"s3:GetBucketReplication":0,
			"s3:DeleteBucketReplication":0
		},
		"bucketName":"utapi-bucket"
	};

/**
let arr = [data1, data2, data3, data4, data5, data6, data7, data2, data3, data1, data5, data1, data2, data7, data6, data5, data2, data3, data1, data5, data1, data2, data7, data6, data5,data2, data3, data1, data5, data1, data2, data7, data6, data5];
**/
var arr = [];

var tmp;

$(document).ready(function() {
    console.log( "ready!" );
	$.getJSON('http://localhost:8080/user').done(function(data) {
		console.log(data);
		fixdata(data);
	})
});

function fixdata(data) {
	var objArray = JSON.parse(data);
	console.log("Obj Array", objArray);
	for (var i = 0; i < objArray.length; i++)
	{
		arr.push((JSON.parse(objArray[i]))[0]);
	}
	console.log("Final Array", arr)
	buildChart(arr);
}

/**
var blah =  $.ajax({
	dataType: 'json',
	url: 'http://localhost:8080/user',
	data: data
});
console.log(blah);
**/



function incBytesChart(incomingBytesArr, dates) {
	const barChart = document.getElementById('incBytesChart');
	let chart = new Chart(barChart, {
	type: 'bar',

	data: {
		labels: dates,
		datasets: [{
			label: 'bytes',
			data: incomingBytesArr,
			backgroundColor: '#ffc832',
			borderColor: '#ffc832',
			borderWidth: 1 }]},

	options: {
		responsive: true,
		title:{
			display: true,
			text:'incoming bytes',
		 	fontColor: "#ededed" },
		legend: {
			display: false },
		scales: {
			yAxes: [{
				ticks: {
					fontColor: "#ededed",
					fontSize: 11,
					beginAtZero: true,
					userCallback: function(value, index, values) {
						if (value >= 1000000) {
							return value / 1000000 + 'M';
						} else if (value >= 1000) {
							return value / 1000 + 'k';
						}
						return value; }},
				gridLines: {
					color: 'hsla(0, 0%, 75%, 0.84)',
					lineWidth: 0.8 }}],
			xAxes: [{
				display: false,
				gridLines: {
					color: 'hsla(0, 0%, 75%, 0.84)',
					lineWidth: 0.8 }}]}}});
}

function storUtilChart(storageUtilizedArr, numberOfObjectsArr, dates) {
	const ctx = document.getElementById('storageUtilChart');
	let chart = new Chart(ctx, {
	type: 'line',

	data: {
		labels: dates,
		datasets: [{
			label: 'storage utilized',
			data: storageUtilizedArr,
			yAxisID: "y-axis-1",
			backgroundColor: 'hsla(59, 81%, 51%, 0.60)',
			borderColor: 'hsla(59, 81%, 51%, 0.60)'
			},{
			label: '# of objects',
			data: numberOfObjectsArr,
			yAxisID: "y-axis-2",
			backgroundColor: "hsla(328, 81%, 51%, 0.70)",
			borderColor: 'hsla(328, 81%, 51%, 0.70)' }]},

	options: {
		responsive: true,
		stacked: false,
		title:{
			display: true,
			text:'storage utilized and number of objects',
		 	fontColor: "#ededed" },
		legend: {
			onClick: (e) => e.stopPropagation(),
			labels: {
				boxWidth: 11,
				fontColor: '#ededed'
			}},
		scales: {
			yAxes: [{
				type: "linear",
					display: true,
					position: "left",
					id: "y-axis-1",
					ticks: {
						fontColor: "#ededed",
						fontSize: 11,
						beginAtZero: true,
						userCallback: function(value, index, values) {
							if (value >= 1000000) {
								return value / 1000000 + 'M';
							} else if (value >= 1000) {
								return value / 1000 + 'k';
							}
							return value; }},
					gridLines: {
						color: 'hsla(0, 0%, 75%, 0.84)',
						lineWidth: 0.8
				}}, {
				type: "linear",
					display: true,
					position: "right",
					id: "y-axis-2",
					ticks: {
						fontColor: "#ededed",
						fontSize: 11,
						beginAtZero: true,
						userCallback: function(value, index, values) {
							if (value >= 1000000) {
								return value / 1000000 + 'M';
							} else if (value >= 1000) {
								return value / 1000 + 'k';
							}
							return value; }},
					gridLines: {
						 drawOnChartArea: false
					}}],
			xAxes: [{
				display: false,
				gridLines: {
					color: 'hsla(0, 0%, 75%, 0.84)',
					lineWidth: 0.8 }}]}}});
}

function buildChart(arr) {

	let incomingBytesArr = arr.map(function(i) { return i.incomingBytes; });

	let storageUtilizedArr = arr.map(function(i) { return i.storageUtilized[1]; });

	let numberOfObjectsArr = arr.map(function(i) { return i.numberOfObjects[1]; });

	let dates = arr.map(function(i) {
		let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
			"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let date = new Date(i.timeRange[0]);
		let day = date.getDate();
			if (day < 10) day = "0" + day;
		let hours = date.getHours();
			if (hours < 10) hours = "0" + hours;
		let minutes = date.getMinutes();
			if (minutes < 10) minutes = "0" + minutes;

		let dateStart = monthNames[date.getMonth()] + " " + day + " " + hours + ":" + minutes;

		date = new Date(i.timeRange[1]);
		day = date.getDate();
		if (day < 10) day = "0" + day;
		hours = date.getHours();
		if (hours < 10) hours = "0" + hours;
		minutes = date.getMinutes();
		if (minutes < 10) minutes = "0" + minutes;
		let dateEnd = monthNames[date.getMonth()] + " " + day + " " + hours + ":" + minutes;

		return dateStart + " | " + dateEnd; })

	incBytesChart(incomingBytesArr, dates);
	storUtilChart(storageUtilizedArr, numberOfObjectsArr, dates);
}
