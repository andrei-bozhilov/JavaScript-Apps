$(function () {


    function firstLetterToUpper(str) {
        return str[0].toUpperCase() + str.substr(1, str.length - 1);
    }

    function generateTable(input) {

        var table = $('<table>');
        var thead = $('<thead>');
        var tbody = $('<tbody>');
        var trHead = $('<tr>');

        for (var i in input) {
            var field = input[i];
            var trBody = $('<tr>');

            for (var label in field) {
                if (i == 0) {
                    $('<th>').text(firstLetterToUpper(label)).appendTo(trHead);
                }

                $('<td>').text(field[label]).appendTo(trBody);
            }

            trBody.appendTo(tbody);
        }

        trHead.appendTo(thead);
        thead.appendTo(table);
        tbody.appendTo(table);
        table.appendTo($('<div>').appendTo('body'));
    }

    var input = [{ "manufacturer": "BMW", "model": "E92 320i", "year": 2011, "price": 50000, "class": "Family" },
{ "manufacturer": "Porsche", "model": "Panamera", "year": 2012, "price": 100000, "class": "Sport" },
{ "manufacturer": "Peugeot", "model": "305", "year": 1978, "price": 1000, "class": "Family" }];


    generateTable(input);

    //get biggest width and apply it to all td
    var biggestWidth = Math.max.apply(null, $('td').map(function () {
        return $(this).width();
    }).get());

    $('td').width(biggestWidth + 5);
});