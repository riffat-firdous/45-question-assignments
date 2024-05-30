//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
// write more tests.Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings
// Tests using the lower case function
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Tests using "and" and "or" operators
//Test whether an item is in a array
//st whether an item is not in a array

//DEFINE VERIBLES

let apple = "apple";

let UppercaseApple ="APPLE"

let ten = 10;
let twenty = 20;

// test for equality and inequality with string

console.log("\n Is apple is equal to apple?");

console.log(apple=="apple");

console.log("\n Is apple is not equal to apple?");

console.log(apple !="apple");

// test using lower case function

console.log("\n Is APPLE is equel to apple after converting to lowercase");

console.log(UppercaseApple.toLocaleLowerCase() == "apple");

//test using not lower case function

console.log("\n Is APPLE is  not equel to apple after converting to lowercase");

console.log(UppercaseApple.toLocaleLowerCase() != "apple");

// numerical test

// equel to

console.log("\n Is ten is equel to twenty?");

console.log(ten == twenty);

//not equel to


console.log("\n Is ten is not equel to twenty?");

console.log(ten != twenty);

// greater than

console.log("\n Is ten is greater then to Zero?");

console.log(ten > 0);

//less then

console.log("\n Is twenty is lees then to ten?");

console.log(twenty < ten);

// greater or equels to

console.log("\n Is ten is greater then or equel to 5?");

console.log(ten >= 5);

///less then  or equels to

console.log("\n Is twenty is less then or equel to 10?");

console.log(twenty <= 10);
 

