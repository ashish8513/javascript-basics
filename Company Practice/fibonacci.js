function fiboncacci(n){
    let a = 0, b = 1, c;
    for(let i = 0; i < n; i++){
        c = a + b;
        // console.log(a);
        a = b;
        b = c;
    }
}
const result=fiboncacci(5)
console.log("🚀 ~ result:", result)

// function fiboncacci(n){
//     if(n<=0) return 1;

//     return fiboncacci(n-1)+fiboncacci(n-1); //
// }

// const result=(fiboncacci(5))
// console.log("🚀 ~ result:", result)
