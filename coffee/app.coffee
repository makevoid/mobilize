$ ->

  contentClicked = ->
    $(".page.prev").addClass("temp").removeClass  "prev"
    $(".page.main").addClass("prev").removeClass  "main"
    $(".page.next").addClass("main").removeClass  "next"
    $(".page.temp").addClass("next").removeClass  "temp"

  ios = navigator.userAgent.match /(iPad|iPhone|iPod)/i

  $("body").removeClass "preload"

  $("body").on "touchmove", (evt) ->
    evt.preventDeafult()

  if ios
    $("img").on
      touchend: contentClicked
  else
    $("img").on
      click: contentClicked

  $(".page").on "webkitTransitionEnd", ->
    $(".page.prev").css zIndex: 0
    $(".page.main").css zIndex: 1
    $(".page.next").css zIndex: 1

    #unless $("")