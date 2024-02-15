function intToRomanConverter(number){
    if(typeof number !== 'number' || !Number.isInteger(number) ){
        throw new Error("It must be a number between 1 and 3999.")
    }else{
        console.log(number);
    }

}

module.exports = intToRomanConverter;