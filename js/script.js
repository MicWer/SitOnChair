jQuery(document).ready(function ($) {

    var slideCount = $('#chairBox_slider ul li').length;
    var slideWidth = $('#chairBox_slider ul li').width();
    var slideHeight = $('#chairBox_slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#chairBox_slider').css({ width: slideWidth, height: slideHeight });

    $('#chairBox_slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#chairBox_slider ul li:last-child').prependTo('#chairBox_slider ul');

    function moveLeft() {
        $('#chairBox_slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#chairBox_slider ul li:last-child').prependTo('#chairBox_slider ul');
            $('#chairBox_slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#chairBox_slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#chairBox_slider ul li:first-child').appendTo('#chairBox_slider ul');
            $('#chairBox_slider ul').css('left', '');
        });
    };

    $('a#arrowLeft').click(function () {
        moveLeft();
    });

    $('a#arrowRight').click(function () {
        moveRight();
    });

});