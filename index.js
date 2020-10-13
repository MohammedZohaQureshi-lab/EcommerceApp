//Factory Cunction
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('Factory draw')
        }
    }
}
const circle = createCircle(1);
//circle.draw();

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Constructor draw')
    }
}

const another = new Circle(2);
//another.draw();

/*********************************************************/
//Values vs Reference

//Prmitive: Two independent variables
let number = 10;
function increase(number) {
    number++;
}
increase(number);
//console.log(number)


//Reference: reference to same var
let obj = { value: 10 };
function increment(obj) {
    obj.value++;
}
increment(obj);
//console.log(obj);

/*********************************************************/

//Adding Deleting properties
function NewCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Constructor draw')
    }
}

const newCircle = new NewCircle(20);
newCircle.location = { x: 1 };
//console.log(newCircle);
delete newCircle.location;


/*********************************************************/
//Iteration or enumerating
/*for (const key in newCircle) {
    console.log(key, circle[key]);
}
for (const key in newCircle) {
    if (typeof (circle[key]) !== "function") console.log(key, circle[key]);
}
//Returns objects keys in form of array
const myKeys = Object.keys(circle);
console.log(myKeys);

//chek existance of a property or method in an object
if ('draw' in newCircle) console.log("Is present")
else console.log("Not present")*/


/*********************************************************/


//ABSTRACTION

// getter and setter
function CircleTwo(radius) {
    this.radius = radius;
    let defaultValue = { x: 0, y: 0 };
    let computeLocation = function (factor) {
        console.log(factor);
    }
    this.draw = function () {
        computeLocation(0.5)
        console.log('Constructor draw')
    }
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultValue;
        },
        set: function (value) {
            if (!value.x || !value.y) throw new Error("Invalid value")
            defaultValue = value;
        }
    });
}

const circle2 = new CircleTwo(20);
circle2.defaultLocation = { x: 2, y: 3 };