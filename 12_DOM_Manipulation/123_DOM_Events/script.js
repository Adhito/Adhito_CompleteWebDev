
/*
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	console.log("Click !!!");
});

*/

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");


function inputLength(){
	return input.value.length;
}

function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function addListAfterClick(){
	//console.log("Click is working !");
	if(inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event){
	//console.log(event.which);
	if(inputLength() > 0 && event.which === 13){
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);