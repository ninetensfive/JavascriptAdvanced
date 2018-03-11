class Textbox {
    constructor(selector, regex){
        this.selector = selector;
        this._invalidSymbols = regex;
        this._value = null;
        this._elements = $(selector);

        let self = this;
        for (let element of this._elements) {
            $(element).on('input change paste keydown', function () {
                self.value = $(this).val();
                console.log(self.isValid($(this).val()));
            })
        }
    }

    get value(){
        return $(this._elements[0]).val();
    }

    set value(newValue){
        for (let element of this._elements) {
            $(element).val(newValue);
        }

        this._value = newValue;
    }

    get elements(){
        return this._elements;
    }

    isValid(newValue){
        let result = !this._invalidSymbols.test(this.value);

        return result;
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});