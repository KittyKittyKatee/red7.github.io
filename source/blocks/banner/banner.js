$(function(){
    var firstSlide = $('.banner__slider').children().first();
    firstSlide.next().css({'z-index':'-1', 'opacity':'0'})
    var currentSlide = firstSlide;
    setInterval( function() {
        if(!currentSlide.length) {
            currentSlide.css({'z-index':'1', 'opacity':'1'})
        }
        currentSlide.css({'z-index':'-1', 'opacity':'0'})
        currentSlide.next().css({'z-index':'1', 'opacity':'1'})
        if(!currentSlide.next().length) {
            currentSlide = firstSlide;
            currentSlide.css({'z-index':'1', 'opacity':'1'})
        } else {
            currentSlide = currentSlide.next();
        }
    }, 7000);
})