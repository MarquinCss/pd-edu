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
});
var codigoCorreto = "1111";
var paragrafoErro = document.querySelector("#erro");
var modal = document.getElementById("modal");

function exibirModal() {
  modal.style.display = "block";
}

function fecharModal() {
  modal.style.display = "none";
}

function verificarCodigo() {
  var codigoInput = document.getElementById("codigoInput");
  var codigoDigitado = codigoInput.value;

  if (codigoDigitado === codigoCorreto) {
    paragrafoErro.innerHTML = "";
    fecharModal();
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

// Exibir o modal ao carregar a página (você pode chamar essa função quando necessário)
window.onload = exibirModal;
