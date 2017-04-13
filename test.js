/* this is the file for testing the module */

var Convertis = require("./index");   //Import the module.
var c = new Convertis();            //Create an instance of Convertis


console.log(c.celsiusToFahrenheit(13.4));
console.log(c.fahrenheitToCelsius(1));