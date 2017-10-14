!(function($){
  console.log("z1")


  $(".posts").append("<ul></ul>");
  $.getJSON("data.json", function(json) {
    $.each( json, function( key, val ) {
      $(".posts ul").append(
              '<li class="collection-item avatar">'+
                  '<div class="wrapper-top">'+
                        '<img src="'+val.avatar+'" alt="">'+
                        '<span class="title_header">'+val.name+'</span>'+
                        '<span class="day">'+val.day+'</span>'+
                    '</div>'+
                    '<p>'+val.message+'</p>'+
                '</li>')
    });
    console.log(json);
  });
  console.log("z2")


  $(".share").click(function(event){
      console.log("share ");
  });
  $(".heart").click(function(event){
      event.preventDefault();
      var like = parseInt($(".likes:first-child h1").text())+1;
      $(".likes:first-child h1").text(like);
      console.log("heart "+like);
  });
  $(".folow-button").click(function(event){
      event.preventDefault();
      var follow = parseInt($(".likes:last-child h1").text())+1;
      $(".likes:last-child h1").text(follow);
      console.log("folow-button");
  });
  $(".comments").click(function(event){
    event.stopPropagation();


     $(".posts , .wrapper-comment").toggle();
     if($('.posts').is(':visible')){
         $(".content_follow").animate({height:'674px'});
         $(".main").animate({height:'813px'});
    }else{
       $(".content_follow").animate({height:'60px'});
      $(".main").animate({height:'310px'});
    }
  });

  $(document).keypress(function(e) {
    if(e.which == 13 && $(".input_cm").val() !="" ) {
        console.log('You pressed enter!');
        var coment = $(".input_cm").val();
        $(".posts ul").append(
          '<li class="collection-item avatar">'+
            '<div class="wrapper-top">'+
                  '<img src="images/avatar.jpg" alt="">'+
                  '<span class="title_header">Mike Ross</span>'+
                  '<span class="day">0d</span>'+
              '</div>'+
              '<p>'+coment+'</p>'+
          '</li>'

        );
    }
  });
})(jQuery);
