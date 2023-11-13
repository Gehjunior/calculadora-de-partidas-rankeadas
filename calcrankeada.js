function calcularNivel() {
  // Informar os valores para Vitorias/Derrotas
  let vitorias = parseInt(prompt("Informe a quantidade de vitórias:"));
  let derrotas = parseInt(prompt("Informe a quantidade de derrotas:"));

  // Validação dos Dados
  if (isNaN(vitorias) || isNaN(derrotas)) {
    console.error("Por favor, informe números válidos.");
    return;
  }

  // processamento dos valores (vitórias - derrotas)
  let saldoVitorias = vitorias - derrotas;

  // Determina o nível com base no saldo de vitórias
  let nivel;
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Exibe a mensagem
  console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Chama a função para calcular o nível com base nas entradas do usuário
calcularNivel();
