const getNumber= Math.random() *20;
const luckyNumber=Math.floor(getNumber);
console.log(luckyNumber);
let score=5;
const input = document.getElementById("guessing");
const button = document.getElementById("check");
const msg = document.getElementById('message');
const main = document.querySelector('main');
const scoreEl = document.getElementById('score');
const again = document.getElementById('again');
scoreEl.textContent = score;
function gInput()
{
    const userGuess= Number(input.value);
    if (luckyNumber == userGuess){
    msg.textContent='You are right on';
    main.style.backgroundColor ='green';
    }
    else{
        main.style.backgroundColor='red';
        score=score-1;
        
        if (score <=0){
            msg.textContent='You lost the game';
            button.disabled=true;
            return;
        }
        scoreEl.textContent=score;
        if(luckyNumber > userGuess)
        msg.textContent='Your number is too low';
        else
        msg.textContent="Your number is too high";
    }
}
button.addEventListener('click', gInput);


