//Unchanged Magicians: Start with your work from Exercise 42.
//Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original names 
//and one array with the Great added to each magician’s name.
// Define the function to show magicians names
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an arry containing magicians name
var magician_names = [" junaid bangali", " maye pursan", " parkash bangali", " gory wali sarkar"];
// Making a copy of orignal array through .Slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include " The Great" with thier names
var copy_great_magician = make_great(copy_magician_names);
//Show both array Original and copied
//Original
show_magicians(magician_names);
// Copied
show_magicians(copy_great_magician);
