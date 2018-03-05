(function () {
    function ensureStart(str) {
        let result = this.valueOf();
        if(!this.startsWith(str)){
            result = str + this;
        }

        return result;
    }

    function ensureEnd(str) {
        let result = this.valueOf();
        if(!this.endsWith(str)){
            result = this + str;
        }

        return result;
    }
    
    function isEmpty() {
        if(this.length === 0)
        {
            return true;
        }

        return false;
    }
    
    function truncate(n) {
        let  input = this.valueOf();
        let result = '';

        if(this.length <= n){
            return input;
        }

        if(input.indexOf(' ') < 0){
            result = input.addEllipsis(n);
            return result;
        }

        let words = input.split(' ');
        for (let word of words) {
            let finalLength= result.length + word.length + 3;
            if(finalLength <= n){
                result += word + ' ';
            }else{
                break;
            }
        }

        result = result.trimRight();
        result = result.addEllipsis(n);

        return result;
    }
    
    function addEllipsis(n) {
        let result = this.valueOf();
        let startEllipsis = n - 3 >= 0 ? n - 3 : 0;
        
        if(result.length > n){
            result = result.slice(0, startEllipsis);
        }

        let counter = 0;
        for (let i = startEllipsis ; i < n; i++) {
            counter++;
            result +='.';
            if(counter === 3){
                break;
            }
        }

        return result;
    }
    
    function format(string, ...params) {
        for (let i = 0; i < params.length; i++) {
            let placeHolderRegex = new RegExp('\\{' + i + '\\}', 'g');
            string = string.replace(placeHolderRegex, params[i]);
        }
        return string;
    }

    String.prototype.truncate = truncate;
    String.prototype.ensureStart = ensureStart;
    String.prototype.ensureEnd = ensureEnd;
    String.prototype.isEmpty = isEmpty;
    String.prototype.addEllipsis = addEllipsis;

    String.format = format;


    //Input tests
    //let result = String.format('{0} jumps {0} {1}',
    //  'dog');
    // let result = "hello my string".truncate(14)
    //    .truncate(8)
    //    .truncate(4)
    //    .truncate(2);
    // let testString = 'the quick brown fox jumps over the lazy dog';
    // let result = testString.truncate(43);
    //console.log(result);
})();