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
})