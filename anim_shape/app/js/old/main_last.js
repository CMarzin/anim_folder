$('.click').click(function() {

    $('.enveloppe').addClass('enveloppe_right');

    setTimeout(function() {
        $('.close').addClass('close_visible');
        $('.container_transition').addClass('video');
    }, 400);

    setTimeout(function() {
        $('.enveloppe').removeClass('tol');
        setTimeout(function() {
            $('.enveloppe').addClass('tor');
            setTimeout(function() {
                $('.enveloppe').removeClass('enveloppe_right');
            }, 400);
        }, 200);
    }, 200);
});

$('.back').click(function() {
    $('.enveloppe').addClass('enveloppe_right');
    setTimeout(function() {
        $('.close').removeClass('close_visible');
        $('.container_transition').removeClass('video');
    }, 300);
    setTimeout(function() {
        $('.enveloppe').addClass('tol');
        setTimeout(function() {
            $('.enveloppe').removeClass('tor');
            setTimeout(function() {
                $('.enveloppe').removeClass('enveloppe_right');
            }, 400);
        }, 200);
    }, 200);
});
