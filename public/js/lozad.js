(function($) {
    $(document).ready(function() {
        // Lazzy LOad initiate
        // const observer = lozad(); // lazy loads elements with default selector as '.lozad'
        // observer.observe();
        //End Lazzy load initiate

        if ($(window).width() < 768) {
            $('.carousel').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            });
        } else {
            $('.carousel').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            });
            $('.tools-carousel').slick({
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: "<button type='button' class='slick-prev '><img src='img/prev.svg'></button>",
                nextArrow: "<button type='button' class='slick-next '><img src='img/next.svg'></button>"
            });
        }
    });
})(jQuery);