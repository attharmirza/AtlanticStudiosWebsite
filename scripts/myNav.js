$(document).ready(function() {

  $('.navMenuButton').click(function() {
    OpenNavBar()
  });

  $(window).keypress(function(e) {
    if (e.keyCode == 109) {
      OpenNavBar();
    } else if (e.keyCode == 77) {
      OpenNavBar();
    } else if (e.keyCode == 32) {
      OpenNavBar();
    }
  });

  function OpenNavBar() {
    $('.container').toggleClass('open');

    if ($('.topBar').hasClass('topBarIn')) {
      $('.topBar').removeClass('topBarIn');
      $('.topBar').css('width');
      $('.topBar').addClass('topBarOut');
    } else {
      $('.topBar').removeClass('topBarOut');
      $('.topBar').css('width');
      $('.topBar').addClass('topBarIn');
    };

    if ($('.middleBar').hasClass('middleBarIn')) {
      $('.middleBar').removeClass('middleBarIn');
      $('.middleBar').css('width');
      $('.middleBar').addClass('middleBarOut');
    } else {
      $('.middleBar').removeClass('middleBarOut');
      $('.middleBar').css('width');
      $('.middleBar').addClass('middleBarIn');
    };

    if ($('.bottomBar').hasClass('bottomBarIn')) {
      $('.bottomBar').removeClass('bottomBarIn');
      $('.bottomBar').css('width');
      $('.bottomBar').addClass('bottomBarOut');
    } else {
      $('.bottomBar').removeClass('bottomBarOut');
      $('.bottomBar').css('width');
      $('.bottomBar').addClass('bottomBarIn');
    };
  };

});
