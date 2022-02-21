let options = ['rock', 'paper', 'scissors']
let computerChoice = 0
let playerChoice = ''
let winPlayer = 0
let winComputer = 0
let turns = 0

function computerPlay() {
  computerChoice = options[Math.floor(Math.random() * options.length)]
}

function playerPlay() {
  playerChoice = prompt('Qual a sua jogada? ')
  playerChoice = playerChoice.toLowerCase()
  if (
    playerChoice != 'rock' &&
    playerChoice != 'paper' &&
    playerChoice != 'scissors'
  ) {
    alert('Selecione Rock, paper or scissors')
    return playerPlay()
  } else {
    alert(`Você escolheu ${playerChoice}`)
  }
}

function decision() {
  switch (true) {
    case playerChoice == computerChoice:
      console.log('Empate')
      break
    case (playerChoice == 'rock' && computerChoice == 'scissors') ||
      (playerChoice == 'scissors' && computerChoice == 'paper') ||
      (playerChoice == 'paper' && computerChoice == 'rock'):
      console.log(
        `Você colocou ${playerChoice} e o Computador escolhe ${computerChoice}, Você Ganhou!`
      )
      winPlayer++
      break
    case (playerChoice == 'rock' && computerChoice == 'paper') ||
      (playerChoice == 'scissors' && computerChoice == 'rock') ||
      (playerChoice == 'paper' && computerChoice == 'scissors'):
      console.log(
        `Você colocou ${playerChoice} e o Computador escolhe ${computerChoice}, Você Perdeu!`
      )
      winComputer++
      break
  }
}

function play() {
  computerPlay()
  playerPlay()
  decision()
}

function rounds() {
  for (turns = 0; winPlayer <= 5 || winComputer <= 5; turns++) {
    play()
    if (winPlayer >= 5) {
      console.log(`Parabéns você ganhou, você jogou ${turns}`)
      break
    } else if (winComputer >= 5) {
      console.log('Infelizmente, você perdeu, tente novamente')
      break
    }
  }
}
