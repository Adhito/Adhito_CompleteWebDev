

/* Reference type	--	Where the value of the object are defined by the
						programmer. Object 2 reference to Object 1 so whenever
						value of object 1 is changed it also change the value 
						of object 2

*/
var object 1 = { value: 10};
var object 2 = object1;
var object 3 = { value: 10};






/* Context			--	It is similar to scope, but context tells you where we 
						are within the object(This).

*/
const object4 = {
	a:	function() {
		console.log(this);
	}
}





/* Instantiation	--	Is when you make a copy of an object and reuse the 
						code. Making instances or multiple copies of an object. 

*/
class Player {
	constructor(name, type){
		this.name = name;
		this.type = type;
	}

	introduce(){
		console.log(`Hi i am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player{
	constructor(name, type){
		super(name, type)
		// Use super so that you essentially have a acces to the class Player
	}

	play(){
		console.log(` HARRY YOU'RE A ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
const wizard3 = new Wizard('Harry', 'Wizard');










