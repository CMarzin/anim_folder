$('#parallelogram_right_shadow').hide();
$('.element_right').hide();
// $('.element_left').hide();

$(".click").click(function() {
  $('#parallelogram_right span').removeAttr('style');
  $('#parallelogram_right').removeAttr('style');
  $('#parallelogram_right_shadow span').removeAttr('style');
  $('#parallelogram_right_shadow').removeAttr('style');

  $('#parallelogram_left span').removeAttr('style');
  $('#parallelogram_left').removeAttr('style');
  $('#parallelogram_left_shadow span').removeAttr('style');
  $('#parallelogram_left_shadow').removeAttr('style');

  $('#parallelogram_right_shadow').hide();
  $('.element_right').hide();
  $('#parallelogram_left_shadow').hide();
  $('.element_left').hide();
    setTimeout(function() {
        $('#parallelogram_right span').animate({
            width: '100%'
        }, {
            duration: 500,
            easing: 'swing',
            step: function(a, b) {
                $(this).parent().css({
                    background: 'linear-gradient(to right, #011a67 0%,#011a67 ' + a + '%,#ffffff ' + a + '%,#ffffff 100%)'
                });
            }
        });
        setTimeout(function() {
            $('.element_right').show();
            $('#parallelogram_right_shadow').show();
            $('#parallelogram_right_shadow span').animate({
                width: '100%'
            }, {
                duration: 500,
                easing: 'swing',
                step: function(a, b) {
                    $(this).parent().css({
                        background: 'linear-gradient(to right, #ffffff 0%,#ffffff ' + a + '%,rgba(255, 0, 0, 0) ' + a + '%,rgba(255, 0, 0, 0) 100%)'
                    });
                }
            });
        }, 500);
    }, 200);
    //left

    $('#parallelogram_left span').animate({
        width: '100%'
    }, {
        duration: 500,
        easing: 'swing',
        step: function(a, b) {
            $(this).parent().css({
                background: 'linear-gradient(to right, #011a67 0%,#011a67 ' + a + '%,#ffffff ' + a + '%,#ffffff 100%)'
            });
        }
    });
    setTimeout(function() {
        $('.element').show();
        $('#parallelogram_left_shadow').show();
        $('#parallelogram_left_shadow span').animate({
            width: '100%'
        }, {
            duration: 500,
            easing: 'swing',
            step: function(a, b) {
                console.log(this);
                $(this).parent().css({
                  background: 'linear-gradient(to right, #ffffff 0%,#ffffff ' + a + '%,rgba(255, 0, 0, 0) ' + a + '%,rgba(255, 0, 0, 0) 100%)'
                });
            }
        });
    }, 500);
});





$(".back").click(function() {
    $('#parallelogram_right span').removeAttr('style');
    $('#parallelogram_right').removeAttr('style');
    $('#parallelogram_right_shadow span').removeAttr('style');
    $('#parallelogram_right_shadow').removeAttr('style');

    $('#parallelogram_left span').removeAttr('style');
    $('#parallelogram_left').removeAttr('style');
    $('#parallelogram_left_shadow span').removeAttr('style');
    $('#parallelogram_left_shadow').removeAttr('style');

    $('#parallelogram_right_shadow').hide();
    // $('.element_right').hide();
    $('#parallelogram_left_shadow').hide();
    $('.element_left').hide();

    setTimeout(function() {
        $('#parallelogram_right span').animate({
            width: '100%'
        }, {
            duration: 500,
            easing: 'swing',
            step: function(a, b) {
                $(this).parent().css({
                    background: 'linear-gradient(to left, #011a67 0%,#011a67 ' + a + '%,#ffffff ' + a + '%,#ffffff 100%)'
                });
            }
        });

        $('.element_right').animate({
            width: '100%'
        }, {
            duration: 500,
            easing: 'swing',
            step: function(a, b) {
                $(this).parent().css({
                    background: 'linear-gradient(to left, #011a67 0%,#011a67 ' + a + '%,#ffffff ' + a + '%,#ffffff 100%)'
                });
            }
        });
        setTimeout(function() {
          $('.element_right').hide();
        },500);

        setTimeout(function() {
            $('.element').show();
            $('#parallelogram_right_shadow').show();
            $('#parallelogram_right_shadow span').animate({
                width: '100%'
            }, {
                duration: 500,
                easing: 'swing',
                step: function(a, b) {
                    $(this).parent().css({
                        background: 'linear-gradient(to left, #ffffff 0%,#ffffff ' + a + '%,rgba(255, 0, 0, 0) ' + a + '%,rgba(255, 0, 0, 0) 100%)'
                    });
                }
            });
        }, 500);
    }, 200);
    //left

    $('#parallelogram_left span').animate({
        width: '100%'
    }, {
        duration: 500,
        easing: 'swing',
        step: function(a, b) {
            $(this).parent().css({
                background: 'linear-gradient(to left, #011a67 0%,#011a67 ' + a + '%,#ffffff ' + a + '%,#ffffff 100%)'
            });
        }
    });
    setTimeout(function() {
        $('.element').show();
        $('#parallelogram_left_shadow').show();
        $('#parallelogram_left_shadow span').animate({
            width: '100%'
        }, {
            duration: 500,
            easing: 'swing',
            step: function(a, b) {
                console.log(this);
                $(this).parent().css({
                    background: 'linear-gradient(to left, #ffffff 0%,#ffffff ' + a + '%,rgba(255, 0, 0, 0) ' + a + '%,rgba(255, 0, 0, 0) 100%)'
                });
            }
        });
    }, 500);
});
