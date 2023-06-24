let [second, minute, hour] = [0,0,0];
let timeface = document.getElementById("time-face");
let timer = null;

function stopwatch(){
  second++;
  if(second > 59){
    minute++;
    second = 0;
    if(minute > 59){
      hour++;
      minute = 0;
    }
  }

  let h = hour < 10 ? "0"+hour : hour;
  let m = minute < 10 ? "0"+minute : minute;
  let s = second < 10 ? "0"+second : second;
  timeface.innerHTML = h+ " : " + m + " : " + s;

}

function start(){
  if(timer !== null){
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000)
}

function pause(){
  clearInterval(timer);
}

function stop(){
  clearInterval(timer);
  [second, minute, hour] = [0,0,0];
  timeface.innerHTML = "00 : 00 : 00";
}

let flagidx = 1;

var table = document.getElementById("flagtable");
var button = document.getElementById("flg");

    // Add event listener to the button
    button.addEventListener("click", function() {
        // Create a new row element
        var newRow = document.createElement("tr");

        // Create a new cell element
        var newCell = document.createElement("td");

        // Set the cell content
        let h = hour < 10 ? "0"+hour : hour;
        let m = minute < 10 ? "0"+minute : minute;
        let s = second < 10 ? "0"+second : second;
        newCell.textContent = flagidx +".  " + h+ " : " + m + " : " + s;
        flagidx++;

        // Append the cell to the row
        newRow.appendChild(newCell);

        // Append the row to the table
        table.appendChild(newRow);
    });

var reset = document.getElementById("resetbtn");
reset.addEventListener("click", function() {
  // Remove all rows except the first one
  while (table.rows.length > 0) {
      table.deleteRow(1);
  }
  flagidx = 1;
});