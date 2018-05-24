$(function () {
  var $tabs = $("div.services__table__control__point");
  var $content = $("div.services__table__watch__point");
  $tabs.click(function (eventObject) {
    var $eventTab = eventObject.currentTarget;
    clickTabs($eventTab);
  })
  function clickTabs ($eventTab) {
    for (i = 0;i < $tabs.length;i++){
      $tabs.eq(i).removeClass("active");
      $content.eq(i).removeClass("active");
    }
    $($eventTab).addClass("active");
    for (i = 0;i < $tabs.length;i++){
      if ($tabs.eq(i).hasClass("active")){
        $content.eq(i).addClass("active");
      }
    }
  }
})