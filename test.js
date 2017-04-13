/* this is the file for testing the module */

var Convertis = require("./index");   //Import the module.
var c = new Convertis();            //Create an instance of Convertis

//temperature example
console.log(c.degree(10,"kelvin","c"));  //returns 10 kelvin in celsius: -263.15
console.log(c.degree(1,"Celsius","K"));   //returns 1 celsius in kelvin: 274.15
console.log(c.degree(10,"F","c"));  //returns 10 fahrenheit in celsius -39.6

//weight example
console.log(c.weight(10000,"g","kilograms")); //returns 10000 grams in kilograms: 10
console.log(c.weight(10000,"grams","oz")); //returns 10000 grams in ounces: 352.7396195
console.log(c.weight(10000,"tons","g")); //returns 10000 tons in grams: 10000000000
console.log(c.weight(10000,"pounds","kg")); //returns 10000 pounds in kilograms: 4535.9237