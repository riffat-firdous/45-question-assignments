

//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guest_list: string[] = [`zakia`,`farzana`,`anum`,`kiran`];

for(let i=0; i<guest_list.length; i++)
    { 
console.log(`Dear ${guest_list[i]}\n\n you are invited for dinner tomorrow\n\n thank you\n`);

}

 let absent_guest: string = `zakia`;

  let  new_guest: string = `samina`;
    
     guest_list[0] = new_guest;

     for(let i=0; i<guest_list.length; i++)
{
        console.log(`Dear ${guest_list[i]}\n\n you are invited for dinner tomorrow\n\n thank you\n\n`);

}

    console.log(`Miss ${absent_guest} will be not comming tomorrow`);

