// for each
// const names =  ['jhon','thomas','jack'];

// names.forEach(function(name,index){
//     console.log(name,index);
// });

// for of
// const names =  ['jhon','thomas','jack'];
// for(let name of names){
//     console.log(name)
// }

let user = {
    name : 'ashish',
    age : 20,
    gender : 'male',
    email : 'ashishprabhakar1010@gmail.com',
}
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}