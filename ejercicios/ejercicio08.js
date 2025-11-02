//Clase persona
class Persona {
    constructor (nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }
    toString () {
        return "Nombre: "+this.nombre+"\n"+
        "Edad: "+this.edad+ "\n" +
        "Ciudad: "+this.ciudad;
    }
}

//Clase Estudiante
class Estudiante extends Persona {
    constructor(nombre, edad, ciudad, carrera, promedio) {
        super(nombre, edad, ciudad);
        this.carrera = carrera; 
        this.promedio = promedio;
    }

    estudiar () {
        return this.nombre + " está estudiando "+ this.carrera;
    }

    aprobar () {
        if(this.promedio >= 11) {
            return this.nombre + " aprobó el curso.";
        }
        else {
            return this.nombre + " desaprobó el curso.";
        }
    }
    toString () {
        return super.toString() + "\nCarrera: "+ this.carrera;
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, ciudad, especialidad, añosExperiencia) {
        super(nombre, edad, ciudad);
        this.especialidad = especialidad;
        this.añosExperiencia = añosExperiencia;
    }

    enseñar () {
        return this.nombre + " está enseñando " + this.especialidad;
    }
    evaluar () {
        return this.nombre + " está evaluando a sus estudiantes.";
    }

    toString () {
        return super.toString() + "\nEspecilidad: "+this.especialidad + 
        "\nAños de experiencia: "+this.añosExperiencia;
    }
}

//Crear objetos
const persona1 = new Persona ("Arlo", 17, "New York");
const estudiante1 = new Estudiante ("Serafina", 18, "Lima", "Arquitectura", 19);
const profesor1 = new Profesor ("Remigio", 40, "Arequipa", "Metodología del Trabajo Académico", 5);

console.log(estudiante1.estudiar());
console.log(estudiante1.aprobar());
console.log(profesor1.enseñar());
console.log(profesor1.evaluar());

const personas = [persona1, estudiante1, profesor1];

function mostrarInformacion (arreglo) {
    arreglo.forEach(obj => {
        console.log(obj.toString());
    })
}

mostrarInformacion(personas);