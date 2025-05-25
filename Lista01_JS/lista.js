// 1. Soma
function soma(array) {
    let total = 0;
    for (let valor of array) {
        total += valor;
    }
    return total;
}

// 2. Média
function media(array) {
    let total = 0;
    for (let valor of array) {
        total += valor;
    }
    return total / array.length;
}

// 3. Menor elemento
function menor(array) {
    let menor = array[0];
    for (let valor of array) {
        if (valor < menor) {
            menor = valor;
        }
    }
    return menor;
}

// 4. Medalha de prata (segundo maior)
function segundoMaior(array) {
    let maior = -Infinity;
    let segundo = -Infinity;
    for (let valor of array) {
        if (valor > maior) {
            segundo = maior;
            maior = valor;
        } else if (valor > segundo && valor < maior) {
            segundo = valor;
        }
    }
    return segundo;
}

// 5. Filtro (ímpares)
function filtrarImpares(array) {
    let resultado = [];
    for (let valor of array) {
        if (valor % 2 !== 0) {
            resultado.push(valor);
        }
    }
    return resultado;
}

// 6. Inverso
function inverter(array) {
    let resultado = [];
    for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i]);
    }
    return resultado;
}

// 7. Histograma
function histograma(array) {
    let bandas = [0, 0, 0, 0, 0];

    for (let valor of array) {
        if (valor >= 1 && valor <= 20) {
            bandas[0]++;
        } else if (valor <= 40) {
            bandas[1]++;
        } else if (valor <= 60) {
            bandas[2]++;
        } else if (valor <= 80) {
            bandas[3]++;
        } else if (valor <= 100) {
            bandas[4]++;
        }
    }

    console.log("[01, 20] :", "* ".repeat(bandas[0]));
    console.log("[21, 40] :", "* ".repeat(bandas[1]));
    console.log("[41, 60] :", "* ".repeat(bandas[2]));
    console.log("[61, 80] :", "* ".repeat(bandas[3]));
    console.log("[81,100] :", "* ".repeat(bandas[4]));
}

// 8. Verificador
function verificarNome(array) {
    let nome = prompt("Digite um nome:");
    for (let item of array) {
        if (item === nome) {
            return true;
        }
    }
    return false;
}

// 9. Comparador
function compararArrays(a1, a2) {
    if (a1.length !== a2.length) {
        return false;
    }
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
            return false;
        }
    }
    return true;
}

// 10. Removedor
function removerIndice(array, indice) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (i !== indice) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

function palindromo(array) {
    let invertido = [];

    // Monta o array invertido
    for (let i = array.length - 1; i >= 0; i--) {
        invertido.push(array[i]);
    }

    // Compara os dois arrays
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== invertido[i]) {
            return false;
        }
    }

    return true;
}

// 12. Intercalador
function intercalar(a1, a2) {
    let resultado = [];
    for (let i = 0; i < a1.length; i++) {
        resultado.push(a1[i]);
        resultado.push(a2[i]);
    }
    return resultado;
}

// 13. Compactador
function compactar(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (i === 0 || array[i] !== array[i - 1]) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}
