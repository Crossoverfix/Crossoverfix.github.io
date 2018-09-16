$(document).ready(function () {
    $(document).on('scroll',function () {
        var $scrollPage = $(document).scrollTop();
        if($scrollPage >= 600){
            $("#nav-bar").css({'position':'fixed','top':'73px','bottom':'auto'});
        } else if ($scrollPage <=599){
            $("#nav-bar").css({'position':'absolute','top':'auto','bottom':'0'});
        }
    });
})