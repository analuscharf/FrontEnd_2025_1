// ------------------------------
// Adicionando a seção de depoimentos
// ------------------------------
const mainTag = document.querySelector("main"); // main principal (tag <main>)

const section = document.createElement("section");

section.style.backgroundColor = "#d2b48c"; 
section.style.borderRadius = "15px"; 
section.style.padding = "20px"; 
section.style.textAlign = "center"; 
section.style.margin = "20px auto"; 
section.style.maxWidth = "500px"; 
section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

const tituloDepo = document.createElement("h2");
tituloDepo.textContent = "Depoimentos";
section.append(tituloDepo);

const lista = document.createElement("ol");
section.append(lista);

const depoimentos = [
    "Amei Tóquio na primavera - João",
    "O papa Leão é simpático! - Maria",
    "Strasbourg é um sonho no natal - Lucas"
];

depoimentos.forEach((texto) => {
    const item = document.createElement("li");
    item.textContent = texto;
    lista.append(item);
});

mainTag.after(section);


// ------------------------------
// Remover a Rússia
// ------------------------------
const galeria = document.querySelector(".grid-viagens");
const destinos = galeria.querySelectorAll(".grid-item");

destinos.forEach((destino) => {
    const titulo = destino.querySelector("h3");
    if (titulo && titulo.textContent === "Rússia") {
        galeria.removeChild(destino);
    }
});

// ------------------------------
// Alterar o preço de Paris
// ------------------------------
destinos.forEach((destino) => {
    const titulo = destino.querySelector("h3");
    if (titulo && titulo.textContent === "Paris") {
        const preco = destino.querySelector("p");
        if (preco) {
            preco.textContent = "7.500";
        }
    }
});

// ------------------------------
// Adicionar um novo destino
// ------------------------------
const grid = document.querySelector('.grid-viagens');

const novoDestino = document.createElement('div');
novoDestino.classList.add('grid-item');

const imagem = document.createElement('img');
imagem.src = 'Imagem/holanda.jpeg';
imagem.alt = 'Holanda';
novoDestino.appendChild(imagem);

const titulo = document.createElement('h3');
titulo.textContent = 'Holanda';
novoDestino.appendChild(titulo);

const preco = document.createElement('p');
preco.textContent = '8.500';
novoDestino.appendChild(preco);

grid.appendChild(novoDestino);
