//'use strict';
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function () { }
    }

    //Instance Method
    draw() {
        console.log("draw")
    }
    //Static method(Accessible through class itself, not visible in object created fr the class)
    static parse(str) {
        const test = JSON.parse(str).radius;
        return new Circle(test);
    }
}


const c = Circle.parse('{ "radius": 1 }');
//console.log(c);
class Maths {
    static abs() {
        console.log('abs')
    }
}

// THIS KEYWORD using js function
const CircleNew = function () {
    this.draw = function () {
        console.log(this)
    }
}
const cn = new CircleNew();

//MEthod call
const draw = cn.draw;
draw();

//THIS KEYWORD  using CLASS 
class CircleClass {
    draw1() {
        console.log(this)
    }
}
const cc = new CircleClass();

//MEthod call
const draw1 = cc.draw1;
draw1();

//Private properties and methods(ABSTRACTION)

//1. Symbol()

const _radius = Symbol();

class CirclePrivate {
    constructor(radius) {
        this[_radius] = radius;
    }
}
//const cp = new CirclePrivate(10);

// cp._radius OR cp.radius  will not give any result since it wont b accessible this way


//2. Computed propertyname part of using symbol
const _draw = Symbol();
class CirclePrivate2 {
    constructor(radius) {
        this.radius = radius;
    }
    [_draw]() {
        console.log("hiddend draw thats shows as symbol in the class prototype");
    }
}

const cp = new CirclePrivate2(10);

//3. WeakMaps (New Type in ES6)

const _newRadius = new WeakMap(); // its like dictionary, where keys are objects and values acn be anything. 
//The name weak map because the keys are weak, so if ther are no references to the keys they will be jst gabage collector
const _moves = new WeakMap();
class CirclePrivate3 {
    constructor(radius) {
        _newRadius.set(this, radius);//first arg is key and has to be an object not  a symol
        // _moves.set(this, function () { // here the this be undefined, coz the class body is implemented in strict mode, due to this  the 
        //     //this pointing to window object will be undefined. 

        //     console.log("move", this)
        // })
        _moves.set(this, () => {
            console.log("move", this)
        })

        //to set proper value of this and access instance of circle obj, v use arrow function, coz they use the this value of thir containing function
    }
    draw() {
        console.log(_newRadius.get(this));
        console.log(_moves.get(this)());
    }
}

const cp3 = new CirclePrivate3(10);


//Getters and setters