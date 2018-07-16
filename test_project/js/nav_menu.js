$(document).ready(function () {
    var $navMenu = $("#nav-menu");
    var $link = $navMenu.find('a');
    $link.click(function ($linkClick) {
        var $linkHref = $(this).attr("href");
        var $linkTo = $($linkHref).offset().top;
        $link.removeClass('active');
        $(this).addClass('active');
        $('html').animate({ scrollTop: $linkTo - 50}, 1100);
        return false;
    })
    window.onscroll = function() {
        var $scroll = window.pageYOffset || document.documentElement.scrollTop;
        if($scroll >= 200){
            $navMenu.css({'position':'fixed','top':'0','z-index':'111'});
        } else {
            $navMenu.css({'position':'absolute','top':'90px'});
        }
    }
})