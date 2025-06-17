// Função para posicionar a imagem
const imagem = document.getElementById("foto");

function posiciona(imagem, x, y) {
  imagem.style.display = "block";
  imagem.style.left = `${x - imagem.offsetWidth / 2}px`;
  imagem.style.top = `${y - imagem.offsetHeight / 2}px`;
}

// Clique na tela → mostra e move a imagem
document.body.addEventListener("click", function (event) {
  imagem.classList.remove("escondida");

  const x = event.clientX;
  const y = event.clientY;

  posiciona(imagem, x, y);
});

// Função para trocar o tema dinamicamente
function setTheme(nome) {
  const link = document.createElement("link");
  link.id = "tema";
  link.rel = "stylesheet";
  link.href = `temas/${nome}.css`;

  const temaAtual = document.querySelector("#tema");
  if (temaAtual) {
    temaAtual.replaceWith(link);
  } else {
    document.head.append(link);
  }
}


function virarPagina() {
  document.head.insertAdjacentHTML(
    "beforeend",
    "<style id='efeito-extra'>body { transform: rotate(180deg); }</style>"
  );
}

// Verifica e salva nome com localStorage
let nome = localStorage.getItem("nomeUsuario");

if (!nome) {
  nome = prompt("Qual é o seu nome?");
  if (nome) {
    localStorage.setItem("nomeUsuario", nome);
  }
}

// Exibe saudação na tela
const titulo = document.getElementById("boas-vindas");
if (nome) {
  titulo.textContent = `Olá, ${nome}! 👋`;
}

// Função para apagar o nome salvo
function limparNome() {
  localStorage.removeItem("nomeUsuario");
  location.reload(); // recarrega a página para atualizar
}

