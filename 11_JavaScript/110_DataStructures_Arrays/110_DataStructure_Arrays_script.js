
// An Array of animals
var list = ["Tiger", "Cat", "Bear", "Bird"];
console.log(list[0]);
console.log(list);

// An Array of Numbers
var numbers = [1,2,3,4,5];
console.log(numbers);


// An Array of Functions
var functionList = [function apple(){
	console.log("Apple");
}]

// An Array of Boolean
var boolList = [true, false, true, true];
	console.log(boolList);


// An Array of mixed list
// Not advised when using arrays with different types since it might causes performances issue
var mixedList = ["Apple", 3, undefined, true, function apple(){console.log("Apples");}]


// An Array within an  Array
var arrayInArray = [
	["Tiger", "Cat", "Bear", "Bird"],
	[true, false, true, true],
	[1,2,3,4]
	];
	console.log(arrayInArray[0][3]);




// NOTE: Built in functions
	// 1. VARNAME.shift();
	// 2. VARNAME.pop();
	// 3. VARNAME.push(argument);
	// 4. VARNAME.concat();
	// 	var VARNAME = NewVarname.concat(Argument);
	// 5. VARNAME.sort();


// NOTE: When coding Javascript you can reference to www.w3schools.com , since you 
// 		 really dont have to memory every single built-in function
