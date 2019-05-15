[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Convertis

## Intro
Convertis is a NodeJS module that let's you convert 'anything'. Never write your own convert functions again!
Here you will get some convert functions like:

* Temperature (Celsius, Fahrenheit, Kelvin)
* Weight (Grams, Kilograms, Tons, Pounds, Ounces)
* Measurement (Millimeters, Centimeters, Meters, Kilometers, Inches, Feets, Yards, Miles)
* DataSize (Bytes, Kilobytes, Megabytes, Terabytes, Petabytes, Exabytes, Zetabytes, Yottabytes)
* Time (Milliseconds, Seconds, Minutes, Hours)
* Volume (Millilitre, Centilitre, Decilitre, Litre)

More information in the [wiki](https://github.com/mmcarlsson/convertis/wiki) on github.

See the [change log](https://github.com/mmcarlsson/convertis/wiki/Change-log) for upate news.

## Install
`npm install convertis`

## Usage

```javascript
var Convertis = require("convertis");                   //Import the module.
var c = new Convertis();                                //Create an instance of Convertis

//temperature examples
console.log(c.degree(10,"Kelvin","c"));                 //returns 10 kelvin in celsius: -263.15
console.log(c.degree(1,"C","K"));                       //returns 1 celsius in kelvin: 274.15
console.log(c.degree(10,"fahrenheit","c"));             //returns 10 fahrenheit in celsius -39.6

//weight example
console.log(c.weight(10000,"g","kilograms"));           //returns 10000 grams in kilograms: 10
console.log(c.weight(10000,"grams","oz"));              //returns 10000 grams in ounces: 352.7396195
console.log(c.weight(10000,"tons","g"));                //returns 10000 tons in grams: 10000000000
console.log(c.weight(10000,"pounds","kg"));             //returns 10000 pounds in kilograms: 4535.9237

//measurement example
console.log(c.measurement(100, "millimeters", "cm"));   //return 100 millimeters in centimeters: 10
console.log(c.measurement(100, "m", "miles"));          //return 100 meters in miles: 0.0621371192
console.log(c.measurement(100, "inches", "ft"));        //return 100 inches in feets: 8.33333333

//data size example
console.log(c.dataSize(1, "b", "kb"));                  //returns 1 bytes in kilobytes: 0.0009765625
console.log(c.dataSize(1, "kilobytes", "b"));           //returns 1 kilobytes in bytes: 1024
console.log(c.dataSize(1, "gb", "megabytes"));          //returns 1 gigabytes in megabytes: 1024
console.log(c.dataSize(1, "yottabytes", "tb"));         //returns 1 yottabytes in terabytes: 1099511627776

//time example
console.log(c.time(3, "h", "minutes"));                 //returns 3 hours in minutes: 180
console.log(c.time(3, "m", "ms"));                      //returns 3 minutes in milliseconds: 180000
console.log(c.time(3, "milliseconds", "seconds"));      //returns 3 milliseconds in seconds: 0.003

//Volume example
console.log(c.volume(10, "cl", "ml"));                  //returns 10 Centilitre in Millilitre: 100
console.log(c.volume(10, "Litre", "cl"));               //returns 10 Litre in Centilitre: 1000
console.log(c.volume(10, "decilitre", "litre"));        //returns 10 Decilitre in Litre: 1
```

## Testing
If you want to try some functions before using this module 
in your application you can use the `test.js` file located in the
root folder of the module and then run the file in your terminal with the command
`node ./test.js` or run `npm test` from the module folder.

## License
ISC - © Copyright [Mikael Luxwarp Carlsson](https://luxwarp.info)

## Note/Contribute
Feel free to contribute the way you want.