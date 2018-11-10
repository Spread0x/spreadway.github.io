jQuery(function($) {

    var runAnimations = function() {

        var offset = $(window).scrollTop() + $(window).height(),
            $animation = $('.animation');

        if ($animation.length == 0) {
            $(window).off('scroll', runAnimations);
        }

        $animation.each(function(i) {
            var $animation = $(this);
            if (($animation.offset().top + $animation.height() - 100) < offset) {
                $animation.removeClass('animation').addClass('animate');
            }
        });

    };

    $(window).on('scroll', runAnimations);
    $(window).trigger('scroll');

});