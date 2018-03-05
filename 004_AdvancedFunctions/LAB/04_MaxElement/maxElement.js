function maxElement(numbers) {
    return numbers.reduce((p, c) => Math.max(p, c));
}

console.log(maxElement([10, 20, 5]));