function sortArray(array, sortMethod) {
    let sortFunctions={
        asc: (a, b) => a - b,
        desc: (a,b) => b - a
    }

    return array.sort(sortFunctions[sortMethod]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc').join(", "));