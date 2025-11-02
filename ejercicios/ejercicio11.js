
const contenedor = document.getElementById("contenedor");
 
//crear una lista
const lista = document.createElement("ul");

const elemento1 = document.createElement("li");
elemento1.textContent = "Primer elemento";

const elemento2 = document.createElement("li");
elemento2.textContent = "Segundo elemento";

const elemento3 = document.createElement("li");
elemento3.textContent = "Tercer elemento";

//Agregar los <li> al <ul>
lista.appendChild(elemento1);
lista.appendChild(elemento2);
lista.appendChild(elemento3);

//Agregar la lista al contenedor
contenedor.appendChild(lista);