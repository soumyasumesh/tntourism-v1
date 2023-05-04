function bodyScroll(){
    'use strict';
    var root = document.getElementsByTagName('html')[0];
    var scrollBarWidth = document.documentElement.clientWidth;

    if (jQuery('body').hasClass('body-overlay')) {
        root.setAttribute("style", `transition:all ease 5000s;overflow-y:hidden;padding-right:jQuery{scrollBarWidth}px`)
    } else {
        root.removeAttribute('style', `transition:all ease 5000s`)
    }   
}


(function() {
    'use strict';
    
    jQuery('.nav-item.mega-menu, .nav-item.mega-menu .nav-link, .dropdown-mega-menu').mouseenter(function(){
        jQuery('body').addClass('body-overlay');bodyScroll()
    }).mouseleave(function () {
        jQuery('.body-overlay-hidden').on("click", function(){
            jQuery('.dropdown-mega-menu').css('display' , 'none')
            jQuery('body').removeClass('body-overlay');bodyScroll()
        })
        jQuery('body').removeClass('body-overlay');bodyScroll();
    })

    // share social
    jQuery(".social-button").hover(function () {
        jQuery(".social-menu").toggleClass("share");
    });
    // share social
    jQuery('.stellarnav').stellarNav({
        breakpoint: 1024,
        position: 'right',
    });
    // scrollTop
    var scrollTop = jQuery(".scrollTop");
    jQuery(window).scroll(function() {
        var topPos = jQuery(this).scrollTop();
        if (topPos > 300) {
        jQuery(scrollTop).css("opacity", "1");

        } else {
        jQuery(scrollTop).css("opacity", "0");
        }
    }); 

    jQuery(scrollTop).click(function() {
        jQuery('html, body').animate({
        scrollTop: 0
        }, 10);
        return false;
    }); 
    // scrollTop
    
  })()

// jQuery(document).ready(function(){
    
    
// });

jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 50) {
        jQuery(".header").addClass("bg_change");
    } else {
        jQuery(".header").removeClass("bg_change");
    }
  });
