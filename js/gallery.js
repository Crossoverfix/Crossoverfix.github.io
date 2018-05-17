var $checkAll = document.getElementById("filter-all");
var $checkAny = document.getElementsByClassName("filter");
var $colectionLenght = $checkAny.length;
function galleryChecked ($type) {
  if (+$type == 1) {
      return galleryCheckedAll();
  } else if (+$type == 2){
    return galleryCheckedAny();
  } else {
      alert("Ошибка")
  }
};

function galleryCheckedAll(){
    for (var $i = 0;$i < $colectionLenght; $i++ ){
        $checkAny[$i].checked = false;
    }
};

function checkedAny () {
  var $num = 0;
  var $vrt;
  for (var $i = 0;$i < $colectionLenght; $i++ ){
    if ( $checkAny[$i].checked == false){
      $num++;
    } else {continue;}
  }
  if ($num == $i){
    $vrt = "1";
    return $vrt;
  } else {
    $vrt = "0";
    return $vrt;
  }
}

function galleryCheckedAny () {
    $checkAll.checked = false;
  if (checkedAny() == 1){
        $checkAll.checked = true;
  }
};










//function chekedListenerAll() {
//  var $anyCheck = document.getElementsByClassName("filter");
//  var $num = 0;
//  while ($anyCheck.item([$num]) != null){
//    $anyCheck.item([$num]).checked = false;
//    $num++;
//  }
//};
//function searchCheked($anyNum) {
//  var $anyCheck = document.getElementsByClassName("filter");
//  if ($anyCheck.item([$anyNum]) != null){
//
//    return true;
//  } else {
//    return false;
//  }
//
//}
//function chekedListenerAny() {
//  var $chAll = document.getElementById("filter-all");
//  if (searchCheked($anyNum)){
//    $chAll.checked = false
//  }
//  else {
//    $chAll.checked = true
//  }
//
//};