// Función para sumar todos los números en un array
function sumarNumeros(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

// Función para encontrar el número máximo en un array
function encontrarMaximo(numeros) {
    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    return maximo;
}

// Función para verificar si un número es par
function esPar(numero) {
    return numero % 2 === 0;
}

// Función principal para realizar los cálculos
function calcular() {
    const numerosStr = prompt("Ingresa una lista de números separados por coma:");
    const numeros = numerosStr.split(',').map(Number);

    const suma = sumarNumeros(numeros);
    const maximo = encontrarMaximo(numeros);

    alert(`La suma de los números es: ${suma}`);
    alert(`El número máximo es: ${maximo}`);

    console.log("Los números pares son:");
    for (let i = 0; i < numeros.length; i++) {
        if (esPar(numeros[i])) {
            console.log(numeros[i]);
        }
    }
}