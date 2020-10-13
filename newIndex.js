//INHERITANCE(prototypical)

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}

const circle = new Circle(2);


//PROPERTY OBJECTS

let person = { name: "Zoha" };
//console.log(Object.keys(person));
for (let key in person) {
    //console.log(key);
}

let objectBase = Object.getPrototypeOf(person);
//console.log(objectBase);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
//console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: false
})
person.name = "Qureshi"
///console.log(Object.keys(person));


/* --------------------------------------------------------------------------------------- */

//Prototype & Instances Members

//Instance Members
function CircleNew(radius) {
    this.radius = radius;
}
extend(CircleNew, Shape);
//Prototype Members
CircleNew.prototype.draw = function () {
    console.log('draw');
}
// const c1 = new CircleNew(1);
// const c2 = new CircleNew(2);
CircleNew.prototype.toString = function () {
    return "Circle with Radius" + this.radius
}

function Shape(color) {
    this.color = color;
}
Shape.prototype.duplicate = function () {
    console.log('duplicate')
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Square(size,color) {
    this.size = size;
    Shape.call(this,color)
}

extend(Square, Shape);
const c3 = new CircleNew(1);
const sq = new Square(10,"green");
