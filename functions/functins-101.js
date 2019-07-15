// let greetUser = function() {
//     console.log('Welcome user!')
// }

// greetUser()

// let square = function (num) {
//     let result = num * num
//     return result
// }

// let value = square(3)
// let otherValue = square(10)
// console.log(value)
// console.log(otherValue)

function convertFahrenheitToCelcius(temp) {
    let celsius = (temp - 32) * 5/9
    return celsius
}

let convertedTemp = convertFahrenheitToCelcius(32)
let secondConvertedTemp = convertFahrenheitToCelcius(68)
console.log(convertedTemp)
console.log(secondConvertedTemp)

