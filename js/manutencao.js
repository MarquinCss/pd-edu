document.addEventListener("DOMContentLoaded", function () {
  var codigoInput = document.getElementById("codigoInput");

  // Adiciona um ouvinte de evento de teclado ao campo de entrada
  codigoInput.addEventListener("keyup", function (event) {
      // Verifica se a tecla pressionada é Enter (código 13)
      if (event.keyCode === 13) {
          // Chama a função verificarCodigo() se a tecla Enter foi pressionada
          verificarCodigo();
      }
  });

  var modal = document.getElementById("modal");

  // Adicione o atributo tabindex ao modal para permitir a navegação por teclado
  modal.setAttribute("tabindex", "0");

  // Mantenha um estado para rastrear se o código foi inserido corretamente
  var codigoInseridoCorretamente = false;

  // Desative a navegação inicial para os elementos fora do modal
  desativarNavegacaoExterna();

  // Adicione um ouvinte de evento para tratar a tecla Enter dentro do modal
  modal.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      // Trate a tecla Enter dentro do modal conforme necessário
      // Exemplo: fechar o modal se o código foi inserido corretamente
      if (codigoInseridoCorretamente) {
        fecharModal();
      }
    }
  });

  // Exibir o modal ao carregar a página (você pode chamar essa função quando necessário)
  exibirModal();
});

var codigoCorreto = "1234";
var paragrafoErro = document.querySelector("#erro");
var modal = document.getElementById("modal");

function exibirModal() {
  modal.style.display = "block";
}

function fecharModal() {
  modal.style.display = "none";
  // Remova o atributo tabindex quando o modal for fechado
  modal.removeAttribute("tabindex");
  // Ative a navegação para elementos fora do modal
  ativarNavegacaoExterna();
}

function verificarCodigo() {
  var codigoInput = document.getElementById("codigoInput");
  var codigoDigitado = codigoInput.value;

  if (codigoDigitado === codigoCorreto) {
    paragrafoErro.innerHTML = "";
    fecharModal();
    // Atualize o estado indicando que o código foi inserido corretamente
    codigoInseridoCorretamente = true;
  } else {
    paragrafoErro.innerHTML = "Erro, tente novamente, jovem!";
    codigoInput.value = "";
    paragrafoErro.classList.add("shake"); // Adiciona a classe de animação ao modal
    modal.classList.add("shake"); // Adiciona a classe de animação ao modal
    setTimeout(function () {
      modal.classList.remove("shake"); // Remove a classe após a animação
    }, 500); // Tempo igual à duração da animação
  }
}

function desativarNavegacaoExterna() {
  // Desative a navegação para os elementos fora do modal
  var elementosExternos = document.querySelectorAll("a, img");
  elementosExternos.forEach(function (elemento) {
    elemento.setAttribute("tabindex", "-1");
  });
}

function ativarNavegacaoExterna() {
  // Ative a navegação para os elementos fora do modal
  var elementosExternos = document.querySelectorAll("a, img");
  elementosExternos.forEach(function (elemento) {
    elemento.removeAttribute("tabindex");
  });
}
