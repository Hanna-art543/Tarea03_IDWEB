/*Selecciona un elemento <h1> y cambia su texto a "DOM modificado con JavaScript"
Luego, cambia su color y tamaño de fuente usando propiedades tipo CSS desde JS*/
//Elemento h1
document.getElementById("titulo").textContent = "DOM modificado con JavaScript";

//Cambiar el color y el tamaño de fuente
document.getElementById("parrafoJS").style.color = "blue";
document.getElementById("parrafoHTML").style.fontSize = "20px";