$('.click').click(function() {

    $('.enveloppe').addClass('enveloppe_right');

    setTimeout(function() {
        $('.close').addClass('close_visible');
        $('.top_part').show();
        setTimeout(function(){
          $('.top_part').addClass('top_part_visible');
          $('.bottom_part').addClass('bottom_part_visible');
        },450);
        $('.container_transition').addClass('video');
    }, 400);

    setTimeout(function() {
        $('.enveloppe').removeClass('tol');
        setTimeout(function() {
            $('.enveloppe').addClass('tor');
        }, 200);
    }, 200);
    setTimeout(function() {
        $('.enveloppe').removeClass('enveloppe_right');
    }, 650);
});

$('.cross').click(function() {
    $('.enveloppe').addClass('enveloppe_right');
    $('.top_part').removeClass('top_part_visible');
    $('.bottom_part').removeClass('bottom_part_visible');
    setTimeout(function() {
        $('.close').removeClass('close_visible');
        $('.container_transition').removeClass('video');
        setTimeout(function(){
          $('.top_part').hide();
        },300);
    }, 300);
    setTimeout(function() {
        $('.enveloppe').addClass('tol');
        setTimeout(function() {
            $('.enveloppe').removeClass('tor');

        }, 200);
    }, 200);
    setTimeout(function() {
        $('.enveloppe').removeClass('enveloppe_right');
    }, 650);
});
