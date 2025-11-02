//Crear objeto
let gato = {
    nombre: "Michi",
    edad: 5,
    color: "negro",
    peso: 7,
    tamaño: 15
}

//Crear función 
function recorrerPropiedades (objeto) {
    let numPropiedades = 0;
    
    for(let propiedad in objeto) {
        console.log(propiedad + ": "+objeto[propiedad]);
        numPropiedades++;
    }
    return numPropiedades;
}

//Ejecutar y mostrar
let propiedades = recorrerPropiedades(gato);

console.log("Número de propiedades: "+propiedades);