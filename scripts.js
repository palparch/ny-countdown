const hoursDiv = document.getElementById('hours');
const minutesDiv = document.getElementById('minutes');
const secondsDiv = document.getElementById('seconds');
const randomBgBtn = document.getElementById('random-bg-toggle');
const endtime = "01/01/2022";

function countdowner() {
	const total = Date.parse(endtime) - Date.parse(new Date());
	const seconds = Math.floor((total/1000) % 60);
	const minutes = Math.floor((total/1000/60) % 60);
	const hours = Math.floor((total/(1000*60*60)) % 24);
	const days = Math.floor(total/(1000*60*60*24));

	hoursDiv.innerHTML = ('0' + hours).slice(-2);
	minutesDiv.innerHTML = ('0' + minutes).slice(-2);
	secondsDiv.innerHTML = ('0' + seconds).slice(-2);
};

function randombg() {
	var bg = ["christmas-background-with-snowflakes-bokeh-lights.jpg", "cute-christmas-background-with-bokeh.jpg", "pexels-annalouise-674723.jpg", "pexels-anni-roenkae-2317711.jpg", "pexels-designecologist-2526105.jpg", "pexels-dids-4951277.jpg", "pexels-laura-james-6101962.jpg", "pexels-miguel-acosta-1259615.jpg", "pexels-mnm-zameer-3308588 (1).jpg", "pexels-rovenimagescom-949592.jpg", "pexels-velroy-fernandes-4068339.jpg"]
	var backg = bg[Math.floor(Math.random()*bg.length)];
	let finalString = "url(images/" + backg + ")";
	console.log("Current Background Image: " + backg);
	document.body.style.background = finalString;
	// document.body.style.backgroundSize = "cover";
};

randombg();
countdowner();

setInterval(countdowner, 1000);

randomBgBtn.addEventListener('click', function(){
	randombg();
});