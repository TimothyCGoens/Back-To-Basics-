// let temp = 65

// if (temp >= 60 && temp <= 90) {
//     console.log('It is pretty nice out!')
// }else if (temp < 0 || temp > 110) {
//     console.log('Do not go outside!')
// } else {
//     console.log('Eh, do what you want.')
// }

let guestOneVegan = true
let guestTwoVegan = true

if (guestOneVegan && guestTwoVegan) {
    console.log('We serve only delicious vegan meals.')
} else if (guestOneVegan || guestTwoVegan) {
    console.log('Would either of you be interested in our vegan menu?')
} else {
    console.log('We have a menu that offers everything.')
}