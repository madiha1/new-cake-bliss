$("#Header").load("layout/header.html");
$("#Footer").load("layout/footer.html");

$(window).on('load', function () {
    var str = location.pathname.toLowerCase();
    $("#menu li a").each(function () {
        var thisHref = $(this).attr("href").toLowerCase();
        if (str.includes(thisHref)) {
            $("#menu li a.active").removeClass("active");
            $(this).addClass("active");
        }
    });
});

$('.product-sli').slick({
    fade: true,
    speed: 300,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});


// wow animation js 

$(function () {
    new WOW().init();
});


// responsive menu js 

$(function () {
    $('#menu').slicknav();
});


// reviwSlider start

$('.reviwSlider').slick({
    speed: 300,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [{
        breakpoint: 1199,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
    ]
});

// reviwSlider end


// categorySlider start

$('.categorySlider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    mobileFirst: false, // IMPORTANT

    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// categorySlider end

// menuSlide start

$('.menuSlide').slick({
    dots: false,
    arrows: false, // Disable default arrows
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.menu-slider-btn-left').on('click', function () {
    $('.menuSlide').slick('slickPrev');
});

$('.menu-slider-btn-right').on('click', function () {
    $('.menuSlide').slick('slickNext');
});

document.addEventListener('DOMContentLoaded', () => {

    const cheese = document.querySelector('.cheese');

    let deg = 0;

    function spin() {
        setInterval(() => {
            deg++;
            if (deg >= 360) {
                deg = 0;
            } else {
                cheese.style.transform = `rotate(${deg}deg)`;
            }
        }, 50);
    }

    spin();
});