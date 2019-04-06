

/*  Ternary Operator
	Condition ? expression1 : expression2;
*/

function isUserValid(bool){
	return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied !"

var automatedAnswer = 
	"Your account number is " + (isUserValid(false) ? "102400" : "No Available");








/*  Switch Operator
	switch(variable){
		case:
			break;
		case:
			break;
		default:
	}
*/

	function moveCommand(direction){
		var whatHappens;
		switch(direction){
			case "Forward":
				whatHappens = "You encounter a monster !!";
				break;
			case "Backward":
				whatHappens = "You arrived at home";
				break;
			case "Right":
				whatHappens = "You found a river";
				break;
			case "Left":
				whatHappens = "You run into a troll !";
				break;
			default:
				whatHappens == "Please enter a valid direction :D";
		}
		return whatHappens;
	}