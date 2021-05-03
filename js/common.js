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

	$('.owl-carousel--reviews').owlCarousel({
		loop: true,
		smartSpeed: 700,
        autoHeight: true,
		items: 1
	});

	$('.owl-carousel--partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			468: {
				items: 2
			},
			769: {
				items: 3
			},
			992: {
				items: 4
			}

		}
	});
    // Плагин EqualHeights
	$('.services__item-info').equalHeights();
    
	// Кнопка наверх
	$(window).scroll(function() {
        if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	//E-mail Ajax Send
	$("form.offer").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.offer__success').addClass('offer__success--active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.offer__success').removeClass('offer__success--active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
});

// Preloader
$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
})

