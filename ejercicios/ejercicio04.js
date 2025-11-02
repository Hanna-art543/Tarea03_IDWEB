//Objeto
let persona = {
    nombre: "Ana",
    edad: 17,
    ciudadResidencia: "Arequipa",
    carrera: "Ingenieria de Sistemas"
};

//Función que reciba objeto
function cambiarPropiedad (objeto) {
    objeto.ciudadResidencia = "Lima";
    return objeto;
}

//Ejecutar y mostrar
let resultado = cambiarPropiedad(persona);

console.log(resultado);
