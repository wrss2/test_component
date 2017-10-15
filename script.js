!(function($){
  console.log("z1")


  $(".posts").append("<ul></ul>");
  $.getJSON("data.json", function(json) {
    var json_sort = json;

    var temp = function(avatar,name,message,day){
      return '<li class="collection-item avatar">'+
          '<div class="wrapper-top">'+
                '<img src="'+avatar+'" alt="">'+
                '<span class="title_header">'+name+'</span>'+
                '<span class="day">'+day+'</span>'+
            '</div>'+
            '<p>'+message+'</p>'+
        '</li>'
    }


    $.each( json, function( key, val ) {

      $(".posts ul").append(temp(val.avatar,val.name,val.message,val.day))
    });
    console.log(json);
    $(".sort").click(function(event){
      if(json[0].day != '1d'){
        $(".posts ul ").empty()
        json.sort(function(a,b){
          return parseInt(a.day)-parseInt(b.day);
        })
        $.each( json, function( key, val ) {
          $(".posts ul").append(temp(val.avatar,val.name,val.message,val.day))
        });


    }else{
      json.sort(function(a,b){
        return parseInt(b.day)-parseInt(a.day);
      })
      $(".posts ul ").empty()
      $.each( json, function( key, val ) {
        $(".posts ul").append(temp(val.avatar,val.name,val.message,val.day))
      });
    }
    });

  });



  $(".share").click(function(event){
      console.log("share ");
      $(".popup").remove();
      $("body").append(
        '<div class="popup"><div class="inner"><div class="close">x</div>'+window.location+'</div></div>'
      );
      $(".close").click(function(){
          $(".popup").remove();
      })



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

    console.log($(document).width())
     $(".posts , .wrapper-comment").toggle();

     if($('.posts').is(':visible')){
       if($(document).width() <=550){
         $(".content_follow").animate({height:'600px'});
         $(".wrapper").animate({height:'813px'});
       }else{
         $(".content_follow").animate({height:'674px'});
         $(".wrapper").animate({height:'813px'});
       }
        // $(".main").animate({height:'813px'});
    }else{
       $(".content_follow").animate({height:'60px'});
       if($(document).width() <=550){

         $(".wrapper").animate({height:'380px'});
      }else{
        $(".wrapper").animate({height:'310px'});
      }
    }
  });

  $(document).keypress(function(event) {
    if(event.which == 13 && $(".input_cm").val() !="" ) {
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
