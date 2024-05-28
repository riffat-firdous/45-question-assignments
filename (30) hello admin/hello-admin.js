//Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//Imagine you are writing code that will print a greeting to each user after they log in to a website. 
// Loop through the array, and print a greeting to each user:
//if the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var userNames = ["mehreen", "Alia", "Zareen", "admin", "usmania"];
//Using ForEach loop on arry
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",thank you for logging in again."));
    }
});
