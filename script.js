function navFunc() {
	var x = document.getElementById("menu-bar");
	if(x.className === "nav")
		x.className += "responsive";
	else 
		x.className = "nav";
}

window.onload = function() {
	document.getElementById("menu-bar").className = "nav";
}