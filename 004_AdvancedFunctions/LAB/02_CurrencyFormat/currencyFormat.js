function getDollarFormatter(currencyFormatterFunction) {
    function dollarFormatter(value) {
        return currencyFormatterFunction(',', '$', true, value);
    }
    return dollarFormatter;
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let df = getDollarFormatter(currencyFormatter);
let result = df(33);
console.log(result);