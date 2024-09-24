const number = [10,20,25,30,35,40,45,50]

let numbers= number.filter(function(num){
  return num > 25
})
console.log(numbers);

const members = [
{name:'abc', membership : true},
{name:'def', membership : false},
{name:'ghi', membership : true},
{name:'jkl', membership : false}

]

let member = members.filter(mem => mem.membership
)
console.log(member)