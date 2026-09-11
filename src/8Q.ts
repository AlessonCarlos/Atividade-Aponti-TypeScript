//Crie um array numeros: number[] com pelo menos 5 valores e utilize um loop for...of para somar todos os elementos, exibindo o total ao final. 

let numeros: number[] = [15, 21, 33, 47, 50];

let total: number = 0;

for (let numero of numeros) {
    total += numero;
}

console.log(total);