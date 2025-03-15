function contarValores(numeros) {
    if (numeros.length === 0) return 0;
    
    let primeiro = numeros[0];
    let n = numeros.length;
    let contador = 0;
    
    for (let i = 0; i < n; i++) {
        if (numeros[i] >= primeiro && numeros[i] <= n) {
            contador++;
        }
    }
    
    return contador;
}

const entrada = prompt("Digite os números separados por vírgula: ");
const numeros = entrada.split(",").map(Number);

console.log("Quantidade de valores dentro do intervalo: " + contarValores(numeros));