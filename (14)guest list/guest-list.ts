//Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people
// you’d like to invite to dinner. Then use your list to print a message
// to each person, inviting them to dinner.

let guest_list: string[] = [`zakia`,`farzana`,`anum`];

for(let i=0; i<guest_list.length; i++)
    { 
console.log(`\n Dear ${guest_list[i]}\n\n you are invited for dinner tomorrow\n\n thank you\n`);

}
export{guest_list}
