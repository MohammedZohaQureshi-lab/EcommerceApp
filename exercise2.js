function HTMLElement() {
    this.click = function () {
        console.log("click")
    }
}
const htms = new HTMLElement();
HTMLElement.prototype.focus = function () {
    console.log("focus")
}
function HTMLSelectElement() { }