

var database = [
	{
		username: "Andrei",
		password: "superSecret"
	},
		{
		username: "Sally",
		password: "12345"
	},
		{
		username: "Ingrid",
		password: "77777"
	}

];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired after learning"
	},
	{
		username: "Sally",
		timeline: "Javascript is soooo coool !"
	}
];

var userNamePrompt = prompt("Please input username : ");
var passwordPrompt = prompt("Please input password : ");

function isUserValid(username, password){
		for(var i=0; i < database.length; i++){
		if(database[i].username === username && 
			database[i].password === password){
			return true;
		}
	}
	return false; 
}

function signIn(username, password){

	//console.log(isUserValid(username, password));
	if(isUserValid(username, password)){
		console.log(newsFeed);
	} else {
		alert(" Sorry wrong password or username");
	}
}

signIn(userNamePrompt, passwordPrompt);