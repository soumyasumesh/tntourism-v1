$(document).ready(function(){
    $('.stellarnav').stellarNav({
        breakpoint: 991,
        position: 'right',
    });
    // share social
    $(".social-button").on("click", function (event) {
        event.preventDefault();
        $(".social-menu").toggleClass("share");
    });
    // share social
    // scrollTop
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 300) {
        $(scrollTop).css("opacity", "1");

        } else {
        $(scrollTop).css("opacity", "0");
        }
    }); 
    $(scrollTop).click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 800);
        return false;
    }); 
    // scrollTop
    
});



$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
      $(".header").addClass("bg_change");
  } else {
      $(".header").removeClass("bg_change");
  }
});