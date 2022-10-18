let sec = document.getElementById('secs');
let min = document.getElementById('mins');
let hr = document.getElementById('hrs');
let day = document.getElementById('days');


var countDownDate = new Date("June 15, 2023 00:00:00").getTime();

var x = setInterval(function(){
    var todayTime = new Date().getTime();
    var difference = countDownDate - todayTime;
    if (difference < 0){
        var days = 0;
        var hours = 0;
        var minutes = 0;
        var seconds = 0;
    }else{
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    }
    day.innerHTML = `${days}`;
    hr.innerHTML = `${hours}`;
    min.innerHTML = `${minutes}`;
    sec.innerHTML = `${seconds}`;

},1000);
