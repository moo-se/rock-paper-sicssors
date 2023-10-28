/**
 * create a function for computer's play that returns random values
 * create a function that checks player's choice and computer's choice and determine the winner
 * create a game function that goes five round, stores the results/scores, and determines winner/loser at the end of the game
 */

const values = ['rock', 'paper', 'scissors']
let x ;

// let userChoice = prompt('please enter one of "rock, papper, scissors"').toLowerCase()
// console.log(userChoice)


function getComputerChoice(val){
    const index = Math.floor(Math.random()*3)
    //console.log(index)
    const choice = values[index]
    return choice;
}

// const computerChoice = getComputerChoice(values)

function playRound(user, computer){

    if(user === 'rock' && computer === 'rock'){
        return 'void'
    }
    else if (user === 'rock' &&  computer === 'paper' ){
       return 'computer wins'
    }
    else if (user === 'rock' &&  computer === 'scissors' ){
        return'user wins'
    }
    else if (user === 'paper' &&  computer === 'paper' ){
        return'void'
    }
    else if (user === 'paper' &&  computer === 'rock' ){
        return 'user wins'
    }
    else if (user === 'paper' &&  computer === 'scissors' ){
       return 'computer wins'
    }
    else if (user === 'scissors' &&  computer === 'scissors' ){
        return'void'
    }
    else if (user === 'scissors' &&  computer === 'rock' ){
        return 'computer wins'
    }
    else if (user === 'scissors' &&  computer === 'paper' ){
       return 'user wins'
    
    }
    else{
        return 'invalid input'
    }
}

function game(val){
    let userCount = 0;
    let computerCount = 0;
    for (let i = 0; i <= 4; i++){

        const computerChoice = getComputerChoice(val)
        let userChoice = prompt('please enter one of "rock, papper, scissors"').toLowerCase()
        console.log(computerChoice)
        console.log(userChoice)
        const winner = playRound(userChoice, computerChoice)
        if (winner === 'user wins'){
            userCount = userCount + 1
            console.log(`user: ${userCount}`)
        }
        else if (winner === 'computer wins'){
            computerCount = computerCount + 1
            console.log(`computer: ${computerCount}`)
        }
    }

    console.log(userCount)
    console.log(computerCount)
    if(userCount > computerCount){
        console.log('final round winner is user')
    }else if(computerCount > userCount){
        console.log('final round winner is computer')
    }


}

game(values)
//  playRound(userChoice, computerChoice)

