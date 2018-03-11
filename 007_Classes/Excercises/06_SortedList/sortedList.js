let SortedList = (function () {

    class SortedList{
        constructor(){
            this.size = 0;
            this.list = [];
        }

        add(element) {
            this.list.push(element);
            this.size++;
            this.sort();
        }

        sort() {
            this.list = this.list.sort((a, b) => a - b);
        }

        remove(index) {
            this.checkIsValidIdex(index);

            this.list.splice(index, 1);
            this.size--;
        }

        get(index) {
            this.checkIsValidIdex(index);

            return this.list[index];
        }

        checkIsValidIdex(index) {
            if(index < 0 || index >= this.list.length){
                throw RangeError("Index out of range!");
            }
        }

        getList() {
            return this.list;
        }
    }

    return SortedList;
})();

let listSorter = new SortedList();
listSorter.add(2);
listSorter.add(1);
console.log(listSorter.get(1));
console.log(listSorter.size);
console.log(listSorter.getList());
listSorter.remove(0);
console.log(listSorter.size);
console.log(listSorter.getList());