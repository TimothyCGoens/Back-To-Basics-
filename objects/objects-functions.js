// let myBook = {
//     title: '1984', 
//     author: 'George Orwell',
//     pageCount: 326
// }

// let otherBook = {
//     title: 'A Peoples History', 
//     author: 'Howard Zinn',
//     pageCount: 723
// }

// let getSummary = function (book) {
//     return {
//         summary: `${book.title} by ${book.author}`,
//         pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
//     }
// }

// let bookSummary = getSummary(myBook)
// let otherBookSummary = getSummary(otherBook)

// console.log(bookSummary.pageCountSummary)

let tempConversion = function (temp) {
    let celsius = Math.ceil((temp - 32) * 5/9)
    let kelvin = Math.ceil(celsius + 273.15)
    return {
        currentTemp: `The temperature is ${temp}F`,
        celsiusTemp: `That is ${celsius}C`,
        kelvinTemp: `That is ${kelvin}K`
    }
}

let temperatures = tempConversion(74)
console.log(temperatures)