const cli = require("./cli");
const file = require("./file");

const log = console.log;


var portFolio = [];
function Init() {
    portFolio = file.Read();
    log(portFolio);
}

const CreateStock = function (symbol) {
    
    for (let index = 0; index < portFolio.length; index++) {
        const element = portFolio[index];
        if(element.SYMBOL === symbol)
        return element;
        
    }
    const newStock =  {
        SYMBOL: symbol,
        Qty: 0,
        transctions: []
    }
    portFolio.push(newStock);
    return newStock;
}

const CreateTransaction = function (sym, price, qty, t_type) {
    if (t_type != 'B' && t_type != 'S') {
        console.log('transaction type can be B or S')
        return null;
    }
    return {
        SYMBOL: sym,
        price: price,
        qty: qty,
        t_type: t_type,
        date: new Date()
    }

}


function Purdchase() {
    log("purchasing.....")

    const sym = cli.readstring("enter the stock symbol to add : ");
    const qty = cli.readInt("enter the Qty :");
    const price = cli.readfloat("Buying Price :");

    const Stock = CreateStock(sym);
    const transction  = CreateTransaction(sym , price ,qty , "B")
    Stock.transctions.push(transction)
    Stock.Qty = 0;
    Stock.transctions.forEach(tras => {
        if(tras.t_type === "B")
            Stock.Qty = Stock.Qty + tras.qty 
        else
        Stock.Qty = Stock.Qty - tras.qty
    });
    file.Write(portFolio)
    console.dir(portFolio)

}
function List() {
    log("list of all stocks.....")
    console.table(portFolio)
}




module.exports = {
    Purdchase,
    Init,
    List
}