var board = new Array(9);
for(var j = 0; j < 9; j++)
{
		board[j] = new Array(9);
}

// Getting data from a local file
board = unsolved[1];

// Board design
var display = document.getElementById("board");
for(var i = 0; i < 9;i++)
{
	for(var j = 0; j < 9; j++)
	{
		var cell = document.createElement("input");
		display.appendChild(cell);
		cell.setAttribute('type', 'text');
		if(board[i][j] > 0) {
			cell.setAttribute('value', board[i][j]);
			cell.readOnly = true;
		}
		cell.setAttribute('class', 'field');
		cell.setAttribute('id', parseInt(j)+parseInt(i*9));
		cell.addEventListener("keypress", play); 	
	}
}


// Timmer Function
var sec = 0;
var min = 0;
var hours = 0;
var timmer = document.getElementById("timmer");
// console.log(timmer);
setInterval(function() {
	sec++;

	if(sec > 60) {
		min++;
		sec = 0;
	}

	if(min > 60) {
		hours++;
		min = 0;
	}
		
	var txt = "<h2>Time Consumed:</h2><br/><h3>" 
							+ parseInt(hours/10) + "" + hours%10 + ":" 
							+ parseInt(min/10) + "" + min%10 + ":" 
							+ parseInt(sec/10) + "" + sec%10 
							+ "</h3>";

	timmer.innerHTML = txt;
}, 1000);


function play(e) {
	var input = e.key;
	var id = this.id;

	var row = parseInt(id/9);
	var col = parseInt(id%9);

	board[row][col] = input%10;
	console.table(board);
	
	this.value = "";
}