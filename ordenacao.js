function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    let pivo = arr[arr.length - 1];
    let menores = [];
    let maiores = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivo) {
            menores.push(arr[i]);
        } else {
            maiores.push(arr[i]);
        }
    }
    
    return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

const entrada = prompt("Digite os números separados por vírgula: ");
const numeros = entrada.split(",").map(Number);

console.log("Array ordenado: " + quicksort(numeros).join(", "));