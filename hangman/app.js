//Primitive value: string, number, boolean, null, undefined


//Object: myObject --> Object.prototype --> null
//Array: myArray --> Arraty.prototype --> Object.prototype --> null
//Function: myFunc --> Function.prototype --> Object.prototype --> null
//String: myString --> String.prototype --> Object.prototype --> null
//Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const product = "Computer"
console.log(product.split(''))

const otherProducts = new String('Phone')
console.log(otherProducts)