let button = document.querySelector("#superDuperButton");

button.addEventListener("click", function() {
	//your code here

	let newLi = document.createElement("LI");
	newLi.innerHTML = "Forth element";
	document.getElementById("myList").appendChild(newLi);
});
