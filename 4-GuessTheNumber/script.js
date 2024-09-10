// Math.random() * (max - min+1) + min.
const num=parseInt(Math.random()*( 100 - 1 + 1 ) + 1);
// console.log(num);

const form=document.querySelector('.form');
const result=document.querySelector('.lowOrHi');

let counter=10;
let prevGuess=[];
form.addEventListener('submit',
    (event) => {
        event.preventDefault();
        if(counter!=0) {
            const n=parseInt(document.querySelector('#guessField').value);
            if(n === num){
                result.innerHTML="<b>Congratulations!!! Number Found</b>";
            }
            else if(!n){
                result.innerHTML="Wrong Input";
            }
            else{
                prevGuess.push(n);
                counter--;
                document.querySelector('.guesses').innerHTML=prevGuess;
                document.querySelector('.lastResult').innerHTML=counter;

                if(n<num){
                    result.innerHTML="Small Number";
                }
                else {
                    result.innerHTML="Large Number";
                }
            }
        }
        else{
            result.innerHTML="No Guesses Left";
        }
    }
);