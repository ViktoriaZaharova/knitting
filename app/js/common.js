$(document).ready(function() {

    $('.banner-brands__slider').owlCarousel({
        items: 6,
        loop: true,
        smartSpeed: 500,
        nav: true,
        navText: ['<img src="img/arrow-left.svg" class="img-responsive">', '<img src="img/arrow-right.svg" class="img-responsive">'],
        responsive : {
            0 : {
                items: 2
            },
            480 : {
                items: 3
            },
            768 : {
                items: 4
            },
            1000 : {
                items: 5
            },
            1100 : {
                items: 6
            }
        }
    });

    function postsCarousel() {
        var checkWidth = $(window).width();
        var owlPost = $(".tabs-slider");
        if (checkWidth > 1199) {
            if(typeof owlPost.data('owl.carousel') != 'undefined'){
                owlPost.data('owl.carousel').destroy();
            }
            owlPost.removeClass('owl-carousel');
        } else if (checkWidth < 1200) {
            owlPost.addClass('owl-carousel');
            owlPost.owlCarousel({
                items : 2,
                slideSpeed : 900,
                dots: false,
                loop: true,
                nav: true,
                navText: ['<img src="img/arrow-left.svg" class="img-responsive">', '<img src="img/arrow-right.svg" class="img-responsive">'],
                responsive : {
                    0 : {
                        items: 1
                    },
                    844 : {
                        items: 2
                    },
                    992 : {
                        items: 3
                    }
                }
            });
        }
    }

    postsCarousel();
    $(window).resize(postsCarousel);

    $('.product-image__slider').owlCarousel({
        items: 3,
        loop: true,
        smartSpeed: 500,
        nav: true,
        navText: ['<img src="img/arr-left.svg" class="img-responsive">', '<img src="img/arr-right.svg" class="img-responsive">'],
        responsive : {
            0 : {
                items: 1
            },
            350 : {
                items: 2
            },
            880 : {
                items: 2
            },
            1200 : {
                items: 3
            }
        }
    });

    $('.equipment-slider').owlCarousel({
        items: 3,
        loop: true,
        smartSpeed: 500,
        nav: true,
        navText: ['<img src="img/arrow-left.svg" class="img-responsive">', '<img src="img/arrow-right.svg" class="img-responsive">'],
        responsive : {
            0 : {
                items: 1
            },
            600 : {
                items: 2
            },
            992 : {
                items: 3
            }
        }
    });


    $('.slider-range').slider({
        range: true,
        min: 0,
        max: 10000,
        values: [0, 0],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0] + '₽');
            //Поле максимального значения
            $(".dec2").val(ui.values[1] + '₽');
        }
    });

    $(".dec1").val($(".slider-range").slider("value"));
    $(".dec2").val($(".slider-range").slider("value"));

    $('.product-card .card-wrapper, .card-title').equalHeights();


    $('.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('[data-fancybox="gallery"]').fancybox();

});

// color decision
$(document).ready(function () {

    var srcValue = $('.product-image__max img').attr('src');
    var penImg = $('.product-image__max img');

    $('.product-image__slider a.carousel__item').on('click', function (e) {
        e.preventDefault();
        $('.product-image__slider a.carousel__item').removeClass('click-item');
        $(this).addClass('click-item');
        var imgPath;

        imgPath = $(this).attr('data-img-path');

        penImg.attr('src', imgPath);

        // $penImg.fadeOut(200, function () {
        // 	$imgPath.attr('src', imgPath).fadeIn(200);
        // });

    });

});