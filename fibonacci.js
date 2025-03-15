function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let sequencia = [0, 1];
    
    for (let i = 2; i < n; i++) {
        let proximo = sequencia[i - 1] + sequencia[i - 2]; 
        sequencia.push(proximo); 
    }
    
    return sequencia;
}

const numero = parseInt(prompt("Digite um número: "));
console.log(fibonacci(numero).join(", "));