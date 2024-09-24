function Palindrome(num) {
    let str = num.toString();  
    const reversedStr = str.split("").reverse().join("");  
    return str === reversedStr;  
}

const result = Palindrome(121);  

console.log("🚀 ~ result:", result)
