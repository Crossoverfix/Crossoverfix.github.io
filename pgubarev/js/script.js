$(document).ready(function () {
    $(document).on('scroll',function () {
        var $scrollPage = $(document).scrollTop();
        if($scrollPage >= 600){
            $("#nav-bar").css({'position':'fixed','top':'73px','bottom':'auto'});
        } else if ($scrollPage <=599){
            $("#nav-bar").css({'position':'absolute','top':'auto','bottom':'0'});
        }
    });
    var $tabs = $(".btn-tabs");
    var $tabsContent = $(".biography__content__point");
    $tabs.on('click',function () {
        var $indexTabs = $($tabs).index(this);
        $tabs.removeClass('active');
        $tabsContent.removeClass('active');
        $tabs.eq($indexTabs).addClass('active');
        $tabsContent.eq($indexTabs).addClass('active');
    })
    var $newsBlog = $(".news-blog__header h2");
    $newsBlog.on('click',function () {
        if($newsBlog.index(this) == 0){
            $newsBlog.removeClass('active');
            $newsBlog.eq(0).addClass('active');
            $(".news-blog__body.news").css('display','flex');
            $(".news-blog__body.blog").css('display','none');
        } else if ($newsBlog.index(this) == 2){
            $newsBlog.removeClass('active');
            $newsBlog.eq(2).addClass('active');
            $(".news-blog__body.news").css('display','none');
            $(".news-blog__body.blog").css('display','flex');
        }
    })
    var $navMenu = $("#nav-bar");
    var $link = $navMenu.find('a');
    $link.click(function ($linkClick) {
        var $linkHref = $(this).attr("href");
        var $linkTo = $($linkHref).offset().top;
        $link.removeClass('active');
        $(this).addClass('active');
        $('html').animate({ scrollTop: $linkTo - 110}, 1100);
        return false;
    });
    var $quoteRadio = $(".quote__radio__imitation");
    var $quoteText = $(".quote__text p");
    var $quoteCount = 0;
    $quoteRadio.on('click',function () {
        $radioIndex = $quoteRadio.index(this);
        $quoteRadio.removeClass('active');
        $quoteRadio.eq($radioIndex).addClass('active');
        $quoteText.hide(300);
        // $quoteText.css('display','none');
        $quoteText.eq($radioIndex).show(300);
        // $quoteText.eq($radioIndex).css('display','block');
    });
    setInterval(quoteAuto,5000);
    function quoteAuto() {
        $quoteRadio.removeClass('active');
        $quoteRadio.eq($quoteCount).addClass('active');
        $quoteText.hide(300);
        // $quoteText.css('display','none');
        $quoteText.eq($quoteCount).show(300);
        // $quoteText.eq($quoteCount).css('display','block');
        if($quoteCount <= 1){
            $quoteCount++;
        } else {
            $quoteCount = 0;
        }
    }
})