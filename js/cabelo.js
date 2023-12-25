var codigoCorreto = "4321";
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
