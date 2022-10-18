let pg = document.querySelector('.paragraphs');
let pgraphArray = pg.querySelectorAll('p');
let submit = document.querySelector('.generate');

submit.addEventListener('click',function(e){
    e.preventDefault()
    let input = document.querySelector('.no-of-pages').value;
    if (input>=10 || input<0){
        input = 1;
    }
    pgraphArray.forEach(function(item){
        item.classList = ""
    })
    pgraphArray.forEach(function(item,index){
        let temp = index+1;
        if (temp>input){
            item.classList.add('hide');
        }
    })
})



