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
	// $(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/Uns375x812px.jpg);"></div>')
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
		lazy: {
			loadPrevNext: true,
		},
		// autoplay: {
		// 	delay: 5000,
		// },
	};

	const swiper1 = new Swiper('.slider-js', {
		...defaultSl,
	});

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
	$(".slider-tabs-js .swiper-slide").each(function(i) {
		names.push($(this).data("slide-name"));
		console.log(names);
	});

	const swiper3 = new Swiper('.slider-tabs-js', {
		...defaultSl,
		watchOverflow: false,
		// pagination: '.slide-name',
		// paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: {
			el: '.slide-name',
			clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (names[index]) + '</span>';
				},
		},
	});

	var gets = (function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}
		return b;
	})();
	// form


	var gets = (function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}
		return b;
	})();
	// form
	$("form").submit(function (e) {
		e.preventDefault();
		const th = $(this);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data,
		}).done(function (data) {

			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			});
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		}).fail(function () { });
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
	$('.accordion-js').click(function(){
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

	//бовая кноака с контактами
	$('.icon-block-js').click(function(){
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
		for (let item of digitsItems){
			//replace numbers by 0
			let number = item.innerHTML.replace('.', '');
			item.customPropInnerNumber = number;
			item.innerHTML = '0';
		}

		window.addEventListener('scroll', trigerDigitsCounter, {passive : true});
	}

	function trigerDigitsCounter() {
		let firstDigitItem = document.querySelector('.digits-boost-js');
		let digitsItemsTop = $(firstDigitItem).offset().top;
		let windowScroll = window.scrollY + vh(100);

		if (windowScroll > digitsItemsTop + 50) {
			window.removeEventListener('scroll', trigerDigitsCounter, {passive : true});

			let digitsItems = document.querySelectorAll('.digits-boost-js');
			for (let item of digitsItems){
				fromZeroToDigit(item);
			}
		}
	}
	//
	function fromZeroToDigit(item){
		let currNum = Number(item.innerHTML.replace('.', ''));
		let targetNum = Number(item.customPropInnerNumber);
		let difference = targetNum - currNum;
		let step = Math.floor(difference/25); //
		if (step === 0) step = 1;

		if (difference > 0){
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
		strArr.splice(-3,0,'.'); // 3
		return strArr.join('')
	}

	function vh(v) {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return (v * h) / 100;
	}
	boostDigits();

	//sJobFindenSlider
	let JobFindenThumb = new Swiper('.thumb-slider-Job-find-js', {
		//slidesPerView: '2',
		direction: 'horizontal',
		spaceBetween: 20,

		//lazy load
		lazy: {
			loadPrevNext: true,
		},
		//
		on: {
			click: () => {
				//photoGaleryThumb.slideTo(photoGaleryThumb.clickedIndex - 1, 700, false);
				JobFindenThumb.updateSlidesClasses();
				JobFindenBigSlider.updateSlidesClasses();

				let slideToIndex = JobFindenThumb.realIndex + 1;
				console.log(slideToIndex);
				window.setTimeout(function () {
					JobFindenBigSlider.slideTo(slideToIndex, 700, false);
				}, 10);
			},
		},
	});

	let JobFindenBigSlider = new Swiper('.big-slider-Job-find-js', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,

		//lazy load
		lazy: {
			loadPrevNext: true,
		},
		//
		on: {
			click: () => {
				//photoGaleryThumb.slideTo(photoGaleryThumb.clickedIndex - 1, 700, false);
				JobFindenThumb.updateSlidesClasses();
				JobFindenBigSlider.updateSlidesClasses();
			},
			slideChange: () => {
				if (JobFindenBigSlider){
					//we already have slider
					bind2SlidersSwipesBigSl();
				}
				else{
					//we dont have slider, lets wait until it exist
					let sliderReady = window.setInterval(function () {
						if (!JobFindenBigSlider){ return }
						window.clearInterval(sliderReady);
						//it exist now
						bind2SlidersSwipesBigSl();
					}, 1);
				}
			},

		},
	});

	function bind2SlidersSwipesBigSl() {
		let slideToIndex = JobFindenBigSlider.realIndex + 1;
		if(JobFindenBigSlider.realIndex + 1 >  JobFindenThumb.slides.length - 1){
			slideToIndex = 0;
		}
		JobFindenThumb.slideTo(slideToIndex, 700, false);
	}
	//to next slide btn
	$('.next-slide-btn-js').click(function () {
		JobFindenBigSlider.slideNext();
	});
	//treatment
	window.addEventListener('resize', function () {
		JobFindenBigSlider.update();
		JobFindenThumb.update();
		window.setTimeout(function () {
			JobFindenBigSlider.update();
			JobFindenThumb.update();
		}, 100);
	}, {passive: true});

	//end luckyone js


	if (document.readyState !== 'loading') {
		eventHandler();
	} else {
		document.addEventListener('DOMContentLoaded', eventHandler);
	}
