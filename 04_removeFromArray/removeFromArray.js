/*const removeFromArray = function(arg1, arg2, arg3 , arg4, arg5) {
    let newArray = [];
    for(let i = 0; i<arg1.length; i++){
        if(arg1[i] !== arg2 && arg1[i] !== arg3 &&
            arg1[i] !== arg5 && arg1[i] !== arg4){
            newArray.push(arg1[i]);
        }
    }
    return newArray;
    //console.log(newArray);
};
removeFromArray([1,2,3,4], 1,2,3,4);
// Do not edit below this line*/

var removeFromArray = function(array, ...args) {
 return array.filter(a => !args.includes(a))
}
 module.exports = removeFromArray;