const readlineSync = require("readline-sync")

function readInt(propmtStiing) {
    let totalPeople = NaN;
        
    while (totalPeople != NaN) {
        input = readlineSync.question(propmtStiing);
        totalPeople = parseInt(input)      
        if (!isNaN(totalPeople))  break;
    }
    return totalPeople;
}

function readfloat(propmtStiing) {
    let totalPeople = NaN;
        
    while (totalPeople != NaN) {
        input = readlineSync.question(propmtStiing);
        totalPeople = parseFloat(input)      
        if (!isNaN(totalPeople))  break;
    }
    return totalPeople;
}


function readstring(propmtStiing) {
    let output = "";
        
    while (output == "") {
        output = readlineSync.question(propmtStiing);
        if (!output == "")  break;
    }
    return output;
}


module.exports = {
  readInt,
 readfloat,
 readstring   
}