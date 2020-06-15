const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		if (_this.btnToggleMenuMobile) {

			_this.btnToggleMenuMobile.forEach(function (element) {
				element.addEventListener('click', function () {

					_this.btnToggleMenuMobile.forEach(function (element) {
						element.classList.toggle("on");
					});
					_this.menuMobile.classList.toggle("active");
					_this.body.classList.toggle("fixed");

					return false;
				});
			});
		}
	},

	closeMenu() {
		let _this = this;
		if (_this.menuMobile) {

			_this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");

			});
			_this.menuMobile.classList.remove("active");
			_this.body.classList.remove("fixed");
		}

	},

	//кастомный селект
	select2() {
		$(".custom-select-wrap").each(function () {
			var th = $(this)
			th.find('.custom-select-js').select2({
				dropdownParent: th,
				tags: true,
				minimumResultsForSearch: -1,
				// width: 'auto',
				// width: th.find(".select2-results__options"),
				allowClear: false,
				// dropdownAutoWidth: true
			});
		})
	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;
		if (_this.menuMobileLink) {

			_this.toggleMenu();
			_this.menuMobileLink.forEach(function (element) {
				element.addEventListener('click', function (e) {
					console.log(element);
					_this.closeMenu();

				});
			})
			document.addEventListener('mouseup', function (event) {
				let container = event.target.closest(".menu-mobile--js.active"); // (1)
				if (!container) {
					_this.closeMenu();

				}
			});
		}
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	// inputMask() {
	// 	// mask for input
	// 	$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	// }
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.select2();

	// JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/Startseite1440x900px.jpg);"></div>')
	// /добавляет подложку для pixel perfect



	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 

	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link, .headerBlock__scroll").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	let defaultSl = {
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		loopAdditionalSlides: 3,
		loopedSlides: 3,
		lazy: {
			loadPrevNext: true,
		},
		// autoplay: {
		// 	delay: 5000,
		// },
	};

	const swiper1 = new Swiper('.slider-js', {
		...defaultSl,
		breakpoints: {
			// when window width is >= 320px
		 
			// when window width is >= 480px
			480: {
				slidesPerView: 2, 
			},
			// when window width is >= 640px
			992: {
				slidesPerView: 1
			}
		}
	});

	$(".moreDetailed").click(function () {
		swiper1.slideNext();

		return false;
	})

	const swiper2 = new Swiper('.sAbout__sectionSlider', {
		...defaultSl,
		loop: false,
		effect: 'fade',
		navigation: {
			nextEl: '.swiper-slide',
		},
		// breakpoints: {
		// 768: {
		mousewheel: {
			sensitivity: 4.5,
			releaseOnEdges: true,
		},
		// },
		// },

		// on: {
		// 	reachEnd: function() {
		// 		mousewheel: false,
		// 	}
		// }
	});

	var names = [];
	$(".slider-tabs-js .swiper-slide").each(function (i) {
		names.push($(this).data("slide-name"));
	});

	const swiper3 = new Swiper('.slider-tabs-js', {
		...defaultSl,
		watchOverflow: false,
		spaceBetween: 2,
		// pagination: '.slide-name',
		// paginationClickable: true,
		navigation: {
			nextEl: '.tabSlider__slideNav .swiper-button-next',
			prevEl: '.tabSlider__slideNav .swiper-button-prev',
		},
		pagination: {
			el: '.slide-name',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (names[index]) + '</span>';
			},
		},
	});

	const swiper4 = new Swiper('.sSliderFluid__slider', {
		...defaultSl,
		spaceBetween: 20,
		navigation: {
			nextEl: '.sSliderFluid .swiper-button-next',
			prevEl: '.sSliderFluid .swiper-button-prev',
		}, 
		breakpoints: {
			// when window width is >= 320px
		 
			// when window width is >= 480px
			768: {
				slidesPerView: 2, 
			},
			// when window width is >= 640px
			1200: {
				slidesPerView: 3
			}
		}
	});
 
	//Видео bg
	var video = document.getElementById(".headerVideo");
	// function myFunction() {
	// 	if (video.paused) {
	// 		video.play();
	// 		btn.innerHTML = "Pause";
	// 	} else {
	// 		video.pause();
	// 		btn.innerHTML = "Play";
	// 	}
	// }

	//Аккардион
	$('.accordion-js').click(function () {
		$(this).toggleClass('active').next().slideToggle();
	});

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

	}



	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// We listen to the resize event
	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
};



