//Crear un Mapa
let mapaClavesValores = new Map ([
    ["001", "Serafina"],
    ["002", "Jhon"],
    ["003", "Arlo"],
    ["004", "Remi"],
    ["005", "Blyke"],
    ["006", "Isen"],
    ["007", "Cecilie"]
])

//Función invertir
function invertirMapa (mapa) {
    let mapaInvertido = new Map ();
    for(let [clave, valor] of mapa) {
        mapaInvertido.set(valor, clave);
    }
    return mapaInvertido;
}

//Ejecutar y mostrar
let mapaInvertido = invertirMapa(mapaClavesValores);

mapaInvertido.forEach((valor, clave)=> {
    console.log(clave + " -> "+ valor);
});