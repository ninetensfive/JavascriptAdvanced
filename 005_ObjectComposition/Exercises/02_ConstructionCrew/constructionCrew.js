function constructionCrew(worker) {
    if(worker.hasOwnProperty('handsShaking') && worker.handsShaking === true){
        worker.bloodAlcoholLevel += worker.weight * worker.experience * 0.1;
        worker.handsShaking = false;
    }

    return worker;
}

console.log(constructionCrew({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }    ));