let add = (function() {
    let result = 0;

    function sum(number) {
        result += number;
        sum.toString = () => result;

        return sum;
    }

   return sum;
})();

console.log((add(1)(2)).toString());