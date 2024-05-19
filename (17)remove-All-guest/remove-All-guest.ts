//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. //Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t
// invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure 
//you actually have an empty list at the end of your program.

let guest_list: string[] = [`zakia`,`farzana`,`anum`];

for(let i=0; i<guest_list.length; i++)
   { 
console.log(`\n Dear ${guest_list[i]}\n\n you are invited for dinner tomorrow\n\n thank you\n`);

}
let absent_guest: string = "zakia";
let new_guest: string = "shazia";

guest_list[0] = new_guest;

  for(let i=0; i<guest_list.length; i++)
{
console.log(`Dear ${guest_list[i]}\n\n you are invited for a dinner tomorow\n\n thank you\n`);
}

console.log(`\n\n zakia will not comming tomorrow dinner \n\n`);

guest_list.unshift("meher");

guest_list.splice(guest_list.length/2, 2,"rabia");

guest_list.push("riffat");

for(let i=0; i<guest_list.length; i++)
  {
  console.log(`Dear ${guest_list[i]}\n\n you are invited more a dinner tomorow\n\n thank you\n\n`);
  }
console.log(`We have found a bigger dinner table so we invited more guest`);

while(guest_list.length>2){

    let removeed_guest = guest_list.pop();

    console.log(`\n Sorry, My Dear ${removeed_guest} you are not invited for dinner tomorrow\n`);

}
    for(let i=0; i<guest_list.length; i++)
  {
  console.log(`Dear ${guest_list[i]}\n\n you are still invited to dinner tomorow\n\n thank you \n`);
  }

  guest_list.splice(0,2);
  console.log(guest_list);

