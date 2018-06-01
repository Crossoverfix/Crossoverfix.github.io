$(document).ready(function(){
    $('.registrationPopup input:file').styler({
        filePlaceholder: "Вы можете прикрепить эскиз ...",
        fileBrowse: "Обзор"
    });
    $('input:file').styler({
        filePlaceholder: "Прикрепить эскиз...",
        fileBrowse: "Обзор"
    });
    var swiperMasters = new Swiper('.masters-container', {
        slidesPerView: 5,
        nextButton: '.mastersWrap .butRight',
        prevButton: '.mastersWrap .butLeft',
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        },
        paginationClickable: true,
        pagination: '.swiper-pagination-loop'
    });
    var swiperTopLinks = new Swiper('.sliderTopLinksWrap', {
        slidesPerView: 4,
        spaceBetween: 30,
        nextButton: '.parallax-1 .butRight',
        prevButton: '.parallax-1 .butLeft',
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        paginationClickable: true,
        pagination: '.parallax-1 .swiper-pagination-loop'
    });

    var sliderHome = new Swiper('.sliderHome', {
        slidesPerView: 1,
        nextButton: '.slider .butRight',
        prevButton: '.slider .butLeft',
        paginationClickable: true,
        pagination: '.slider .swiper-pagination-loop'
    });

    var salonSwiper_1 = new Swiper('.salonSwiper_1', {
        slidesPerView: 5,
        spaceBetween: 30,
        nextButton: '.salonSwiperWrap .swiper-button-next',
        prevButton: '.salonSwiperWrap .swiper-button-prev',
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            991: {
                spaceBetween: 20,
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            },
            600: {
                slidesPerView: 1
            }
        }
    });

    var salonSwiper_2 = new Swiper('.salonSwiper_2', {
        slidesPerView: 5,
        spaceBetween: 30,
        nextButton: '.salonSwiperWrap .swiper-button-next',
        prevButton: '.salonSwiperWrap .swiper-button-prev',
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            991: {
                spaceBetween: 20,
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            },
            600: {
                slidesPerView: 1
            }
        }
    });
    // var fotoSwiper = new Swiper('.fotoSwiper', {
    //     nextButton: '.sbr',
    //     prevButton: '.sbl',
    //     spaceBetween: 30
    // });
    
    
    $('.calculateButton').click( function(event){ // ловим клик по ссылки с id="go"
        event.preventDefault(); // выключаем стандартную роль элемента
        $('.overlay').fadeIn(400, // сначала плавно показываем темную подложку
            function(){ // после выполнения предъидущей анимации
                $('.calculatePopup')
                    .css('display', 'block') // убираем у модального окна display: none;
                    .animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
            });
    });
    $('.registrationButton').click( function(event){ // ловим клик по ссылки с id="go"
        event.preventDefault(); // выключаем стандартную роль элемента
        $('.overlay').fadeIn(400, // сначала плавно показываем темную подложку
            function(){ // после выполнения предъидущей анимации
                $('.registrationPopup')
                    .css('display', 'block') // убираем у модального окна display: none;
                    .animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
            });
    });
    /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
    $('.modal_close, .overlay').click( function(){ // ловим клик по крестику или подложке
        $('.modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                function(){ // после анимации
                    $(this).css('display', 'none'); // делаем ему display: none;
                    $('.overlay').fadeOut(400); // скрываем подложку
                }
            );
    });

    $('.callButton').click( function(event){ // ловим клик по ссылки с id="go"
        event.preventDefault(); // выключаем стандартную роль элемента
        $('.overlay').fadeIn(400, // сначала плавно показываем темную подложку
            function(){ // после выполнения предъидущей анимации
                $('.callPopup')
                    .css('display', 'block') // убираем у модального окна display: none;
                    .animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
            });
    });
 
    $(".salonPhotoItem").click( function () {
        $("body").addClass('fancy');
    });




    
    $(".salonPhotoItem").fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        helpers: {
            overlay: {
                locked: true
            }
        }
    });
    var fancCont = $(".fancybox-content");

    $(".galleryWrap .fancybox").fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        helpers: {
            overlay: {
                locked: true
            }
        },
        afterLoad   : function() {
            this.inner.prepend( fancCont );
        }
    });


});
