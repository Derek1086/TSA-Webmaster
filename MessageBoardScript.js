function addMessage() {
	document.getElementById("add-message").style.display = "block";
	document.getElementById("message-page").style.display = "none";
}

function submit() {
	var comments = document.getElementById("comment").value;
	var subject = document.getElementById("subject").value;
	var name = document.getElementById("name").value;
	
	var table = document.getElementById("message-board");
	var row = table.insertRow(1);
	var cell = row.insertCell(0);
	if(subject !== "null")
		cell.innerHTML = "<h2>" + name + "</h2>" +
			"<h3>" + subject "</h3>" +
			"<p>" + comment + "</p>";
	else
		cell.innerHTML = "<h2>" + name + "</h2>" +
			"<p>" + comment + "</p>";
		
	/*Enter value into the message board
		name: in bold and on top
		subject title??
		comment: normal text underneath
	*/
	viewBoard();
}

function viewBoard() {
	document.getElementById("message-page").style.display = "block";
	document.getElementById("add-message").style.display = "none";
}

window.onload = function() {
	document.getElementById("btn").addEventListener("click", addMessage);
	document.getElementById("view").addEventListener("click", viewBoard);
	document.getElementById("btn").addEventListener("click", submit);
}

function submit(e) {
	var fName = document.getElementById("firstName").value;
	var lName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	
	var table = document.getElementById("allData");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	cell1.innerHTML = fName;
	
	var cell2 = row.insertCell(1);
	cell2.innerHTML = lName;
	
	var cell3 = row.insertCell(2);
	cell3.innerHTML = email;
}

function submit2() {
	alert("You have ordered tickets to Hogwarts. It cost $100,000. Have fun!!");
}