$(".select-group .custom-select-js ").on('change', function (e) {
	// alert("Handler for .change() called.");
	var tel = $(this).find('option:selected').data('telephone');
	var telLink = tel.replace(/\s+/g, '')
	$(this).parents(".select-group").find(".select-group__select-tel")
		.attr('href', 'tel:' + telLink)
		.find('span').text(tel);
});




//бовая кноака с контактами
$('.icon-block-js').click(function () {
	event.preventDefault();
	this.classList.toggle('active');

	$(this).parent().toggleClass('active');
	$(this).parent().find('.hidden-block-js').toggle(function () {
		this.classList.toggle('active');
	});
});

//luckyoneJs

$('.contact-pill-item-with-sublist').click(function () {
	event.preventDefault();
	this.classList.toggle('active');

	$(this).find('.contact-pill-item-subbox').slideToggle(function () {
		this.classList.toggle('active');
	});

});

//statDigits bl

let partnersSlider = new Swiper('.partners-slider-js', {
	loop: true,

	//responsive
	breakpoints: {
		1245: {
			slidesPerView: 6,
		},
		992: {
			slidesPerView: 5,
		},
		768: {
			slidesPerView: 4,
		},
		0: {
			slidesPerView: 3,
		},

	},

	//lazy load
	lazy: {
		loadPrevNext: true,
	},
	//autoplay
	autoplay: {
		delay: 6000,
	},
});

function boostDigits() {
	let digitsItems = document.querySelectorAll('.digits-boost-js');
	for (let item of digitsItems) {
		//replace numbers by 0
		let number = item.innerHTML.replace('.', '');
		item.customPropInnerNumber = number;
		item.innerHTML = '0';
	}

	window.addEventListener('scroll', trigerDigitsCounter, { passive: true });
}

function trigerDigitsCounter() {
	let firstDigitItem = document.querySelector('.digits-boost-js');
	if(!firstDigitItem) return
	let digitsItemsTop = $(firstDigitItem).offset().top;
	let windowScroll = window.scrollY + vh(100);

	if (windowScroll > digitsItemsTop + 50) {
		window.removeEventListener('scroll', trigerDigitsCounter, { passive: true });

		let digitsItems = document.querySelectorAll('.digits-boost-js');
		for (let item of digitsItems) {
			fromZeroToDigit(item);
		}
	}
}
//
function fromZeroToDigit(item) {
	let currNum = Number(item.innerHTML.replace('.', ''));
	let targetNum = Number(item.customPropInnerNumber);
	let difference = targetNum - currNum;
	let step = Math.floor(difference / 25); //
	if (step === 0) step = 1;

	if (difference > 0) {
		let newVal = currNum + step;
		item.innerHTML = placeDot(newVal);

		window.setTimeout(function () {
			fromZeroToDigit(item);
		}, 10); //
	}

}

function placeDot(number) {
	if (number < 1000) return number

	let strArr = String(number).split('');
	strArr.splice(-3, 0, '.'); // 3
	return strArr.join('')
}

function vh(v) {
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	return (v * h) / 100;
}
boostDigits();

//sJobFindenSlider
let JobFindenThumb = new Swiper('.thumb-slider-Job-find-js', { 
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	//lazy load
	lazy: {
		loadPrevNext: true,
	},
	loopedSlides: 5, //looped slides should be the same
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});

let JobFindenBigSlider = new Swiper('.big-slider-Job-find-js', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,

	//lazy load
	lazy: {
		loadPrevNext: true,
	},
	thumbs: {
		swiper: JobFindenThumb,
		slidesPerView: 1,
	},
 
});
 
//to next slide btn
$('.next-slide-btn-js').click(function () {
	JobFindenBigSlider.slideNext();
});
//treatment
window.addEventListener('resize', function () {
	//check
	let slider = document.querySelector('.thumb-slider-Job-find-js');
	if (!slider) return

	JobFindenBigSlider.update();
	JobFindenThumb.update();
	window.setTimeout(function () {
		JobFindenBigSlider.update();
		JobFindenThumb.update();
	}, 100);
}, { passive: true });


//breadcrumbs
let breadSl = new Swiper('.breadcrumb-slider-js', {
	slidesPerView: 'auto',
	// spaceBetween: 30,
	freeMode: true,
	freeModeMomentum: true,
	// spaceBetween: 30,
	watchOverflow: true,
});

let ContacterSlider = new Swiper('.KP-radio-btns-js', {
	slidesPerView: 'auto',
	// spaceBetween: 30,
	freeMode: true,
	freeModeMomentum: true,
	// spaceBetween: 30,
	watchOverflow: true,

	//lazy
	lazy: {
		loadPrevNext: true,
		loadPrevNextAmount: 4,
	},
});

//end luckyone js


if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
