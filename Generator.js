var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomizer = document.getElementById("randomizer");

function SetGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandom(){
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function setRandomcolor(){
	color1.value = getRandom();
	color2.value = getRandom();
	SetGradient();
}

color1.addEventListener("input" , SetGradient);
color2.addEventListener("input" , SetGradient);

randomizer.addEventListener("click" , setRandomcolor);

SetGradient();