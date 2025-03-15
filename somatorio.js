function somatorio(n) {
    var soma = 0;
    
    for (let i = 0; i < n.length; i++) {
        soma += n[i];
    }
    
    return soma;
}

const entrada = prompt("Digite os números separados por vírgula: ");
const n = entrada.split(",").map(Number);

console.log("A soma dos números é " + somatorio(n));
