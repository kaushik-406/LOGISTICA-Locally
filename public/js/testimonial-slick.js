$('.testi-carousel').slick({
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
                arrow: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: false,
                slidesToShow: 1.3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 380,
            settings: {
                infinite: false,
                slidesToShow: 1.3,
                slidesToScroll: 1
            }
        }
    ]
});
