$(document).ready(function() {
    $('[href = "#sheldure"], [href = "#tour"], .main_btn').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown('600');
    });
    $('.close').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideUp('600');
    });
});