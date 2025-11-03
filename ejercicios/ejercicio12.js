/*Selecciona un contenedor <div> y muestra en consola:
Su elemento padre, su primer hijo, su último hijo, Y la lista 
de todos sus nodos hijos */

//Seleccionar
const contenedor = document.getElementById("contenedor");

console.log("Elemento padre: ", contenedor.parentElement);
console.log("Primer hijo: ", contenedor.firstElementChild);
console.log("Último hijo: ", contenedor.lastElementChild);

console.log("Todos los nodos hijos: ", contenedor.childNodes);