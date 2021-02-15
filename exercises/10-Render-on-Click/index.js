let button = document.querySelector("#superDuperButton");

button.addEventListener("click", function() {
	//your code here

	let newDiv = document.createElement("DIV");
	newDiv.innerHTML = "Hello World";
	newDiv.style.background = "yellow";
	document.body.appendChild(newDiv);
});