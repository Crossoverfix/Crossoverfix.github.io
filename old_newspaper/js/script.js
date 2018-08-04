$(document).ready(function () {
    var $callBackBtn = $("[key = call-back]");
    var $answersBtn = $("[key = answers]");
    var $popUpAnswers = $("#pop-up__call-back");
    var $popUpCallUs = $("#pop-up__call-us");
    var $collapseBtn = $("#collapse-btn");
    var $collapseNav = $(".content__header__nav-bar");
    var $collapseCard = $collapseNav.find('input[type="checkbox"]');
    var $collapseCardBtn = $("#collapse-card");
    if($(window).width() <= '767'){
        $collapseNav.animate({height:'hide'},0);
    }
    $collapseBtn.click(function () {
        collapseMenu();
    })
    $answersBtn.click(function () {
        answersPopUp();
    });
    $callBackBtn.click(function () {
        callBackPopUp();
    })
    function collapseMenu() {
        $collapseCard.unbind();
        $collapseCardBtn.unbind();
        $collapseCard.prop('checked',false);
        $collapseBtn.css({'position':'absolute','left':'85%','top':'10px'});
        $collapseNav.animate({padding:'20px 15px',height:"show"},400);
        $collapseBtn.unbind();
        $collapseCard.change(function () {
            $collapseCardBtn.css('display','block');
            $collapseCard.unbind();
            $collapseCard.change(function () {
                $collapseCardBtn.css('display','none');
                collapseMenu();
            })
            $collapseCardBtn.click(function () {
                $collapseCard.prop('checked',false);
                $collapseCardBtn.css('display','none');
                collapseMenu();
            })
        });
        $collapseBtn.click(function () {
            $collapseNav.animate({padding:'0px 15px',height:"hide"},400);
            if($collapseNav.parent().parent().hasClass("clone")){
                $collapseBtn.css({'position':'relative','left':'0','top':'10px'});
            } else {
                $collapseBtn.css({'position':'relative','left':'0','top':'120px'});
            }
            $collapseCardBtn.css('display','none');
            $collapseBtn.unbind();
            $collapseBtn.click(function () {
                collapseMenu();
            })
        });
    }
    function callBackPopUp() {
        $("#pop-up").css('display','block');
        $popUpCallUs.css('display','block');
        let $closedPopUp = $('button.btn-close');
        $closedPopUp.unbind();
        $('.pop-up__shadow').click(function () {
            closePop();
        })
        $(document).keydown(function (e) {
            if (e.which == "27"){
                closePop();
            };
        })
        $closedPopUp.click(function () {
            closePop();
        })
    }
    function answersPopUp() {
        $("#pop-up").css('display','block');
        $popUpAnswers.css('display','block');
        let $closedPopUp = $('button.btn-close');
        $closedPopUp.unbind();
        $('.pop-up__shadow').click(function () {
            closePop();
        })
        $(document).keydown(function (e) {
            if (e.which == "27"){
                closePop();
            };
        })
        $closedPopUp.click(function () {
            closePop();
        })
    }
    function closePop() {
        $("#pop-up").css('display','none');
        $popUpAnswers.css('display','none');
        $popUpCallUs.css('display','none');
        $popUpCalendar.css('display','none');
    }
})
function calendarPopUp($number) {
    var $popUpCalendar = $("#pop-up__calendar");
    var $popUpCalendarText = $('#calendar-text');
    $("#pop-up").css('display','block');
    $popUpCalendar.css('display','block');
    if($number == '7'){
        $popUpCalendarText.html('17 НОЯБРЯ 1917 ГОДА\n' +
            '\n' +
            'Несмотря на то, что содержание царской семьи в Тобольске было весьма мягким и достаточно комфортным, многие политические новости доходили до бывшего императора с опозданием. В том числе и о массовых беспорядках после Октябрьского переворота.');
    } else if($number == '12'){
        $popUpCalendarText.html('17 МАЯ 1896 ГОДА\n' +
            '\n' +
            'В рамках торжеств (они продолжались год с лишним) по поводу венчания на царство императорская семья посетила вечером Большой театр, где в этом день давали традиционную оперу «Жизнь за царя» и премьерный балет «Жемчужина», в котором главную партию исполняла знаменитая Матильда Кшесинская.');
    } else if($number == '17'){
        $popUpCalendarText.html('17 ОКТЯБРЯ 1888 ГОДА\n' +
            '\n' +
            'В это день произошло крушение царского поезда под Харьковом. Молодой наследник чудом избежал гибели, но записал в своем дневнике: «Роковой для всех день. Все мы могли быть убиты, но по воле Божьей этого не случилось… Однако убитых было 20 человек и раненых 16… На станции Лозовая был молебен и панихида».');
    }
    let $closedPopUp = $('button.btn-close');
    $closedPopUp.unbind();
    $('.pop-up__shadow').click(function () {
        closePop();
    })
    $(document).keydown(function (e) {
        if (e.which == "27"){
            closePop();
        };
    })
    $closedPopUp.click(function () {
        closePop();
    })
    function closePop() {
        $("#pop-up").css('display','none');
        $popUpCalendar.css('display','none');
    }
}