var hh = 0;
var mm = 0;
var ss = 0;
let timeface = document.getElementById("timeface");
let timer = null;


document.getElementById("startBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent link behavior

    // Retrieve the input values
    var hourInput = document.getElementById("hr").value;
    var minuteInput = document.getElementById("min").value;
    var secondInput = document.getElementById("sec").value;

    // Store the input values in variables
    if(hourInput >= 0){
        hh = parseInt(hourInput);
    }
    if(minuteInput >= 0){
        mm = parseInt(minuteInput);
    }
    if(secondInput >=0){
        ss = parseInt(secondInput);
    }
});

function stopwatch(){
    if(isNaN(hh)){
        hh = 0;
    }
    if(isNaN(mm)){
        mm = 0;
    }
    if(isNaN(ss)){
        ss = 0;
    }

    if(hh === 0 && mm === 0 && ss === 0){
        alert("Time's UP");
        stop();
    }
    else{
        ss--;
        if(ss < 0){
            mm--;
            ss = 59;
            if(mm < 0){
                hh--;
                mm = 59;
            }
        }
    }
  
    let h = hh < 10 ? "0"+hh : hh;
    let m = mm < 10 ? "0"+mm : mm;
    let s = ss < 10 ? "0"+ss : ss;
    timeface.innerHTML = h+ " : " + m + " : " + s;
}

function start(){
    if(timer !== null){
      clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
    
}

function stop(){
    clearInterval(timer);
    ss = 0;
    hh = 0;
    mm = 0;
    timeface.innerHTML = "00 : 00 : 00";
    document.getElementById("hr").value = "";
    document.getElementById("min").value = "";
    document.getElementById("sec").value = "";
  }