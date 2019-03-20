var board = [["", "", "", "", "", "", ""],
			 ["", "", "", "", "", "", ""],
			 ["", "", "", "", "", "", ""],
			 ["", "", "", "", "", "", ""],
			 ["", "", "", "", "", "", ""],
			 ["", "", "", "", "", "", ""]];

function hello() {
	console.log("Hello, world!");
}

function printboard(board) {
	var height = board.length;
	var width = board[0].length;
	for(var i = 0; i < height; i++) {
		var line = "";
		for(var j = 0; j < width; j++) {
			line += board[i][j];
		}
		console.log(line);
	}
}

function play(column, player) {
	console.log(column);
	if(column > board[0].length) {
		console.log("Illegal move!");
		return false;
	}

	for(var i = board.length - 1; i >= 0; i--) {
		if(board[i][column] === "") {
			board[i][column] = player;
			console.log("Made move!");
			var cell = document.getElementById("" + i + column);
			if(cell !== null) {
				//cell.innerHTML = board[i][column];
				if(player === 1) {
					cell.id = "player";
				}
				else {
					cell.id = "cpu";
				}
			}
			return true;
		}
	}
	console.log("Illegal move!");
	return false;
}

var table = document.getElementById("tab");
for(var j = 0; j < 6; j++) {
	var row = table.insertRow(-1);
	row.id = j;
	for(var i = 0; i < 7; i++) {
		var cell = row.insertCell();
		cell.id = "" + j + i;
		cell.innerHTML = board[j][i];
	}	
}

var t = document.getElementById("bt");
var buttonrow = table.insertRow(-1);
for(var i = 0; i < 7; i++) {
	var cell = buttonrow.insertCell();
	var btn = document.createElement('input');
	const j = i;
	btn.type = "button";
	btn.className = "btn";
	btn.value = "-x-";
	btn.addEventListener("click", function() {
		play(j, 1);
		play(Math.floor(Math.random() * 7), 2)});
	cell.appendChild(btn);
}