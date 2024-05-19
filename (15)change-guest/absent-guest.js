//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guest_list = ["zakia", "farzana", "anum", "kiran"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\n you are invited for dinner tomorrow\n\n thank you\n"));
}
var absent_guest = "zakia";
var new_guest = "samina";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\n you are invited for dinner tomorrow\n\n thank you\n\n"));
}
console.log("Miss ".concat(absent_guest, " will be not comming tomorrow"));
