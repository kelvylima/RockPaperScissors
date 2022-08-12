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
            Createimage('rock', '#computerchoice')
            break;
        case 1:
            computermove = 'Paper';
            Createimage('paper', '#computerchoice')
            break;
        case 2:
            computermove = 'Scissors';
            Createimage('scissors', '#computerchoice')
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
    let playerpoints = 0;
    let computerpoints = 0;
    //results
    const results = document.getElementById('results')
    //rock button
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', function() {
        Createimage('rock', '#playerchoice')
        const battle = Playround(Getcomputerchoice(), 'Rock')
        results.textContent = battle[0]
        if (battle[1] === 1) {
            playerpoints+=1
            Onoffneon(playerpoints, "#playerscore")
        } else if (battle[1] === 0) {
            computerpoints+=1
            Onoffneon(computerpoints, "#computerscore")
        }
        Gameover(playerpoints, computerpoints, results)
    });
    //paper button
    const paper = document.querySelector('#paper');
    paper.addEventListener('click', function() {
        Createimage('paper', '#playerchoice')
        const battle = Playround(Getcomputerchoice(), 'Paper')
        results.textContent = battle[0]
        if (battle[1] === 1) {
            playerpoints+=1
            Onoffneon(playerpoints, "#playerscore")
        } else if (battle[1] === 0) {
            computerpoints+=1
            Onoffneon(computerpoints, "#computerscore")
        }
        Gameover(playerpoints, computerpoints, results)
    });
    //scissor button
    const scissor = document.querySelector('#scissor');
    scissor.addEventListener('click', function() {
        Createimage('scissors', '#playerchoice')
        const battle = Playround(Getcomputerchoice(), 'Scissors')
        results.textContent = battle[0]
        if (battle[1] === 1) {
            playerpoints+=1
            Onoffneon(playerpoints, "#playerscore")
        } else if (battle[1] === 0) {
            computerpoints+=1
            Onoffneon(computerpoints, "#computerscore")
        }
        Gameover(playerpoints, computerpoints, results)
    });
    
    
}

function Gameover(playerscore, computerscore, results) {
    let gameover = ''
    if(playerscore === 5) {
        results.textContent = ''
        gameover = true
        Playagain(gameover, 'You win! Congratulations!')
        
    } else if(computerscore === 5) {
        results.textContent = ''
        gameover = true
        Playagain(gameover, 'You lose! Game Over!')
    }
    
}

function Playagain(gameover, text) {
    if(gameover){
        
        let container = document.getElementById('container')
        container.innerHTML = ""
        let para = document.createElement('p')
        para.classList.add('neonon')
        para.classList.add('text')
        para.textContent = text
        let gameoverdiv = document.createElement('div')
        gameoverdiv.setAttribute('id', 'gameoverbuttons')
        container.appendChild(para)
        container.appendChild(gameoverdiv)
        
        let playagaintext = document.createElement('p')
        playagaintext.classList.add('neonon')
        playagaintext.classList.add('text')
        playagaintext.textContent = 'Play again?'
        let yesbutton = document.createElement('button')
        yesbutton.classList.add('gameoverbutton')
        yesbutton.textContent='YES'
        let nobutton = document.createElement('button')
        nobutton.classList.add('gameoverbutton')
        nobutton.textContent='NO'
        gameoverdiv.appendChild(playagaintext)
        gameoverdiv.appendChild(yesbutton)
        gameoverdiv.appendChild(nobutton)
        
        //event listner
        yesbutton.addEventListener('click', () => {
            document.location.reload()
        })
        nobutton.addEventListener('click', () => {
            let div = document.getElementById('container')
            div.innerHTML = '<p id = "gameovertext" class = "neonon text">Thank you for playing</p>'
        })
        
    }
}

function Onoffneon(count, idstring){
    var ogtext = document.querySelector(`${idstring}`).textContent
    for(let i of ogtext){
        var numbertext = Number(i)
        if(numbertext === count){
            var newtext = ogtext.replace(`${i}`, `<span class="neonon text">${i}</span>`)
        }
                  
    }
        
    document.querySelector(`${idstring}`).innerHTML = newtext
}

function Createimage(choice, idstring){
    let div = document.querySelector(`${idstring}`)
    let imgid = ''
    if(idstring === "#computerchoice"){imgid = "computer"} else{imgid = "player"}
    let checkimage = document.querySelector(`#${imgid}`);
    if(checkimage !== null){
        checkimage.remove()
    }
    let img = document.createElement('img')
        img.classList.add('image')
        img.setAttribute('id', `${imgid}`)
        img.src = `imgs/${choice}.png`
        div.appendChild(img);

}


Game()