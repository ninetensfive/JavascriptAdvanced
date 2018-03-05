function aggregates(numbers) {
    let sum = numbers.reduce((prev, curr) => prev + curr);
    let min = numbers.reduce((prev, curr) => Math.min(prev, curr));
    let max = numbers.reduce((prev, curr) => Math.max(prev, curr));
    let product = numbers.reduce((prev, curr) => prev * curr);
    let join = numbers.reduce((prev, curr) => '' + prev + curr);

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);
}

aggregates([1,2,3]);