

var database = [
	{
		username: "Andrei",
		password: "superSecret"
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


function signIn(username, password){
	if(	username === database[0].username && 
		password === database[0].password){
		console.log(newsFeed);
	} else {
		alert(" Sorry wrong password or username");
	}
}

signIn(userNamePrompt, passwordPrompt);