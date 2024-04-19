/**
 * Esta función realiza la suma de a y b
 * @param {number} a Recibe un número entero
 * @param {number} b Recibe un número entero
 * @returns Devuelve la suma de a y b
 */
function suma(a , b) {
    console.log(a + b);
};

function resta(a,b) {
    console.log(a - b);
};
/**
 * Esta función realiza la multiplicación de a y b
 * @param {number} a 
 * @param {number} b 
 * @returns Devuelve la multiplicación de a * b
 */
function multiplicacion(a,b) {
    console.log(a * b);
};

function division(a,b) {
    console.log(a / b);
}

// Si tengo node puedo esxportar así:
module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
}

