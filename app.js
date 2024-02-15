const { number } = require("yargs");

function intToRomanConverter(number){
    if(typeof number !== 'number' || !Number.isInteger(number) ){
        throw new Error("The input should be an int")
    }

    if( number <= 0 || number >=4000){
        throw new Error("It must be a number between 1 and 3999.")
    }

    const values =[
        {value:1000, letter:'M'},
        {value:900, letter:'CM'},
        {value:500, letter:'D'},
        {value:400, letter:'CD'},
        {value:100, letter:'C'},
        {value:90, letter:'XC'},
        {value:50, letter:'L'},
        {value:40, letter:'XL'},
        {value:10, letter:'X'},
        {value:9, letter:'IX'},
        {value:5, letter:'V'},
        {value:4, letter:'IV'},
        {value:1, letter:'I'},

    ]

    let result = '';

    for(let i = 0; i <values.length; i++ ){
        while(number >= values[i].value){
            result += values[i].letter
            number -= values[i].value
        }
    }
    console.log(result);
    return result;
}
const number2 = 300;
console.log(`The number ${number} to roman should be ${intToRomanConverter(number2)}`)
module.exports = intToRomanConverter;