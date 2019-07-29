// const square = (num) => num * num

// const squareLong = (num) => {
//     return num * num
// }

// console.log(square(5))

const people = [{
    name: 'Tim', 
    age: 40
}, {
    name: 'Debbie', 
    age: 28
}, {
    name: 'Ashley', 
    age: 33
}]

// const under30 = people.filter(function(person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age > 30)

console.log(under30)

const person = people.find((person) => person.age === 28)

console.log(person.name)