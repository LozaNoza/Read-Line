//Note - Import the readline module for handeling command line input output
const readline = reqire('readline');

//Note - Import file system module (fs) for reading/writing files
const fs = require('fs');

//Note - Define the file where information will be saved
const file = ('data.json');

//Note - Initilise an empty array for storing information
let information = [];

//Note - Check if the information.json file exsists
if(information.existsSyn(FILE)) {
	try {
		//If a file exists, read its contents, sync information
		const data = information.readFileSync(FILE, utf8);
		//Parse JSON string into the information array
		information = JSON.parse(data);
	}catch(e){
		//If no information file exists or any error is present. Start with an empty array
		information = [];
	};
};

//Note - Create a readlin interface
const rl = readline.createInterface({
	input: process.stndin, //Set standard input (keyboard) as input sourse
	output: process.stdout //Set standard output (keyboard) as output target
});

//Note - Function to display main menu options
function showMenu(){
	console.log(`\n To-Do List App ===`); //Print app header
	console.log(`1. Show Tasks`); //Option to show tasks
	console.log(`2. Add Task`); //Option to add tasks
	console.log(`3. Mark tasks as done`); //Option to mark tasks as done
	console.log(`4. Delete a Task`); //Option to delete a task
	console.log(`5. Exit`); //Exit application
	rl.question(`\n Choose an option from the above list (1-5)`, handleMenu); //Promt user for menue choice
};

//Note - Function to save tasks to information file
function saveInformation(){
	fs.writeFileSync(FILE, JSON.stringify(information, null, 2)) //Write the todos array as JSON file
}

//Note - Function to handle the menu option entered by the user
function handle(choice){
	switch(choice.trim()){ //Use the trimmed input to compair user input
		case '1':
			listTasks(); //If 1 has been selected, show all tasks
			break;
		case '2':
			addTask(); //If 2 has been selected allow user to add task
			break;
		case '3':
			promptMarkTaskAsDone(); //If 3 has been selected allow user to add task
			break;
		case '4':
			deleteTask(); //If 4 has been selected allow user to delete tasks
			break;
		case '5':
			console.log('Goodbye'); //If option 5 has been selected by user, print goodbye and close appp
			rl.close();
			break;
		default:
			console.log('Invalid choice. Please select valid option from menu'); //If user has not entered 1-5, select this error message
			showMenu(); //Show menu again
			break;
	};
};