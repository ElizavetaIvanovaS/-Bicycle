jQuery(document).ready(function() {
  var mainSlider = new Swiper(".swiper-container", {
    autoplay: true,
    loop: true,
    speed: 1000
  });
});

$(".menu-icon").on("click", function() {
  $(".navigation-mobile ul").toggleClass("hide");
});
