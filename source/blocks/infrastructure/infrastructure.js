$(function(){
    const elem =  $('.interiors-slider__main');
    const arrContent = ['Интерьеры. Описание в несколько слов. Краткое.', 'Еще одно очень красноречивое описание интерьеров.', 'Интерьеры. Описание в несколько слов. Краткое.', 'Еще одно очень красноречивое описание интерьеров.'];
    const slider = elem.find('.slider__imgs');
    const prevBtn = elem.find('.slider__arrow--prev');
    const nextBtn = elem.find('.slider__arrow--next');

    initSlider(elem, slider, prevBtn, nextBtn, arrContent)
});