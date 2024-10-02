const number = [10, 20, 30, 40, 50, 60];
let numbers = number.filter(function (num) {
    return num > 25
})

console.log(numbers)

// Output: [30, 40, 50, 60]

const members = [
    { name: 'ashish', membership: true },
    { name: 'madhu', membership: false },
    { name: 'pgl', membership: false }
]

let member = members.filter(function(mem){
    return mem.membership === true
})
console.log(member)

// Output: [{ name: 'ashish', membership: true }]

// let member=members.filter(mem=>mem.membership)
