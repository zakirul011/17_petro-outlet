

(function ($) {
	"use strict";

	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// SPONSOR-SLIDER-ACTIVE
	$('.sponsor-slide-active').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		arrows: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
			}
		}
		]
	});

	// TESTIMONIAL-SLIDER-ACTIVE
	$('.testimonial-slide-active').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		dots: false,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				arrows: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
				,arrows: true,
			}
		}
		]
	});

	// feature-active-slider
	$('.feature-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		fade: true,
		dots: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
	});

	// ANOTHER-SERVICE-JS
	$('.solution-item:nth-child(even)').addClass('reverse-item');

	/*=========================
	AOS JS
	===========================*/
	AOS.init({
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
	});

	// sticky
	var wind = $(window);
	var sticky = $('.main-header');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});

	/*=========================
  	MEANMENU JS
   ===========================*/
   $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "991",
	});
	
	// video activation
	const player = new Plyr('#player');
	
	// truste-counter
	$('.truste-counter').counterUp({
			delay: 10,
			time: 1500,
	});

}(jQuery));