function displayTime(){
    var datetime = new Date();
    var hrs = datetime.getHours();
    var mins = datetime.getMinutes();
    var secs = datetime.getSeconds();

    if(hrs > 12){
        document.getElementById("sess").innerHTML = "PM";
        hrs = hrs - 12;
    }
    else{
        document.getElementById("sess").innerHTML = "AM";
    }

    if(hrs === 0){
        hrs = 12;
    }

    let h = hrs < 10 ? "0"+hrs : hrs;
    let m = mins < 10 ? "0"+mins : mins;
    let s = secs < 10 ? "0"+secs : secs;

    document.getElementById("hr").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("sec").innerHTML = s;
}

setInterval(displayTime,10);