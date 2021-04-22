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
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});
})
