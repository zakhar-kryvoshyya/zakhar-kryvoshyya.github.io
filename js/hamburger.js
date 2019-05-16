$(document).ready(function () {

    var lastClickTime = 0;

    $('.navbar-toggler').click(function () {

        var interval = 600;
        var currClickTime = new Date().getTime();
        var diff = currClickTime - lastClickTime;
        lastClickTime = currClickTime;

        if (diff < interval) {
            return false;
        } else {

            if      ($('.navbar-toggler').hasClass('open'))
                    $('.navbar-toggler').removeClass('open');

            else if ($('.navbar-toggler').attr('aria-expanded')=='false'
                    && !($('.navbar-toggler').hasClass('open')))
                    $(this).addClass('open');

            else return false;
        }
    });
    
    $('.js-scroll-trigger').click(function () {
        if ($('.navbar-toggler').hasClass('open'))
            $('.navbar-toggler').removeClass('open');
    });
});
