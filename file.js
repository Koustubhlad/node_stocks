'use strict';

const fs = require('fs');


function Read() {

    try {

        let data = fs.readFileSync('data.json');
        let portfolio = JSON.parse(data);
        console.log(portfolio)
        return portfolio;
    } catch (error) {
        return [];

    }

}

function Write(object) {
    let data = JSON.stringify(object);
    fs.writeFileSync('data.json', data);

}


module.exports = {
    Read,
    Write
}