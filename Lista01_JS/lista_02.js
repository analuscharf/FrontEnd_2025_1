//1. Imprimir Núemrostercalador
function printarray(data) {
    data.forEach(valor => { console.log(valor); });
    return data;
}


//2. Quadrado
function quad(data) {
   let quad = data.map(x => x * x);
   return quad;
}

//3. Filtro
function filt(data) {
   let resultado = data.filter(x => x % 2 == 0);
   return resultado;
}

//4. encontraMaiorQueCinco
function encontraMaiorQueCinco(data) {
   let resultado = data.filter(x => x>5);
   return resultado;
}

//5. indiceMaiorQueCinco
function indiceMaiorQueCinco(data) {
   return data.findIndex(x => x > 5);
}

//6. concatenaArrays
function concatenaArrays(data01,data02) {
   return data01.concat(data02);
}


//7. extraiSubArray
function extraiSubArray(array, inicio, fim) {
    return array.slice(inicio, fim + 1);
}

//8. ordenaNumeros
function ordenaNumeros(array) {
    return array.sort((a,b) => {return a - b;});
}

//9. 
function processaNumeros(data) {
    let maiorQue5 = encontraMaiorQueCinco(data); // Filtra maiores que 5
    let quadrados = quad(maiorQue5);             // Calcula quadrados
    return quadrados.sort((a, b) => a - b);      // Ordena e retorna
}


//10. 
function analisaArray(data) {
    // 1. Remover números negativos
    let positivos = data.filter(x => x >= 0);

    // 2. Encontrar o índice do primeiro número maior que 10
    let indiceMaiorQue10 = positivos.findIndex(x => x > 10);
    console.log("Índice do primeiro número > 10:", indiceMaiorQue10);

    // 3. Extrair subarray com os 3 primeiros elementos
    let subarray = extraiSubArray(positivos, 0, 2);

    // 4. Concatenar com [99, 100]
    let resultado = concatenaArrays(subarray, [99, 100]);

    // 5. Ordenar em ordem crescente
    return ordenaNumeros(resultado);
}