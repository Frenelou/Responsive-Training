$(function() {
    setItemsHeight('.hexagon', '#social-icons a');
});
$(window).resize(function() {
    setItemsHeight('.hexagon', '#social-icons a');
});

//Navigation
$(".navbar-nav a[href^=#]").click(function(e) {
    e.preventDefault();
    var dest = $(this).attr('href');
    $('.active').removeClass('active');
    $(this).parent().addClass('active');
    $('html,body').animate({
        scrollTop: $(dest).offset().top - 70
    }, 'slow');
});


function setItemsHeight(target) {
    for (var i = 0, j = arguments.length; i < j; i++) {

        switch (arguments[i]) {
            case '.hexagon':
                ratio = 1.15;
                break;
            default:
                ratio = 1;
        }

        target_width = Math.floor($(arguments[i]).width());
        $(arguments[i]).css('height', target_width * ratio) + 'px';

        if (arguments[i] === '.hexagon') {
            margin_bottom = target_width / 4;
            $(arguments[i]).css({
                'margin-bottom': '-' + margin_bottom + 'px',
                'margin-right': margin_bottom / 4
            });
        } else if (arguments[i] === '#social-icons a') {
            $(arguments[i]).css('line-height', target_width + 'px');
        } else if (arguments[i] === '.grid_item') {
            $(arguments[i]).css('line-height', target_width + 'px');
        }

    }
    // Resize Lorem Colorous items if necessary
    if ($(window).width() <= 767) {
        $('.grid_item').css('height', $('.grid_item').width()) + 'px';
    } else {
        $('.grid_item').removeAttr('style');
    }
}
