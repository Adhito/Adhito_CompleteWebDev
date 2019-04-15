// Advanced Arrays

const array = [1,2,10,16];

const double = []
const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log(double);





/* Map  --  Has a restriction on the operation , it expects to return
			an element. And then finally storing the result of each 
			invocation of the operation. In other words map transform 
			the array. Map does not have many side effects theortically
*/

const mapArray = array.map((num) => {
	return num * 2;
})

console.log('mapArray' ,mapArray);





/* Filter  --   Filter an array with a condition specified explicitly. And
				must return true or false

*/

const filterArray = array.filter((num) => {
	return num > 5;
})

console.log('filter', filterArray);







/* Reduce  --   Reduce returns a new array and takes an accumulator and a 
				number.Accumulator is a place where we can store the information
				that happens in the body of the functions.
*/

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;

}, 5) 

console.log('reduce', reduceArray);









