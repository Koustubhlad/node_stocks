const cli = require("./cli");
const log = console.log;
log("Running stocks app");
log("=======================");
log("reading stocks app");
log("(0) stocks");



function Menu() {
    log("press 1 to record purches of stocks ");
    log("press 2 to record sell of stocks");
    log("press 3 to print the stock and show all the transactions");
    log("press 4 to list all stocks");
    log("press 5 to do the P&L calc");
    log("press 6 to exit");


    switch (cli.readInt("->")) {
        case 1:
            Purdchase();
            break;
        case 2:
            sell();
            break;
        case 3:
            transactions();
            break;
        case 4:
            list();
            break;
        case 5:
            calculate();
            break;
        case 6:
            break;
    }
}

function Purdchase() {
    log("purchasing.....")
}

function sell() {
    log("selling.....")
}

function transactions() {
    log("transaction of all stocks.....")
}

function list() {
    log("list of all stocks.....")
}

function calculate() {
    log("Profit loss calculation.....")
}

Menu();