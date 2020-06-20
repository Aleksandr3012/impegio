"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

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
	closeMenu: function closeMenu() {
		var _this = this;

		if (_this.menuMobile) {
			_this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");
			});

			_this.menuMobile.classList.remove("active");

			_this.body.classList.remove("fixed");
		}
	},
	//кастомный селект
	select2: function select2() {
		$(".custom-select-wrap").each(function () {
			var th = $(this);
			th.find('.custom-select-js').select2({
				dropdownParent: th,
				tags: true,
				minimumResultsForSearch: -1,
				// width: 'auto',
				// width: th.find(".select2-results__options"),
				allowClear: false // dropdownAutoWidth: true

			});
		});
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		if (_this.menuMobileLink) {
			_this.toggleMenu();

			_this.menuMobileLink.forEach(function (element) {
				element.addEventListener('click', function (e) {
					console.log(element);

					_this.closeMenu();
				});
			});

			document.addEventListener('mouseup', function (event) {
				var container = event.target.closest(".menu-mobile--js.active"); // (1)

				if (!container) {
					_this.closeMenu();
				}
			});
		}
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	} // /табы  
	// inputMask() {
	// 	// mask for input
	// 	$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	// }
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.select2(); // JSCCommon.inputMask();
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
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();
		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}); // конец добавил

		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();
	});
	heightses(); // листалка по стр

	$(" .top-nav li a, .scroll-link, .headerBlock__scroll").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var defaultSl = {
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		loopAdditionalSlides: 3,
		loopedSlides: 3,
		lazy: {
			loadPrevNext: true
		} // autoplay: {
		// 	delay: 5000,
		// },

	};
	var swiper1 = new Swiper('.slider-js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		breakpoints: {
			// when window width is >= 320px
			// when window width is >= 480px
			480: {
				slidesPerView: 2
			},
			// when window width is >= 640px
			992: {
				slidesPerView: 1
			}
		}
	}));
	$(".moreDetailed").click(function () {
		swiper1.slideNext();
		return false;
	}); // const swiper2 = new Swiper('.sAbout__sectionSlider', {
	// 	...defaultSl,
	// 	loop: false,
	// 	effect: 'fade',
	// 	navigation: {
	// 		nextEl: '.swiper-slide',
	// 	},
	// 	// breakpoints: {
	// 	// 768: {
	// 	mousewheel: {
	// 		sensitivity: 4.5,
	// 		releaseOnEdges: true,
	// 	},
	// 	// },
	// 	// },
	// 	// on: {
	// 	// 	reachEnd: function() {
	// 	// 		mousewheel: false,
	// 	// 	}
	// 	// }
	// });

	var controller = new ScrollMagic.Controller(); // define movement of panels

	var wipeAnimation = new TimelineMax().fromTo(".sAbout__slide.slide-1", .1, {
		opacity: 1
	}, {
		opacity: 1
	}) // in from left
	.fromTo(".sAbout__slide.slide-2", .1, {
		opacity: 0
	}, {
		opacity: 1
	}) // in from left
	.fromTo(".sAbout__slide.slide-3", .1, {
		opacity: 0
	}, {
		opacity: 1
	}) // in from left
	.fromTo(".sAbout__slide.slide-4", .1, {
		opacity: 0
	}, {
		opacity: 1
	}); // in from left
	// create scene to pin and link animation

	new ScrollMagic.Scene({
		triggerElement: "#sAbout",
		triggerHook: "onLeave",
		duration: "100%"
	}).setPin("#sAbout").setTween(wipeAnimation) // .addIndicators() // add indicators (requires plugin)
	.addTo(controller);
	var names = [];
	$(".slider-tabs-js .swiper-slide").each(function (i) {
		names.push($(this).data("slide-name"));
	});
	var swiper3 = new Swiper('.slider-tabs-js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		watchOverflow: false,
		spaceBetween: 2,
		// pagination: '.slide-name',
		// paginationClickable: true,
		navigation: {
			nextEl: '.tabSlider__slideNav .swiper-button-next',
			prevEl: '.tabSlider__slideNav .swiper-button-prev'
		},
		pagination: {
			el: '.slide-name',
			clickable: true,
			renderBullet: function renderBullet(index, className) {
				return '<span class="' + className + '">' + names[index] + '</span>';
			}
		}
	}));
	var swiper4 = new Swiper('.sSliderFluid__slider', _objectSpread(_objectSpread({}, defaultSl), {}, {
		spaceBetween: 20,
		navigation: {
			nextEl: '.sSliderFluid .swiper-button-next',
			prevEl: '.sSliderFluid .swiper-button-prev'
		},
		breakpoints: {
			// when window width is >= 320px
			// when window width is >= 480px
			768: {
				slidesPerView: 2
			},
			// when window width is >= 640px
			1200: {
				slidesPerView: 3
			}
		}
	})); //Видео bg

	var video = document.getElementById(".headerVideo"); // function myFunction() {
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
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	} // First we get the viewport height and we multiple it by 1% to get a value for a vh unit


	var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

	document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

	window.addEventListener('resize', function () {
		// We execute the same script as before
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
	});
}

