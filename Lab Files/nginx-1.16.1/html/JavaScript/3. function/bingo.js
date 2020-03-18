window.onload = initAll;

function initAll() {
	if (document.getElementById) {
		document.getElementById("pick").onclick = displayNumber;
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}

function displayNumber() {

	var number = generateNumber();

	// document.getElementById("number").innerHTML = "the next Bingo Number is:" + number;

	document.getElementById("number").innerHTML = "the next Bingo Number is:" + number[0] + "-" + number[1];


}

function generateNumber() {
	// return Math.floor(Math.random()*100) + 1 ;

	var columnLabel = new Array("B", "I", "N", "G", "O");
	
	//to get the letter from the array............
	var columnIndex = Math.floor(Math.random()*5);

	var newNum = Math.floor(Math.random()*15) + 1 + (columnIndex * 15);

	return new Array(columnLabel[columnIndex], newNum);
}
