const ran= parseInt(Math.random()*100 +1);


const submitbtn= document.querySelector('#submit');
const userinput=document.querySelector('#numentered');

const guessSlot= document.querySelector('.prevguesses');
console.log(guessSlot)

const remaining= document.querySelector('.remain');

const comp= document.querySelector('.loworhigh');

const start= document.querySelector('.result');

const p=document.createElement('p');

const loworhigh=document.querySelector('.loworhigh')

let prevGuess=[];
let numofguesses=1;
let playGame=true;

if(playGame){
    submitbtn.addEventListener('click', function(e){
        e.preventDefault();
        const guess= parseInt(userinput.value) 
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){

    if(isNaN(guess) || guess < 0 || guess>100){
        alert('enter a valid number');
    }
    else{
        prevGuess.push(guess);
        if(numofguesses>=11){
            displayGuess(guess);
            displayMessage(`game over , the random number was ${ran}`);
            endgame();
        }
        else{
            displayGuess(guess);
            checkguess(guess);
        }
    }

}

function checkguess(guess){
    if(guess === ran){
        displayMessage('you guessed it right');
    }
    else if(guess<ran){
        displayMessage('guess is too small');
    }
    else{
        displayMessage('guess is too large');
    }
}

function displayGuess(guess){
    userinput.value='';
    guessSlot.innerHTML += `${guess}  `;
    numofguesses++;
    remaining.innerHTML=`${11-numofguesses}`;

}

function displayMessage(message){
    loworhigh.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    start.appendChild(p);
    playGame=false;
    newgame();
}

function newgame(){
     const newgamebutton=document.querySelector('#newGame');
     newgamebutton.addEventListener('click',function(e){
        const ran= parseInt(Math.random()*100 +1);
        prevGuess=[]
        numofguesses=1;
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numofguesses}`;
        userinput.removeAttribute('disabled');
        start.removeChild(p);

        playGame=true;

     }) 

}