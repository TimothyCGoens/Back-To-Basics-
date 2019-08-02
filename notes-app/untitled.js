// Unix Epoch - January 1, 1970 00:00:00

const now = new Date()
const timeStamp = now.getTime()

const myDate = new Date(timeStamp) 
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const dateOne = new Date('August 1 2018 00:00:00')
const dateTwo = new Date()

const dateOneTimeStamp = dateOne.getTime()
const dateTwoTimeStamp = dateTwo.getTime()

if(dateOneTimeStamp < dateTwoTimeStamp) {
    console.log(dateOne.toString())
} else if(dateTwoTimeStamp < dateOneTimeStamp) {
    console.log(dateTwo.toString())
}