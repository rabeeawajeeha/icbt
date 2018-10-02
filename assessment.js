$(document).ready(function () {

    $('.answer').on('click', function (evt) {
        $('.answer').removeClass('checked');
        $(this).addClass('checked');
    });

});