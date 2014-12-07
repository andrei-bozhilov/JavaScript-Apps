$(function () {

    function changeColor() {
        var text = $('#text').val();
        var color = $('#color').val();

        try {
            $('.' + text).css("background-color", color);
        } catch (e) {
            console.log("There is no such class");
        }

    }

    $('#color-change-button').on('click', changeColor);
});