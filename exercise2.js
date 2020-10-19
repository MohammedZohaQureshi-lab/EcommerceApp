function HTMLElement() {
    this.click = function () {
        console.log("click")
    }
}
HTMLElement.prototype.focus = function () {
    console.log("focus")
}
function HTMLSelectElement(item = []) {
    this.item = item;
    this.addItem = function (item) {
        this.item.push(item)
    }
    this.removeItem = function (item) {
        this.item.splice(this.item.indexOf(item), 1);
    }
}
HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLElement;
const htms = new HTMLSelectElement();

