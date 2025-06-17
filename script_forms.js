// Lista de ids dos campos
const campos = [
  "login",
  "password",
  "email",
  "aulas_do_dia",
  "dia_aula",
  "horario_inicio_aula",
  "mes_acaba_semestre",
  "semana_provas_finais",
  "participacao",
  "cor_disciplina"
];

// Captura mudanças em tempo real e salva no localStorage
campos.forEach(id => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener("input", () => {
      localStorage.setItem(id, input.value);
    });
  }
});

// Para checkboxes (cursos)
document.querySelectorAll(".curso").forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    const cursosSelecionados = Array.from(document.querySelectorAll(".curso"))
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    localStorage.setItem("cursosSelecionados", JSON.stringify(cursosSelecionados));
  });
});


// Carrega dados salvos ao abrir a página
window.addEventListener("load", () => {
  campos.forEach(id => {
    const input = document.getElementById(id);
    const salvo = localStorage.getItem(id);
    if (salvo && input) input.value = salvo;
  });

  // Preenche checkboxes
  const salvos = JSON.parse(localStorage.getItem("cursosSelecionados")) || [];
  document.querySelectorAll(".curso").forEach(input => {
    input.checked = salvos.includes(input.value);
  });

  atualizarTabela();
});

// Salvar dados no localStorage
function salvarLocal() {
  // Campos de texto, select, etc.
  campos.forEach(id => {
    const input = document.getElementById(id);
    if (input) localStorage.setItem(id, input.value);
  });

  // Campos checkbox (cursos)
  const cursos = [];
  document.querySelectorAll(".curso").forEach(input => {
    if (input.checked) cursos.push(input.value);
  });
  localStorage.setItem("cursosSelecionados", JSON.stringify(cursos));

  alert("Dados salvos com sucesso!");
  atualizarTabela();
}

// Atualiza a tabela com dados salvos
function atualizarTabela() {
  const tabela = document.getElementById("tabela");
  tabela.innerHTML = "<tr><th>Campo</th><th>Valor</th></tr>";

  campos.forEach(id => {
    const valor = localStorage.getItem(id);
    if (valor) {
      tabela.innerHTML += `<tr><td>${id}</td><td>${valor}</td></tr>`;
    }
  });

  const cursos = JSON.parse(localStorage.getItem("cursosSelecionados"));
  if (cursos && cursos.length > 0) {
    tabela.innerHTML += `<tr><td>Cursos</td><td>${cursos.join(", ")}</td></tr>`;
  }
}
