AOS.init();

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

   //Scroll to top start ??
   var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
   var rootElement = document.documentElement
   
   function handleScroll() {
     // Do something on scroll - 0.15 is the percentage the page has to scroll before the button appears
     // This can be changed - experiment
     var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
     if ((rootElement.scrollTop / scrollTotal ) > 0.15) {
       // Show button
       scrollToTopBtn.classList.add("showBtn")
     } else {
       // Hide button
       scrollToTopBtn.classList.remove("showBtn")
     }
   }
   
   function scrollToTop() {
     // Scroll to top logic
     rootElement.scrollTo({
       top: 0,
       behavior: "smooth"
     })
   }
   scrollToTopBtn.addEventListener("click", scrollToTop)
   document.addEventListener("scroll", handleScroll)
    //  scroll to top end


  });