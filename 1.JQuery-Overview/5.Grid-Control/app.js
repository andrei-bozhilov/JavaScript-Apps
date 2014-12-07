$(function () {
    var grid = $('#myGrid').grid();
    grid.addHeader(['First Name', 'Last Name', 'Age']);
    grid.addHeader(['First Name', 'Last Name', 'Age']);
    grid.addRow(['Bay', 'Ivan', 50]);
    grid.addRow(['Kaka', 'Penka', 26]);


    //get biggest width and put it to all td
    var biggestWidth = Math.max.apply(null, $('td').map(function () {
        return $(this).width();
    }).get());

    $('td').width(biggestWidth + 5);



    console.log($('<thead>'));

});