// // // console.log('hello world')
// // // console.log('Rafeh Qazi')

// // // // variables (var, const, let)
// // // let name = 'Peter Pan'
// // // console.log(name)

// // // let sentence = 'how are you doing today, nice to see you, hope you have a great day!'

// // // operators
// // // fruit = prompt('what is your favorite fruit?')

// // // console.log(fruit)

// // // * / ** + -

// // // food = Number(prompt('how much was the food?'))
// // // tipPercentage = Number(prompt('tip %?')) / 100
// // // tipAmount = food * tipPercentage
// // // total = food + tipAmount

// // // console.log('tip amount', tipAmount)
// // // console.log('total', total)
// // // alert(tipAmount)

// // // user input

// // /* data types (strings, numbers)
// // numbers 👉 1, 5, 10, 100, 2.5
// // strings 👉 'hello', "what is up"
// // arrays 👉 []
// // objects 👉 {}
// // boolean 👉 true / false (banks)
// // */

// // /* Math Operators
// // Multiply *
// // Divide /
// // Exponents **
// // Modulo/Remainder %  5%2 = 1
// // Add +
// // Subtract -
// // */

// // /* Math Methods
// // Floor - Rounds down
// // Ceil - Rounds up
// // Random - gives you number between 0 and 1
// // */

// // // Baby weather app (conditionals)
// // // if rain 👉 'Grab your umbrella ☔'
// // // else 👉 'Wear your sunglasses 😎'
// // // let weather = prompt('How is the weather?')

// // // if (weather == 'rainy') {
// // //   console.log('Grab your umbrella ☔')
// // // } else {
// // //   console.log('Wear your sunglasses 😎')
// // // }

// // // conditional operators
// // // ==, ===, >, <, <=, >=, !=, !==

// // // Functions
// // // this is a function called 'sayMyName'
// // // and it has 0 arguments
// // // does: it logs out your name to the console
// // function sayMyName() {
// //     console.log('Qazi')
// //   }
  
// //   // sayMyName()
  
// //   // this is a function called "sayMyName2"
// //   // it has 1 argument called `name`
// //   // does: it logs out your name to console
// //   function sayMyName2(name) {
// //     console.log(name)
// //   }
  
// //   // sayMyName2('Kevin')
  
// //   function greeting(name) {
// //     // greet = 'hi ' + name + ', Nice to meet you!'
// //     // template literals ``
// //     greet = `hi ${name}, Nice to meet you!`
// //     console.log(greet)
// //   }
  
// //   // greeting('Johnny Depp')
  
// //   function sum(a, b) {
// //     // return
// //     return a + b
// //   }
  
// //   // num1 = sum(1, 2)
// //   // console.log(num1)
  
// //   function calculateFoodTotal(food, tip) {
// //     const tipPercentage = tip / 100
// //     const tipAmount = food * tipPercentage
// //     const total = sum(food, tipAmount)
// //     return total
// //   }
  
// //   // console.log(calculateFoodTotal(300, 20))
  
// //   // ES6
// //   // Arrow Functions =>
// //   // arrow function with explicit return
// //   const sumArrow = (a, b) => {
// //     return a + b
// //   }
  
// //   // arrow function with implicit return
// //   // IMPORTANT: For implicit return, remove curly braces
// //   const sumArrow2 = (a, b) => a + b

// // const groceries = ['🍌', '🍎', '🍊', '🍐']


// // console.log(groceries )

// // //alert (groceries[1])

// // //groceries.push('cookie')

// // // array slice

// // //alert(groceries.slice(0,2))

// // //alert(groceries.slice(1,4))

// // const person = {
// //     name: 'Leonardo', 
// //     shirt: 'white',
// //     networth: 100000,
// //     liabilities: 5000
// // }

// // //alert(person.name)


// // //assign object
// // person.phone = '1-256-867-5309'

// // //alert(person.phone)


// // const person2 = {
// //     name: 'Rafeh Qazi',
// //     shirt: 'black'
// // }

// // console.log(person2.shirt)

