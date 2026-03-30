// ================================
// SELEÇÃO DE ELEMENTOS
// ================================

// Seleciona o formulário pelo ID
const form = document.getElementById("formContato");

// Seleciona o parágrafo onde será exibida a mensagem
const msg = document.getElementById("msg");

// Seleciona botão de alternância de tema
const temaBtn = document.getElementById("temaBtn");

// ================================
// VALIDAÇÃO E ENVIO DO FORMULÁRIO
// ================================

// Adiciona evento de envio ao formulário
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o recarregamento da página

  // Captura os valores dos campos e remove espaços extras
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // ================================
  // VALIDAÇÃO DOS CAMPOS
  // ================================

  // Verifica se algum campo está vazio
  if (!nome || !email || !mensagem) {
    exibirMensagem("Preencha todos os campos!", "erro");
    return; // Interrompe execução
  }

  // Expressão regular para validar formato de e-mail
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verifica se o e-mail é válido
  if (!emailValido.test(email)) {
    exibirMensagem("Email inválido!", "erro");
    return;
  }

  // ================================
  // SUCESSO NO ENVIO (SIMULAÇÃO)
  // ================================

  exibirMensagem("Mensagem enviada com sucesso!", "sucesso");

  // Limpa os campos do formulário
  form.reset();
});

// ================================
// FUNÇÃO PARA EXIBIR MENSAGENS
// ================================

// Função reutilizável para mostrar mensagens na tela
function exibirMensagem(texto, tipo) {
  msg.innerText = texto;

  // Define cor com base no tipo
  if (tipo === "erro") {
    msg.style.color = "red";
  } else if (tipo === "sucesso") {
    msg.style.color = "green";
  }

  // Remove mensagem após 3 segundos (opcional)
  setTimeout(() => {
    msg.innerText = "";
  }, 3000);
}

// ================================
// TEMA CLARO / ESCURO
// ================================

// Adiciona evento ao botão de tema
temaBtn.addEventListener("click", () => {
  // Alterna a classe 'light' no body
  document.body.classList.toggle("light");
});
