(function () {
    Array.prototype.last = last;
    Array.prototype.skip = skip;
    Array.prototype.take = take;
    Array.prototype.sum = sum;
    Array.prototype.average = average;

    function last() {
        return this[this.length - 1];
    }

    function skip(n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }

        return result;
    }

    function take(n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }

        return result;
    }

    function sum() {
        let result = 0;
        for (let i = 0; i < this.length; i++) {
            result += Number(this[i]);
        }

        return result;
    }
    function average() {
        return this.sum() / this.length;
    }

})();

