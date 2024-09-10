// Math.random() * (max - min+1) + min.
let num=parseInt(Math.random()*( 100 - 1 + 1 ) + 1);
// console.log(num);

const form=document.querySelector('.form');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let numGuess=1;
let prevGuess=[];

let playGame=true;

if(playGame){
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        let n=parseInt(userInput.value);

        validateGuess(n)
    });
}

function validateGuess(guess) {
    // GUESS LIES IN RANGE AND IS A NUMBER
    if(isNaN(guess)) alert("Please Enter a Valid Number");
    else if(guess < 1) alert("Please Enter a Valid Number");
    else if(guess > 100) alert("Please Enter a Valid Number");
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${num}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    //UPDATE lowOrHi
    if(guess === num){
        displayMessage("CONGRATULATIONS !!! You Win.");
        endGame();
    }
    else if(guess<num){
        displayMessage("Number is too low");
    }
    else{
        displayMessage("Number is too large");
    }
}

function displayGuess(guess) {
    //Update PreviousGuess, Guess Remaining and Clean input
    userInput.value='';
    guessSlot.innerHTML+= `${guess} `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message) {
    //Display messages in lowOrHi
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame() {
    userInput.value='';
    // PREVENT user to ENTER VALUE
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    p.style.border="2px solid black";
    p.style.borderRadius="5px";
    p.style.boxShadow="2px 2px 2px 2px black";
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame() {
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click', (event) => {
        num=parseInt(Math.random()*( 100 - 1 + 1 ) + 1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML="";
        remaining.innerHTML="10";
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    });
}