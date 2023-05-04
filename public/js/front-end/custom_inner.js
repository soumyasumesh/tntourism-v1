function bodyScroll(){
    var root = document.getElementsByTagName('html')[0];
    var scrollBarWidth = document.documentElement.clientWidth;

    if ($('body').hasClass('body-overlay')) {
        root.setAttribute("style", `transition:all ease 5000s;overflow-y:hidden;padding-right:${scrollBarWidth}px`)
    } else {
        root.removeAttribute('style', `transition:all ease 5000s`)
    }   
}

$(document).ready(function(){

    $('.stellarnav').stellarNav({
        breakpoint: 1024,
        position: 'right',
    });

    $('.nav-item.mega-menu, .nav-item.mega-menu .nav-link, .dropdown-mega-menu').mouseenter(function(){
        $('body').addClass('body-overlay');bodyScroll()
    }).mouseleave(function () {
        $('.body-overlay-hidden').on("click", function(){
            $('.dropdown-mega-menu').css('display' , 'none')
            $('body').removeClass('body-overlay');bodyScroll()
        })
        $('body').removeClass('body-overlay');bodyScroll();
    })

    // share social
    $(".social-button").hover(function () {
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
        }, 10);
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