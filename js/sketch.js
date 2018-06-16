// Getting data from a local file
var board = unsolved[1];

var display = document.getElementById("board");

for (var l = 0; l < 9; l += 3) {
  for (var k = 0; k < 9; k += 3) {

    var box = document.createElement("div");
    box.setAttribute("class", "box");
    for (var i = 0; i < 3; i++) {
      for (var j = k; j < k + 3; j++) {
        var cell = document.createElement("input");

        if (board[i][j] > 0) {
          cell.setAttribute("value", board[i][j]);
          cell.readOnly = true;
        }

        cell.setAttribute("type", "text");
        cell.setAttribute("class", "field");
        cell.setAttribute("id", parseInt(j) + parseInt(i * 9));
        cell.addEventListener("keydown", play);

        box.appendChild(cell);
      }
    }
    display.appendChild(box);
  }
}

// Timmer Function
var sec = 0;
var min = 0;
var hours = 0;
var timmer = document.getElementById("timmer");
// console.log(timmer);
setInterval(function () {
  sec++;

  if (sec > 60) {
    min++;
    sec = 0;
  }

  if (min > 60) {
    hours++;
    min = 0;
  }

  var txt =
    "<h2>Time Consumed:</h2><br/><h3>" +
    parseInt(hours / 10) +
    "" +
    hours % 10 +
    ":" +
    parseInt(min / 10) +
    "" +
    min % 10 +
    ":" +
    parseInt(sec / 10) +
    "" +
    sec % 10 +
    "</h3>";

  timmer.innerHTML = txt;
}, 1000);