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


function playRound(userChoice){

  const computerChoice = getCompChoice()

  if (userChoice === 'Rock' && computerChoice === 'Paper' || 
    userChoice === 'Paper' && computerChoice === 'Scissors' || 
    userChoice ==='Scissors' && computerChoice === 'Rock'){
      compScore ++;

  }else if (userChoice === 'Rock' && computerChoice === 'Scissors' || 
    userChoice === 'Paper' && computerChoice === 'Rock' || 
    userChoice ==='Scissors' && computerChoice === 'Paper'){

      userScore ++

  }

  outcome.textContent = 
  `You chose ${userChoice} and Computer chose ${computerChoice}`

  score.textContent = `You:${userScore} || Computer:${compScore}`
  results.append(outcome,score)
  showMessage()
}

const btn = document.querySelectorAll('button')

btn.forEach(button => {
  button.addEventListener('click',(userSelection) => {
    userSelection = button.textContent
    playRound(userSelection)
  })
})

const results = document.createElement('div')
const score = document.createElement('p')
const outcome = document.createElement('p')
const message = document.createElement('p')

document.body.appendChild (results)

//add something for the score
