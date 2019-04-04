

function printA(){
	var a = "Hellow";
	console.log();
}

/* Console must be inside the function print A, because variable
	a only live within the scope of function printA */



var a = "Can i acces this ?"

function printA(){
	var a = "Hellow";
	console.log();
}

/* A is accesible since it is a global variable, and keeps printing
	"Hellow" since it is only active on the scope of function printA*/


// Root Scope (Window)
	var fun = 5;

	function funFunction(){
		//Child Scope
		var fun = "Hellow";
		console.log(1, fun);
	}

	function funerFunction(){
		//Child Scope
		var fun = "Byeee";
		console.log(2, fun);
	}

	function funestFunction(){
		//Child Scope
		fun = "AHHHHH";
		console.log(3, fun);
	}


	console.log("window", fun);
	funFunction();
	funerFunction();
	funestFunction();

/**/