(function() {

  $(function() {
    var bind_buttons, buttons, contentClicked, ios, unbind_buttons;
    contentClicked = function() {
      $(".page.prev").addClass("temp").removeClass("prev");
      $(".page.main").addClass("prev").removeClass("main");
      $(".page.next").addClass("main").removeClass("next");
      $(".page.temp").addClass("next").removeClass("temp");
      return unbind_buttons();
    };
    buttons = $("img, .button");
    unbind_buttons = function() {
      return buttons.off();
    };
    bind_buttons = function() {
      if (ios) {
        buttons.on({
          touchend: contentClicked
        });
        return $("body").addClass("ios");
      } else {
        return buttons.on({
          click: contentClicked
        });
      }
    };
    ios = navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
    $("body").removeClass("preload");
    $("body").on("touchmove", function(evt) {
      return evt.preventDeafult();
    });
    bind_buttons();
    return $(".page").on("webkitTransitionEnd", function() {
      $(".page.prev").css({
        zIndex: 0
      });
      $(".page.main").css({
        zIndex: 1
      });
      $(".page.next").css({
        zIndex: 1
      });
      return bind_buttons();
    });
  });

}).call(this);
