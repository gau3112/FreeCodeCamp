let decButton = document.querySelector('.decrease');
let resetButton = document.querySelector('.reset');
let incButton = document.querySelector('.increase');

let counterText = document.querySelector('.counter');
let currCount = 0;

function Negative(currCount){
    if (currCount < 0){
        counterText.classList.add("negative");
    }else{
        counterText.classList.remove("negative");
    }
}
function increaseCounter(){
    currCount+=1;
    Negative(currCount);
    counterText.innerHTML = `${currCount}`;
}

function decreaseCounter(){
    currCount-=1;
    Negative(currCount);
    counterText.innerHTML = `${currCount}`;
}

function resetCounter(){
    currCount = 0;
    counterText.classList.remove("negative");
    counterText.innerHTML = `${currCount}`;
}

decButton.addEventListener('click',decreaseCounter);
incButton.addEventListener('click',increaseCounter);
resetButton.addEventListener('click',resetCounter);