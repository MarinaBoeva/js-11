(function($) {
  var defaults = {
      numberOfSwitch:1, //кол-во перелистываемых одновременно картинок,
      spead:500
  };
  var options;
  $.fn.carousel = function(params) {
     options =$.extend({}, defaults, options, params);
     var left =$('.carousel-button-left');
     var right=$('.carousel-button-right');
     var list=$('.carousel-list');
     var elemNumber =$('.carousel-elem').length;//кол-во картинок
     var elemWidth = $('.carousel-elem').innerWidth();
     var widthOfStep=elemWidth*options.numberOfSwitch;//на сколько рх сдвинуть
     var numberOfVisible = Math.ceil($('.carousel-hider').width()/widthOfStep);//кол-во видимых картинок
     var step=0;
     list.width(elemWidth*elemNumber);
     var maxStep= list.width()-elemWidth*numberOfVisible;

     left.on('click',function (event) {
       event.preventDefault();
      if(step!=0){
         step +=widthOfStep;
         list.animate({left: step + "px"},options.spead)
       }
     });

     right.on('click',function (event) {
       event.preventDefault();
       if(step > -maxStep){
         step -= widthOfStep;
         list.animate({left: step + "px"},options.spead)
       }
     });
     console.log(maxStep);
  };
})(jQuery);
