let userScore = 0;
let compScore = 0;

function getCompChoice(){
  const randomNumber = Math.floor(Math.random()*3)
  let computerChoice

  switch (randomNumber){
    case 0:
      computerChoice = 'Rock';
    break; 

    case 1:
      computerChoice = 'Paper'
    break;

    default: 
    computerChoice = 'Scissors'
  }
  return computerChoice
}

function getUserChoice(){
  let userChoice = prompt('r,s,p')

  switch (userChoice){

    case 'r': 
      userChoice = 'Rock'
    break; 

    case 'p':
      userChoice = 'Paper'
    break;

    case 's':
      userChoice = 'Scissors'
    break;

    case '':
      console.log('blank')
      userChoice = getCompChoice()
    break;
  }
  
  return userChoice
}

function playRound(userChoice, computerChoice){

  if (userChoice === 'Rock' && computerChoice === 'Paper' || userChoice === 'Paper' && computerChoice === 'Scissors' || userChoice ==='Scissors' && computerChoice === 'Rock'){
    compScore ++;

  }else if (userChoice === 'Rock' && computerChoice === 'Scissors' || userChoice === 'Paper' && computerChoice === 'Rock' || userChoice ==='Scissors' && computerChoice === 'Paper'){
    userScore ++

  }else {
    console.log('Draw')
  }

  console.log(`You chose ${userChoice} and Computer chose ${computerChoice}`)
  console.log(`You:${userScore} || Computer:${compScore}`)
}



playGame()

function playGame(){
  const userSelection = getUserChoice()
  const computerSelection = getCompChoice()

  if(!userSelection) return

  playRound(userSelection, computerSelection)

  if (userScore < 3 && compScore < 3){
    playGame()
  } else {

    if (userScore === 3){
      console.log('You win')
    } else {
      console.log('You lose')
    }
  }
}
