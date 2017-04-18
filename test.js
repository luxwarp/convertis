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

//measurements example
console.log(c.measurement(100, "millimeters", "cm")); //return 100 millimeters in centimeters: 10
console.log(c.measurement(100, "m", "miles")); //return 100 meters in miles: 0.0621371192
console.log(c.measurement(100, "inches", "ft")); //return 100 inches in feets: 8.33333333


console.log(c.dataSize(1, "b", "kb")); //returns 1 bytes in kilobytes: 0.0009765625
console.log(c.dataSize(1, "kilobytes", "b")); //returns 1 kilobytes in bytes: 1024
console.log(c.dataSize(1, "gb", "megabytes")); //returns 1 gigabytes in megabytes: 1024
console.log(c.dataSize(1, "yottabytes", "tb")); //returns 1 yottabytes in terabytes: 1099511627776

console.log(c.time(3, "h", "minutes")); //returns 3 hours in minutes: 180
console.log(c.time(3, "m", "ms")); //returns 3 minutes in milliseconds: 180000
console.log(c.time(3, "milliseconds", "seconds")); //returns 3 milliseconds in seconds: 0.003

console.log(c.volume(10, "cl", "ml")); //returns 10 Centilitre in Millilitre: 100
console.log(c.volume(10, "Litre", "cl")); //returns 10 Litre in Centilitre: 1000
console.log(c.volume(10, "decilitre", "litre")); //returns 10 Decilitre in Litre: 1