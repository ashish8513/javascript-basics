const user = {
    name: "ashish prabhakar",
    email: "ashishprabhakar@gmail.com",
    signin:function(){
        console.log("user signed in");
    },
    signout(){
        console.log("user signed out");
    }
}

console.log(user.name, user.email);
const user2 = {
    name: "Madhu Kumari",
    email: "madhukumari@gmail.com",
    signin:function(){
        console.log("user signed in");
    },
    signout(){
        console.log("user signed out");
    }
}

console.log(user2.name, user2.email);
const user3=new user('prabhakar','prabhakar@gmail.com')
