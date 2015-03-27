// JavaScript Document switch.js

function onSwitchWord(obj) {
	var iD = obj.getAttribute("id");
	var lineID = new Array(9);
	lineID[0] = "A";
	lineID[1] = "Ka";
	lineID[2] = "Sa";
	lineID[3] = "Ta";
	lineID[4] = "Na";
	lineID[5] = "Ha";
	lineID[6] = "Ma";
	lineID[7] = "Ya";
	lineID[8] = "Ra";
	lineID[9] = "Wa";
	for(i = 0; i < lineID.length; i++){
		document.getElementById("btn_Line" + lineID[i]).className = "";
		document.getElementById("Line" + lineID[i]).style.display = "none";
	}
	
	document.getElementById("btn_" + iD).className = "select";	
	document.getElementById(iD).style.display = "";
}

function onSwitchSoukoKind(obj) {
	var iD = obj.getAttribute("id");
	var soukoID = new Array(2);
	soukoID[0] = "farm";
	soukoID[1] = "marine";
	soukoID[2] = "suger";
	for(i = 0; i < soukoID.length; i++){
		document.getElementById("btn_" + soukoID[i]).className = "";
		document.getElementById(soukoID[i]).style.display = "none";
	}
	
	document.getElementById("btn_" + iD).className = "select";	
	document.getElementById(iD).style.display = "";
}

function onSwitchItem(obj){
	var iD = obj.getAttribute("id");
	for(i = 1; i < 8; i++){
		document.getElementById("btn_item" + i).className = "";
		document.getElementById("item" + i).style.display = "none";
	}
	
	document.getElementById("btn_" + iD).className = "select";	
	document.getElementById(iD).style.display = "";
}

function onSwitchItem8(obj){
	var iD = obj.getAttribute("id");
	for(i = 1; i < 9; i++){
		document.getElementById("btn_item" + i).className = "";
		document.getElementById("item" + i).style.display = "none";
	}
	
	document.getElementById("btn_" + iD).className = "select";	
	document.getElementById(iD).style.display = "";
}

function onSwitchItem7(obj){
	var iD = obj.getAttribute("id");
	for(i = 1; i < 8; i++){
		document.getElementById("btn_item" + i).className = "";
		document.getElementById("item" + i).style.display = "none";
	}
	
	document.getElementById("btn_" + iD).className = "select";	
	document.getElementById(iD).style.display = "";
}

function onSwitchItem3(obj){
	var iD = obj.getAttribute("id");
	for(i = 1; i < 4; i++){
		document.getElementById("btn_item" + i).className = "";
		document.getElementById("item" + i).style.display = "none";
	}
	
	document.getElementById("btn_" + iD).className = "select";	
	document.getElementById(iD).style.display = "";
}