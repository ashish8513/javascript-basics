class User {
    constructor(username, email) {
        this.username = username;//hardcoded 
        this.email = email;
        this.score = 0;
    }
    sigin() {
        console.log(`${this.username} is signed in`)
        return this
    }
    signout() {
        console.log(`${this.username} is signed out`)
        return this
    }
    scores() {
        this.score++
        console.log(`${this.username} has a score of ${this.score}`)
        return this;
    }
}
const user1 = new User('ashish', 'ashishprabhakar1010@gmail.com');
const user2 = new User('madhu', 'madhukumari@gmail.com')
console.log("🚀 ~ user1:", user1, user2)

user1.sigin().scores().scores().scores();
// user2.signout()
