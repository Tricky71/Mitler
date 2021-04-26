$(function() {

	$('#my-menu').mmenu({
        extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right', 'fx-menu-slide'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">',
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function () {
		$('.hamburger').addClass('is-active'); 
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

    })

	$('.owl-carousel--services').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			769: {
				items: 2
			},
			1201: {
				items: 3
			}
		}
	});

	$('.services__item-info').equalHeights();

	
	
})

