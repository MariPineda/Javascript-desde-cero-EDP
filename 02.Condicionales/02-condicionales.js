function verificarNumero(numero){
    // Escribe un programa que tome un número como entrada y muestre "Es positivo" si el número es mayor que cero,
    // "Es negativo" si es menor que cero y "Es cero" si es igual a cero.
    // Tu código 👇:
    if(numero > 0){
        return ("Es positivo");
    }

    else if(numero < 0){
        return ("Es negativo");
    }

    else{
        return ("Es cero");
    }
}
console.log(verificarNumero(5))

function esBisiesto(anio){
    // Escribe un programa que determine si un año es bisiesto o no. (true o false)
    // Un año es bisiesto si es divisible entre 4, excepto aquellos que son divisibles entre 100 pero no entre 400.
    // Tu código 👇:
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 100 === 0 && anio % 400 === 0)){
        return(true);
    }
    else {
        return(false);
    }
}
console.log(esBisiesto(2024))

function verificarCalificacion(calificacion){
    // Escribe un programa que determine si un estudiante aprobó o reprobó un examen.
    // El estudiante aprueba si su calificación es mayor o igual a 60.
    // Devolver "Aprobó" o "Reprobó"
    // Tu código 👇:
    if(calificacion >= 60){
        return ("Aprobó");
    }

    else {
        return ("Reprobó");
    }
}
console.log(verificarCalificacion(65))

function esMayor(num1, num2, num3){
    // Escribe un programa que determine el mayor de tres números dados.
    // Devolver el numero mayor
    // Tu código 👇:
    if (num1 > num2 && num1 > num3) {
        return(num1);
    } else if (num2 > num1 && num2 > num3) {
        return(num2);
    } else {
        return(num3);
    }
}
console.log(esMayor(5,4,9))

function esPrimo(num){
    // Escribe un programa que determine si un número dado es primo.
    // Devolver true o false
    // Tu código 👇:
    for (let i = 2; i < num; i++)
        if (num % i === 0 ) {
            return false;
    }
    return num !== 1;
}
console.log(esPrimo(4))

module.exports = {
    verificarCalificacion,
    verificarNumero,
    esBisiesto,
    esMayor,
    esPrimo
}