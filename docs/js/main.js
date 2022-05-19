// Swiper

let pageSlider = new Swiper('.page', {
	wrapperClass: "section__wrapper",
	slideClass: "screen",
	direction: 'vertical',
	slidesPerView: 'auto',
	slidesPerView: true,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	mousewheel: {
		sensitivity: 1,
	},

	watchOverflow: true,
	speed: 800,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,

	pagination: {
		el: '.section__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: "section__bullet",
		bulletActiveClass: "section__bullet_active",
	}
});