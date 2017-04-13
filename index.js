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
            case "celsius":
                if(to == "f" || to == "fahrenheit") {
                    result = value * 9/5 + 32;
                }else if(to == "k" || to == "kelvin") {
                    result = value + 273.15;
                }else if(to == "c" || to == "celsius") {
                    result = value;
                }else{
                    return "Cannot convert to: "+ to +". Use only C, F, or K.";
                }
                break;
            case "f":
            case "fahrenheit":
                if(to == "c" || to == "celsius") {
                    result = (value - 32) * 9/5;
                }else if(to == "k" || to == "kelvin") {
                    result = (value + 459.67) *  5/9;
                }else if(to == "f" || to == "fahrenheit") {
                    result = value;
                }else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            case "k":
            case "kelvin":
                if(to == "c" || to == "celsius") {
                    result = value - 273.15;
                }else if(to == "f" || to == "fahrenheit") {
                    result = value * 9/5 - 459.67;
                }else if(to == "k" || to == "kelvin") {
                    result = value;
                }else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            default: 
                result = "Cannot convert from: "+ from +".";
                break;
        }
        return result;
    }

    /**
     * Convert different types of weight, like Grams, Kilograms, Tons, Pounds, Ounces
     * @param {number} value The value you want to convert.
     * @param {string} from From what type of weight, eg. G = Grams, Kg = Kilograms
     * @param {string} to To what type of weight, G = Grams, 
     */
    weight(value, from, to) {
        var result;
        to = to.toLowerCase();
        from = from.toLowerCase();

        switch(from) {
            case "g":
            case "grams":
                if(to == "kg" || to == "kilograms") {
                    result = value * 0.001;
                }else if(to == "t" || to == "tons") {
                    result = value * 0.000001;
                }else if(to == "oz" || to == "ounces") {
                    result = value * 0.03527396195;
                }else if(to == "lb" || to == "pounds") {
                    result == value * 0.00220462262185;
                }else if(to == "g" || to == "grams") {
                    result = value;
                }else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            case "kg":
            case "kilograms":
                if(to == "g" || to == "grams") {
                    result = value * 1000;
                }else if(to == "t" || to == "tons") {
                    result = value * 0.001;
                }else if(to == "oz" || to == "ounces") {
                    result = value * 35.2739619;
                }else if(to == "lb" || to == "pounds") {
                    result == value * 2.20462262;
                }else if(to == "kg" || to == "kilograms") {
                    result = value;
                }else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            case "t":
            case "tons":
                if(to == "g" || to == "grams") {
                    result = value * 1000000;
                }else if(to == "kg" || to == "kilograms") {
                    result = value * 1000;
                }else if(to == "oz" || to == "ounces") {
                    result = value * 35273.9619;
                }else if(to == "lb" || to == "pounds") {
                    result == value * 2204.62262185;
                }else if(to == "t" || to == "tons") {
                    result = value;
                }else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            case "oz":
            case "ounces":
                if(to == "g" || to == "grams") {
                    result = value * 28.3495231;
                }else if(to == "kg" || to == "kilograms") {
                    result = value * 0.0283495231;
                }else if(to == "t" || to == "tons") {
                    result = value * 0.00002834952;
                }else if(to == "lb" || to == "pounds") {
                    result == value * 0.0625;
                }else if(to == "oz" || to == "ounces") {
                    result = value;
                }else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            case "lb":
            case "pounds":
                if(to == "g" || to == "grams") {
                    result = value * 453.59237;
                }else if(to == "kg" || to == "kilograms") {
                    result = value * 0.45359237;
                }else if(to == "t" || to == "tons") {
                    result = value * 0.00045359237;
                }else if(to == "oz" || to == "ounces") {
                    result == value * 16;
                }else if(to == "lb" || to == "pounds") {
                    result = value;
                }else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            default: 
                result = "Cannot convert from: "+ from +".";
                break;
        }
        return result; 
    }
    
}

module.exports = Convertis;