
// Defining users as objects having attributes of email and phone numbers.
const user1 = {
    email : 'abc13@gmail.com',
    phoneNumber : "13579"
}
const user2 = {
    email : 'xyz001@hotmail.com',
    phoneNumber : '246810'
}
const user3 = {
    email : 'jkl999@outlook.com',
    phoneNumber : '13456789'
}
const user4 = {
    email : 'ghi554477@gmail.com',
    phoneNumber : '33445566'
}

// making and array of users as objects 

let arrayOfUsers = [user1,user2,user3,user4];
let arrayOfEmails = arrayOfUsers.map(extractEmails)

// defining the function to return only emails from evry user

function extractEmails(user){
    return user.email;
}

extractEmails(arrayOfUsers);
console.log(arrayOfEmails);