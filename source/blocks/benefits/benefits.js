$(function(){
    var arrContent = ['RED7 - новые «Красные ворота», открывающие дорогу к центру Москвы.', 'Четыре уровня, ступенчатые своды, переплетение плоскостей - знаковые детали проекта.', 'Через стеклянную крышу открывается завораживающий вид на возвышающийся фасад дома.', 'Сочетание естественного и искусственного освещения создает театральную игру света и теней.'];
    var slider = $('.benefits__slider').find('.slider__imgs');
    var prevBtn = $('.benefits__slider').find('.slider__arrow--prev');
    var nextBtn = $('.benefits__slider').find('.slider__arrow--next');

    slider.slick({
        prevArrow: prevBtn,
        nextArrow: nextBtn,
        speed: 900
    });
    
    var current = $('.benefits__slider').find('.slider__counter--large');
    var scoreSlides = $('.benefits__slider').find('.slider__counter--small');
    var content =  $('.benefits__slider').find('p');

    scoreSlides.text(' /' + slider.slick("getSlick").slideCount);
    current.text(slider.slick('slickCurrentSlide') < 10 ? '0' + (slider.slick('slickCurrentSlide') + 1) : slider.slick('slickCurrentSlide'));
    content.text(arrContent[slider.slick('slickCurrentSlide')])

    slider.on("afterChange", function(event, slick, currentSlide, nextSlide){
        current.text(currentSlide < 10 ? '0' + (currentSlide + 1) : currentSlide + 1);
        content.text(arrContent[currentSlide]);
    });
});