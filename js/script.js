$(document).ready(function(){
    //Preloader Start
    preloaderFadeOutTime = 3000;

    function hidePreloader() {
         var preloader = $('#spinner-wrapper');
         preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
 //Preloader End

 //Cursor Start
    var cursor = $(".cursor");
  
      $(window).mousemove(function(e) {
          cursor.css({
              top: e.clientY - cursor.height() / 2,
              left: e.clientX - cursor.width() / 2
          });
      });
  
      $(window)
          .mouseleave(function() {
              cursor.css({
                  opacity: "0",
                  backgroundColor: "rgb(140, 82, 255)"
              });
          })
          .mouseenter(function() {
              cursor.css({
                  opacity: "1"
              });
          });
  
      $("p")
          .mouseenter(function() {
              cursor.css({
                  transform: "scale(3.2)",
                  backgroundColor: "rgba(140, 82, 255, 0.5)"
              });
          })
          .mouseleave(function() {
              cursor.css({
                  transform: "scale(1)"
              });
          });
      $(".btn")
          .mouseenter(function() {
              cursor.css({
                transform: "scale(0)"
              });
          })
          .mouseleave(function() {
              cursor.css({
                  transform: "scale(1)"
              });
          });
   //Cursor End
  });