(function() {

  $(function() {
    var contentClicked, ios;
    contentClicked = function() {
      $(".page.prev").addClass("temp").removeClass("prev");
      $(".page.main").addClass("prev").removeClass("main");
      $(".page.next").addClass("main").removeClass("next");
      return $(".page.temp").addClass("next").removeClass("temp");
    };
    ios = navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
    $("body").removeClass("preload");
    $("body").on("touchmove", function(evt) {
      return evt.preventDeafult();
    });
    if (ios) {
      $("img").on({
        touchend: contentClicked
      });
      $("body").addClass("ios");
    } else {
      $("img").on({
        click: contentClicked
      });
    }
    return $(".page").on("webkitTransitionEnd", function() {
      $(".page.prev").css({
        zIndex: 0
      });
      $(".page.main").css({
        zIndex: 1
      });
      return $(".page.next").css({
        zIndex: 1
      });
    });
  });

}).call(this);
