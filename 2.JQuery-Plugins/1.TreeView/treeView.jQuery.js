(function ($) {
    $.fn.treeView = function () {
        var $this = $(this);

        $this.children().children().hide();

        var li = $this.children('li');

        function unhideChild() {
            var $children = $(this);
            $children.find('>li').show();
           
        }

        li.click(unhideChild);

        return $this;
    };
}(jQuery));
