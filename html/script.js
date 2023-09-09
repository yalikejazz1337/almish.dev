$(window).scroll(function (e) {
  var distanceScrolled = $(this).scrollTop();

  $(".navbar").css("-webkit-filter", "blur(" + distanceScrolled / 60 + "px)");
});
