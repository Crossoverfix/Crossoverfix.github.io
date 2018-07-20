$(document).ready(function () {
    var $popUp = $("#pop-up");
    var $contentViev = $("#pop-up__content");
    var $cards = $(".content__body__pages:visible").find(".content__body__pages__card");
    var $cardArray = [];
    $cards.click(function () {
        var $cardIndex = $($cards).index(this);
        showPopUp($cardIndex);
    })
    function showPopUp($index) {
        var $prevOne = $("#nav-bar button:first-child");
        var $nextOne = $("#nav-bar button:last-child");
        $popUp.css('display','block');
        var $tempCard = $cards.eq($index).clone();
        $tempCard.appendTo($contentViev);
        var $tempIndex = $index;
        $prevOne.click(function () {
            leafCard('prev');
        })
        $nextOne.click(function () {
            leafCard('next');
        })
        function leafCard($direction) {
            if ($direction == 'prev'){
                if($tempIndex <= 0){
                    $tempIndex = $cards.length - 1;
                } else {
                    $tempIndex--;
                }
            } else if ($direction == 'next'){
                if($tempIndex >= $cards.length - 1){
                    $tempIndex = 0;
                } else {
                    $tempIndex += 1;
                }
            } else {
                alert('error');
            }
            $contentViev.empty();
            $tempCard = $cards.eq($tempIndex).clone();
            $tempCard.appendTo($contentViev);
        }
        $('.pop-up__shadow').click(function () {
            closePopUp();
        })
        $(document).keydown(function (e) {
            if (e.which == "27"){
                closePopUp();
            };
        })
        function closePopUp() {
            $contentViev.empty();
            $popUp.css('display','none');
        }
    }
})