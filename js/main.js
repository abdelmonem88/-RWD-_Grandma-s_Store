$(document).ready(function() {
	//show cart
	$('.cart-info').on('click', function() {
		$('.cart').toggleClass('show-cart');
	});

	//sticky navbar
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	});

	//scroll to top
	$('.totop').click(function(e) {
		e.preventDefault();
		$('html,body').animate(
			{
				scrollTop: 0
			},
			1000
		);
	});

	//smooth scroll to element
	$('.navbar-nav li a').click(function(e) {
		e.preventDefault();
		let dataScroll = $(this).data('scroll');
		$('html,body').animate(
			{
				scrollTop: $(dataScroll).offset().top + -75
			},
			1000
		);
	});


	//filter store items
	let allBtn = $('.sortBtn .all'),
		cakesBtn = $('.sortBtn .cakes'),
		cupcakesBtn = $('.sortBtn .cupcakes'),
		sweetsBtn = $('.sortBtn .sweets'),
		doughnutsBtn = $('.sortBtn .doughnuts'),
		all = $('.store-items .all'),
		cakes = $('.store-items .cakes'),
		cupcakes = $('.store-items .cupcakes'),
		sweets = $('.store-items .sweets'),
		doughnuts = $('.store-items .doughnuts');

	function filterItems(selector, target) {
		$(selector).click(function(e) {
			e.preventDefault();
			$(this).addClass('btn-black-active');
			$(this).siblings().removeClass('btn-black-active');
			$(target).siblings().fadeOut(0);
			$(target).fadeIn(0);
		});
	}

	filterItems(allBtn, all);
	filterItems(cakesBtn, cakes);
	filterItems(cupcakesBtn, cupcakes);
	filterItems(sweetsBtn, sweets);
	filterItems(doughnutsBtn, doughnuts);
});
