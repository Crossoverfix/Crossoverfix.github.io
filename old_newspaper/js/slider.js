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
   // setInterval(autoPlay,5000);
   function autoPlay() {
       let $indexActive = $($sliderContent).index($activeSlides);
       if ($indexActive > $sliderContent.length - 1){
           $activeSlides = $sliderContent.eq($indexActive + 1).clone();
       } else {
           $activeSlides = $sliderContent.eq(0).clone();
       }
       $watchArea.empty();
       $activeSlides.appendTo($watchArea);
       let $temp1 = $sliderContent.index($sliderSmall_1);
       let $temp2 = $sliderContent.index($sliderSmall_2);
       let $temp3 = $sliderContent.index($sliderSmall_3);
       let $temp4 = $sliderContent.index($sliderSmall_4);
       if ($temp1 < $sliderContent.length - 1){
           $sliderSmall_1.empty();
           $sliderContent.eq($temp1 + 1).clone().appendTo($sliderSmall_1);
       } else {
           $sliderSmall_1.empty();
           $sliderContent.eq(0).clone().appendTo($sliderSmall_1);
       }
       if ($temp2 < $sliderContent.length - 1){
           $sliderSmall_2.empty();
           $sliderContent.eq($temp2 + 1).clone().appendTo($sliderSmall_2);
       } else {
           $sliderSmall_2.empty();
           $sliderContent.eq(0).clone().appendTo($sliderSmall_2);
       }
       if ($temp3 < $sliderContent.length - 1){
           $sliderSmall_3.empty();
           $sliderContent.eq($temp3 + 1).clone().appendTo($sliderSmall_3);
       } else {
           $sliderSmall_3.empty();
          $sliderContent.eq(0).clone().appendTo($sliderSmall_3);
       }
       if ($temp4 < $sliderContent.length - 1){
           $sliderSmall_4.empty();
           $sliderContent.eq($temp4 + 1).clone().appendTo($sliderSmall_4);
       } else {
           $sliderSmall_4.empty();
           $sliderContent.eq(0).clone().appendTo($sliderSmall_4);
       }
   }
});