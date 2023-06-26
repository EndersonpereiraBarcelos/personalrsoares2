$(document).ready(function() {
    var slideWidth = $(".carousel-slide img").width();
    var slideCount = $(".carousel-slide img").length;
    var currentIndex = 0;
  
    function showSlide(index) {
      var slideOffset = -index * slideWidth;
      $(".carousel-slide").css("transform", "translateX(" + slideOffset + "px)");
    }
  
    $(".carousel-next").click(function(e) {
      e.preventDefault();
      currentIndex++;
      if (currentIndex >= slideCount) {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    });
  
    $(".carousel-prev").click(function(e) {
      e.preventDefault();
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slideCount - 1;
      }
      showSlide(currentIndex);
    });
  
    $(window).resize(function() {
      slideWidth = $(".carousel-slide img").width();
      showSlide(currentIndex);
    });
  });