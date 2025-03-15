function mdc(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const num1 = parseInt(prompt("Digite o primeiro número: "));
const num2 = parseInt(prompt("Digite o segundo número: "));

console.log("O mdc de " + num1 + " e " + num2 + " é: " + mdc(num1, num2));
