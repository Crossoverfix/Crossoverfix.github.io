$(document).ready(function () {
    /*-----------subcategory begin--------------*/
    $(".footerLine ul li.hiddenCat").hide();
    $(".footerLine ul li.hide_all").hide();

    $('.footerLine ul li.show_all').click(function () {
        $(this).parent("ul").find("li.hiddenCat").slideDown(100);
        $(this).parent('ul').find('li.hide_all').fadeIn();
        $(this).hide();
    });
    $(".footerLine ul li.hide_all").click(function () {
        $(this).parent("ul").find("li.hiddenCat").slideUp(100);
        $(this).hide();
        $(this).parent("ul").find("li.show_all").show();
    });
    /*-----------subcategory end--------------*/
    var swiper = new Swiper('.swiper1', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
//        breakpoints: {
//            767: {
//                effect: 'fade'
//            }
//        }
    });
    var swiper2 = new Swiper('.swiper2', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next.button-newArr',
        prevButton: '.swiper-button-prev.button-newArr',
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        }
    });
    if ($('#phone').length) {
        $("#phone").mask("+7 (999) 999-9999");
    }
    if ($('.selecter').length) {
        $('.selecter').styler({
            selectSearch: true,
            selectPlaceholder: "Регион"
        });
    }
    function cutLongText() {
        var elem, size, text;

        elem = $('.productItem a.title');//news title cut
        $.each(elem, function () {
            size = 55;
            text = $(this).html();
            if (text.length > size) {
                text = text.slice(0, size);
                $(this).html(text + '...');
            }
        });

    }
    cutLongText();
    $('.cd-dropdown-trigger').on('click', function (event) {
        event.preventDefault();
        toggleNav();
    });

    $('.cd-dropdown .cd-close').on('click', function (event) {
        event.preventDefault();
        toggleNav();
    });
    $(".galleryProd .smallImg a img").click(function (event) {
        event.preventDefault();
        $(".galleryProd .bigImg a img").attr("src", $(this).attr("data-src"));
    });
    $('.has-children').children('a').on('click', function (event) {
        //prevent default clicking on direct children of .has-children 
        event.preventDefault();
        var selected = $(this);
        selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
    });

    var submenuDirection = (!$('.cd-dropdown-wrapper').hasClass('open-to-left')) ? 'right' : 'left';
    $('.cd-dropdown-content').menuAim({
        activate: function (row) {
            $(row).children().addClass('is-active').removeClass('fade-out');
            if ($('.cd-dropdown-content .fade-in').length == 0)
                $(row).children('ul').addClass('fade-in');
        },
        deactivate: function (row) {
            $(row).children().removeClass('is-active');
            if ($('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row))) {
                $('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
                $(row).children('ul').addClass('fade-out')
            }
        },
        exitMenu: function () {
            $('.cd-dropdown-content').find('.is-active').removeClass('is-active');
            return true;
        },
        submenuDirection: submenuDirection,
    });

    $('.go-back').on('click', function () {
        var selected = $(this),
                visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
        selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
    });

    function toggleNav() {
        var navIsVisible = (!$('.cd-dropdown').hasClass('dropdown-is-active')) ? true : false;
        $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
        $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
        if (!navIsVisible) {
            $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('.has-children ul').addClass('is-hidden');
                $('.move-out').removeClass('move-out');
                $('.is-active').removeClass('is-active');
            });
        }
    }
    if (!Modernizr.input.placeholder) {
        $('[placeholder]').focus(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        }).blur(function () {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function () {
            $(this).find('[placeholder]').each(function () {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    }
    $('.smallImg img').click(function(){
        $('.bigImg img').attr('src',$(this).attr('src'));
    });
});