


	ECMA Internation

	ECMAScript == JavaScript

	- Use babel to compile next-gen javascript


// Let + Const

	const player = "Bobby";
	let experience = 100;
	let wizardLevel = false;


		if(experience > 90){
			let wizardLevel = true;
			console.log('Inside', wizardLevel);
		}

		console.log('Outside', wizardLevel);



// Destructor

	const obj = {
		player: "Bobby";
		experience: 100;
		wizardLevel: false;
	} 

	const player = obj.player;
	const experience = obj.experience;
	let wizardLevel = obj.wizardLevel;

	const{ player, experience} = obj;
	let{ wizardLevel } = obj;




// Object properties

	const name = "John Snow"
	const obj {
		[Name]: "Hello",
		["Ray" + "Smith"]: "Hihi"
	}


// Template strings

	const name = "Sally";
	const age = 34;
	const pet = "Horse"

	const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;


// Default Arguments

	function greet(name='Unkown', age=30, pet="Cat"){
		return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
	}

// Symbol

	var sym1 = Symbol();
	var sym2 = Symbol("Foo");
	var sym3 = Symbol("Foo");


// Arrow functions

	functions add(a, b){
		return a+b;
	}

	const addWithArrow = (a,b) => {
		return a + b;
	}

















