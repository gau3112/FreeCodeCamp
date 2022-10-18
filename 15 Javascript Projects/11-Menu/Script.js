let allBtn = document.getElementById('all');
let bfastBtn = document.getElementById('breakfast');
let dinBtn = document.getElementById('dinner');
let shakeBtn = document.getElementById('shake');
let lunchBtn = document.getElementById('lunch');


let all = document.querySelectorAll('.item-container');
let bfast = document.querySelectorAll('.b-fast');
let lunch = document.querySelectorAll('.l-unch');
let dinner = document.querySelectorAll('.d-inner');
let shake = document.querySelectorAll('.s-hake');

allBtn.addEventListener('click',function(){
    all.forEach(function(item){
        item.classList.remove('hide');
    })
})

bfastBtn.addEventListener('click',function(){
    all.forEach(function(item){
        item.classList.add('hide');
    })
    bfast.forEach(function(item){
        item.classList.remove('hide')
    })
})

dinBtn.addEventListener('click',function(){
    all.forEach(function(item){
        item.classList.add('hide');
    })
    dinner.forEach(function(item){
        item.classList.remove('hide')
    })
})

lunchBtn.addEventListener('click',function(){
    all.forEach(function(item){
        item.classList.add('hide');
    })
    lunch.forEach(function(item){
        item.classList.remove('hide');
    })
})

shakeBtn.addEventListener('click',function(){
    all.forEach(function(item){
        item.classList.add('hide');
    })
    shake.forEach(function(item){
        item.classList.remove('hide');
    })
})