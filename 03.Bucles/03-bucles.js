function cantidadDeVocales(phrase){
    // Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
    // Tu código:👇
    const vowels = ["a", "e", "i", "o", "u"]
    let counter = 0
    for (let letter of phrase.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }
    console.log(`La frase contiene ${counter} vocal/es`)
    return counter
}
console.log(cantidadDeVocales("holahola"))


function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'dividendo' a partir de un número dado (divisor) utilizando un bucle while
// Tu código:👇


}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
for (num=1;num<=100;num++){
    while (x != num){
        console.log(num)
        num++;
    }   
    if ((x == num)){
        console.log(`El número es: ${num}`) 
        break
    }
}
}
console.log(encuentraX(8))

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
let acumulador = 0;
for (let i = 0; i <= num; i++) {
    acumulador += i;
}
return acumulador;
}
console.log(sumandoTodo(5))

function BinarioADecimal(num) {
    // La funcion recibe por parametro, un numero binario pero en tipo de dato String
    // debes tomar este numero binario y ayudandote de un bucle pasarlo a no binario
    // tu código:👇
    //let binario = num
    //let nocadena = binario.split('').reverse()
    //let largo = nocadena.length
    //console.log(nocadena)
    //console.log(largo)
    //}
    //console.log(BinarioADecimal(101011))

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
for (let i = 2; i < numero; i++)
if (numero % i === 0 ) {
    return false;
}
return numero !== 1;
}
console.log(esPrimo(17))

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
let sepcadena = cadena.split('')
let invcadena = sepcadena.reverse()
let unircadena = invcadena.join('')
return unircadena
}
console.log(invertirCadena("Hola"))

module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}