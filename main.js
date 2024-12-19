// let result = (num) => {
//     if(num%2 == 0){
//         return "even"
//     }else{
//         return "odd"
//     }
// }
// console.log(result(20))
// //Input 20
// //Output even

// let result1 = (num) => {
//     if(num ==0){
//         return "Zero"
//     }
//     else if(num>0){
//         return "Positive"
//     }
//     else if(num<0){
//         return "Negative"
//     }
// }
// console.log(result1(-10))
// //Input -10
// //Output Negative

// let sum = (num) =>{
//     let total=0;
//     for(let i=1;i<num;i++){
//         total += i
//     }
//     return total
// }
// console.log(sum(10))
// //Input 10
// // Output 45

// let factorial = (num) =>{
//     let fact = 1
//     if(num == 0){
//         return 1;
//     }
//     for(let i =1;i<=num;i++){
//         fact = fact*i 
//     }
//     return fact
// }
// console.log(`Factorial is ${factorial(5)}`)
// //Input 5
// //Output 120

// let factors = (num) =>{
//     for(let i=1;i<=num;i++){
//        if(num%i == 0){
//         console.log(`Factors is ${i}`) 
//        }
       
//     }
// }
// factors(10)
// //Input 10
// //Output 1,2,5,10

// let prime = (num) =>{
//     if(num == 0 && num == 1){
//         return false
//     }
//     for(let i=2;i<=num;i++)
//     {
//         if(num == i)
//             return true
//         if(num % i == 0)
//             return false
//     }
//     return prime
// }
// prime(10)?console.log("true"):console.log("false")
// //Input 10
// //Output false

// let fibonacci = (n) =>{
//     if()
// }

// let prod = (accumlator,element) => {
//     return accumlator*element
// }
// let nims = [1,2,3,4,5]
// console.log(nims.reduce(prod))

// let s_age = [17,16,19,20,25,16,21,19]


// let isAdult = (a) => {
//     return a>=18
// }
// console.log(s_age.filter(isAdult))
// let adult_s =[]
// for(a of s_age){
//     if(isAdult(a)){
//         adult_s.push(a)
//     }
// }
// console.log(adult_s)
// let combNames = (...names) => {
//     let res = ""
//     for (let name of names){
//         res =re +name
//     }
//     return res
// }
// console.log("Satyam","Singh")

let smallLetters ="ascdbsfmffbchnvmv"
let bigLetter = "HFHGHJJHFXAHKKNHF"
let numbers = "123456789"
let special = "@#&*$@&&"

let block = smallLetters + bigLetter + numbers
// console.log(block)

let n=14
let pass = ""
for(let i = 1; i<=14; i++){
    pass = pass + block.charAt(Math.random()*block.length+1)
}
console.log(pass)