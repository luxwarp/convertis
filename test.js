/* this is the file for testing the module */

var Convertis = require("./index");   //Import the module.
var c = new Convertis();            //Create an instance of Convertis


console.log(c.degree(10,"K","c"));  //returns 10 kelvin in celsius: -263.15
console.log(c.degree(1,"C","K"));   //returns 1 celsius in kelvin: 274.15
console.log(c.degree(10,"F","c"));  //returns 10 fahrenheit in celsius -39.6