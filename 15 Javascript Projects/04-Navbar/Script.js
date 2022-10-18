let navigation = document.querySelector('nav');

window.addEventListener('resize',function(){
    addRequiredClass();
})

window.addEventListener('load',function(){
    navigation.classList.add('hidden');
    navigation.classList.remove('expand');
    addRequiredClass();
})

function addRequiredClass(){
    if (window.innerWidth < 1000){
        document.body.classList.add('mobile');
        document.body.classList.remove('desktop');
    }else{
        document.body.classList.add('desktop');
        document.body.classList.remove('mobile');
    }
}

function expandNavBar(){
    navigation.classList.add('expand');
    navigation.classList.remove('hidden');
}

function hideNavBar(){
    navigation.classList.add('hidden');
    navigation.classList.remove('expand');
}

let navBarState = "Hidden";
let hamBurger = document.querySelector('.hamburger');
hamBurger.addEventListener('click',()=>{
    console.log("Hamburger Clicked");
    if (navBarState === 'Hidden'){
        navBarState = "Expand";
        expandNavBar();
    }else{
        navBarState = "Hidden";
        hideNavBar();
    }
})