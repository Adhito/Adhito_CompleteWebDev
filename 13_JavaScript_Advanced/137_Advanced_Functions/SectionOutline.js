

/* Closures - a function ran. The function executed and It's never 
	going to execute again. BUT it's going to remember that there are
	references to those variables so the child scope always has 
	access to the parent scope

	CHILDREN always have access to their parent scope , but PARENT does 
	not have access to children scope
*/


const first = () => {
	const greet = "Hi"
	const second() => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();






/* Currying - is the process of converting a function that takes multiple arguments
	into a function that takes them one at a time. This is to achieve more extensible (?)
*/

const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);

// MORE EXTENSIBLE VER
//const multiplyByFive = curriedMultiply(5)(PARAMETER);
const multiplyByFive = curriedMultiply(5);

/* RESULT FROM CONSOLE

	const multiplyByFive = curriedMultiply(5);
	undefined
	multiplyByFive(1)
	5
	multiplyByFive(3)
	15
	multiplyByFive(4)
	20
	multiplyByFive(5)
	25
*/




/* Compose - the act of putting two functions together to form a third function, where the
	output of one function is the input of the other. WHAT THE HELL IS THIS(?)
*/

const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;

compose(sum, sum)(5);


/* RESULT FROM CONSOLE

	const compose = (f,g) => (a) => f(g(a));
	const sum = (num) => num + 1;

	compose(sum, sum)(5);
	7
*/

/* NOTE : Avoid Side Effects , And have Functional Purity 
	(Refer to the course -> Section Advanced Javascript -> 137 Advanced Functions -> 15:30)
*/




















//