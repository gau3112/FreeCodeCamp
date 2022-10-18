let main = document.querySelector('main');
let colorDetail = document.querySelector('.color-detail');
let clickMe = document.querySelector('.btn');
let navBtn = document.querySelector('.nav-btn');

function generateRandomColors(){
    let maxValue = 0xFFFFFF;
    let randomColor = Math.floor(Math.random()*maxValue);
    randomColor = randomColor.toString(16);
    main.style.backgroundColor = '#'+randomColor;
    colorDetail.innerHTML = `#${randomColor.toUpperCase()}`;
}

clickMe.addEventListener('click',generateRandomColors);
navBtn.addEventListener('click',(e)=>{
    main.style.backgroundColor = `#F1F5F8`;
    colorDetail.innerHTML = `#F1F5F8`;
})