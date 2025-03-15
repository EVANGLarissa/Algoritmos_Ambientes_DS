function ehPrimo(n) {
    if (n <= 1) {
        return false;
    }
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

const numero = parseInt(prompt("Digite um número: "));

if (ehPrimo(numero)) {
    console.log(numero + " é primo.");
} else {
    console.log(numero + " não é primo.");
}
