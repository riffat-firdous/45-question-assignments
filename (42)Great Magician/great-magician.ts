//Great Magicians: Start with a copy of your program from Exercise 41
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.

// Define the function to show magicians names

function show_magicians (magician: string[]){

    magician.forEach(name => console.log(name))
}

//Function to make magicians great through .map() it will modify array

function make_great(magicians: string[]){

   return magicians.map(name => ` The Great ${name}`)
}

// Define an arry containing magicians name

let magician_names = ["junaid bangali","mai pursan","perkash bangali","gory wali sarkar"]

//Call make_great function to print each magician name 

 let great_magicians = make_great(magician_names);

 //Call show_magicians that show modified list if magician

 show_magicians(great_magicians)