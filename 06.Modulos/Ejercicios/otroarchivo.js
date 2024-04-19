
//Pasos para importar con node:
const {suma,resta,multiplicacion,division} = require('./calculadora')
const {PI,calcularAreaCirculo} = require('./geometría')
const {objeto} = require('./datosPersonales')

suma(3,5)
resta(3,5)
multiplicacion(3,5)
division(3,5)
calcularAreaCirculo(5)
console.log(objeto)
