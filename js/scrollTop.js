$(document).ready(function() {
    let $scrollTop = $('#scrollTop');
    $(window).scroll(function() {
        if ($(document).scrollTop() > 600) {
            $scrollTop.addClass('scroll-top--active');
        } else {
            $scrollTop.removeClass('scroll-top--active');
        }
    });
});