/**
 * @Author: Anhelina Shulha <anhelinashulha>
 * @Date:   Aug-13-2017
 * @Email:  anhelina.shulha@gmail.com
 * @Filename: script.js
 * @Last modified by:   anhelinashulha
 * @Last modified time: Aug-16-2017
 */

"use strict";

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

let arr = [data1, data2, data3, data4, data5, data6, data7, data2, data3];
 // data1, data5, data1, data2, data7, data6, data5, data2];
// data3, data1, data5, data1, data2, data7, data6, data5,data2, data3, data1, data5, data1, data2, data7, data6, data5];

function buildChart(arr) {

	let margin = { top: 0, right: 0, bottom: 0, left: 50 };

	let	width = 350 - margin.right - margin.left,
		height = 300 - margin.top - margin.bottom,
		animateDuration = 700,
		animateDelay = 30;

	let incomingBytesArr = arr.map(function(i) { return i.incomingBytes; });

	let datesStart = arr.map(function(i) {
		let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
			"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let date = new Date(i.timeRange[0]);
		let day = date.getDate();
			if (day < 10) day = "0" + day;
		let hours = date.getHours();
			if (hours < 10) hours = "0" + hours;
		let minutes = date.getMinutes();
			if (minutes < 10) minutes = "0" + minutes;
		return monthNames[date.getMonth()] + " " + day + " " + hours + ":" + minutes; })

	let datesEnd = arr.map(function(i) {
		let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
			"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let date = new Date(i.timeRange[1]);
		let day = date.getDate();
		if (day < 10) day = "0" + day;
		let hours = date.getHours();
		if (hours < 10) hours = "0" + hours;
		let minutes = date.getMinutes();
		if (minutes < 10) minutes = "0" + minutes;
		return monthNames[date.getMonth()] + " " + day + " " + hours + ":" + minutes; })

	let date_format = d3.time.format("%b.%d.%Y %H:%M");


	function tooltip(d, i, str) {
		let text = datesStart[i] + " | " + datesEnd[i] + "<br>" + d + str;
		return text;
	}

	let tip = d3.tip()
			.attr('class', 'd3-tip')
			.html(function(d, i) { return tooltip(d, i, " bytes"); });

	function barChart() {
		let y = d3.scale.linear()
			.domain([0, d3.max(incomingBytesArr)])
			.range([5, height - 30]);

		let x = d3.scale.ordinal()
			.domain(d3.range(0, incomingBytesArr.length))
			.rangeBands([0, width]);

		let colors = d3.scale.linear()
			.domain([0, incomingBytesArr.length])
			.range(["#ffc832", "#ffa144"]);

		let canvas = d3.select("#chart").append("svg")
			.attr("width", width + margin.right + margin.left)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate("+margin.left+","+margin.top+")")
			.attr("background", "white")

		let bars = 	canvas.selectAll("rect")
			.data(incomingBytesArr)
			.enter()
			.append("rect")
			.attr("x", function(d, i) { return x(i); })
			.attr("y", height)
			.attr("width", x.rangeBand())
			.attr("height",0)
			.style("fill", function(d, i) { return colors(d); })
			.call(tip)
			.on("mouseover", tip.show)
			.on("mouseout", tip.hide);

		bars.transition()
			.attr("height", function(d) { return y(d); })
			.attr("y", function(d) { return height - y(d); })
			.duration(animateDuration)
			.delay(function(d, i) { return i * animateDelay; })
			.ease("elastic")



		let vScale = d3.scale.linear()
			.domain([0, d3.max(incomingBytesArr)])
			.range([height - 5, 30]);

		let vAxis = d3.svg.axis()
			.scale(vScale)
			.orient("left")
			.ticks(4)
			.tickFormat(d3.format("s"))
			.tickPadding(5);

		let vGuide = d3.select("svg")
			.append("g")
			vAxis(vGuide)
			vGuide.attr("transform", "translate("+margin.left+", "+margin.top+")")
			vGuide.selectAll("path")
			.style("fill", "none")
			.style("stroke", "white")
			vGuide.selectAll("line")
			.style("stroke", "white")
			vGuide.selectAll("text")
			.style("fill", "white")
			.style("font", "11px sans-serif")
	}



	barChart();
}

buildChart(arr);