// // //ES6 Arrow Function
// // // object 
// // // template literals

// // const introducer = (name, shirt, assets, debt) =>{
// //     const person3 = {
// //         name: name,
// //         shirt: shirt,
// //         assets: 100000,
// //         liabilities: 50000,
// //         netWorth: function(){
// //             return this.assets - this.liabilities
// //         }
// //     }

// //     const intro = `Hi, my name is ${name} and the color of my shirt is ${shirt}. My net worth is ${person3.netWorth()}`

// //     return intro
// // }

// // console.log(introducer(person.name, person.shirt, person.networth, person.liabilities))


// // const groceries = ['🍌', '🍎', '🍊', '🍐', 'a']

// // for(let i=0; i < groceries.length; i++){
// //     console.log(groceries[i] )
// // }

// const numbers = [1, 2, 3, 4, 5, 6]

// let result = []

// for(let i = 0; i < numbers.length; i++){
//     numbers[i] = numbers[i] * 2
//     result.push(numbers[i])

// }


// function squareArrays(arr){
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = arr[i] ** 2

//     }
//     return arr
// }

// console.log(squareArrays(numbers))

// const letterCounter = () => {
//         phrase = prompt('Enter your phrase')
//         return { result: phrase.length }
// }

// console.log(letterCounter())

// arr = [1, 2, 3, 4, 5]

// function sumArr(arg){
//     var add = 0;
//     for(let i = 0; i < arr.length; i++){
//         add+= arr[i]
//     }
//     return {result: add}
// }

// console.log(sumArr(arr))

// let maxnum = 0;

// function getMax(arg){
//     for(let i = 0; i < arg.length; i++){
//         if(maxnum < arg[i]){
//             maxnum = arg[i]
//         }
//     }
//     return maxnum
// }

// console.log(getMax(arr))

const letterFrequency = (phrase) =>{
    //make a `frequency` object
    frequency = {}

    for(const letter of phrase){
        //check if letter exists in freq
        if (letter in frequency){
            frequency[letter] += 1
        }
        else{
            frequency[letter] = 1;
        }
    }

    return frequency
}

// console.log(letterFrequency('haha lol you are so silly'))

// const wordFrequency = (phrase) => {
//     const words = phrase.split(' ')
//     return letterFrequency(words)
// }
// const userInput = prompt('Write your sentence')
// console.log(wordFrequency(userInputGene))

// higher order functions
// map - loops and returns an arrau
// filter - loops and returns an array with matching conditions

// reduce 

const doubleMap = (numbers) => {
    return numbers.map(number => number * 2)
 }
// let result = [1, 2, 3, 4].map(number => console.log(number => number * 2))
console.log(doubleMap([1,2,3]))

const filter = (numbers, greaterThan) => {

    let filter = []


    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > greaterThan){
            filter.push(numbers[i])
        }
    }
    return filter

}

numbers = [1, 2, 3, 4, 5,5 ,67 ,8 ,8, 4, 5,3 ]

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(num.filter(num => num > 6))

const actors = [
    {name: 'Johnny', networth: 2000000},
    {name: 'amber' , networth: 10},
    {name: 'Leonardo', networth: 100000},
    {name: 'brad', networth: 300000000},
    {name: 'matt', networth: 170000000}
]

// let result = actors.filter(actor => actor.networth > 10)

// let names = result.map(actor => actor.name).join(', ')

// document.getElementById("id1").innerHTML = `<h2>${names}</h2>`;

// reduce

// add all of the net worths
// SUM: think reduce
// reduce loops and gives you back the accumulator


// function sum(a,b){
//     return a + b
// }

// const nums = [1, 2, 3, 4]

// const result1 = nums.reduce(sum)

// function multiplynums(a, b){

//     return a * b
// }

// const result2 = nums.reduce(multiplynums)

// // console.log(result2)

const netSum = actors.reduce((prev, curr) => prev + curr.networth, 0)

console.log(netSum)

document.getElementById("id1").innerHTML = `<h1>$Your tip payment is ${result}</h1>`;
