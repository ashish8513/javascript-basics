const user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    languages: ["hindi", "english", "punjabi", "french"],
    sigin() {
        console.log("You are now logged in")
    },
    signout() {
        console.log("You are now logged out")
    },
    language:function () {
        this.languages.forEach(lan => {
            console.log(lan);
        });//context object is know as this keyword
    }
}
user.language();

console.log("��� ~ this:", this)