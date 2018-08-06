$(document).ready(function () {
   var $watchArea = $("#slider-content-watch");
   var $sliderContent = $("#slider-all-content").find("img");
   var $sliderNavPrev = $("#slider-nav-bar").find("button:first-child");
   var $sliderNavNext = $("#slider-nav-bar").find("button:last-child");
   var $sliderSmallSlide = $("#slider-nav-bar .content");
   var $activSlide = $sliderContent.eq(0).clone().appendTo($watchArea);
   watchSizeImg($activSlide);
   var $activeIndex = 0;
   var $smallSlide = [];
   for (i = 0;i < $sliderContent.length;i++){
       $smallSlide[i] = $sliderContent.eq(i).clone().appendTo($sliderSmallSlide);
       $smallSlide[i].wrap('<div></div>');
       watchSizeImg($smallSlide[i]);
   }
   var $smalIndex = 0;
   setInterval(autoPlay,6000);
   function watchSizeImg($object) {
       if($object.outerWidth() < $object.parent().outerWidth()){
           $object.css({'width':'100%','height':'auto'});
       } else {
           $object.css({'width':'auto','height':'100%'});
       }
   }
   function autoPlay() {
       function clearLast($object){
           $object.remove();
       }
       var $oldSlide;
       if ($activeIndex < $sliderContent.length - 1){
           $activeIndex++;
           var $tempSlides = $sliderContent.eq($activeIndex).clone().appendTo($watchArea);
           $oldSlide = $activSlide;
           $activSlide = $tempSlides;
           $oldSlide.animate({marginLeft:- $activSlide.outerWidth() + 1},1000);
           var $anim = $.when($oldSlide.animate({marginLeft:- $activSlide.outerWidth() + 1},1000));
           $anim.done(function () {
               $oldSlide.remove();
           })
           $sliderSmallSlide.find("div:first-child").animate({marginLeft:- $sliderSmallSlide.find("div:first-child").outerWidth() - 5},1000);
           var $smallAnim = $.when($sliderSmallSlide.find("div:first-child").animate({marginLeft:- $sliderSmallSlide.find("div:first-child").outerWidth() - 5},1000));
           $smallAnim.done(function () {
               $sliderSmallSlide.find("div:first-child").css({'margin-left':'5px'}).appendTo($sliderSmallSlide);
           })

       } else {
           $activeIndex = 0;
           var $tempSlides = $sliderContent.eq($activeIndex).clone().appendTo($watchArea);
           $oldSlide = $activSlide;
           $activSlide = $tempSlides;
           $oldSlide.animate({marginLeft:- $activSlide.outerWidth()},1000);
           var $anim = $.when($oldSlide.animate({marginLeft:- $activSlide.outerWidth()},1000));
           $anim.done(function () {
               $oldSlide.remove();
           })
           $sliderSmallSlide.find("div:first-child").animate({marginLeft:- $sliderSmallSlide.find("div:first-child").outerWidth() - 5},1000);
           var $smallAnim = $.when($sliderSmallSlide.find("div:first-child").animate({marginLeft:- $sliderSmallSlide.find("div:first-child").outerWidth() - 5},1000));
           $smallAnim.done(function () {
               $sliderSmallSlide.find("div:first-child").css({'margin-left':'5px'}).appendTo($sliderSmallSlide);
           })
       }
   }
});