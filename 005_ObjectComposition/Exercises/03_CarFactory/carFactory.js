function carFactory(order) {
    let engines = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500}
    ];

    let outputOrder = {
        model: order.model,
        engine: getEngine(),
        carriage: {type: order.carriage, color: order.color},
        wheels: getWheels()
    }

    return outputOrder;

    function getEngine() {
        let matchedEngine = {};
        let difference = Number.MAX_VALUE;

        for (let engine of engines) {
            let currentDifference = Math.abs(engine.power - order.power);
            if(currentDifference < difference){
                difference = currentDifference;
                matchedEngine = engine;
            }
        }

        return matchedEngine;
    }

    function getWheels() {
        let wheels = [];
        let wheel;
        if(order.wheelsize % 2 === 0){
            wheel = order.wheelsize - 1;
        }else {
            wheel = order.wheelsize;
        }

        for (var i = 0; i < 4; i++) {
            wheels.push(wheel);
        }

        return wheels;
    }
}


console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))