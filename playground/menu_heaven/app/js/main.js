function menu() {
    var i = 0;

    // Note :
    // tfr = transform origin right
    // tfl = transform origin left
    $('.title_glossary').hide();
    $('#glossary-page').hide();
    $('#glossary-content').hide();
    $('#glossary-page').removeClass('background_glossary');


    $('.container_lexique').click(function() {
        i++;

        if (i % 2 == 0) {

            /* Close Glossary */

            // console.log(i, "close");
            $('#glossary-content').removeClass('replaced_column_alphabet--right');
            setTimeout(function() {
                $('#glossary-content').removeClass('replaced_column_alphabet--center');
                setTimeout(function() {
                    $('#glossary-page').removeClass('replaced_before');
                    $('#glossary-content').removeClass('replaced_column_alphabet--left');
                    setTimeout(function() {
                        $('.title_glossary').hide();
                    }, 400);
                }, 100);
            }, 100);

            setTimeout(function() {
                $('.shadow_container_lexique').removeClass('hide_shadow');
                $('.container_shutter_glossary').removeClass('triggered');

                setTimeout(function() {

                    $('#glossary-page').hide();

                    $('.container_lexique').addClass('dark');
                    $('.container_lexique').removeClass('white');
                    $('.btn_lexique-dark').hide();
                    $('.btn_lexique-white').show();
                    $('.shadow_container_lexique').addClass('tfr');
                    $('.shadow_container_lexique').removeClass('tfl');

                    // setTimeout needed if you want to avoid the "bug" with two transform origin on the same element
                    setTimeout(function() {
                        $('.shadow_container_lexique').addClass('hide_shadow');
                    }, 250);
                }, 500);
            }, 700);

        } else {

            /* Open Glossary */

            $('.shadow_container_lexique').removeClass('hide_shadow');

            // console.log(i, "open");

            setTimeout(function() {

                $('#glossary-page').show();

                $('.container_lexique').removeClass('dark');
                $('.container_lexique').addClass('white');
                $('.btn_lexique-dark').show();
                $('.btn_lexique-white').hide();
                $('.shadow_container_lexique').removeClass('tfr');
                $('.shadow_container_lexique').addClass('tfl');

                // setTimeout needed if you want to avoid the "bug" with two transform origin on the same element
                setTimeout(function() {
                    $('.shadow_container_lexique').addClass('hide_shadow');
                    $('.container_shutter_glossary').addClass('triggered');

                    setTimeout(function() {
                        $('#glossary-content').show();
                        $('.title_glossary').show();
                        $('#glossary-content').addClass('replaced_column_alphabet--left');
                        $('#glossary-page').addClass('replaced_before');
                        setTimeout(function() {
                            $('#glossary-content').addClass('replaced_column_alphabet--center');
                            setTimeout(function() {
                                $('#glossary-content').addClass('replaced_column_alphabet--right');
                            }, 100);
                        }, 100)
                    }, 700);
                }, 250);
            }, 500);
        }
    });
}
menu();
