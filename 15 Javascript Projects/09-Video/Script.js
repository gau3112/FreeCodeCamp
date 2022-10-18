let switchBtn = document.querySelector('.btn');
let switchCase = document.querySelector('.play');
let video = document.querySelector('video');
let videoStatus = true;
switchBtn.addEventListener('click',function(){
    if (videoStatus){
        video.pause();
        videoStatus = false;
        switchCase.classList.remove('pause');
        switchCase.classList.add('play');
    }
    else{
        video.play();
        videoStatus = true;
        switchCase.classList.remove('play');
        switchCase.classList.add('pause');
    }
});