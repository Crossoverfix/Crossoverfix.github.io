$(document).ready(function () {
    var $popUp = $("#pop-up");
    var $contentViev = $("#pop-up__content");
    var $pages = $(".content__body__pages");
    var $allCards = $(".content__body__pages__card");
    var $cards = $allCards.not(".content__body__pages__card:hidden");
    var $popUpWrapp = $(".pop-up__wrapper");
    var $mobilToggler = $('#mobil-watch');
    var $mobilTogglerBack = $('#toggler-mobil');
    $mobilToggler.click(function () {
        $('meta[name="viewport"]').prop('content', 'width=1200');
        $('#newspaper .content__body__pages').css('display','block');
        $('#newspaper .content__footer').css('display','block');
        $mobilTogglerBack.css('display','block');
        $allCards.unbind();
        $allCards.click(function () {
            var $cardIndex = $($allCards).index(this);
            $contentViev.empty();
            togglerBack($cardIndex);
        });
    })
    $mobilTogglerBack.click(function () {
        togglerBack();
    })
    function togglerBack($index) {
        $('meta[name="viewport"]').prop('content', 'width=device-width, user-scalable=no, initial-scale=1, shrink-to-fit=no');
        $('#newspaper .content__body__pages').css('display','none');
        $('#newspaper .content__footer').css('display','none');
        $mobilTogglerBack.css('display','none');
        showPopUp($index,'mobil');
    }
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
        showPopUp($cardIndex,'screen');
    });
    if($(window).width() <= '767'){
        showPopUp(0,'mobil');
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
    function showPopUp($index,$device) {
        if($device == 'mobil'){
            var $prevOne = $("#mobil-cards__nav button:first-of-type");
            var $nextOne = $("#mobil-cards__nav button:last-of-type");
            var $statusActive = $("#mobil-cards__status span:first-of-type");
            var $statusMax = $("#mobil-cards__status span:last-of-type");
            $popUp.css('display','none');
            $(".pop-up__wrapper").css('display','none');
            $contentViev.css('display','none');
            $contentViev = $("#mobil__watch-area");
            $contentViev.css('display','block');
            $cards = $allCards;
            var $tempIndex = $index;
            var $tempCard = $cards.eq(0).clone();
            $tempCard.appendTo($contentViev);
            $tempCard.css({left:'50%'})
        } else if($device == 'screen'){
            var $prevOne = $("#nav-bar button:first-child");
            var $nextOne = $("#nav-bar button:last-child");
            var $statusActive = $("#status-bar span:first-child");
            var $statusMax = $("#status-bar span:last-child");
            $popUp.css('display','block');
            $(".pop-up__wrapper").css('display','block');
            $contentViev.css('display','block');
            var $tempIndex = $index;
            var $tempCard = $cards.eq($index).clone();
        } else {
            alert('error');
        }
        var $oldTempCard;
        $tempCard.appendTo($contentViev);
        $contentViev.css("height",$tempCard.outerHeight() + 30);
        watchContent('page');
        $statusActive.html($tempIndex + 1);
        $statusMax.html($cards.length);
        $prevOne.unbind();
        $nextOne.unbind();
        $(document).unbind('keydown');
        var element = document.getElementById('mobil__watch-area');
        var $touch = new Hammer(element);
        $touch.get("swipe");
        $touch.on('swipeleft',function() {
            if($(window).width() <= '767'){
                leafCard('prev','mobil');
            } else {
                leafCard('prev','screen');
            }
        });
        $touch.on('swiperight',function() {
            if($(window).width() <= '767'){
                leafCard('next','mobil');
            } else {
                leafCard('next','screen');
            }
        });
        $prevOne.bind('click', function () {
            if($(window).width() <= '767'){
                leafCard('prev','mobil');
            } else {
                leafCard('prev','screen');
            }
        })
        $nextOne.bind('click',function () {
            if($(window).width() <= '767'){
                leafCard('next','mobil');
            } else {
                leafCard('next','screen');
            }
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
        function leafCard($direction,$devices) {
            if($devices == 'screen'){
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
            } else if ($devices == 'mobil'){
                if ($direction == 'prev'){
                    if($tempIndex <= 0){
                        $tempIndex = $cards.length - 1;
                        $oldTempCard = $tempCard;
                        $contentViev.css("height",$oldTempCard.outerHeight());
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
                        $contentViev.css("height",$oldTempCard.outerHeight());
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
                        $contentViev.css("height",$oldTempCard.outerHeight());
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
                        $contentViev.css("height",$oldTempCard.outerHeight());
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
            } else {
                alert('error on leafCard');
            }
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
                if($(window).width() <= '767'){
                    leafCard('prev','mobil');
                } else {
                    leafCard('prev','screen');
                }
            };
        })
        $(document).keydown(function (e) {
            if (e.which == "39"){
                if($(window).width() <= '767'){
                    leafCard('next','mobil');
                } else {
                    leafCard('next','screen');
                }
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