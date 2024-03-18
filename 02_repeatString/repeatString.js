const repeatString = function(string,num) {
    if (num < 0) return "ERROR";
    let b = "";
    for(let a=0; a<num; a++ ){
        b += string;
    }
    return b;
};
// Do not edit below this line
module.exports = repeatString;
