//Crear dos arreglos
let claves = [1, 2, 3, 4, 5, 6];
let valores = ["manzana", "pera", "sandia", "piña", "kiwi", "naranja"];

//Función para juntarlo en un Mapa
function crearMapa(arreglo1, arreglo2) {
    let mapaClavesValores = new Map ();
    let tamaño = arreglo1.length;
    for(let i=0; i < tamaño; i++) {
        mapaClavesValores.set(arreglo1[i], arreglo2[i]);
    }
    return mapaClavesValores;
}

//Juntarlo y mostrar
let resultado = crearMapa(claves, valores);

resultado.forEach((valor, clave) => {
    console.log(clave + " → " + valor);
});