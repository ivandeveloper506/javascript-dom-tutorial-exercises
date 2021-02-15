//your code here

let deleteElement = document.getElementById("secondElement");

// OJO: Se tuvo que agregar el [id="myList"] en el HTML para que funcionara.
let fatherListElement = document.getElementById("myList");

fatherListElement.removeChild(deleteElement);
