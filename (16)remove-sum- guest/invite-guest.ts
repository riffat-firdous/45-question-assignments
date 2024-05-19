/* Question 16:
more gues: you just found a bigger dinner table, so now more space is available.think of three more guest to invite a dinner.
start with your program from exercise 15. add a print statment to the end of your program informing people that you found a bigger 
of your arry.
/* Add one new guest to the beginning of your array.
/* Add one new guest to the middle of your array.
/*Use append()to add one new guest to the end of your list.
/*print a new set of invitation message, one for each person in your list*/


let guest_list: string[] = [`zakia`,`farzana`,`anum`,`suhagan`];

for(let i=0; i<guest_list.length; i++)
   { 
console.log(`\n Dear ${guest_list[i]}\n\n you are invited for dinner tomorrow\n\n thank you\n`);

}
let absent_guest: string = "zakia";
let new_guest: string = "shazia";

guest_list[0] = new_guest;

  for(let i=0; i<guest_list.length; i++)
{
console.log(`Dear ${guest_list[i]}\n\n you are invited for a dinner tomorow\n\n`);
}

console.log(`\n\n Unfortunately we are out of space, so have space for two guest only \n\n`);

guest_list.unshift("meher");

guest_list.splice(guest_list.length/2, 2,"rabia");

guest_list.push("riffat");

for(let i=0; i<guest_list.length; i++)
  {
  console.log(`Dear ${guest_list[i]}\n\n you are invited more a dinner tomorow\n\n`);
  }
console.log(`We have found a bigger dinner table so we invited more guest`);
