function subSum(arr, from, to) {
    if(from < 0){
        from = 0;
    }

    if(to > arr.length - 1){
        to = arr.length - 1;
    }

    let result=0;
    for(i = from; i <= to; i++){
        result += Number(arr[i]);
    }

    return result;
}

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));