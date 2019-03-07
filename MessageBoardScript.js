function addMessage() {
	document.getElementById("add-message").style.display = "block";
	document.getElementById("message-page").style.display = "none";
}

function submit() {
	var t = new Date();
	var comment = document.getElementById("comment").value;
	var subject = document.getElementById("subject").value;
	var name = document.getElementById("name").value;
	
	var table = document.getElementById("message-board");
	var row = table.insertRow(1);
	var cell = row.insertCell(0);
	if(subject !== "null")
		cell.innerHTML = "<h2 class='new'>" + name + "</h2>" +
			"<h3 class='new'>" + subject + "</h3>" +
			"<p class='new'>" + comment + "</p>";	
	else 
		cell.innerHTML = "<h2 class='new'>" + name + "</h2>" +
			"<p class='new'>" + comment + "</p>";	
	localStorage.setItem(name, subject + "\n" + comment);
		
	document.getElementById("message-page").style.display = "block";
	document.getElementById("add-message").style.display = "none";
}

function viewBoard() {
	document.getElementById("message-page").style.display = "block";
	document.getElementById("add-message").style.display = "none";
}

window.onload = function() {
	Object.keys(localStorage).forEach(function(key){
		var table = document.getElementById("message-board");
		var row = table.insertRow(1);
		var cell = row.insertCell(0);
		var name = key;
		var sc = localStorage.getItem(key).split("\n");
		var comment = sc[1];
		var subject = sc[0];
		if(subject !== "null")
			cell.innerHTML = "<h2 class='new'>" + name + "</h2>" +
				"<h3 class='new'>" + subject + "</h3>" +
				"<p class='new'>" + comment + "</p>";
		else 
			cell.innerHTML = "<h2 class='new'>" + name + "</h2>" +
			"<p class='new'>" + comment + "</p>";
	});
	document.getElementById("menu-bar").className = "nav";
}
function navFunc() {
	var x = document.getElementById("menu-bar");
	if(x.className === "nav")
		x.className += "responsive";
	else 
		x.className = "nav";
}
