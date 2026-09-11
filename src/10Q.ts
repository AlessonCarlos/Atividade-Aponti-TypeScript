// Desafio: combine tudo o que foi visto — crie um array de números, percorra com um loop e, para cada número, utilize uma condicional para classificá-lo como "par" ou "ímpar", exibindo o resultado no console.

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8,9,10];

for (let numero of numeros) {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }
}