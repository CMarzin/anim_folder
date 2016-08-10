$('.element_right').hide();
$('.element_left').hide();
$('.close_video').hide();

$(".click").click(function() {
  $('#parallelogram_right span').removeAttr('style');
  $('#parallelogram_right').removeAttr('style');

  $('#parallelogram_left span').removeAttr('style');
  $('#parallelogram_left').removeAttr('style');

  $('.element_right').hide();
  $('.element_left').hide();

    setTimeout(function() {
        $('.element_right').show();
        $('.close_video').show();
        $('#parallelogram_right span').animate({
            width: '100%'
        }, {
            duration: 500,
            easing: 'swing',
            step: function(a, b) {
                $(this).parent().css({
                    background: 'linear-gradient(to right, blue 0%,blue ' + a + '%,#011a67 ' + a + '%,#011a67 100%)'
                });
            }
        });
        setTimeout(function() {
            $('#parallelogram_right_shadow').show();
            $('#parallelogram_right_shadow span').animate({
                width: '100%'
            }, {
                duration: 500,
                easing: 'swing',
                step: function(a, b) {
                    $(this).parent().css({
                        background: 'linear-gradient(to right, blue 0%,blue ' + a + '%,#011a67 ' + a + '%,#011a67 100%)'
                    });
                }
            });
        }, 500);
    }, 100);

    //left

    $('#parallelogram_left span').animate({
        width: '100%'
    }, {
        duration: 500,
        easing: 'swing',
        step: function(a, b) {
            $(this).parent().css({
                background: 'linear-gradient(to right,  rgba(255, 0, 0, 0) 0%,rgba(255, 0, 0, 0) ' + a + '%,#011a67 ' + a + '%,#011a67 100%)'
            });
        }
    });
});





$(".back").click(function() {
    $('#parallelogram_right span').removeAttr('style');
    $('#parallelogram_right').removeAttr('style');

    $('#parallelogram_left span').removeAttr('style');
    $('#parallelogram_left').removeAttr('style');

    $('.element_left').hide();

    setTimeout(function() {
        $('.element_right').hide();
        $('.close_video').hide();
        
        $('#parallelogram_right span').animate({
            width: '100%'
        }, {
            duration: 500,
            easing: 'swing',
            step: function(a, b) {
                $(this).parent().css({
                    background: 'linear-gradient(to left, blue 0%,blue ' + a + '%,#011a67 ' + a + '%,#011a67 100%)'
                });
            }
        });
    }, 100);
    //left

    $('#parallelogram_left span').animate({
        width: '100%'
    }, {
        duration: 500,
        easing: 'swing',
        step: function(a, b) {
            $(this).parent().css({
                background: 'linear-gradient(to left,  rgba(255, 0, 0, 0) 0%,rgba(255, 0, 0, 0) ' + a + '%,#011a67 ' + a + '%,#011a67 100%)'
            });
        }
    });
});
