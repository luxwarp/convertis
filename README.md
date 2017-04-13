# Convertis

## Intro
Convertis is a nodeJS module that lets you convert anything. Never write your own convert functions again!
Here you will get some cool convert functions like:

* Temperature
* Weight 

More information in our wiki on github.

## Install
`npm install convertis`

## Usage

```javascript
var Convertis = require("convertis");   //Import the module.
var c = new Convertis();                //Create an instance of Convertis

//temperature examples
console.log(c.degree(10,"Kelvin","c"));         //returns 10 kelvin in celsius: -263.15
console.log(c.degree(1,"C","K"));               //returns 1 celsius in kelvin: 274.15
console.log(c.degree(10,"fahrenheit","c"));     //returns 10 fahrenheit in celsius -39.6

//weight example
console.log(c.weight(10000,"g","kilograms"));   //returns 10000 grams in kilograms: 10
console.log(c.weight(10000,"grams","oz"));      //returns 10000 grams in ounces: 352.7396195
console.log(c.weight(10000,"tons","g"));        //returns 10000 tons in grams: 10000000000
console.log(c.weight(10000,"pounds","kg"));     //returns 10000 pounds in kilograms: 4535.9237
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

