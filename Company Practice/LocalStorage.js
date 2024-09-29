// localStorage.setItem("name", "Ashish")
// localStorage.setItem("age", 22)

// //session Storage
// sessionStorage.setItem("name","Madhu")

// const ashish=localStorage.getItem("name")
// console.log("🚀 ~ ashish:", ashish)

const users = [
    { name: 'ashish', email: 'ashshish@gmail.com' },
    { name: 'madhu', email: 'madhu@gmail.com' },
    { name: 'alok', email: 'alok@gmail.com' }
]
console.log(JSON.stringify((users)))
localStorage.setItem('users', JSON.stringify(users))

const use = localStorage.getItem("users")
console.log(JSON.parse(use))
