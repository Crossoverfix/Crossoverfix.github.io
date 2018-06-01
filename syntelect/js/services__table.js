$(function () {
  var $tabs = $("div.services__table__control__point");
  var $content = $("div.services__table__watch__point");
  var $tabsArea = $("div.services__table__control");
  var $displayWh = screen.width;
  var $contentArea = $("div.services__table__watch");
  var $height = $($contentArea).outerHeight() + 2;
  if ($displayWh <= 768){
    $(".services__table__control__point.active").css("marginBottom",$height);
  }
  $tabs.click(function (eventObject) {
    var $eventTab = eventObject.currentTarget;
    if ($displayWh > 768){
      clickTabs($eventTab);
    } else {
      clickTabsAcardion($eventTab);
    }
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
  function clickTabsAcardion ($eventTab) {
    for (i = 0;i < $tabs.length;i++){
      $tabs.eq(i).removeClass("active");
      $tabs.eq(i).css("marginBottom","1px");
      $content.eq(i).removeClass("active");
    }
    $($eventTab).addClass("active");
    for (i = 0;i < $tabs.length;i++){
      if ($tabs.eq(i).hasClass("active")){
        $content.eq(i).addClass("active");
      }
    }
    var $bottomActive = $($eventTab).position().top + $($eventTab).outerHeight() + 1;
    $contentArea.css("top",$bottomActive);
    $height = $($contentArea).outerHeight() + 2;
    $(".services__table__control__point.active").css("marginBottom",$height);
  }

})