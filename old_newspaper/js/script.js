$(document).ready(function () {
    var $callBackBtn = $("[key = call-back]");
    var $answersBtn = $("[key = answers]");
    var $popUpAnswers = $("#pop-up__call-back");
    var $popUpCallUs = $("#pop-up__call-us");
    $answersBtn.click(function () {
        answersPopUp();
    });
    $callBackBtn.click(function () {
        callBackPopUp();
    })
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
    }
})