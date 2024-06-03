//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians()
//which prints the name of each magician in the array.
// Define the function to show magicians names
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Dfine an arry containing magicians name
var magician_names = ["junaid bangali", "mai pursan", "perkash bangali", "gory wali sarkar"];
//Call the function to print each magician name
show_magicians(magician_names);
