const days=new Date();
const past=new Date('September 1 2024 18:02:28')
// console.log("🚀 ~ days:", days.getTime(),past.getTime())

const differ=days.getTime() - past.getTime()
console.log("🚀 ~ differ:", differ)
