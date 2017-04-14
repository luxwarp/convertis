/* This is the module file */
"use-strict"

class Convertis {
    constructor() {

    }

    /**
     * Convert different types of degree, like Celsius, Fahrenheit, Kelvin.
     * @param {number} value The value you want to convert.
     * @param {string} from From what type of degree, eg. C = Celsius, F = Fahrenheit, K = Kelvin.
     * @param {string} to To what type of degree, eg. C = Celsius, F = Fahrenheit, K = Kelvin.
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
     * @param {string} from From what type of weight, eg. G = Grams, Kg = Kilograms, T = Tons, Lb = Pounds, Oz = Ounces
     * @param {string} to To what type of weight, eg. G = Grams, Kg = Kilograms, T = Tons, Lb = Pounds, Oz = Ounces
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

    /**
     * Convert different types of measurements, like Millimeters, Centimeters, Meters, Kilometers, Inches, Feets, Yards, Miles
     * @param {number} value The value you want to convert.
     * @param {string} from From what type of measurement, eg. Mm = Millimeters, Cm = Centimeters, M = Meters, In = Inches, Ft = Feets, Yd = Yards, Mi = Miles, 
     * @param {string} to To what type of measurement, eg. Mm = Millimeters, Cm = Centimeters, M = Meters, In = Inches, Ft = Feets, Yd = Yards, Mi = Miles,
     */
    measurement(value, from, to) {
        var result;
        to = to.toLowerCase();
        from = from.toLowerCase();

        switch(from) {
            case "mm":
            case "millimeters":
                if(to == "mm" || to == "millimeters") {
                    result = value;
                }else if(to == "cm" || to == "centimeters") {
                    result = value * 0.1;
                }else if(to == "m" || to == "meters") {
                    result = value * 0.001; 
                }else if(to == "km" || to == "kilometers") {
                    result = value * 0.000001;
                }else if(to == "in" || to == "inches") {
                    result = value * 0.0393700787;
                }else if(to == "ft" || to == "feets") {
                    result = value * 0.0032808399;
                }else if(to == "yd" || to == "yards") {
                    result = value * 0.0010936133;
                }else if(to == "mi" || to == "miles") {
                    result = value * 0.00000062137;
                } else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            case "cm":
            case "centimeters":
                if(to == "mm" || to == "millimeters") {
                    result = value * 10;
                }else if(to == "cm" || to == "centimeters") {
                    result = value;
                }else if(to == "m" || to == "meters") {
                    result = value * 0.01; 
                }else if(to == "km" || to == "kilometers") {
                    result = value * 0.00001;
                }else if(to == "in" || to == "inches") {
                    result = value * 0.393700787;
                }else if(to == "ft" || to == "feets") {
                    result = value * 0.032808399;
                }else if(to == "yd" || to == "yards") {
                    result = value * 0.010936133;
                }else if(to == "mi" || to == "miles") {
                    result = value * 0.0000062137;
                } else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            case "m":
            case "meters":
                if(to == "mm" || to == "millimeters") {
                    result = value * 1000;
                }else if(to == "cm" || to == "centimeters") {
                    result = value * 100;
                }else if(to == "m" || to == "meters") {
                    result = value; 
                }else if(to == "km" || to == "kilometers") {
                    result = value * 0.001;
                }else if(to == "in" || to == "inches") {
                    result = value * 39.3700787;
                }else if(to == "ft" || to == "feets") {
                    result = value * 3.2808399;
                }else if(to == "yd" || to == "yards") {
                    result = value * 1.0936133;
                }else if(to == "mi" || to == "miles") {
                    result = value * 0.000621371192;
                } else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            case "km":
            case "kilometers":
                if(to == "mm" || to == "millimeters") {
                    result = value * 1000000;
                }else if(to == "cm" || to == "centimeters") {
                    result = value * 100000;
                }else if(to == "m" || to == "meters") {
                    result = value * 1000; 
                }else if(to == "km" || to == "kilometers") {
                    result = value;
                }else if(to == "in" || to == "inches") {
                    result = value * 39370.0787;
                }else if(to == "ft" || to == "feets") {
                    result = value * 3280.8399;
                }else if(to == "yd" || to == "yards") {
                    result = value * 1093.6133;
                }else if(to == "mi" || to == "miles") {
                    result = value * 0.621371192;
                } else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            case "in":
            case "inches":
                if(to == "mm" || to == "millimeters") {
                    result = value * 25.4;
                }else if(to == "cm" || to == "centimeters") {
                    result = value * 2.54;
                }else if(to == "m" || to == "meters") {
                    result = value * 0.0254; 
                }else if(to == "km" || to == "kilometers") {
                    result = value * 0.0000254;
                }else if(to == "in" || to == "inches") {
                    result = value;
                }else if(to == "ft" || to == "feets") {
                    result = value * 0.0833333333;
                }else if(to == "yd" || to == "yards") {
                    result = value * 0.0277777778;
                }else if(to == "mi" || to == "miles") {
                    result = value * 0.0000157828283;
                } else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            case "ft":
            case "feets":
                if(to == "mm" || to == "millimeters") {
                    result = value * 304.8;
                }else if(to == "cm" || to == "centimeters") {
                    result = value * 30.48;
                }else if(to == "m" || to == "meters") {
                    result = value * 0.3048; 
                }else if(to == "km" || to == "kilometers") {
                    result = value * 0.0003048;
                }else if(to == "in" || to == "inches") {
                    result = value * 12;
                }else if(to == "ft" || to == "feets") {
                    result = value;
                }else if(to == "yd" || to == "yards") {
                    result = value * 0.333333333;
                }else if(to == "mi" || to == "miles") {
                    result = value * 0.000189393939;
                } else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            case "yd":
            case "yards":
                if(to == "mm" || to == "millimeters") {
                    result = value * 914.4;
                }else if(to == "cm" || to == "centimeters") {
                    result = value * 91.44;
                }else if(to == "m" || to == "meters") {
                    result = value * 0.9144; 
                }else if(to == "km" || to == "kilometers") {
                    result = value * 0.0009144;
                }else if(to == "in" || to == "inches") {
                    result = value * 36;
                }else if(to == "ft" || to == "feets") {
                    result = value * 3;
                }else if(to == "yd" || to == "yards") {
                    result = value;
                }else if(to == "mi" || to == "miles") {
                    result = value * 0.000568181818;
                } else{
                    return "Cannot convert to: "+ to +".";
                }
                break;
            case "mi":
            case "miles":
                if(to == "mm" || to == "millimeters") {
                    result = value * 1609344;
                }else if(to == "cm" || to == "centimeters") {
                    result = value * 160934.4;
                }else if(to == "m" || to == "meters") {
                    result = value * 1609.344; 
                }else if(to == "km" || to == "kilometers") {
                    result = value * 1.609344;
                }else if(to == "in" || to == "inches") {
                    result = value * 63360;
                }else if(to == "ft" || to == "feets") {
                    result = value * 5280;
                }else if(to == "yd" || to == "yards") {
                    result = value * 1760;
                }else if(to == "mi" || to == "miles") {
                    result = value;
                } else{
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