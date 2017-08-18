
var arr = [];

/** request data from the server and parse it to graphs **/

$(document).ready(function() {
	$.getJSON('http://localhost:8080/user').done(function(data) {
		fixdata(data);
	})
});

/** Parsing JSON twice and sending it to /users for graphs **/

function fixdata(data) {
	var objArray = JSON.parse(data);
	for (var i = 0; i < objArray.length; i++)
	{
		arr.push((JSON.parse(objArray[i]))[0]);
	}
	buildChart(arr);
}


/** charts builders **/

/** incoming bytes chart **/

function incBytesChart(incomingBytesArr, dates) {
	const barChart = document.getElementById('incBytesChart');
	let chart = new Chart(barChart, {
	type: 'bar',

	data: {
		labels: dates,
		datasets: [{
			label: 'bytes',
			data: incomingBytesArr,
			backgroundColor: 'hsla(44, 100%, 60%, 0.70)',
			borderColor: 'hsla(44, 100%, 40%, 1)',
			borderWidth: 2 }]},

	options: {
		responsive: true,
		title:{
			display: true,
			text:'incoming bytes',
		 	fontColor: "#424242" },
		legend: {
			display: false },
		scales: {
			yAxes: [{
				ticks: {
					fontColor: "#f",
					fontSize: 11,
					beginAtZero: true,
					userCallback: function(value, index, values) {
						/** value convertion **/
						if (value >= 1000000000000) {
							return value / 1000000000000 + 'T';
						} else if (value >= 1000000000) {
							return value / 1000000000 + 'G';
						} else if (value >= 1000000) {
							return value / 1000000 + 'M';
						} else if (value >= 1000) {
							return value / 1000 + 'k';
						} else if (value < 10) {
							return value.toPrecision(2);
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

/** storage utilized chart **/

function storUtilChart(storageUtilizedArr, dates) {
	const ctx = document.getElementById('storageUtilChart');
	let chart = new Chart(ctx, {
	type: 'line',

	data: {
		labels: dates,
		datasets: [{
			label: 'storage utilized (bytes)',
			data: storageUtilizedArr,
			backgroundColor: 'hsla(177, 100%, 35%, 0.70)',
			borderColor: 'hsla(177, 100%, 25%, 1)'
			}]},

	options: {
		responsive: true,
		stacked: false,
		title:{
			display: true,
			text:'storage utilized',
		 	fontColor: "#424242" },
		legend: {
			display: false },
		scales: {
			yAxes: [{
				type: "linear",
					display: true,
					position: "left",
					ticks: {
						fontColor: "#424242",
						fontSize: 11,
						beginAtZero: true,
						userCallback: function(value, index, values) {
							/** value convertion **/
							if (value >= 1000000000000) {
								return value / 1000000000000 + 'T';
							} else if (value >= 1000000000) {
								return value / 1000000000 + 'G';
							} else if (value >= 1000000) {
								return value / 1000000 + 'M';
							} else if (value >= 1000) {
								return value / 1000 + 'k';
							} else if (value < 10) {
								return value.toPrecision(2);
							}
							return value; }},
					gridLines: {
						color: 'hsla(0, 0%, 75%, 0.84)',
						lineWidth: 0.8
				}}],
			xAxes: [{
				display: false,
				gridLines: {
					color: 'hsla(0, 0%, 75%, 0.84)',
					lineWidth: 0.8 }}]}}});
}

/** number of objects chart **/

function numObjectsChart(numberOfObjectsArr, dates) {
	const ctx = document.getElementById('numOfObjectsChart');
	let chart = new Chart(ctx, {
		type: 'line',

		data: {
			labels: dates,
			datasets: [{
				label: 'number of objects',
				data: numberOfObjectsArr,
				backgroundColor: "hsla(328, 81%, 51%, 0.70)",
				borderColor: 'hsla(328, 81%, 41%, 1)' }]},

		options: {
			responsive: true,
			stacked: false,
			title:{
				display: true,
				text:'number of objects',
				fontColor: "#424242" },
			legend: {
				display: false },
			scales: {
				yAxes: [{
					type: "linear",
					display: true,
					position: "left",
					ticks: {
						fontColor: "#424242",
						fontSize: 11,
						beginAtZero: true,
						userCallback: function(value, index, values) {
							/** value convertion **/
							if (value >= 1000000000000) {
								return value / 1000000000000 + 'T';
							} else if (value >= 1000000000) {
								return value / 1000000000 + 'G';
							} else if (value >= 1000000) {
								return value / 1000000 + 'M';
							} else if (value >= 1000) {
								return value / 1000 + 'k';
							} else if (value < 10) {
								return value.toPrecision(2);
							}
							return value; }},
						gridLines: {
							color: 'hsla(0, 0%, 75%, 0.84)',
							lineWidth: 0.8
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

	/** creating labels  in format "MMM DD HH:mm | MMM DD HH:mm"**/

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

	/** building charts **/
	incBytesChart(incomingBytesArr, dates);
	storUtilChart(storageUtilizedArr, dates);
	numObjectsChart(numberOfObjectsArr, dates);
}
