var touch = $('#mobmenu');
var menu = $('#menu');

$(touch).on('click', function (e) {
  e.preventDefault();
  menu.slideToggle();
});
$(window).resize(function () {
  var wid = $(window).width();
  if (wid > 760 && menu.is(':hidden')) {
    menu.removeAttr('style');
  }
});

$('.tabs li').on('click', function () {
    $('.tabs').height( $('.tab-content', $(this) ).height() + 30);
});

$('.bet-amount').on('click', function () {
  $('#exampleInputAmount').val($(this).text() + ".00");
});



var counter = 21;
function Timer () {
      counter--;
      if (counter > 9) document.getElementById('timer').innerHTML = "0:" + counter;
      else if (counter <= 9) document.getElementById('timer').innerHTML = "0:0" + counter;
      if (counter > 0) setTimeout(Timer, 1000);
      else {
        counter = 21;
        setTimeout(Timer, 3000);
      }
}

Timer();
