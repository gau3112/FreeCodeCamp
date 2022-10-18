let hamBurger = document.querySelector('.hamburger');
let aside = document.querySelector('aside');
function expand(){
    if (aside.classList[0]==='hidden'){
        aside.classList.add('expand');
        aside.classList.remove('hidden');
    }else{
        aside.classList.add('hidden');
        aside.classList.remove('expand');
    }
}

hamBurger.addEventListener('click',expand);