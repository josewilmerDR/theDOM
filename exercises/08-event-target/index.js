window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
	//you code here
	var targetElm = event.target;
	alert("El elemento clickeado tiene ID: " + targetElm.id);
	});
};
