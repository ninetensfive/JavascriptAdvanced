function argumentInfo() {
    let argumentTypes = [];
    for(let argument of arguments){
        let argumentType = typeof argument;
        console.log(argumentType + ": " + argument);

        if(argumentTypes[argumentType] === undefined) {
            argumentTypes[argumentType] = 1;
        }else {
            argumentTypes[argumentType]++;
        }
    }

    for(let argumentType of getSortedKeys(argumentTypes)){
        console.log(argumentType + " = " + argumentTypes[argumentType]);
    }

    function getSortedKeys(obj) {
        var keys = Object.keys(obj);
        return keys.sort(function(a,b){return obj[b]-obj[a]});
    }
}

argumentInfo(1, "asd", a => console.log(a), "123");