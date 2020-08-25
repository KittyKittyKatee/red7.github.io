$(function(){
    var firstSlider = $('.apartments__slides[id = "tab-1"]').find('.apartments__slider-wrap');
    var prev = $('.apartments__arrow--prev');
    var next = $('.apartments__arrow--next');

    firstSlider.slick();

    prev.on('click', function() {
        firstSlider.slick('slickNext');
    });
    next.on('click', function() {
        firstSlider.slick('slickNext');
    });
    $('.slick-arrow').css('display', 'none');

    var tab = $('.tabs');
    tab.click(changeTab);
    var initSlider = ['tab-1'];

    function changeTab(e) {
        var id = e.target.id;
        $('.tabs__tab').removeClass('active');
        $('.apartments__slides').removeClass('active');

        $(e.target).toggleClass('active');
        
        var content = $('.apartments__slides#'+ id);
        content.toggleClass('active');

        if ( !initSlider.includes(id) ) {
            initSlider.push(id);

            var slider =  $('.apartments__slides[id = "' + id + '"]').find('.apartments__slider-wrap');

            slider.slick();
            prev.on('click', function() {
                slider.slick('slickNext');
            });
            next.on('click', function() {
                slider.slick('slickNext');
            });
            $('.slick-arrow').css('display', 'none');
        }        
    }
})