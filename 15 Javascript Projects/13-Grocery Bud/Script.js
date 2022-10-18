let submitButton = document.querySelector('.submitBtn');
let inputData = document.querySelector('.getInput');
let list = document.querySelector('.list');
let alert = document.querySelector('.alert');
submitButton.addEventListener('click',function(e){
    e.preventDefault();
    let text = inputData.value;
    if (text===''){
        alert.innerHTML = `CANNOT ADD EMPTY TASK`;
        alert.classList.remove('hide');
        setTimeout(function(){
            alert.classList.add('hide');
        },800);
        return;
    }
    let childNode = list.appendChild(document.createElement('li'));
    childNode.classList.add('list-item');
    childNode.innerHTML = `<div class="item">
    <span class="task">${text}</span>
    <span class="icon"><button type="submit" class="dlt">Delete</button></span>
</div>`
    alert.innerHTML = `ITEM ADDED`;
    alert.classList.remove('hide');
    setTimeout(function(){
        alert.classList.add('hide');
    },800);

    let dltBtns = document.querySelectorAll(".dlt");
    dltBtns.forEach(function(item){
    item.addEventListener('click',function(){
        let parent = item.parentNode.parentNode.classList.add('hide');
        console.log(parent);
    })
})

})

