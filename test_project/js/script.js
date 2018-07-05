var $popUp = $("#pop-up");
function popUpCloset($type){
    $type.css("display","none");
    $popUp.css("display","none");
}
function popUp($type) {
    $popUp.css("display","block");
    $type;
};
function callBack() {
    var $callBack = $("#call-back");
    var $closet = $callBack.find("a.close-pop-up");
    $callBack.css("display","block");
    $popUp.click(function () {
        popUpCloset($callBack);
    })
    $closet.click(function () {
        popUpCloset($callBack);
    })
    $(document).keydown(function (e) {
        if (e.which == "27"){
            popUpCloset($callBack);
        };
    })
    var $input = [];
    $input.name = $callBack.find('input[name="name"]');
    $input.email = $callBack.find('input[name="email"]');
    $input.telNumber = $callBack.find('input[name="tel-number"]');
    $input.submit = $callBack.find('button[type="submit"]');
    $input.name.change(function () {
        validName();
    });
    $input.email.change(function () {
        validEmail();
    });
    $input.telNumber.change(function () {
        validTelNumber();
    });
    function validName() {
        if ($input.name.val().length < 3){
            $input.name.css("border","solid 1px #ff0000");
        } else {
            $input.name.css("border","solid 1px #008000");
        }
    }
    function validEmail() {
        var $valid = /.+@.+\\..+/i;
        if ($input.email.val().length < 6){
            $input.email.css("border","solid 1px #ff0000");
        } else if($input.email.val().search($valid) == -1){
            alert($input.email.val().search($valid));
        } else {
            $input.email.css("border","solid 1px #008000");
        }
    }
    function validTelNumber() {

    }

};
