window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here

	countries.forEach(element => {
		let newElement = document.createElement("OPTION");
		newElement.innerHTML = '<option value="' + element + '">' + element + "</option>";
		document.getElementById("mySelect").appendChild(newElement);
	});
};

const selectElement = document.querySelector("#mySelect");

selectElement.addEventListener("change", event => {
	console.log(event);
	alert(`El país seleccionado es ${event.target.value}`);
});
