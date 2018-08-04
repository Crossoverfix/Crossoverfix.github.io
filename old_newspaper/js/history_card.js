$(document).ready(function () {
    var $popUp = $("#pop-up");
    var $contentViev = $("#pop-up__content");
    var $pages = $(".content__body__pages");
    var $allCards = $(".content__body__pages__card");
    var $cards = $allCards.not(".content__body__pages__card:hidden");
    var $popUpWrapp = $(".pop-up__wrapper");
    var $newNav = $("#clone-nav");
    var $oldNav = $(".content__header");
    var $headerText = $(".content__body__pages__header h1");
    // var $nav = {};
    // $nav.prev = $(".content__header__page-bar__wrapper button.prev-one");
    // $nav.prev.count = $nav.prev.find("span");
    // $nav.next = $(".content__header__page-bar__wrapper button.next-one");
    // $nav.next.count = $nav.next.find("span");
    // $nav.prev.count.html($pages.index($pages.not(".content__body__pages:hidden")));
    // $nav.next.count.html($pages.index($pages.not(".content__body__pages:hidden")) + 2);
    // if ($pages.index($pages.not(".content__body__pages:hidden")) == 0){
    //     $nav.prev.css('display','none');
    // } else if($pages.index($pages.not(".content__body__pages:hidden")) == $pages.length - 1){
    //     $nav.next.css('display','none');
    // }
    // $nav.prev.click(function () {
    //     leafPages('prev');
    // });
    // $nav.next.click(function () {
    //     leafPages('next');
    // });
    $allCards.click(function () {
        var $cardIndex = $($cards).index(this);
        showPopUp($cardIndex);
    });
    if($(window).width() <= '767'){
        $oldNav.appendTo($newNav);
        $headerText.appendTo(".content__header__page-bar__wrapper");
        showPopUp(0);
    }
    function leafPages($directions) {
        var $pagesActive = $pages.not(".content__body__pages:hidden");
        var $pagesIndex = $($pages).index($pagesActive);
        var $tempoPages = $pagesIndex;
        if ($directions == 'prev'){
            if($pagesIndex <= 0){
                $tempoPages = $pages.length - 1;
            } else {
                $tempoPages--;
            }
        } else if ($directions == 'next'){
            if($pagesIndex >= $pages.length - 1){
                $tempoPages = 0;
            } else {
                $tempoPages++;
            }
        } else {
            alert('error');
        }
        if($tempoPages == 0){
            $nav.prev.css('display','none');
            $nav.next.count.html($tempoPages + 2);
        } else if ($tempoPages == $pages.length - 1){
            $nav.prev.count.html($tempoPages);
            $nav.next.css('display','none');
        } else {
            $nav.next.css('display','block');
            $nav.prev.css('display','block');
            $nav.prev.count.html($tempoPages);
            $nav.next.count.html($tempoPages + 2);
        }
        $pagesActive.removeClass('active');
        $pages.eq($tempoPages).addClass('active');
        $cards = $allCards.not(".content__body__pages__card:hidden");
        $contentViev.empty();

    }
    function showPopUp($index) {
        var $prevOne = $("#nav-bar button:first-child");
        var $nextOne = $("#nav-bar button:last-child");
        var $statusActive = $("#status-bar span:first-child");
        var $statusMax = $("#status-bar span:last-child");
        $popUp.css('display','block');
        $(".pop-up__wrapper").css('display','block');
        $contentViev.css('display','block');
        var $tempIndex = $index;
        var $tempCard = $cards.eq($index).clone();
        var $oldTempCard;
        $tempCard.appendTo($contentViev);
        $contentViev.css("height",$tempCard.outerHeight() + 30);
        watchContent('page');
        $statusActive.html($tempIndex + 1);
        $statusMax.html($cards.length);
        $prevOne.unbind();
        $nextOne.unbind();
        $(document).unbind('keydown');
        $prevOne.bind('click', function () {
            leafCard('prev');
        })
        $nextOne.bind('click',function () {
            leafCard('next');
        })
        function watchContent($place) {
            if($(window).width() > '767'){
                if($place == 'page'){
                    $popUpWrapp.css('width','');
                    $contentViev.stop();
                    $contentViev.css("height",$tempCard.outerHeight() + 30);
                    if($tempCard.hasClass('cs-bg')){
                        if ($tempCard.find('img').outerWidth() > $popUpWrapp.outerWidth() - 60){
                            $popUpWrapp.css('width',$tempCard.find('img').outerWidth() + 60);
                        } else if($tempCard.find('img').outerWidth() < $popUpWrapp.outerWidth() / 2){
                            $tempCard.css('height','500');
                            $contentViev.css("height",$tempCard.outerHeight() + 30);
                        }
                    } else {
                        if($tempCard.outerHeight() > 500){
                            $popUpWrapp.css('width',$tempCard.outerHeight());
                            $tempCard.css('max-width',$tempCard.outerHeight() - 60);
                            $contentViev.css("height",$tempCard.outerHeight() + 30);
                        }
                    }
                } else if($place == 'leafCard'){
                    $popUpWrapp.animate({width:510},500);
                    if($tempCard.hasClass('cs-bg')){
                        if ($tempCard.find('img').outerWidth() > $popUpWrapp.outerWidth() - 60){
                            $popUpWrapp.animate({width:$tempCard.find('img').outerWidth() + 60},500);
                        } else if($tempCard.find('img').outerWidth() < $popUpWrapp.outerWidth() / 2){
                            $tempCard.animate({height:500},500);
                            $contentViev.animate({height:$tempCard.outerHeight() + 30},500);
                        }
                    } else {
                        if($tempCard.outerHeight() > 500){
                            $contentViev.stop();
                            $popUpWrapp.stop();
                            $popUpWrapp.animate({width:$tempCard.outerHeight()},250 , function () {
                                $contentViev.animate({height:$tempCard.outerHeight() + 30},300);
                            });
                            $tempCard.animate({maxWidth:$tempCard.outerHeight() - 60},500);
                        }
                    }
                }
            }
        }
        function removeDelay() {
            $contentViev.empty();
            $tempCard.appendTo($contentViev);
            watchContent('page');
        }
        function leafCard($direction) {
            if ($direction == 'prev'){
                if($tempIndex <= 0){
                    $tempIndex = $cards.length - 1;
                    $oldTempCard = $tempCard;
                    $contentViev.css("height",$oldTempCard.outerHeight() + 30);
                    $oldTempCard.css("position","absolute");
                    $tempCard = $cards.eq($tempIndex).clone();
                    $tempCard.css({'left':'200%','opacity':'0'});
                    $tempCard.appendTo($contentViev);
                    $oldTempCard.animate({left:'-200%',opacity:'0'},1000);
                    $tempCard.animate({left:'50%',opacity:'1'},1000);
                    $tempCard.css("position","relative");
                    $contentViev.stop();
                    if ($oldTempCard.outerHeight() > $tempCard.outerHeight()) {
                        $contentViev.animate({height:$tempCard.outerHeight() + 30},1600);
                    } else {
                        $contentViev.animate({height:$tempCard.outerHeight() + 30},700);
                    }
                    setTimeout(removeDelay,1000);
                } else {
                    $tempIndex--;
                    $oldTempCard = $tempCard;
                    $contentViev.css("height",$oldTempCard.outerHeight() + 30);
                    $oldTempCard.css("position","absolute");
                    $tempCard = $cards.eq($tempIndex).clone();
                    $tempCard.css({'left':'200%','opacity':'0'});
                    $tempCard.appendTo($contentViev);
                    $oldTempCard.animate({left:'-200%',opacity:'0'},1000);
                    $tempCard.animate({left:'50%',opacity:'1'},1000);
                    $tempCard.css("position","relative");
                    $contentViev.stop();
                    if ($oldTempCard.outerHeight() > $tempCard.outerHeight()) {
                        $contentViev.animate({height:$tempCard.outerHeight() + 30},1600);
                    } else {
                        $contentViev.animate({height:$tempCard.outerHeight() + 30},700);
                    }
                    setTimeout(removeDelay,1000);
                }
            } else if ($direction == 'next'){
                if($tempIndex >= $cards.length - 1){
                    $tempIndex = 0;
                    $oldTempCard = $tempCard;
                    $contentViev.css("height",$oldTempCard.outerHeight() + 30);
                    $oldTempCard.css("position","absolute");
                    $tempCard = $cards.eq($tempIndex).clone();
                    $tempCard.css({'left':'-200%','opacity':'0'});
                    $tempCard.appendTo($contentViev);
                    $oldTempCard.animate({left:'200%',opacity:'0'},1000);
                    $tempCard.animate({left:'50%',opacity:'1'},1000);
                    $tempCard.css("position","relative");
                    $contentViev.stop();
                    if ($oldTempCard.outerHeight() > $tempCard.outerHeight()) {
                        $contentViev.animate({height:$tempCard.outerHeight() + 30},1600);
                    } else {
                        $contentViev.animate({height:$tempCard.outerHeight() + 30},700);
                    }
                    setTimeout(removeDelay,1000);
                } else {
                    $tempIndex += 1;
                    $oldTempCard = $tempCard;
                    $contentViev.css("height",$oldTempCard.outerHeight() + 30);
                    $oldTempCard.css("position","absolute");
                    $tempCard = $cards.eq($tempIndex).clone();
                    $tempCard.css({'left':'-200%','opacity':'0'});
                    $tempCard.appendTo($contentViev);
                    $oldTempCard.animate({left:'200%',opacity:'0'},1000);
                    $tempCard.animate({left:'50%',opacity:'1'},1000);
                    $tempCard.css("position","relative");
                    $contentViev.stop();
                    if ($oldTempCard.outerHeight() > $tempCard.outerHeight()) {
                        $contentViev.animate({height:$tempCard.outerHeight() + 30},1600);
                    } else {
                        $contentViev.animate({height:$tempCard.outerHeight() + 30},700);
                    }
                    setTimeout(removeDelay,1000);
                }
            } else {
                alert('error');
            }
            $statusActive.html($tempIndex + 1);
            return false;
        }
        var $closedPop = $('button.btn-close');
        $closedPop.click(function () {
            closePopUp();
        })
        $('.pop-up__shadow').click(function () {
            closePopUp();
        })
        $(document).keydown(function (e) {
            if (e.which == "27"){
                closePopUp();
            };
        })
        $(document).keydown(function (e) {
            if (e.which == "37"){
                leafCard('prev');
            };
        })
        $(document).keydown(function (e) {
            if (e.which == "39"){
                leafCard('next');
            };
        })
        function closePopUp() {
            $contentViev.empty();
            $contentViev.css('display','none');
            $popUp.css('display','none');
            $(".pop-up__wrapper").css('display','none');
        }
    }
})