$(function(){
    const elem =  $('.benefits__slider');
    const arrContent = ['RED7 - новые «Красные ворота», открывающие дорогу к центру Москвы.', 'Четыре уровня, ступенчатые своды, переплетение плоскостей - знаковые детали проекта.', 'Через стеклянную крышу открывается завораживающий вид на возвышающийся фасад дома.', 'Сочетание естественного и искусственного освещения создает театральную игру света и теней.'];
    const slider = elem.find('.slider__imgs');
    const prevBtn = elem.find('.slider__arrow--prev');
    const nextBtn = elem.find('.slider__arrow--next');

    initSlider(elem, slider, prevBtn, nextBtn, arrContent);
    
});


function initSlider(elem, slider, prevBtn, nextBtn, arrContent) {
    slider.slick({
        prevArrow: prevBtn,
        nextArrow: nextBtn,
        speed: 900
    });
    
    let current = elem.find('.slider__counter--large');
    let scoreSlides = elem.find('.slider__counter--small');
    let content =  elem.find('p');

    scoreSlides.text(' /' + slider.slick("getSlick").slideCount);
    current.text(slider.slick('slickCurrentSlide') < 10 ? '0' + (slider.slick('slickCurrentSlide') + 1) : slider.slick('slickCurrentSlide'));
    content.text(arrContent[slider.slick('slickCurrentSlide')])

    slider.on("afterChange", function(event, slick, currentSlide){
        current.text(currentSlide < 10 ? '0' + (currentSlide + 1) : currentSlide + 1);
        content.text(arrContent[currentSlide]);
    });
}