// Ejercicio de Ejemplo:
/* TITULO - NO MODIFICAR*/ document.write('<div class="titulo"><p>Ejercicio de Ejemplo - Resultado:</p></div>')
// En la Escuela de Programación tienen como condicion para poder inscribirse a los cursos, la persona tenga 18 años o más.
// Pidele al usuario que ingrese su edad ( usando prompt() ), y en caso que tenga 18 años o más imprima un mensaje indicandole que puede inscribirse.
// caso contrario se le indica que no puede inscribirse y la razón.
// Tu codigo 👇:

let edad = prompt ("Ingrese su edad: ")
console.log(edad)
if ( edad >= 18){
        console.log(" Puede inscribirse en el curso")
}
else {
        console.log ("No puede inscribirse en el curso")
}


const edadUsuario = window.prompt("Por favor, ingresa tu edad:");
if (edadUsuario !== null) {
        const edadNumerica = parseInt(edadUsuario, 10);
        if (!isNaN(edadNumerica)) {
                if (edadNumerica >= 18) {
                        console.log("¡Puedes inscribirte!");
                } else {
                        console.log("Lo siento, no puedes inscribirte debido a que eres menor de 18 años.");
                }
        } else {
        console.log("Por favor, ingresa una edad válida (número entero).");
        }
} else {
        console.log("Has cancelado la entrada de tu edad.");
}

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 1 - Calificación | Resultado:</p></div>')
// Ejercicio N° 1:
// Escribe un programa que solicite al usuario ingresar una calificación del 0 al 100 y luego muestre un mensaje según la siguiente escala:
// Calificación de 90 o más: "Excelente"
// Calificación entre 70 y 89: "Bueno"
// Calificación entre 60 y 69: "Suficiente"
// Calificación menor a 60: "Insuficiente"
// Tu codigo 👇:
let calificacion = prompt ("Ingrese su calificación: ")
console.log(calificacion)
if ( calificacion >= 90){
        console.log(" Excelente")
}
else if ( calificacion >= 70 && calificacion < 90){
        console.log ("Bueno")
}
else if ( calificacion >= 60 && calificacion < 70){
        console.log ("Suficiente")
}
else if ( calificacion < 60 ){
        console.log ("Insufucuente")
}


//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 2 - Par o Impar | Resultado:</p></div>')
// Ejercicio N° 2:
// Escribe un programa que solicite al usuario ingresar un número entero y luego determine si es par o impar.
// Tu codigo 👇:
let numusuario = prompt ("Ingrese un número: ")
console.log(numusuario)
if (numusuario % 2 == 0 ){
        console.log(" El número es par")
}
else {
        console.log(" El número es impar")
}


//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 3 - Día de la Semana | Resultado:</p></div>')
// Ejercicio N° 3:
// Escribe un programa que solicite al usuario ingresar un número del 1 al 7 representando un día de la semana, y luego imprima el nombre del día correspondiente.
// Por ejemplo, si el usuario ingresa 1, el programa debe imprimir "Lunes".
// Tu codigo 👇:
let diasemana = prompt ("Ingrese un número del 1 al 7 representando el día de la semana. Siendo 1 el día lunes: ")
console.log(diasemana)
if ( diasemana == 1){
        console.log("'Lunes'")
}
else if ( diasemana == 2){
        console.log ("'Martes'")
}
else if ( diasemana == 3){
        console.log ("'Miércoles'")
}
else if ( diasemana == 4 ){
        console.log ("'Jueves'")
}
else if ( diasemana == 5 ){
        console.log ("'Viernes'")
}
else if ( diasemana == 6 ){
        console.log ("'Sábado'")
}
else if ( diasemana == 7 ){
        console.log ("'Domingo'")
}
//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 4 - Antigüedad laboral | Resultado:</p></div>')
// Ejercicio N° 4:
// Escribe un programa que solicite al usuario ingresar su antigüedad en años en una empresa y su salario actual.
// Si la antigüedad es mayor o igual a 5 años, y el salario es menor a $500,
// el programa debe imprimir un mensaje que indique que el empleado es elegible para una bonificación del 10% de su salario actual.
// Tu codigo 👇:
let antiguedad = prompt ("Ingrese sus años de antiguedad: ")
console.log(antiguedad);
let salario = prompt ("Ingrese su salario actual: ")
console.log(salario);
if ( antiguedad >= 5 && salario < 500){
        console.log("Usted es elegible para una bonificación del 10% de su salario actual")
}
else{
        console.log ("Usted no es elegible para una bonificación del 10% de su salario actual")
}

//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 5 - Rango de edad | Resultado:</p></div>')
// Ejercicio N° 5:
// Escribe un programa que solicite al usuario ingresar su edad y luego determine en qué rango de edad se encuentra:
// Menor de 18 años: "Menor de edad"
// Entre 18 y 65 años: "Adulto"
// Mayor de 65 años: "Senior"
// Tu codigo 👇:
let edadanios = prompt ("Ingrese sus edad: ")
console.log(edadanios)
if ( edadanios < 18 ){
        console.log("Usted es menor de edad")
}
else if ( edadanios >= 18 && edadanios <= 65 ){
        console.log("Usted es adulto")
}
else if ( edadanios > 65 ){
        console.log("Usted es senior")
}

//_________________________________________


// 👇👇 NO MODIFICAR 👇👇

const footer = `

<footer>
        <a href="https://github.com/AvLeo/Javascript-desde-cero-EDP" target="_blank">REPO GITHUB</a>
        <a href="https://leo-a.notion.site/JavaScript-8243598cde1e4cc5aea0fc1eeb7a090f?pvs=74" target="_blank">Notion</a>
</footer>


`

document.write(footer)