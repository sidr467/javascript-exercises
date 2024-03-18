const sumAll = function(startNum, endNum) {
    sum = 0;
    if(startNum < 0 || endNum < 0
        || typeof startNum !== 'number' 
        || typeof endNum !== 'number'){
        return "ERROR";
    }
    else if(endNum<startNum){
        for(let i = endNum; i <= startNum;i++){
            sum += i;
        }
    return sum;
    //console.log(sum);
    }
    else{
        for(let i = startNum; i <= endNum; i++){
        sum += i;
        }
    return sum;
   // console.log(sum);
    }
};
sumAll(5,2);
// Do not edit below this line
module.exports = sumAll;
