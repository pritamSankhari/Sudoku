// Getting data from a local file
var board = unsolved[1];

var display = document.getElementById("board");
var timmer = document.getElementById("timmer");
var t = new Timer();

// Timmer Function
function startTimmer() {
	setInterval(function () {
		var txt = t.show();
		timmer.innerHTML = txt;
		t.update();
	}, 1000);
}

// Board design
function createBoard() {
	for (var l = 0; l < 9; l += 3) {
		for (var k = 0; k < 9; k += 3) {

			var box = document.createElement("div");
			box.setAttribute("class", "box");
			for (var i = 0; i < 3; i++) {
				for (var j = k; j < k + 3; j++) {
					var cell = document.createElement("input");

					if (board[i + l][j] > 0) {
						cell.setAttribute("value", board[i + l][j]);
						cell.readOnly = true;
					}

					cell.setAttribute("type", "text");
					cell.setAttribute("class", "field");
					cell.setAttribute("id", parseInt(j) + parseInt((i + l) * 9));
					cell.addEventListener("keyup", play);

					box.appendChild(cell);
				}
			}
			display.appendChild(box);
		}
	}
}

function resetBoard() {
	var cells = document.getElementsByClassName("field");
	for (var i = 0; i < cells.length; i++) {
		var cell = cells[i];
		var id = cell.id;
		var row = parseInt(id / 9);
		var col = parseInt(id % 9);

		if (board[row][col]) {
			cell.value = board[row][col];
		} else {
			cell.value = " ";
		}
	}
}


function play(e) {
	var input = parseInt(e.key);
	var id = this.id;
	var row = parseInt(id / 9);
	var col = parseInt(id % 9);

	if (input) {
		board[row][col] = input;
		this.value = e.key;
	} else if (e.key === "Tab" || e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "ArrowDown") {
		// Do Nothing
		console.log(e.key + " in else if block");
	} else {
		this.value = " ";
		console.log(e.key + " in else block");
	}
}

function verticalMatch(board, row, col) {
	var hash = new Array(10);

	for (var i = 0; i < row; i++) {
		for (var j = 0; j < 10; j++) {
			hash[j] = 0;
		}

		for (var j = 0; j < col; j++) {
			hash[board[j][i]]++;
		}

		for (var j = 0; j < 10; j++) {
			if (hash[j] > 1) {
				return false;
			}
		}
	}

	return true;
}

function horizontalMatch(board, row, col) {
	var hash = new Array(10);

	for (var i = 0; i < row; i++) {
		for (var j = 0; j < 10; j++) {
			hash[j] = 0;
		}

		for (var j = 0; j < col; j++) {
			hash[board[i][j]]++;
		}

		for (var j = 0; j < 10; j++) {
			if (hash[j] > 1) {
				return false;
			}
		}
	}

	return true;
}

function boxMatch(board, row, col) {
	for (var i = 0; i < row; i += 3) {
		for (var j = 0; j < col; j += 3) {
			if (!horizontalMatch(board, i + 3, j + 3) || !verticalMatch(board, i + 3, j + 3))
				return false;
		}
	}
	return true;
}
 
function checkSolved() {
	// if (horizontalMatch(board, 9, 9) && verticalMatch(board, 9, 9) && boxMatch(board, 9, 9)) {
		alert("You Win");
		t.stop();
		var s=document.getElementById("game-time").innerHTML; //Getting time
		document.getElementById("playtime").value=s; //Setting time record
		document.getElementById("new-record-div").style.visibility="visible";
	// } else {
	// 	alert("Complete the game");
	// }
}

function reset() {
	board = unsolved[1];
	t.reset();
	t.start();
	resetBoard();
}