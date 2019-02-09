
let about = document.getElementById("about");
let bodyArray= document.getElementsByTagName("BODY");


let body = bodyArray[0];
document.addEventListener("click",whenClicked);

about.addEventListener("mouseover",whenHovered);
about.addEventListener("mouseout",whenDoneHovering);
function whenClicked() {
	let newHeading = document.createElement("h1");
	newHeading.innerHTML = "Hello!!!";
	newHeading.style.color = "blue";
	newHeading.style.fontSize = "28px";
	about.appendChild(newHeading);
}
function whenHovered(){
	body.style.color = "pink";
}
function whenDoneHovering(){
	body.style.color = "black"
}



