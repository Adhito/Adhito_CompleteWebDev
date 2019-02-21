
var todos = [
	"Clean Room",
	"Brush Teeth",
	"Exercise",
	"Study Javascript",
	"Eat Healthy"
];


// Looping For
var todosLength = todos.length;
for(var i=0; i < todosLength; i++){
	console.log(todos[i] + "!");
	//todos[i] = todos[i] + "!";
}

// Looping While
var counter1 = 0;
while(counter1 < 10){
	console.log(counter1);
	counter1++;
}

// Looping Do 
var counter2 = 20;
do{
	console.log(counter2);
	counter2--
} while(counter2 > 0)


// Looping ForEach
todos.forEach(function(i){
	console.log(i);
})