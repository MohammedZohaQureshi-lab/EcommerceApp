function HTMLImageElement(src) {
    this.src = src;
    this.render = function () {
        return `<img src="${this.src}" />`
    }
}
HTMLImageElement.prototype.focus = function () {
    console.log("focus")
}
function HTMLSelectElement(items = []) {
    this.items = items;
    this.addItem = function (item) {
        this.item.push(item)
    }
    this.removeItem = function (item) {
        this.item.splice(this.item.indexOf(item), 1);
    }
    this.render = function () {
        return `<select>\n${this.items.map(item => `<option>${item}</option>`).join("\n")}\n</select>`;
    }
}
HTMLSelectElement.prototype = new HTMLImageElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;
const sObj = new HTMLSelectElement();
const iObj = new HTMLImageElement("https://google");
sObj.items = ["a", "ab", "abc"];
const elements = [sObj, iObj];
for (let element of elements) {
    console.log(element.render())
}
