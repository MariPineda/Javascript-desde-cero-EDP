function primerElemento(arg){
    //dado el array pasado por parametro, tendras que devolver el primer elemento
    // tu código:
    return arg[0]
}
primerElemento(["Hola", "Chau", "Buenas noches"])

function ultimoElemento(arg){
    //dado el array pasado por parametro, tendras que devolver el ultimo elemento
    // tu código aqui:
    return (arg.at (-1))
}
ultimoElemento(["Hola", "Chau", "Buenas noches"])

function nuevoArray(arg){
    //dado el array pasado por parametro retorna su longitud
    // tu código aqui:
    return arg.length
}
nuevoArray(["Hola", "Chau", "Buenas tardes", "Buenas noches"])

function changeArray(arr){
    //dado el array pasado por parametro, cambia el valor del primero elemento por 'Aprendiendo' y
    //el ultimo elemento por 'array'
    //retorna el nuevo valor
    // tu código aqui:
    arr[0] = "Aprendiendo";
    arr.pop(); 
    arr.push("array");
    return arr
}
changeArray(["Hola", "Chau", "Buenas tardes", "Buenas noches"])

function primerasCondicionales(arg){
    // pasados los array por parametros tendras que devolver según lo que corresponda:
    // longitud de array mayor que 3 retornar: 'Este array es mayor a 3'
    // longitud de array es igual a 3 retornar: 'Este array es igual a 3'
    // longitud de array menor que 3 retornar: 'Este array es menor a 3'
    // longitud de array igual a 0 retornar: 'Este array no contiene elementos'
    // tu código aqui:
    for (let key in arg){
        if(key.length > 3){
            return `${key}Este array es mayor a 3`
        }
    }

}

primerasCondicionales([[3,2],[4,5,6,7], [], [998]] )

function sumandoEnUno(arg){
    // dado el array de numeros enteros pasado por parametro, a cada elemento del array
    // tienes que sumarle 1.. ejemplo: [4 , 5, 6] -> [5 , 6, 7] 
    // tu código aqui:
    arg.forEach (function (args) {
        resultado = [args + 1];
        return console.log(resultado)
    })
}
sumandoEnUno([4,5,6])

function valorMaximo(arr){
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más alto y devolverlo
    //ejemplo -> [1 , 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 99
    // Tu codigo:
    let max = 0;
    for ( let numero of arr ) {
        if (max < numero)
        max = numero;
    }
    return max;
}
valorMaximo([1 , 5, 4, 10, 99 ,2, 42, 3])

function valorMinimo(arr){
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más bajo y devolverlo
    //ejemplo -> [ 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 2
    // Tu codigo:
    let min = arr[0]; 
    for(i=1;i<arr.length;i++){      
        if(arr[i]<min){
            (min=arr[i])
        }
    }
return min;
}
valorMinimo([ 5, 4, 10, 99 ,2, 42, 3])


function cantPares(arr){
    //Se para un array de enteros, tienes que iterar por los elementos y contar la cantidad de numeros que son pares
    // devolver la cantidad de pares total. Ejemplo: [1,2,3,4,5,6,7,8,9] -> 4
    // Tu codigo:

}

function eliminarDuplicado(arr){
    // Se para un array de enteros, tienes que iterar por los elementos y eliminar los duplicados, y devolver el array nuevo sin duplicado.
    // ejemplo: [1,1,2,4,5,6,6,7,1,8,9] -> [1,2,4,5,6,7,8,9]
    // Tu codigo:
    
}

function enOrden(arr, ascendente = true){
    //Se para un array de enteros de forma desordenada, tendras que devolver el mismo array pero de forma ordenada
    //de menor a mayor. ejemplo -> [7, 2, 4, 6, 1, 3, 5] -> [1, 2, 3, 4, 5, 6, 7]
    //Tu codigo:

}

function dosEnUno(arr1, arr2){
    //Escribe una función que reciba dos arrays y devuelva un nuevo array que contenga todos los elementos de ambos arrays, sin duplicados.
    //Tu codigo:
    // return arr1.concat(arr2);

}

function matrizTranspuesta(matriz){
    //Escribe una función que reciba una matriz (array de arrays) y devuelva la matriz transpuesta, es decir, intercambiando filas por columnas.
    //Tu codigo:

}

module.exports = {
    nuevoArray,
    changeArray,
    sumandoEnUno,
    primerElemento,
    ultimoElemento,
    primerasCondicionales,
    valorMaximo,
    valorMinimo,
    cantPares,
    eliminarDuplicado,
    enOrden,
    dosEnUno,
    matrizTranspuesta,
}