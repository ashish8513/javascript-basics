
const number = [10, 11, 12, 13, 14, 15, 25, 40, 45, 50]
const members = [
    { name: 'ashish', num: 10 },
    { name: 'madhu', num: 20 },
    { name: 'ashish', num: 30 },
    { name: 'ashish', num: 40 },
    { name: 'ashish', num: 50 }
]
let member = members.map((number) => {
    if (number.num > 20) {
        return number.num / 2
    } else {
        return number
    }
})
console.log(member)


