const _items = new WeakMap();
class Stack {
    constructor() {
        _items.set(this, [])
    }
    push(obj) {
        _items.get(this).push(obj)
    }
    pop() {
        const item = _items.get(this);
        if (item.length === 0) throw new Error("Stack is empty");
        return item.pop()
    }
    peek() {
        const item = _items.get(this);
        if (item.length === 0) throw new Error("Stack is empty");
        return item[item.length - 1]
    }

    get count() {
        return _items.get(this).length;
    }
}

const person = {
    name: "Zoha",
    birthYear: 1994,
    age: function () {
        return 2020 - this.birthYear
    }
}
