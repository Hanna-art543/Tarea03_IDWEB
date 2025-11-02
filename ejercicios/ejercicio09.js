/*El primer párrafo por su id
– Todos los párrafos por su etiqueta
– Todos los elementos con una clase común
– Muestra cada selección en la consola*/
const primerParrafo = document.getElementById("JavaScript");
const todosParrafos = document.getElementsByTagName("p");
const elementosClase = document.getElementsByClassName("lenguaje");

//Mostrar
console.log("Primer párrafo por ID:");
console.log(primerParrafo);

console.log("Todos los párrafos por etiqueta <p>:");
console.log(todosParrafos);

console.log("Elementos con clase 'lenguaje':");
console.log(elementosClase);