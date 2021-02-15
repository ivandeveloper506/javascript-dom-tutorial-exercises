// Your code here

window.onload = function() {
	let container = document.getElementById("container");
	let info = document.createElement("P");
	info.innerHTML = "<p><strong>*** Para agregar la tarea debe ejecutar la tecla [Enter] una vez digitada la misma ***</strong></p>";
	container.appendChild(info);

	document.getElementById("addToDo").focus();
};

const inputElement = document.querySelector("#addToDo");

inputElement.addEventListener("keyup", event => {
	if (event.keyCode === 13) {
		let lista = document.getElementById("listOfTasks");
		let newTask = document.createElement("LI");
		newTask.innerHTML = '<li><span><i class="fa fa-trash"></i></span>' + " " + event.target.value + "</li>";
		lista.appendChild(newTask);

		// Una vez agregada la tarea, se limpia el campo.
		let addToDo = document.getElementById("addToDo");
		addToDo.value = "";
	}
});

// let listOfTasks = document.getElementById("listOfTasks");
// listOfTasks.removeChild(listOfTasks.lastElementChild);

window.onload = function loadFn() {
	let listOfTasks = document.getElementById("listOfTasks");

	listOfTasks.addEventListener("click", function(event) {
		//you code here

		// ESTE ES EL QUE FUNCIONA PURA VIDA
		// listOfTasks.removeChild(listOfTasks.childNodes[0]);

		console.log(event.path);
	});
};
