const result = document.querySelector(".result"); // Mapeia o resultado na linha 24 no HTML
const yourChoice = document.querySelector(".your-choice"); // Mapeia sua escolha na linha 21 no HTML
const machineChoice = document.querySelector(".machine-choice"); // Mapeia a escolha da maquina na linha 22 no HTML
const humanScore = document.querySelector("#human-score"); // Mapeia a pontuação do usuario na linha 26 no HTML
const machineScore = document.querySelector("#machine-score"); // Mapeia a pontuação da maquina na linha 27 no HTML

let humanScoreNumber = 0; // Varial para armazenar a pontuação do usuario
let machineScoreNumber = 0; // Variavel para armzenar a pontuação da maquina

const playHuman = (humanChoise) => {
  playTheGame(humanChoise, playMachine());
};

const playMachine = () => {
  const choices = ["Pedra", "Papel", "Tesoura"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " Maquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Ficou empatado";
    yourChoice.innerHTML = "A sua escolha foi: " + human;
    machineChoice.innerHTML = "A maquina escolheu: " + machine;
  } else if (
    (human === "Papel" && machine === "Pedra") ||
    (human === "Pedra" && machine === "Tesoura") ||
    (human === "Tesoura" && machine === "Papel")
  ) {
    result.innerHTML = "Você Ganhou!";
    yourChoice.innerHTML = "A sua escolha foi: " + human;
    machineChoice.innerHTML = "A maquina escolheu: " + machine;
    humanScoreNumber++; // Toda vez que o usuario fizer ponto adiciona 1 nessa variavel criada na linha 7
    humanScore.innerHTML = humanScoreNumber;
  } else {
    result.innerHTML = "Vitoria da Maquina";
    yourChoice.innerHTML = "A sua escolha foi: " + human;
    machineChoice.innerHTML = "A maquina escolheu: " + machine;
    machineScoreNumber++; // Toda vez que a maquina fizer ponto adiciona 1 nessa variavel criada na linha 8
    machineScore.innerHTML = machineScoreNumber;
  }
};
