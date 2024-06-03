//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides,
//and it should print a summary of the sandwich that is being ordered. Call the function three times,
//using a different number of arguments each time.

//Define a function with a rest parameter that accept items arguments represent our 

function makeSandwich(...items: string[]){

    console.log("\n Making a sandwich with the following item:  \n");
    items.forEach(singleItem => console.log("-" + singleItem))
    console.log(" Now Enjoy Snadwich")
}

//Call the  function 3 times with different number od arguments

makeSandwich("Chicken","Chees","Mayo","Egg");

makeSandwich("Bread","Butter");

makeSandwich("Bread","Butter","Mayo","Egg","Chees","Chicken","Lettuce","Tomato")

