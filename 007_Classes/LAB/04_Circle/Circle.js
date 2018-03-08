class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    get area(){
        return Math.PI * Math.pow(this.radius, 2);
    }

    set diameter(diameter){
        this.radius = diameter / 2;
    }

}