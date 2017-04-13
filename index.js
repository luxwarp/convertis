/* This is the module file */
"use-strict"

class Convertis {
    constructor() {

    }
    
    /**
     * Convert celsius to fahrenheit. Returns fahrenheit.
     * @param {number} num Specify the Celsius. 
     */
    celsiusToFahrenheit(num) {
        var fahrenheit = num * 9/5 + 32;
        return fahrenheit;
    }

    /**
     * Convert Fahrenheit to Celsius. Returns celsius.
     * @param {number} num Specify the Fahrenheit. 
     */
    fahrenheitToCelsius(num) {
        var celsius = (num - 32) * 9/5;
        return celsius;
    }
}

module.exports = Convertis;