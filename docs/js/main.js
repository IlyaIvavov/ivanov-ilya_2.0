// Swiper

let pageSlider = new Swiper('.page', {
	wrapperClass: "section__wrapper",
	slideClass: "screen",
	direction: 'vertical',
	slidesPerView: 'auto',
	slidesPerView: true,
	parallax: true,

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
	},

	init: false,

	on: {
		init: function () {
			menuSlider();
		},

		slideChange: function () {
			menuSliderRemove();
			menuLinks[pageSlider.realIndex].classList.add('active');
		}
	},
});

let menuLinks = document.querySelectorAll('.nav-menu__item');

function menuSlider() {
	if (menuLinks.length > 0) {
		menuLinks[pageSlider.realIndex].classList.add('active');
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function (e) {
				menuSliderRemove();
				pageSlider.slideTo(index, 800);
				menuLink.classList.add('active');
				e.preventDefault();
			});
		}
	}
}
 
function menuSliderRemove() {
	let menuLinkActive = document.querySelector('.nav-menu__item.active');
	if (menuLinkActive) {
		menuLinkActive.classList.remove('active');
	}
}

pageSlider.init();

// Mobile Swipers

let firstMobSlider = new Swiper('.first-mob-slider', {
	wrapperClass: "first-mob-slider__wrapper",
	slideClass: "first-mob-slider__slide",
	slidesPerView: 'auto',
	slidesPerView: true,
	speed: 800,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	grabCursor: true,
});