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
    var $tabsNews = $(".biography__news");
    $tabs.on('click',function () {
        var $indexTabs = $($tabs).index(this);
        $tabs.removeClass('active');
        $tabsContent.removeClass('active');
        $tabsNews.removeClass('active');
        $tabs.eq($indexTabs).addClass('active');
        $tabsContent.eq($indexTabs).addClass('active');
        $tabsNews.eq($indexTabs).addClass('active');
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
    var $mobilCollapser = $('#mobil-menu input');
    var $mobilLinks = $('#mobil-menu a');
    $mobilLinks.on('click',function () {
        $mobilCollapser.prop('checked',false);
        var $linkHrefMob = $(this).attr("href");
        var $linkToMob = $($linkHrefMob).offset().top;
        $('html').animate({ scrollTop: $linkToMob - 160}, 1100);
        return false;
    });
    $link.click(function () {
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
        var $quoteOld = $('.quote__text :visible');
        $quoteRadio.removeClass('active');
        $quoteRadio.eq($radioIndex).addClass('active');
        $quoteOld.animate({'position':'absolute','right':'-300px','opacity':'0'},400,function () {
            $quoteOld.css('display','none');
            $quoteText.eq($radioIndex).css({'display':'block','right':'-300px'});
            $quoteText.eq($radioIndex).animate({'position':'relative','right':'0','opacity':'1'},400);
        });
    });
    setInterval(quoteAuto,5000);
    function quoteAuto() {
    var $quoteOld = $('.quote__text :visible');
    $quoteRadio.removeClass('active');
    $quoteRadio.eq($quoteCount).addClass('active');
    $quoteOld.animate({'position':'absolute','right':'-300px','opacity':'0'},400,function () {
        $quoteOld.css('display','none');
        $quoteText.eq($quoteCount).css({'display':'block','right':'-300px'});
        $quoteText.eq($quoteCount).animate({'position':'relative','right':'0','opacity':'1'},400);
    });
    if($quoteCount <= 1){
        $quoteCount++;
    } else {
        $quoteCount = 0;
    }
}

    var $popUp = $("#pop-up");
    var $popUpNews = $("#pop-up .pop-up__news");
    var $popUpDeputat = $("#pop-up .pop-up__deputats");
    var $popUpCallBack = $("#pop-up .pop-up__call-back");

})
