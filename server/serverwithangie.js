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
	bucketName = 'test';
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

	const bucketName = obj.bucket;
	getRange(bucketName, Start, End, Interval, () => {
		var send = [];
		for (var i = 0; i < objArray.length; i++)
		{
	 		send.push((JSON.parse(objArray[i]))[0]);
		}
		buildChart(send);
	});
}

function buildChart(arr) {
	let	width = 500,
		height = 300,
		animateDuration = 700,
		animateDelay = 30;

	let incomingBytesArr = arr.map(function(i) { return i.incomingBytes; });
	let dates = arr.map(function(i) { return i.timeRange[0]; })
	// console.log(incomingBytesArr);

	var tooltip = d3.select("body").append('div')
					.style("position", "absolute")
					.style("background", "#f4f4f4")
					.style("padding", "5 15px")
					.style("border", "1px #333 solid")
					.style("border-radius", "5 px")
					.style("opacity", "0")

	let date_format = d3.time.format("%b.%d.%Y %H:%M");

	let y = d3.scale.linear()
					.domain([0, d3.max(incomingBytesArr)])
					.range([12, height - 12]);

	let x = d3.scale.ordinal()
					.domain(d3.range(0, incomingBytesArr.length))
					.rangeBands([0, width]);

	let colors = d3.scale.linear()
					.domain([0, incomingBytesArr.length])
					.range(["#90ee90", "#30c230"]);

	let canvas = d3.select("#chart").append("svg")
					.attr("width", width)
					.attr("height", height)
					.style("background", "#f4f4f4");

	let bars = 	canvas.selectAll("rect")
					.data(incomingBytesArr)
					.enter()
					.append("rect")
					.attr("x", function(d, i) { return x(i); })
					.attr("y", height)
					.attr("width", x.rangeBand())
					.attr("height",0)
					.style("fill", function(d, i) { return colors(d); })
					.on("mouseover", function(d) {
						tooltip.transition()
					 		.style("opacity", 1)

						tooltip.html(d)
							.style("left", (d3.event.pageX) + "px")
							.style("top", (d3.event.pageY + "px"))
						d3.select(this).style("opacity", 0.5)})
					.on("mouseout", function(d) {
						tooltip.transition()
							.style("opacity", 0)
						d3.select(this).style("opacity", 1)});

	bars.transition()
					.attr("height", function(d) { return y(d); })
					.attr("y", function(d) { return height - y(d); })
					.duration(animateDuration)
					.delay(function(d, i) { return i * animateDelay; })
					.ease("elastic")

	let vScale = d3.scale.linear()
					.domain([0, d3.max(incomingBytesArr)])
					.range([height, 0]);

	let hScale = d3.scale.ordinal()
					.domain(d3.range(0, incomingBytesArr.length))
					.rangeBands([0, width]);

	// v Axis
	let vAxis = d3.svg.axis()
					.scale(vScale)
					.orient("left")
					.ticks(5)
					.tickPadding(6);

	// v Guide
	let vGuide = d3.select("svg")
					.append("g")
						vAxis(vGuide)
						vGuide.attr("transform", "translate(35, 10)")
						vGuide.selectAll("path")
						.style("fill", "none")
						.style("stroke", "#000")
						vGuide.selectAll("line")
						.style("stroke", "#000")

	let hAxis = d3.svg.axis()
					.scale(vScale)
					.orient("bottom")
					.tickValues(hScale.domain().filter(function(d, i) { return !(i % (incomingBytesArr.length / 5)) }))
	// v Guide
	let hGuide = d3.select("svg")
					.append("g")
						hAxis(hGuide)
						hGuide.attr("transform", "translate(35, 10)")
						hGuide.selectAll("path")
						.style("fill", "none")
						.style("stroke", "#000")
						hGuide.selectAll("line")
						.style("stroke", "#000")

}

server.listen(1185);
console.log("server listening on 1185");
