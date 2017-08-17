/**
 * @Author: Anhelina Shulha <anhelinashulha>
 * @Date:   Aug-14-2017
 * @Email:  anhelina.shulha@gmail.com
 * @Filename: script.js
 * @Last modified by:   anhelinashulha
 * @Last modified time: Aug-17-2017
 */



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

buildChart(arr);
