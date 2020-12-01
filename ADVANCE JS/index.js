// CALL STACK & MEMOTY HEAP

const numb = 610; //allocate memory for a number
const str = 'some text'; //allocate memory for a string
const human = {   //allocate memory for an  object.... and its values
    first: 'Zoha',
    last: 'Qureshi'
}

function substract(num) {
    return num - 2;
}
function claculate() {
    const sum = 4 + 5;
    return substract(sum);
}
debugger;
claculate();