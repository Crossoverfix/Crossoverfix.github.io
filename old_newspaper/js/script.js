$(document).ready(function () {
    var $popUp = $("#pop-up");
    var $contentViev = $("#pop-up__content");
    var $pages = $(".content__body__pages");
    var $allCards = $(".content__body__pages__card");
    var $cards = $(".content__body__pages:visible").find(".content__body__pages__card");
    var $pagesPrev = $("#pages-nav button:first-child");
    var $pagesNext = $("#pages-nav button:last-child");
    $pagesPrev.click(function () {
        leafPages('prev');
    });
    $pagesNext.click(function () {
        leafPages('next');
    });
    $cards.click(function () {
        var $cardIndex = $($cards).index(this);
        showPopUp($cardIndex);
    });
    function leafPages($directions) {
        var $pagesIndex = $($pages).index(".active");
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
                $tempoPages += 1;
            }
        } else {
            alert('error');
        }
        $pages.eq($pagesIndex).removeClass('active');
        $pages.eq($tempoPages).addClass('active');
    }
    function showPopUp($index) {
        var $prevOne = $("#nav-bar button:first-child");
        var $nextOne = $("#nav-bar button:last-child");
        var $statusActive = $("#status-bar span:first-child");
        var $statusMax = $("#status-bar span:last-child");
        $popUp.css('display','block');
        var $tempCard = $cards.eq($index).clone();
        var $oldTempCard;
        $tempCard.appendTo($contentViev);
        var $tempIndex = $index;
        $statusActive.html($tempIndex + 1);
        $statusMax.html($cards.length);
        $prevOne.click(function () {
            leafCard('prev');
        })
        $nextOne.click(function () {
            leafCard('next');
        })
        function removeDelay() {
            $contentViev.empty();
            $tempCard.appendTo($contentViev);
        }
        function leafCard($direction) {
            if ($direction == 'prev'){
                if($tempIndex <= 0){
                    $tempIndex = $cards.length - 1;
                    $oldTempCard = $tempCard;
                    $tempCard = $cards.eq($tempIndex).clone();
                    $tempCard.css({'left':'120%','opacity':'0'});
                    $tempCard.appendTo($contentViev);
                    $oldTempCard.animate({left:'-20%',opacity:'0'},1000);
                    $tempCard.animate({left:'50%',opacity:'1'},1000);
                    setTimeout(removeDelay,1000);
                } else {
                    $tempIndex--;
                    $oldTempCard = $tempCard;
                    $tempCard = $cards.eq($tempIndex).clone();
                    $tempCard.css({'left':'120%','opacity':'0'});
                    $tempCard.appendTo($contentViev);
                    $oldTempCard.animate({left:'-20%',opacity:'0'},1000);
                    $tempCard.animate({left:'50%',opacity:'1'},1000);
                    setTimeout(removeDelay,1000);
                }
            } else if ($direction == 'next'){
                if($tempIndex >= $cards.length - 1){
                    $tempIndex = 0;
                    $oldTempCard = $tempCard;
                    $tempCard = $cards.eq($tempIndex).clone();
                    $tempCard.css({'left':'-20%','opacity':'0'});
                    $tempCard.appendTo($contentViev);
                    $oldTempCard.animate({left:'120%',opacity:'0'},1000);
                    $tempCard.animate({left:'50%',opacity:'1'},1000);
                    setTimeout(removeDelay,1000);
                } else {
                    $tempIndex += 1;
                    $oldTempCard = $tempCard;
                    $tempCard = $cards.eq($tempIndex).clone();
                    $tempCard.css({'left':'-20%','opacity':'0'});
                    $tempCard.appendTo($contentViev);
                    $oldTempCard.animate({left:'120%',opacity:'0'},1000);
                    $tempCard.animate({left:'50%',opacity:'1'},1000);
                    setTimeout(removeDelay,1000);
                }
            } else {
                alert('error');
            }
            $statusActive.html($tempIndex + 1);
        }
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
            $popUp.css('display','none');
        }
    }
})