$(function () {
  var $dataName = [];
  var $dataDamage = [];
  var test;









  var $test1 = $("#btn1");
  var $test2 = $("#btn2");
  var $test3 = $("#btn3");
  var $test4 = $("#btn4");
  $test1.click(function () {
    fTest1();
  })
  $test2.click(function () {
    fTest2();
  })
  $test3.click(function () {
    fTest3();
  })
  $test4.click(function () {
    fTest4();
  })
  function fTest1 () {
    var myVar = 0;
// Создали промежуточный блок div#temp
    var tempDiv = $('body').append($('<div/>').attr('id', 'temp')).find('#temp');
// Загрузили данные в этот блок
    tempDiv.load("DataName.txt");
// Записали ответ в переменную
    myVar = tempDiv.text();
// Удалили промежуточный блок
    tempDiv.remove();
    console.log(myVar);
    alert(myVar);
  }
  function fTest2 () {
    var test;
    $.ajax({
      url: "DataName.txt",
      dataType: "text",
      async: true,
      success: function(msg){
        test = msg;
        alert('Содержимое файла: '+test);
      }
    });
  }
  function fTest3 () {

  }
  function fTest4 () {

  }
})