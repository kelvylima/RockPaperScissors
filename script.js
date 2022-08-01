function RandomNumber() {
    let randomnumber = Math.floor(Math.random()*3)
    return randomnumber
}


function Getcomputerchoice() {

    let computerchoice = RandomNumber()
    let computermove = ''
    switch (computerchoice) {
        case 0:
            computermove = 'Rock';
            break;
        case 1:
            computermove = 'Paper';
            break;
        case 2:
            computermove = 'Scissors';
            break;            
    }
    
    return computermove
}

function Getplayerchoice() {
    
    moveloop: while (true) {
        let playerinput = prompt('Please, enter "0" to "Rock", "1" to Paper or "2" to Scissors: ')
        let playerchoice = parseInt(playerinput)
        var playermove = ''
        switch (playerchoice) {
            case 0:
                playermove = 'Rock';
                break;
            case 1:
                playermove = 'Paper';
                break;
            case 2:
                playermove = 'Scissors';
                break;
            default:
                alert('Plase, type "0", "1" or "2" only');
                continue moveloop

        }
        break
    }
    
    return playermove
}

function Playround(computerselection, playerselection) {
    if (computerselection == "Rock") {
        if (playerselection == "Paper") {
            const data = [`You win! ${playerselection} beats ${computerselection}`, 1]
            return data
        } else if (playerselection == "Scissors") {
            const data = [`You Lose! ${computerselection} beats ${playerselection}`, 0]
            
            return data
        } else {
            const data = ['Draw!', 2]
            return data
        }
    } else if (computerselection == "Paper") {
        if (playerselection == "Scissors") {
            const data = [`You win! ${playerselection} beats ${computerselection}`, 1]
            return data
        } else if (playerselection == "Rock") {
            const data = [`You Lose! ${computerselection} beats ${playerselection}`, 0]
            
            return data
        } else {
            const data = ['Draw!', 2]
            return data
        }
    } else {
        if (playerselection == "Rock") {
            const data = [`You win! ${playerselection} beats ${computerselection}`, 1]
            return data
        } else if (playerselection == "Paper") {
            const data = [`You Lose! ${computerselection} beats ${playerselection}`, 0]
            return data
        } else {
            const data = ['Draw!', 2]
            return data
        }
    }

}



function Game() {
    var playerscore = 0
    var computescore = 0
    
    for (let i = 0; i < 5; i++) {
        console.log(`Player ${playerscore} VS ${computescore} Computer`)
        let round = Playround(Getcomputerchoice(), Getplayerchoice())
        let result = round[0]
        let score = round[1]
        console.log(result)
        if (score == 1) {
             playerscore++ 
         } else if (score == 0) {
             computescore++
        }
    
    }
    console.log(`Player ${playerscore} VS ${computescore} Computer`)
    if (playerscore > computescore) {
        console.log('Congratulations! You Win!')
        console.log('Thank you for play!')
    } else {
        console.log('You lose! Thanks for play!')
        console.log('Game Over')
    }
}

Game()