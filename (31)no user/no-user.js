//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames = ["mehreen", "Alia", "Zareen", "admin", "usmania"];
//Remove all values from array now our array is empty
userNames = [];
////if statment for checking length of our array is empty
if (userNames.length === 0) {
    console.log("\n your Arry is empty we need to find some user ");
}
//Using ForEach loop on arry
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",thank you for logging in again."));
    }
});