;
$(".select-group .custom-select-js ").on('change', function (e) {
	// alert("Handler for .change() called.");
	var tel = $(this).find('option:selected').data('telephone');
	var telLink = tel.replace(/\s+/g, '');
	$(this).parents(".select-group").find(".select-group__select-tel").attr('href', 'tel:' + telLink).find('span').text(tel);
}); //бовая кноака с контактами

$('.icon-block-js').click(function () {
	event.preventDefault();
	this.classList.toggle('active');
	$(this).parent().toggleClass('active');
	$(this).parent().find('.hidden-block-js').toggle(function () {
		this.classList.toggle('active');
	});
}); //luckyoneJs

$('.contact-pill-item-with-sublist').click(function () {
	event.preventDefault();
	this.classList.toggle('active');
	$(this).find('.contact-pill-item-subbox').slideToggle(function () {
		this.classList.toggle('active');
	});
}); //statDigits bl

var partnersSlider = new Swiper('.partners-slider-js', {
	loop: true,
	//responsive
	breakpoints: {
		1245: {
			slidesPerView: 6
		},
		992: {
			slidesPerView: 5
		},
		768: {
			slidesPerView: 4
		},
		0: {
			slidesPerView: 3
		}
	},
	//lazy load
	//lazy: {
	//	loadPrevNext: true,
	//},
	//autoplay
	autoplay: {
		delay: 6000
	}
});

function boostDigits() {
	var digitsItems = document.querySelectorAll('.digits-boost-js');

	var _iterator = _createForOfIteratorHelper(digitsItems),
			_step;

	try {
		for (_iterator.s(); !(_step = _iterator.n()).done;) {
			var item = _step.value;
			//replace numbers by 0
			var number = item.innerHTML.replace('.', '');
			item.customPropInnerNumber = number;
			item.innerHTML = '0';
		}
	} catch (err) {
		_iterator.e(err);
	} finally {
		_iterator.f();
	}

	window.addEventListener('scroll', trigerDigitsCounter, {
		passive: true
	});
}

function trigerDigitsCounter() {
	var firstDigitItem = document.querySelector('.digits-boost-js');
	if (!firstDigitItem) return;
	var digitsItemsTop = $(firstDigitItem).offset().top;
	var windowScroll = window.scrollY + vh(100);

	if (windowScroll > digitsItemsTop + 50) {
		window.removeEventListener('scroll', trigerDigitsCounter, {
			passive: true
		});
		var digitsItems = document.querySelectorAll('.digits-boost-js');

		var _iterator2 = _createForOfIteratorHelper(digitsItems),
				_step2;

		try {
			for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
				var item = _step2.value;
				fromZeroToDigit(item);
			}
		} catch (err) {
			_iterator2.e(err);
		} finally {
			_iterator2.f();
		}
	}
} //


function fromZeroToDigit(item) {
	var currNum = Number(item.innerHTML.replace('.', ''));
	var targetNum = Number(item.customPropInnerNumber);
	var difference = targetNum - currNum;
	var step = Math.floor(difference / 25); //

	if (step === 0) step = 1;

	if (difference > 0) {
		var newVal = currNum + step;
		item.innerHTML = placeDot(newVal);
		window.setTimeout(function () {
			fromZeroToDigit(item);
		}, 10); //
	}
}

function placeDot(number) {
	if (number < 1000) return number;
	var strArr = String(number).split('');
	strArr.splice(-3, 0, '.'); // 3

	return strArr.join('');
}

function vh(v) {
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	return v * h / 100;
}

boostDigits(); //sJobFindenSlider

var JobFindenThumb = new Swiper('.thumb-slider-Job-find-js', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	//lazy load
	lazy: {
		loadPrevNext: true
	},
	loopedSlides: 5,
	//looped slides should be the same
	watchSlidesVisibility: true,
	watchSlidesProgress: true
});
var JobFindenBigSlider = new Swiper('.big-slider-Job-find-js', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	//lazy load
	lazy: {
		loadPrevNext: true
	},
	thumbs: {
		swiper: JobFindenThumb,
		slidesPerView: 1
	}
}); //to next slide btn

$('.next-slide-btn-js').click(function () {
	JobFindenBigSlider.slideNext();
}); //treatment

window.addEventListener('resize', function () {
	//check
	var slider = document.querySelector('.thumb-slider-Job-find-js');
	if (!slider) return;
	JobFindenBigSlider.update();
	JobFindenThumb.update();
	window.setTimeout(function () {
		JobFindenBigSlider.update();
		JobFindenThumb.update();
	}, 100);
}, {
	passive: true
}); //breadcrumbs

var breadSl = new Swiper('.breadcrumb-slider-js', {
	slidesPerView: 'auto',
	// spaceBetween: 30,
	freeMode: true,
	freeModeMomentum: true,
	// spaceBetween: 30,
	watchOverflow: true
});
var ContacterSlider = new Swiper('.KP-radio-btns-js', {
	slidesPerView: 'auto',
	// spaceBetween: 30,
	freeMode: true,
	freeModeMomentum: true,
	// spaceBetween: 30,
	watchOverflow: true,
	//lazy
	lazy: {
		loadPrevNext: true,
		loadPrevNextAmount: 4
	}
}); //end luckyone js

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}