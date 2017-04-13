/* This is the module file */
"use-strict"

class Convertis {
    constructor() {

    }

    /**
     * Convert different types of degree, like Celsius, Fahrenheit, Kelvin.
     * @param {number} value The value you want to convert.
     * @param {string} from From what type of degree, eg. C = Celsius, F = Fahrenheit, K = Kelvin.
     * @param {string} to To what type of degree, C = Celsius, F = Fahrenheit, K = Kelvin.
     */
    degree(value, from, to) {
        var result;
        to = to.toLowerCase();
        from = from.toLowerCase();

        switch(from) {
            case "c":
                if(to == "f") {
                    result = value * 9/5 + 32;
                }else if(to == "k") {
                    result = value + 273.15;
                }else if(to == "c") {
                    result = value;
                }else{
                    return "Cannot convert to: "+ to +". Use only C,F, or K.";
                }
                break;
            case "f":
                if(to == "c") {
                    result = (value - 32) * 9/5;
                }else if(to == "k") {
                    result = (value + 459.67) *  5/9;
                }else if(to == "f") {
                    result = value;
                }else{
                    return "Cannot convert to: "+ to +". Use only C,F, or K.";
                }
                break;
            case "k":
                if(to == "c") {
                    result = value - 273.15;
                }else if(to == "f") {
                    result = value * 9/5 - 459.67;
                }else if(to == "k") {
                    result = value;
                }else{
                    return "Cannot convert to: "+ to +". Use only C,F, or K.";
                }
                break;
            default: 
                result = "Cannot convert from: "+ from +". Use only C,F, or K.";
                break;
        }
        return result;
    }
    
}

module.exports = Convertis;