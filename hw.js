
let length=9
let width=5
console.log(`The area of the rectangle is: ${9*5}`)

let celsiusTem=23
let fahrenheitTem=9/5*celsiusTem+32
console.log(`${celsiusTem}°C is ${fahrenheitTem}°F.`)
console.log(`${fahrenheitTem}°F is ${(fahrenheitTem-32)*5/9}°C.`)



// summation number
let Numbers = [23,54,32,87,47]
total=0
Numbers.forEach(num => {total+=num})
console.log(`The summation of [${Numbers}] is: ${total}`)

//max number
let array=[16,4,2,0,19,6]
max = 0
for (let i  = 0 ; i < array.length ; i++){
    max = Math.max(max, array[i])}
console.log(`The Max Number of[${Numbers}] is: ${max}`);

//revers number
let num=[1,2,3,4,5,6,7,8,9,10]
console.log(`Revers the [${num}] is: [${num.reverse()}]`)

let lineNum = 5;
let stars = "";
for (let i = 1; i <=lineNum ; i++) {
  for (let j = 0; j < i ; j++) {
    stars += "*";
  }
  stars += "\n";
}
console.log(stars);