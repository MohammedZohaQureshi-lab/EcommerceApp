// let liEls = document.querySelectorAll('ul li');
// let liActive = document.querySelectorAll('ul li.active');
// let index = 2;
// window.show = function (increase) {

//     index = index + increase;
//     if (index < liEls.length) {
//         debugger;
//         //index = Math.min(Math.max(index, 0), liActive.length - 1);
//         let counter = 3;
//         if (increase == 1) {
//             for (i = index; i >= 0; i--) {
//                 counter <= 0 ? liEls[i].className = "" : liEls[i].className = "active";
//                 counter--;
//             }
//         }
//         else {
//             index = Math.min(Math.max(index, 0), liActive.length - 1);
//             liEls[index].scrollIntoView({ behavior: 'smooth' });
//         }
//     }
//     else {
//         debugger;
//         console.log("Exceeded");
//     }



// }

class Carousal {
    constructor() {
        this.itemsMainDiv = ('.MultiCarousel');
        this.itemsDiv = ('.MultiCarousel-inner');
        this.itemWidth = "";
    }

    direction() {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    }
    ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }
    click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }
}

const carousalObj = new Carousal();
document.querySelector(".leftLst").addEventListener('click', carousalObj.direction);
document.querySelector(".rightLst").addEventListener('click', carousalObj.direction);
    // (function () {


    //     $('.leftLst, .rightLst').click(function () {
    //         debugger;

    //     });

    //     ResCarouselSize();




    //     $(window).resize(function () {
    //         ResCarouselSize();
    //     });

    //     //this function define the size of the items
    //     function ResCarouselSize() {
    //         var incno = 0;
    //         var dataItems = ("data-items");
    //         var itemClass = ('.item');
    //         var id = 0;
    //         var btnParentSb = '';
    //         var itemsSplit = '';
    //         var sampwidth = $(itemsMainDiv).width();
    //         var bodyWidth = $('body').width();
    //         $(itemsDiv).each(function () {
    //             id = id + 1;
    //             var itemNumbers = $(this).find(itemClass).length;
    //             btnParentSb = $(this).parent().attr(dataItems);
    //             itemsSplit = btnParentSb.split(',');
    //             $(this).parent().attr("id", "MultiCarousel" + id);


    //             if (bodyWidth >= 1200) {
    //                 incno = itemsSplit[3];
    //                 itemWidth = sampwidth / incno;
    //             }
    //             else if (bodyWidth >= 992) {
    //                 incno = itemsSplit[2];
    //                 itemWidth = sampwidth / incno;
    //             }
    //             else if (bodyWidth >= 768) {
    //                 incno = itemsSplit[1];
    //                 itemWidth = sampwidth / incno;
    //             }
    //             else {
    //                 incno = itemsSplit[0];
    //                 itemWidth = sampwidth / incno;
    //             }
    //             $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
    //             $(this).find(itemClass).each(function () {
    //                 $(this).outerWidth(itemWidth);
    //             });

    //             $(".leftLst").addClass("over");
    //             $(".rightLst").removeClass("over");

    //         });
    //     }


    //     //this function used to move the items
    //     function ResCarousel(e, el, s) {
    //         var leftBtn = ('.leftLst');
    //         var rightBtn = ('.rightLst');
    //         var translateXval = '';
    //         var divStyle = $(el + ' ' + itemsDiv).css('transform');
    //         var values = divStyle.match(/-?[\d\.]+/g);
    //         var xds = Math.abs(values[4]);
    //         if (e == 0) {
    //             translateXval = parseInt(xds) - parseInt(itemWidth * s);
    //             $(el + ' ' + rightBtn).removeClass("over");

    //             if (translateXval <= itemWidth / 2) {
    //                 translateXval = 0;
    //                 $(el + ' ' + leftBtn).addClass("over");
    //             }
    //         }
    //         else if (e == 1) {
    //             var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
    //             translateXval = parseInt(xds) + parseInt(itemWidth * s);
    //             $(el + ' ' + leftBtn).removeClass("over");

    //             if (translateXval >= itemsCondition - itemWidth / 2) {
    //                 translateXval = itemsCondition;
    //                 $(el + ' ' + rightBtn).addClass("over");
    //             }
    //         }
    //         $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    //     }

    //     //It is used to get some elements from btn
    //     function click(ell, ee) {
    //         var Parent = "#" + $(ee).parent().attr("id");
    //         var slide = $(Parent).attr("data-slide");
    //         ResCarousel(ell, Parent, slide);
    //     }

    // })();