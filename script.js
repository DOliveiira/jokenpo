const result = document.querySelector(".result");
const yourChoice = document.querySelector(".your-choice")
const machineChoice = document.querySelector(".machine-choice")

const playHuman = (humanChoise) => {
  playTheGame(humanChoise, playMachine());
};

const playMachine = () => {
  const choices = ["stone", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " Maquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Deu empate";
  } else if (
    (human === "paper" && machine === "stone") ||
    (human === "stone" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    result.innerHTML = "Você Ganhou!"
  } else {
    result.innerHTML = "Vitoria da Maquina";
  }
};
