//Animals: Think of at least three different animals that have a common characteristic.
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • 
//Modify your program to print a statement about each animal, such as A dog would make a great pet. •
// Add a line at the end of your program stating what these animals have in common
//You could print a sentence such as Any of these animals would make a great pet!
//creat a array
var petAnimals = ["cat", "dog", "horse"];
//Using For-loop
for (var _i = 0, petAnimals_1 = petAnimals; _i < petAnimals_1.length; _i++) {
    var onePet = petAnimals_1[_i];
    console.log("A ".concat(onePet, " would make a great pet."));
}
// print a Message outside of FOr -loop
console.log("any of these animal would make a great pet!");
