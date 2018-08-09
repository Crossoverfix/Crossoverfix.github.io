$(document).ready(function () {
    var $popUp = $("#pop-up");
    var $contentViev = $("#pop-up__content");
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
        $contentViev.empty();
        if($index == null){
            $index = 0;
        }
        showPopUp($index,'mobil');
    }
    $allCards.click(function () {
        var $cardIndex = $($cards).index(this);
        showPopUp($cardIndex,'screen');
    });
    if($(window).width() <= '767'){
        showPopUp(0,'mobil');
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
        watchContent();
        $statusActive.html($tempIndex + 1);
        $statusMax.html($cards.length);
        $prevOne.unbind();
        $nextOne.unbind();
        $($contentViev).unbind();
        $($contentViev).hammer().bind('swipeleft',function () {
            if($(window).width() <= '767'){
                leafCard('prev','mobil');
            } else {
                leafCard('prev','screen');
            }
        })
        $($contentViev).hammer().bind('swiperight',function () {
            if($(window).width() <= '767'){
                leafCard('next','mobil');
            } else {
                leafCard('next','screen');
            }
        })
        $(document).unbind('keydown');
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
        function watchContent() {
            if($(window).width() > '767'){
                    $popUpWrapp.css('width','');
                    $contentViev.stop();
                    $contentViev.css("height",$tempCard.outerHeight() + 30);
                    if($tempCard.hasClass('cs-bg')){
                        $popUpWrapp.css('width','760px');
                        $contentViev.css("height",'540px');
                        $tempCard.css('width','720px');
                        $("#pop-up__content .content__body__pages__card.cs-bg").css("height","100%")
                        if($tempCard.find('img').outerWidth() > 720){
                            $tempCard.find('img').css({'height':'auto','width':'100%'});
                        }
                    } else {
                        if($tempCard.outerHeight() > 500){
                            if($tempCard.outerHeight() > 760 && $tempCard.has('img') && $(window).width() > '1022'){
                                $popUpWrapp.css('width','660px');
                                $tempCard.css('max-width','620px');
                                $contentViev.css({'height':'560px','overflow':'auto'});
                            } else if($tempCard.outerHeight() > 760 && $(window).width() < '1023'){
                                $popUpWrapp.css('width','760px');
                                $tempCard.css('max-width','720px');
                                $contentViev.css({'height':'500px','overflow':'auto'});
                            } else {
                                $popUpWrapp.css('width',$tempCard.outerHeight());
                                $tempCard.css('max-width',$tempCard.outerHeight() - 60);
                                $contentViev.css("height",$tempCard.outerHeight() + 30);
                            }
                        }
                    }
            }
        }
        function removeDelay() {
            $contentViev.empty();
            $tempCard.appendTo($contentViev);
            watchContent();
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