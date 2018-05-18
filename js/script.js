var $pos = [];
var $navBtn = $(".button-bar__btn");
var $navBtnLen = $(".button-bar__btn").length;
var $minPos = $navBtn.eq(0).css("left");
var $maxPos = $navBtn.eq($navBtnLen - 1).css("left");
var $leftBtn = $(".button-bar__nav-element").children().eq(0);
var $rightBtn = $(".button-bar__nav-element").children().eq(1);
var $timer = 0;
for (var i=0; i < $navBtnLen ; i++){
  $pos[i + 2] = $navBtn.eq(i).css("left");
}
$leftBtn.click(function(){
  if ($timer == 0){
    btnListener("left");
  }
});
$rightBtn.click(function(){
  if ($timer == 0){
    btnListener("right");
  }
});
function btnListener ($direct) {
  $timer += 500;
  setTimeout(function () {
    $timer = 0;
  },$timer);
  if ($direct == "left"){
    rotateBtn('left',$navBtn,$navBtnLen,$pos);
  } else if ($direct == "right"){
    rotateBtn('right',$navBtn,$navBtnLen,$pos);
  } else {
    alert($direct);
  }
};
function rotateBtn ($arrows,$navBtn,$navBtnLen,$pos) {
  if ($arrows == 'right'){
    $pos[$navBtnLen + 2] = $pos[2];
    for (i=0; i < $navBtnLen; i++){
      $pos[i + 2] = $pos[i + 3];
    }
  } else if ($arrows == 'left'){
    $pos[1] = $pos[$navBtnLen + 1];
    for (i=$navBtnLen + 2; i > 0; i--){
      $pos[i - 1] = $pos[i - 2];
    }
  } else {
    alert('error');
  }
  var $maxEl;
  var $minEl;
  for (i=0; i < $navBtnLen; i++){
    if ($maxPos == $navBtn.eq(i).css("left")){
     $maxEl = $navBtn.eq(i);
    } else if ($minPos == $navBtn.eq(i).css("left")){
      $minEl = $navBtn.eq(i);
    };
  }
  if ($arrows =='left'){
    $minEl.hide();
  for (i=0; i < $navBtnLen; i++){
    $navBtn.eq(i).animate({'left': $pos[i + 2]})
  }
    $minEl.show(1);
  } else if ($arrows =='right'){
    $maxEl.hide();
    for (i=0; i < $navBtnLen; i++){
      $navBtn.eq(i).animate({'left': $pos[i + 2]})
    }
    $maxEl.show(1);
  }
}
var $sliderLeftBtn = $("div.slider__control .arrow-btn i").eq(0);
var $sliderRightBtn = $("div.slider__control .arrow-btn i").eq(1);
var $sliderInputs = $("#slider input");
var $sliderLeng = $sliderInputs.length;
$sliderLeftBtn.click(function(){
  if ($timer == 0){
    sliderControl("left")
  }
});
$sliderRightBtn.click(function(){
  if ($timer == 0){
    sliderControl("right");
  }
});
function sliderControl ($direct) {
  var $active;
  for (i=0; i < $sliderLeng; i++){
    if ($sliderInputs.eq(i).prop("checked") == true){
      $active = i;
    }
  }
  $timer += 500;
  setTimeout(function () {
    $timer = 0;
  },$timer);
  if ($direct == "left"){
    $sliderInputs.eq($active).prop("checked", false);
    --$active;
    if ($active < 0){
      $active = $sliderLeng - 1;
    }
    $sliderInputs.eq($active).prop("checked", true);
  } else if ($direct == "right"){
    $sliderInputs.eq($active).prop("checked", false);
    ++$active;
    if ($active > $sliderLeng - 1){
      $active = 0;
    }
    $sliderInputs.eq($active).prop("checked", true);
  }
}
var $buttonCalc = $(".slider__nav-block__content button.button");
var $calcBtnAll = $('span:contains("Рассчитать стоимость")').parent();
var $modal = $("div.model-windows");
var $calc = $("#model-w-calc");
var $review = $("#model-w-review");
var $question = $("#model-w-question");
var $callBack = $("#model-w-call-back");
var $sucess = $("#model-w-sucess");
$calcBtnAll.click(function () {
  modalControl("calc");
});
$buttonCalc.click(function () {
  modalControl("calc");
});
function modalControl ($type) {
  $modal.css("display","block");
  if ($type == "calc"){
    $calc.css("display","block");
    modalCalc($calc);
  } else if ($type == "review") {
    $review.css("display","block");
  } else if ($type == "question"){
    $question.css("display","block");
  } else if ($type == "callBack"){
    $callBack.css("display","block");
    modalCallBack($callBack);
  } else if ($type == "sucess"){
    $sucess.css("display","block");
    modalSucess($sucess);
  }
}
function modalSucess () {
  var $closet = $sucess.children("button.btn-ico");
  $closet.click(function closet () {
    closetModal($sucess);
  });
}
function modalCallBack () {
  var $closet = $callBack.children("button.btn-ico");
  var $submit = $callBack.find('button.button');
  var $name = $callBack.find('input[name="name"]');
  var $number = $callBack.find('input[name="number"]');
  var $capch = true;
  $submit.attr('type','button');
  $closet.click(function closet () {
    closetModal($callBack);
  });
  $submit.click(function () {
    if ($name.val() == false){
      alert("Введите имя");
    } else if ($name.val().length < 3){
      alert("имя должно содержат три и более буквы");
    } else if ($number.val() == false){
      alert("Введите номер");
    } else if ($number.val().length < 10){
      alert("номер телефона должен состоять из десяти цифер без +7");
    } else if ($capch == false){
      alert("capcha");
      modalCalc($calc);
    } else {
      alert("Ваши данные" + "\rИмя: " + $name.val()
        + "\rНомер: " + $number.val() + "\rожидайте звонка");
      closetModal($callBack);
      modalControl("sucess");
    }
  })
}
function modalCalc () {
  var $closet = $calc.children("button.btn-ico");
  var $name = $calc.find('input[name="name"]');
  var $eMail = $calc.find('input[name="email"]');
  var $number = $calc.find('input[name="number"]');
  var $amount = $calc.find('input[name="amount"]');
  var $coments = $calc.find('textarea[name="coments"]');
  var $capch = true;
  var $ratio = $calc.find('input[name="work-type"]');
  var $submit = $calc.find('button.button');
  $submit.attr('type','button');
  var $ratioSelect;
  $closet.click(function closet () {
    closetModal($calc);
  });
  $submit.click(function submit () {
    for (i = 0; i < $ratio.length; i++){
      if ($ratio.eq(i).prop("checked") == true){
        $ratioSelect = $(".label-button label").eq(i);
      }
    }
    if ($name.val() == false){
      alert("Введите имя");
    } else if ($name.val().length < 3){
      alert("имя должно содержат три и более буквы");
    } else if ($eMail.val() == false){
      alert("Введите E-mail");
    } else if ($number.val() == false){
      alert("Введите номер");
    } else if ($number.val().length < 10){
      alert("номер телефона должен состоять из десяти цифер без +7");
    } else if ($ratioSelect == undefined){
      alert("Выберети тип ремонта");
    } else if ($capch == false){
      alert("capch");
    } else if ($amount.val() == false){
      alert("Введите размер без кв\м");
      modalCalc($calc);
    } else {
      var $data = [];
      $data.name = $name.val();
      $data.mail = $eMail.val();
      $data.number = $number.val();
      $data.amount = $amount.val();
      $data.coments = $coments.val();
      $data.capch = $capch;
      submitCalc($ratioSelect,$data);
    }
  });
}
function closetModal ($type) {
  $modal.css("display","none");
  $type.css("display","none");
}
function submitCalc ($ratioSelect,$data){
  alert(
    "Имя: " + $data.name
    + "\rПочта: " + $data.mail
    + "\nНомер: " + $data.number
    + "\nПлощадь: " + $data.amount
    + "\nКоментарий: " + $data.coments
    + "\nКапча: " + $data.capch
    + "\nТип ремонта: " +$ratioSelect.text()
  );
  closetModal($calc);
  modalControl("sucess");
}
$(function () {
  var $trustSlider = $("div.trust-frame__control");
  var $leftArrow = $trustSlider.find("div.arrow-btn i:first");
  var $rightArrow = $trustSlider.find("div.arrow-btn i:last");
  var $inputGroup = $trustSlider.siblings('[type="radio"]');
  var $inputMas = [];
  for (i=0; i < $inputGroup.length; i++){
    $inputMas[i] = $inputGroup.eq(i);
  }
  $leftArrow.click(function () {
    trustSlid('left');
  })
  $rightArrow.click(function () {
    trustSlid('right');
  })
  function trustSlid ($direct) {
    var $a;
    for (i=0;i < $inputMas.length;i++){
      if ($inputMas[i].prop('checked') == true){
        $a = i;
      }
    }
    if ($direct == 'left'){
      $inputMas[$a].prop('checked', false);
      $a--;
      if ($a < 0){
        $a = $inputMas.length - 1;
      }
      $inputMas[$a].prop('checked', true);
    } else if ($direct == 'right'){
      $inputMas[$a].prop('checked', false);
      $a++;
      if ($a > $inputMas.length - 1){
        $a = 0;
      }
      $inputMas[$a].prop('checked', true);
    }
  }
});
$(function () {
  var $callBackIco = $("div.call-back__ico");
  var $callBackBtnAll = $('span:contains("Заказать обратный звонок")').parent();
  $callBackBtnAll.click(function () {
    modalControl("callBack");
  })
  $callBackIco.click(function () {
    modalControl ("callBack");
  })
});
$(function () {
  var $footerform = $('div.footer__block-left');
  var $footerBtn = $footerform.find('button.footer-btn');
  $footerBtn.click(function () {
    var $name = $footerform.find('input[type="text"]');
    var $email = $footerform.find('input[type="email"]');
    var $number = $footerform.find('input[type="number"]');
    var $coments = $footerform.find('textarea');
    if ($name.val() == false){
     alert('Введите имя');
    } else if ($name.val().length < 3){
      alert('Имя должно содержать больше трёх букв');
    } else if ($email.val() == false){
      alert('Введите Email');
    } else if ($number.val() == false){
      alert('Введите номер');
    } else if ($number.val().length < 7){
      alert('Номер должен содержать больше 7 цифер');
    } else {
      alert('Имя: ' + $name.val()
      + '\rEmail: ' + $email.val()
      + '\rНомер: ' + $number.val()
      + '\rКоментарий: ' + $coments.val());
    }
  })
});