
var array = ["Banana", "Apples", "Orange", "Blueberries"];


// 1. Remove the banana from the array
	//You can use "array.shift();" to delete the leftmost array
	array.splice(0, 1);

// 2. Sort the array in order.
	array.sort();

// 3. Put "Kiwi" at the end of the array.
	array.push("Kiwi");

// 4. Remove "Apples" from the array.
	array.splice(0, 1);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
	array.reverse();

