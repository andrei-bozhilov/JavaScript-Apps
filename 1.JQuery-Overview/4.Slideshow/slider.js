$(function () {
    var left,
        right,
        isClicked = false,
        current = 0,
        interval = 5000;

    left = $('#left');
    right = $('#right');

    function slide(direction) {
        //isClicked prevent execution until it is over
        if (!isClicked) {

            isClicked = true;
            var sections = $('div#slideshow>section');

            sections.eq(current).fadeOut(function () {
                //get current section base on direction
                if (direction == 'left') {
                    if (current == 0) {
                        current = sections.length - 1;
                    } else {
                        current--;
                    }
                } else if (direction == 'right') {
                    if (current == sections.length - 1) {
                        current = 0;
                    } else {
                        current++;
                    }
                }

                sections.eq(current).fadeIn(function () {
                    isClicked = false;
                });
            });
        }
    }

    function slideRight() {
        slide('right');
    }

    function slideLeft() {
        slide('left');
    }

    //add event listeners
    left.click(slideLeft);
    right.click(slideRight);

    //set interval for execution
    setInterval(slideRight, interval);
});