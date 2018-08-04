$(document).ready(function () {
   var $watchArea = $("#slider-content-watch");
   var $sliderContent = $("#slider-all-content").find("img");
   var $sliderNavPrev = $("#slider-nav-bar").find("button:first-child");
   var $sliderNavNext = $("#slider-nav-bar").find("button:last-child");
   var $sliderSmall_1 = $("div.content").find("div:nth-child(1)");
   var $sliderSmall_2 = $("div.content").find("div:nth-child(2)");
   var $sliderSmall_3 = $("div.content").find("div:nth-child(3)");
   var $sliderSmall_4 = $("div.content").find("div:nth-child(4)");
   var $activeSlides = $sliderContent.eq(0).clone();
   $activeSlides.appendTo($watchArea);
   var $activeIndex = 0;
   var $miniIndex_1 = 0;
   var $miniIndex_2 = 0;
   var $miniIndex_3 = 0;
   var $miniIndex_4 = 0;
   if ($activeSlides.outerWidth() < $watchArea.outerWidth()){
       $activeSlides.css({'height':'auto','width':'100%'});
   }
   if ($sliderContent.length < 2){
      $sliderContent.eq(0).clone().appendTo($sliderSmall_1);
      $sliderContent.eq(0).clone().appendTo($sliderSmall_2);
      $sliderContent.eq(0).clone().appendTo($sliderSmall_3);
      $sliderContent.eq(0).clone().appendTo($sliderSmall_4);

   } else if ($sliderContent.length < 3){
       $sliderContent.eq(0).clone().appendTo($sliderSmall_1);
       $sliderContent.eq(1).clone().appendTo($sliderSmall_2);
       $sliderContent.eq(0).clone().appendTo($sliderSmall_3);
       $sliderContent.eq(1).clone().appendTo($sliderSmall_4);

   } else if ($sliderContent.length < 4){
       $sliderContent.eq(0).clone().appendTo($sliderSmall_1);
       $sliderContent.eq(1).clone().appendTo($sliderSmall_2);
       $sliderContent.eq(2).clone().appendTo($sliderSmall_3);
       $sliderContent.eq(0).clone().appendTo($sliderSmall_4);
   } else {
       $sliderContent.eq(0).clone().appendTo($sliderSmall_1);
       $sliderContent.eq(1).clone().appendTo($sliderSmall_2);
       $sliderContent.eq(2).clone().appendTo($sliderSmall_3);
       $sliderContent.eq(3).clone().appendTo($sliderSmall_4);
   }
   function autoPlay() {

   }
});