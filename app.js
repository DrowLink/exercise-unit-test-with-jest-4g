// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


 let oneEuroIs = {
     "JPY": 127.9, // japan yen
     "USD": 1.2, // us dollar
     "GBP": 0.8, // british pound
 }

 function fromEuroToDollar(eur) 
 {return eur * oneEuroIs.USD}

 function fromDollarToYen(dollar) {
     return (dollar*0.83) * oneEuroIs.JPY 
 }

 function fromYenToPound(yen) {
     return (yen / oneEuroIs.JPY) * oneEuroIs.GBP
 }

 console.log(fromEuroToDollar(3.5)) //4.20

 console.log(fromDollarToYen(3))

 console.log(fromYenToPound(500))
