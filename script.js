
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var interval;
var time = 0.001;
var sec = 00;
var min = 00;
var hr = 00;

function timeFormat(js, html) {
    if(js < 10) {
        html.innerHTML = '0' + js;
    } else {
        html.innerHTML = js;
    }
}

function start(){
    clearInterval(interval);
    interval = setInterval(function(){
        if(sec < 59){
            sec++;
            timeFormat(sec, seconds);
        } else {
            sec = 00;
            if(min < 59) {
                min++;
                timeFormat(min, minutes);
            } else {
                min = 00;
                if(hr < 59) {
                    hr++;
                    timeFormat(hr, hours);
                } else {
                    seconds.innerHTML = "59";
                    minutes.innerHTML = "59";
                    hours.innerHTML = "59";
                    sec = 0;
                    min = 0;
                    hr = 0;
                }
            }
        }
    }, time);
}

function pause() {
    clearInterval(interval);
    console.log("Cronômetro pausado")
}

function reset(){
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
    sec = 0;
    min = 0;
    hr = 0;
    clearInterval(interval);
}