(function($) {
    "use strict";

    // manual carousel controls
    $('.north-next').click(function(){ $('.carousel-north').carousel('next');return false; });
    $('.north-prev').click(function(){ $('.carousel-north').carousel('prev');return false; });
    $('.carousel-north').carousel({interval: false});
    $('.mid-next').click(function(){ $('.carousel-mid').carousel('next');return false; });
    $('.mid-prev').click(function(){ $('.carousel-mid').carousel('prev');return false; });
    $('.carousel-mid').carousel({interval: false});
    $('.south-next').click(function(){ $('.carousel-south').carousel('next');return false; });
    $('.south-prev').click(function(){ $('.carousel-south').carousel('prev');return false; });
    $('.carousel-south').carousel({interval: false});
})(jQuery);
