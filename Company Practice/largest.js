const arr = [5, 10, 25, 43, 65, 78, 91];

let LargestNumber = arr[0];

for (let i = 1; i < arr.length; i++) {
    if(arr[i]>LargestNumber){
        LargestNumber = arr[i];
    }
}
console.log("🚀 ~ LargestNumber:", LargestNumber) 