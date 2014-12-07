(function ($) {
    $.fn.grid = function () {

        var rows = 0;
        var cols = 0;
        var header = $('<tr>');
        var body = $('<tbody>');

        if (!this.is('table')) {
            throw new Error("Grid plug-in for jQuery: Element must be table");
        }


        this.addHeader = function (arr) {
            cols = arr.length;
            //remove all nodes from element
            header.empty();

            for (var element in arr) {
                var th = $('<th>').text(arr[element]);
                th.appendTo(header);
            }

            header.appendTo(this);
            return this;
        };

        this.addRow = function (arr) {
            if (arr.length !== rows) {
                console.log("Grid plug-in for jQuery: Different length of elements in header and rows");
            }
            var tr = $('<tr>');

            for (var element in arr) {
                var td = $('<td>').text(arr[element]);
                td.appendTo(tr);
            }

            tr.appendTo(body).appendTo(this);

            return this;
        };

        return this;
    };
}(jQuery));

