$ ->

  contentClicked = ->
    $(".page.prev").addClass("temp").removeClass  "prev"
    $(".page.main").addClass("prev").removeClass  "main"
    $(".page.next").addClass("main").removeClass  "next"
    $(".page.temp").addClass("next").removeClass  "temp"
    unbind_buttons()

  buttons = $("img, .button")

  unbind_buttons = ->
    buttons.off()

  bind_buttons = ->
    if ios
      buttons.on
        touchend: contentClicked
      $("body").addClass "ios"
    else
      buttons.on
        click: contentClicked

  ios = navigator.userAgent.match /(iPad|iPhone|iPod)/i

  $("body").removeClass "preload"

  $("body").on "touchmove", (evt) ->
    evt.preventDeafult()

  bind_buttons()

  $(".page").on "webkitTransitionEnd", ->
    $(".page.prev").css zIndex: 0
    $(".page.main").css zIndex: 1
    $(".page.next").css zIndex: 1
    bind_buttons()

    #unless $("")