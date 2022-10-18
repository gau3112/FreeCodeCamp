let list = document.querySelectorAll('.list');
let questionList = document.querySelectorAll('.question');
list.forEach(function(listItem){
    let expand = listItem.querySelector('.icon');
    expand.addEventListener('click',function(e){
        let parent = expand.parentNode;
        questionList.forEach(function(question){
            if (question!== parent){
                console.log('yes');
                parent.nextElementSibling.className ="hidden";
                console.log(parent.nextElementSibling.className);
            }else{
                console.log('No');
                parent.nextElementSibling.className ="show";
                console.log(parent.nextElementSibling.className);   
            }
        })
        
    })
})
