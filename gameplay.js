function verticalMatch(board, row, col) {
	var hash = new Array(10);

	for(var i = 0; i < row; i++) {
		for(var j = 0; j < 10; j++) {
			hash[j] = 0;
		}

		for(var j = 0; j < col; j++) {
			hash[board[j][i]]++;
		}

		for(var j = 0; j < 10; j++) {
			if(hash[j] > 1) {
				return false;
			}
		}
	}

	return true;
}

function horizontalMatch(board, row, col) {
	var hash = new Array(10);

	for(var i = 0; i < row; i++) {
		for(var j = 0; j < 10; j++) {
			hash[j] = 0;
		}

		for(var j = 0; j < col; j++) {
			hash[board[i][j]]++;
		}

		for(var j = 0; j < 10; j++) {
			if(hash[j] > 1) {
				return false;
			}
		}
	}

	return true;
}


// submit function
var submit = document.getElementById("submit");
submit.addEventListener("click", checkSolved);

function checkSolved() {
	if(horizontalMatch(board, 9, 9) && verticalMatch(board, 9, 9)) console.log("WIN");
}

// quit function 
// var quit = document.getElementById("quit");