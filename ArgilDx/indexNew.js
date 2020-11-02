(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    document.querySelector('.rightLst').addEventListener('click', (e) => {
        var condition = e.target.className.includes("leftLst");
        if (condition)
            click(0, e.target);
        else
            click(1, e.target)
    }

    );

    ResCarouselSize();




    window.onresize = ResCarouselSize();


    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;

        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = document.querySelector(itemsMainDiv).offsetWidth;
        var bodyWidth = document.querySelector('body').offsetWidth;
        var newArray = Array.prototype.slice.call(document.querySelectorAll(itemsDiv));
        newArray.forEach(element => {
            var currentClassname = "." + element.className;
            id = id + 1;
            var itemNumbers = document.querySelectorAll(currentClassname + " " + itemClass).length;
            btnParentSb = document.querySelector(currentClassname).parentElement.getAttribute(dataItems);
            itemsSplit = btnParentSb.split(',');

            document.querySelector(currentClassname).parentElement.setAttribute("id", "MultiCarousel" + id);


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

            document.querySelector(currentClassname).cssText = 'transform: translateX(0px); width: ' + (itemWidth * itemNumbers);
            Array.prototype.slice.call(document.querySelectorAll(currentClassname + ' ' + itemClass)).forEach(element => {
                element.style.width = itemWidth + "px";
            });


            document.querySelector(".leftLst").classList.add("over");
            document.querySelector(".rightLst").classList.remove("over");
        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = document.querySelectorAll(el + ' ' + itemsDiv).style.getPropertyValue('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        debugger;
        if (e == 0) {
            debugger;
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            document.querySelector(el + ' ' + rightBtn).classList.remove("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                document.querySelector(el + ' ' + leftBtn).classList.add("over");
            }
        }
        else if (e == 1) {
            debugger;
            var itemsCondition = document.querySelector(el + ' ' + itemsDiv).offsetWidth - document.querySelector(el).offsetWidth;
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            document.querySelector(el + ' ' + leftBtn).classList.remove("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                document.querySelector(el + ' ' + rightBtn).classList.add("over");
            }
        }
        document.querySelector(el + ' ' + itemsDiv).style.transform = 'translateX(' + -translateXval + 'px)';
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        debugger;
        var Parent = "#" + ee.parentElement.getAttributeNode("id").value;
        var slide = document.querySelector(Parent).getAttributeNode("data-slide").value;
        ResCarousel(ell, Parent, slide);
    }

})();