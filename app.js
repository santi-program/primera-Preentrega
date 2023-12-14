// PRIMERA PREENTREGA 

// NOTAS DE UN CURSO DE ALUMNOS, EN UNA ESCALA DE 1 A 10 CON CONTADORES DE CAUNTOS APROBADOS,REPROBADOS Y PROMOCIONADOS Y UN PROMEDIO DE LA CLASE

function calificaciones() {
    let alumnos = prompt("ingrese el nombre del alumno o ESC para salir")
    contadorEx = 0;
    contadorAp = 0;
    contadorRep = 0;
    let sumaNotas = 0;
    while (alumnos != "ESC" && alumnos != "esc" && alumnos != "Esc") {
        let notas = Number(prompt("ingrese su nota del 1 al 10"));
        if (notas >=11) {
            alert("la nota debe ser un numero entre 0 y 10")
            continue;
        }else if (notas >= 7){
            contadorEx += 1;
            console.log(alumnos + " Ha promocionado");
        }else if (notas >= 4 && notas < 7){
            contadorAp += 1;
            console.log(alumnos + " Ha aprobado");
        }else if (notas >= 1){
            contadorRep += 1;
            console.log(alumnos + " Ha reprobado");
        }else{
            alert("la nota debe ser un numero entre 0 y 10 escrita en forma numerica");
            continue;
        }
        sumaNotas += notas;
        alumnos = prompt("ingrese nombre o esc para salir");
    }
    console.log(`La cantidad de alumnos con excelente es ${contadorEx}, con aprobados son ${contadorAp}, y con reprobados son ${contadorRep}`);
    let cantidadDePuntos = contadorEx + contadorAp + contadorRep;
    let promedio = sumaNotas / cantidadDePuntos;
    let redondeado = promedio.toFixed(1);
    console.log(`La calificacion promedio de la clase es ${redondeado}`);
}

calificaciones();
