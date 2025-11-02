//Crear clase
class EquipoFutbol {
    constructor (nombre, ciudad) {
        this.nombre = nombre;
        this.ciudad = ciudad;
    }

    saludar () {
        console.log("Hola " + this.nombre + " de " + this.ciudad + "!");
    }

}

const equipo1 = new EquipoFutbol ("Lobos Plateados", "ojo de Agua");

equipo1.saludar();