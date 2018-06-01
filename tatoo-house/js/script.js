$(document).ready(function () {
    $('.body-elements').click(function (e) {
        var part = $(e.target).attr('alt');
        var url = '';
        if (part.indexOf('bodypart') >= 0) {
            $('.parts-links a').each(function () {
                if ($(this).attr('rel') == part)
                    url = $(this).attr('href');
            })
            if (url)
                document.location = url;
            return false;
        }
    })

    $('#bodymap area').hover(function () {
        var id = $(this).attr('alt');
        $('#statue img:not(.censored)').hide();
        if (id == 'bodypart-6')
            $('#statue .censored').hide();
        $('#' + id + ', .bodypixel').show();
    }, function () {
        var id = $(this).attr('alt');
        $('#' + id).hide();
        $('#statue .censored').show();
    });

    $('#bodymap-back area').hover(function () {
        var id = $(this).attr('alt');
        $('#statue-back img:not(.censored)').hide();
        if (id == 'bodypart-12')
            $('#statue-back .censored').hide();
        $('#' + id + ', .bodypixel').show();
    }, function () {
        var id = $(this).attr('alt');
        $('#' + id).hide();
        $('#statue-back .censored').show();
    });


    $('#turn-statue').click(function () {

        if ($(this).hasClass('to-left')) {
            $(this).attr('class', 'to-right');
            $('#statue, .front-parts').hide();
            $('#statue-back, .back-parts').show();
        } else {
            $(this).attr('class', 'to-left');
            $('#statue, .front-parts').show()
            $('#statue-back, .back-parts').hide();
        }
    });

    $('.parts-links a').click(function () {

    });

    $('.parts-links a').hover(function () {
        var id = $(this).attr('rel');
        $('#statue img:not(.censored), #statue-back img:not(.censored)').hide();
        if (id == 'bodypart-6')
            $('#statue .censored').hide();
        if (id == 'bodypart-12')
            $('#statue-back .censored').hide();
        $('#' + id + ', .bodypixel').show();

    }, function () {
        var id = $(this).attr('rel');
        $('#' + id).hide();
        if (id == 'bodypart-6')
            $('#statue .censored').show();
        if (id == 'bodypart-12')
            $('#statue-back .censored').show();

    });

});
