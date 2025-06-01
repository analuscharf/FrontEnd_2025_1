// 1.a
let pessoa = {
    nome: "Ana Luiza",
    idade: 31,
    cidade: "Floripa"
};
console.log(pessoa);       // Imprime o objeto inteiro

// 1.b

let saudacao = `Olá, meu nome é  ${pessoa.nome} e tenho ${pessoa.idade} anos e nasci em ${pessoa.cidade}!`;
console.log(saudacao);     // Imprime a saudação 

//1.c
pessoa.profissao = {
    cargo: "Professora",
    salario: 8000,
    cargaHoraria: 40
};

//1.c
delete pessoa.cidade;

// Imprimindo o objeto atualizado
console.log(pessoa);

//2.a
let livro = {
    titulo: "",
    ano: null,
    autor: {
        primeiroNome: "",
        sobrenome: ""
    },
    // 2.c
    gerarCitacao: function() {
        return (console.log(`${this.autor.sobrenome}, ${this.ano}`));
    }

};

console.log(livro);
livro.titulo = "Orgulho e Preconceito";
livro.ano = 1813;
livro.autor.primeiroNome = "Jane";
livro.autor.sobrenome = "Austen";
console.log(livro);

//2.b
let autor_print = `Nome do autor é ${livro.autor["primeiroNome"]} ${livro.autor.sobrenome}.`;
console.log(autor_print); 

// 2.d
livro.gerarCitacao();

// 3.a 
let animal = {
    tipo: "mamífero",
    falar: function() {
        console.log("O animal faz um som.");
    }
};

// 3.b
let cachorro = Object.create(animal);
console.log(cachorro); // mostra o objeto cachorro vazio, mas com protótipo animal

// 3.c
cachorro.nome = "Amora";
cachorro.falar = function() {
    console.log(`O cachorro ${this.nome} late!!`);
};

// 3.d
animal.falar();    // chama o método falar do objeto animal
cachorro.falar();  // chama o método falar sobrescrito do cachorro

// 4.a
let Filme = {
    titulo: "Enrolados",
    ano: 2010,
    duracao: {
        horas: 1,
        minutos: 40
    },
    generos: ["Animação", "Aventura", "Comédia"],
    diretores: [
        { nome: "Nathan", sobrenome: "Greno" },
        { nome: "Byron", sobrenome: "Howard" }
    ],
};


function classificarPropriedades(obj) {

  // Criar listas vazias para cada tipo
  let strings = [];
  let numeros = [];
  let arrays = [];
  let objetos = [];

  // Passar por cada propriedade do objeto
  for (let chave in obj) {
    let valor = obj[chave];

    // Verificar o tipo do valor e colocar na lista certa
    if (typeof valor === "string") {
      strings.push(chave);  // só o nome da propriedade
    } else if (typeof valor === "number") {
      numeros.push(chave);
    } else if (Array.isArray(valor)) {
      arrays.push(chave);
    } else if (typeof valor === "object" && valor !== null) {
      objetos.push(chave);
    }
  }

  // Mostrar os resultados
  console.log("Propriedades que são strings:", strings);
  console.log("Propriedades que são números:", numeros);
  console.log("Propriedades que são arrays:", arrays);
  console.log("Propriedades que são objetos:", objetos);
   

    const total = strings.length + numeros.length + arrays.length + objetos.length;
    console.log(`Contagem total de propriedades analisadas: ${total}`);
    
}
//4.c e 4.d  
classificarPropriedades(Filme);


//5
fetch('data.json')
.then(res => res.json())  
.then(obj => {            
  const resultado = extrairValores(obj);  
  if (resultado) console.log(resultado);  

});                               

function extrairValores(obj) {

  // Pegamos o primeiro item do array (porque seu JSON é um array com um objeto dentro)
  let dados = obj[0];

  // Pegamos o array 'series' dentro de resultados (assumindo que resultados tem pelo menos um item)
  let series = dados.resultados[0].series;

  // Criamos um objeto vazio para guardar os resultados
  let percentualPorEstado = {};

  // Percorremos o array series com um for normal
  for (let i = 0; i < series.length; i++) {
    percentualPorEstado[series[i].localidade.nome] = series[i].serie["2022"];
  }

  // Retornamos o objeto com os percentuais
  return percentualPorEstado;
}