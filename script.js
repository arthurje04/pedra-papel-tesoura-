function jogar(escolhaUsuario) {
  const opcoes = ["pedra", "papel", "tesoura"];
  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
  let resultado = "";

  if (escolhaUsuario === escolhaComputador) {
    resultado = "Empate! Ambos escolheram " + escolhaUsuario;
  } else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
  ) {
    resultado = "Você venceu! " + escolhaUsuario + " ganha de " + escolhaComputador;
  } else {
    resultado = "Você perdeu! " + escolhaComputador + " ganha de " + escolhaUsuario;
  }

  document.getElementById("resultado").textContent = resultado;
}

function reiniciar() {
  document.getElementById("resultado").textContent = "";
}
