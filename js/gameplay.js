function play(e) {
	var input = parseInt(e.key);
	var id = this.id;
	var row = parseInt(id / 9);
	var col = parseInt(id % 9);

	if (input) {
		console.log(input);
		board[row][col] = input;
	}

	this.value = "";
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


// submit function
var submit = document.getElementById("submit");
submit.addEventListener("click", checkSolved);

function checkSolved() {
	if (horizontalMatch(board, 9, 9) && verticalMatch(board, 9, 9) && boxMatch(board, 9, 9)) console.log("WIN");
}

// quit function 
// var quit = document.getElementById("quit");