// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('#mainNav').addClass('sticky');
    } else {
        $('#mainNav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.nav-toggle').click(function() {
    if ($('#mainNav').hasClass('open-nav')) {
        $('#mainNav').removeClass('open-nav');
    } else {
        $('#mainNav').addClass('open-nav');
    }
});

$('#mainNav li a').click(function() {
    if ($('#mainNav').hasClass('open-nav')) {
        $('#mainNav').removeClass('open-nav');
        $('#mainNav').removeClass('open-nav');
    }
});

// navigation scroll
$('.nav-link').click(function(event) {
    var id = $(this).attr("href");
    var offset = 50;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

/* Scroll-to-Top Button */
//$(window).scroll(function () {
//    if ($(this).scrollTop() > 100) {
//        $('.scrollup').fadeIn();
//    } else {
//        $('.scrollup').fadeOut();
//    }
//});

//$('.scrollup').click(function () {
//    $("html, body").animate({
//        scrollTop: 0
//    }, 600);
//    return false;
//});
/* WORK IN PROGRESS
   NAVIGATION ACTIVE STATE IN SECTION AREA
*/
var sections = $('section'), nav = $('#gNav'), mainNav = $('#mainNav'), nav_height = mainNav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});