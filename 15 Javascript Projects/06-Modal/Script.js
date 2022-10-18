let body = document.querySelector('body');
let opnModalBtn = document.querySelector('.open-modal');
let clsModalBtn = document.querySelector('.cross');

opnModalBtn.addEventListener('click',function(){
    console.log("open model");
    body.classList.add('show-modal-content')
    body.classList.remove('hide-modal-content');
});

clsModalBtn.addEventListener('click',function(){
    console.log("close model");
    body.classList.remove('show-modal-content');
    body.classList.add('hide-modal-content');
});