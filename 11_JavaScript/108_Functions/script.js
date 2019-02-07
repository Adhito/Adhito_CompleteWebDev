function sing(song){
	alert(song);
}

// sing("La dee daa");
// sing("Helloooo");


function multiply(a, b){
	c = a * b;
	alert(c);

}

var a = 1024;
var b = 1000;
 multiply(a, b);


function multiply(a,b){
 	if(a > 10 || b > 10){
 		return "Must be below 10 !";
 	} else {
 		return a * b;
 	}

 }

multiply(a,b);