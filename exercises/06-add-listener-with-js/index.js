window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	let theGreen = document.getElementById("theGreen")
	theGreen.addEventListener("click", myListenerFunction)
};

//the listener function here
function myListenerFunction(){
	alert("wuju")
}