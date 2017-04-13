# Convertis

## Intro
Convertis is a nodeJS module that lets you convert anything. Never write your own convert functions again!
Here you will get some cool functions like:

* Temperature
    * Celsius
    * Fahrenheit

## Install
`npm install convertis`

## Usage

```javascript
var Convertis = require("convertis");   //Import the module.
var convis = new Convertis();            //Create an instance of Convertis

console.log(c.celsiusToFahrenheit(13.4));   //Convert celsius to fahrenheit
console.log(c.fahrenheitToCelsius(1));      //Convert fahrenheit to celsius.
```

## Testing
If you want to try some functions before using this module 
in your applications you can use the `test.js` file located in the
root folder of the module and then run the file in your terminal with the command
`node ./test.js`

## License
MIT - © Copyright [Mikael Carlsson](http://mikaelcarlsson.info)

## Note/Contribute
Feel free to contribute the way you want.

