function elemelons() {
    class Melon{
        constructor(weight, melonSort){
            if(new.target === Melon){
                throw new TypeError('You cannot instantiate an abstract class');
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return `Sort: ${this.melonSort}\n` +
                `Element Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this._element = 'Water';
        }

        toString(){
            return `Element: ${this._element}\n` +
                super.toString();
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this._element = 'Fire';
        }

        toString(){
            return `Element: ${this._element}\n` +
                super.toString();
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this._element = 'Earth';
        }

        toString(){
            return `Element: ${this._element}\n` +
                super.toString();
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this._element = 'Air';
        }

        toString(){
            return `Element: ${this._element}\n` +
                super.toString();
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this._morphElements = ['Water', 'Fire', 'Earth', 'Air'];
            this._morphCurrentElement = 0;
            this._element = this._morphElements[this._morphCurrentElement];
        }

        morph(){
            this._morphCurrentElement = ((this._morphCurrentElement  + 1) % this._morphElements.length);
            this._element = this._morphElements[this._morphCurrentElement];
        }
    }

    return {Melon, Watermelon, Earthmelon, Airmelon, Firemelon, Melolemonmelon};
}

let melons = elemelons();
let Melon = melons.Melon;
let Watermelon = melons.Watermelon;

//let test = new Melon(100, "Test");
//Throws error

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100