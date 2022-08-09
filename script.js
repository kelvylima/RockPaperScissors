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
    let playerscore = document.getElementById('playerscore')
    let computerscore = document.getElementById('computerscore')
    let playerpoints = 0;
    let computerpoints = 0;
    //results
    const results = document.getElementById('results')
    //rock button
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', function() {
        
        const battle = Playround(Getcomputerchoice(), 'Rock')
        results.textContent = battle[0]
        if (battle[1] === 1) {
            playerscore.textContent = playerpoints+=1
        } else if (battle[1] === 0) {
            computerscore.textContent = computerpoints+=1
        }
    });
    //paper button
    const paper = document.querySelector('#paper');
    paper.addEventListener('click', function() {
        const battle = Playround(Getcomputerchoice(), 'Paper')
        results.textContent = battle[0]
        if (battle[1] === 1) {
            playerscore.textContent = playerpoints+=1
        } else if (battle[1] === 0) {
            computerscore.textContent = computerpoints+=1
        }
    });
    //scissor button
    const scissor = document.querySelector('#scissor');
    scissor.addEventListener('click', function() {
        const battle = Playround(Getcomputerchoice(), 'Scissors')
        results.textContent = battle[0]
        if (battle[1] === 1) {
            playerscore.textContent = playerpoints+=1
        } else if (battle[1] === 0) {
            computerscore.textContent = computerpoints+=1
        }
    });
    
    
}

Game()