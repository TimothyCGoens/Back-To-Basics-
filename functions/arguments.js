// function add(a, b, c) {
//     return a + b + c
// }

// let result = add(10, 1, 5)
// console.log(result)

// let getScoreText = function (name = 'Player 1', score = 0) {
//     return 'Name: ' + name + ' - Score ' + score
// }

// let scoreText = getScoreText(undefined, 69)
// console.log(scoreText)

let tipCalculator = function (total, tipPercent = .2) {
    return `Your total was ${total}, you will tip ${tipPercent}% which means your tip will be ${
        total * tipPercent}.`
}

let tip = tipCalculator(40.00, .25)
console.log(tip)

