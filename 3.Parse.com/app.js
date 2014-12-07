$(function () {
    var mainUrl = " https://api.parse.com/1/classes/"
    var ul = $('#countries');

    ajaxRequester.get(mainUrl + "Country",
        function (success) {
            console.log(success);

            for (var element in success.results) {
                console.log(success.results[element].name);

                displayElement(success.results[element]);

            }

        },
        function (error) {
            console.log("Error");
        });

    function displayElement(element) {       
        var div = $('<div>')
            .append($('<button>Delete</button>').attr('class', 'deleteBtn'))
            .append($('<button>Edit</button>').attr('class', 'editBtn'));
        
        var li = $('<li>').text(element.name).attr('id',element.objectId)
        div.appendTo(li);
        li.appendTo(ul);
    }


    ul.on('click', '.deleteBtn', function () {
        id =  $(this).parent().parent().attr('id');

   

        ajaxRequester.delete(mainUrl + 'Country/' + id,
            function () {
                $('#' + id).remove();
            }),
            function () {
    
            }
    })
});