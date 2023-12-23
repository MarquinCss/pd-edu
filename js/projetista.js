var codigoCorreto = "0000";

function exibirModal() {
    var modal = document.getElementById("modal");
    var mainContent = document.querySelector(".main-content");

    modal.style.display = "block";
    mainContent.classList.add("blurred"); // Adiciona a classe para desfocar o conteúdo
}

function fecharModal() {
    var modal = document.getElementById("modal");
    var mainContent = document.querySelector(".main-content");

    modal.style.display = "none";
    mainContent.classList.remove("blurred"); // Remove a classe de desfoque
}

function verificarCodigo() {
    var codigoInput = document.getElementById("codigoInput");
    var codigoDigitado = codigoInput.value;

    if (codigoDigitado === codigoCorreto) {
        fecharModal();
    } else {
        alert("Código incorreto. Tente novamente.");
        codigoInput.value = ""; // Limpar o campo de entrada
    }
}

// Exibir o modal ao carregar a página (você pode chamar essa função quando necessário)
window.onload = exibirModal;
