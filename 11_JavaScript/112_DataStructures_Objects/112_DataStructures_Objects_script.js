

// An example of object
var user = {
	name		: "Josh",
	age			: 34,
	hobby		: "Soccer",
	isMarried	: false,

};

// How to grab attributes
//	VARNAME.ATTRIBUTES
	user.name;
	user.age;
	user.hobby;
	user.isMarried;


// How to concatenate in Object
	user.favouriteFood = "Spinach";


// How to change object
	user.isMarried = true;


/*

NOTES	: 
So if you think of a game for example, lets say you are controlling a wizard. How tall the 
wizard is , how many experience point, how many levels.. etc, would be really good to put
in a object because that wizard is an object because we need properties (String) and values
(int)

But lets say the spells could be a an array/list, because it only contain a string of spells
for the wizard

*/


// An object with an Array
var wizard01 = {
	name		: "Gandalf",
	age			: 999,
	hobby		: "Spellcasting",
	isMarried	: false,
	spless		: ["Abakadabara", "BOOOO!", "Begone !", "Shazam!"]

};

// An array of objects
var list = [
	{
		username 	: "Andy",
		password	: "12345"
	},
	{
		username	: "Jess",
		password	: "wasd"
	},
	{
		username	: "Gilbert",
		password	: "qwerty"
	}
];

	// How acces it
	// An object with an array 	: list.spells[1];
	// An array of objects		: list[0].password;


// An object with an function
var wizard02 = {
	name		: "Gandalf",
	age			: 999,
	hobby		: "Spellcasting",
	isMarried	: false,
	spless		: ["Abakadabara", "BOOOO!", "Begone !", "Shazam!"],
	shout 		: function(){
					console.log("YEEE SHALL NOT PASS");
					}

};

	// How acces it
	// An object with a function 	: wizard02.shout();



/*

NOTES	: 
Console.log() is an object since it contained various "method" that can be called upon
such as console.info(), console.error();. Methods are functions inside an object

Object and Array can be empty FYI, and it consist null (A data type)

*/
