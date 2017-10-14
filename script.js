(function($){

    var twitter_widget = function(element,options){
        this.element = $(element);
    };


    twitter_widget.prototype = {
        constructor:twitter_widget,
        init:function(text){
            var html = '<div class="main">'+
                            '<div class="header"></div>'+
                            '<div class="content">' +
                                '' +
                                '' +
                                '' +
                                '</div>'+
                        '</div>'
          //  $(html).insertBefore(this.element);
            $(this.element).remove();
            $(".heart").click(function(){
                console.log("heart");
            });
            $(".folow-button").click(function(){
                console.log("folow-button");
            });

        }
    };



    $.fn.twitter = function(text){
        var twit =   new twitter_widget(this,null);
        twit.init(text);

    };






    $.fn.twitter.Constructor = twitter_widget;

})(jQuery);
