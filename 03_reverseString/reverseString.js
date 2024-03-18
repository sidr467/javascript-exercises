const reverseString = function(string) {
    let splitedString = string.split("");
    let result = "";
    for(let i = splitedString.length-1; i>=0; i--){
        result += splitedString[i];
    }
    return result;
};
// Do not edit below this line
module.exports = reverseString;
