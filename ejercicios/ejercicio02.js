//Crear arreglo
let arreglo = [1, 2, 3, 2, 2, 1, 3, 4, 4, 4, 4, 4];

//Función contar con un Mapa
function contarElementos (arreglo) {
    let mapaConteo = new Map ();
    for(let num of arreglo) {
        if(mapaConteo.has(num)) {
            mapaConteo.set(num, mapaConteo.get(num)+1);
        }
        else {
            mapaConteo.set(num, 1);
        }
    }
    return mapaConteo;
}

//Ejecutar y mostrar
let resultado = contarElementos(arreglo);

resultado.forEach((valor, clave) => {
    console.log(clave + " → " + valor);
});