var pos1 = window.scrollY;
window.onscroll = function () {
  var pos2s = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  pos1 = pos2;
};
