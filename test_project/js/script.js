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
    $(function () {
        maskPhone()
    })
    function maskPhone(){
        var $country = $("#country option:selected").val();
        switch ($country){
            case "ru":
                $input.telNumber.mask("+7(999) 999-99-99");
                break;
            case "ua":
                $input.telNumber.mask("+380(999) 999-99-99");
                break;
            case "by":
                $input.telNumber.mask("+375(999) 999-99-99");
                break;
        };
        $("#country").change(function () {
            maskPhone();
        });
    }
    $input.name.change(function () {
        validName();
    });
    $input.email.change(function () {
        validEmail();
    });
    function validName() {
        if ($input.name.val().length < 3){
            $input.name.css("border","solid 1px #ff0000");
        } else {
            $input.name.css("border","solid 1px #008000");
        }
    }
    function validEmail() {
      if ($input.email.val().length > 6){
          if ($input.email.val().match(/@/i) !== null){
              if ($input.email.val().match(/\./) !== null){
                  var test = $input.email.val().match(/\./);
                  $input.email.css("border","solid 1px #008000");
              } else {
                  $input.email.css("border","solid 1px #ff0000");
              }
          } else {
              $input.email.css("border","solid 1px #ff0000");
          }
      } else {
          $input.email.css("border","solid 1px #ff0000");
      }
    }
};
