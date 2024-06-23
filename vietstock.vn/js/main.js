$("#toggle-menu").click(function () {
  $(".dropdown-menu").toggle();
});

$(document).ready(function () {
  $('ul.tabs li').click(function () {
    let tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
})

$(document).ready(function () {
  $('ul.tabs-title li').click(function () {
    let tab_id = $(this).attr('data-tab');

    $('ul.tabs-title li').removeClass('current');
    $('.tab-content-title').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
})

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
})