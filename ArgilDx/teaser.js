/*TABS*/

const showTab = event => {
    let tabId = event.target.closest(".tablinks").getAttribute("data-tabID");
    let tabcontent = document.getElementsByClassName("tabcontent");
    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (j = 0; j < tablinks.length; j++) {
        tablinks[j].className = tablinks[j].className.replace(" active", "");
    }
    document.getElementById(tabId).style.display = "block";
    event.target.closest(".tablinks").className += " active";
}

let tabContentOne = document.getElementsByClassName("tabcontent");
//let tabLinkOne = document.getElementsByClassName("tablinks");
tabContentOne[0].style.display = "block";
//
document.querySelectorAll(".tablinks,.tablinks *").forEach((item, index) => {
    index == 0 ? item.classList.add("active") : null;
    item.addEventListener('mouseover', showTab, event)
});


/*ACCORDION*/

var accordionItem = document.getElementsByClassName('accordion__item');
var accordionHeading = document.getElementsByClassName('accordion__item-heading');
for (i = 0; i < accordionHeading.length; i++) {
    accordionHeading[i].addEventListener('click', toggleItem);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accordionItem.length; i++) {
        accordionItem[i].className = 'accordion__item close';
    }
    if (itemClass == 'accordion__item close') {
        this.parentNode.className = 'accordion__item open';
    }
}