let Extensible = (function () {
    let counter = 0;

    class Extensible{
        constructor(){
            this.id = counter++;
        }

        extend(template){
            for (let property in template) {
                if (typeof template[property] === 'function') {
                    Object.getPrototypeOf(this)[property] = template[property];
                } else {
                    this[property] = template[property];
                }
            }
        }
    }

    return Extensible;
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();

console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);

obj1.extend({
    extensionMethod: function () {return 1},
    extensionProperty: 'someString'
});

console.log(obj1);
console.log(obj1.__proto__);