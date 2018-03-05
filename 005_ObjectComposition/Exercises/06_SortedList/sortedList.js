function sortedList() {
    let size = 0;
    let list = [];
    
    function add(element) {
        list.push(element);
        this.size++;
        sort();
    }

    function sort() {
        list = list.sort((a, b) => a - b);
    }

    function remove(index) {
        checkIsValidIdex(index);

        list.splice(index, 1);
        this.size--;
    }
    
    function get(index) {
        checkIsValidIdex(index);

        return list[index];
    }

    function checkIsValidIdex(index) {
        if(index < 0 || index >= list.length){
            throw RangeError("Index out of range!");
        }
    }

    function getList() {
        return list;
    }

    return {
        size: size,
        add,
        remove,
        get,
        getList
    }
}

let listSorter = sortedList();
listSorter.add(2);
listSorter.add(1);
console.log(listSorter.get(1));
console.log(listSorter.size);
console.log(listSorter.getList());
listSorter.remove(0);
console.log(listSorter.size);
console.log(listSorter.getList());
//listSorter.remove(-1);
