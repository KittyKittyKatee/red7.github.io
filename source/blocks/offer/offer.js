$(function(){
    var arr = [];
    var name = null;
    var tel = null;
    $('.offer-submit').click(function(){
        var nameInput = $('[name="name-2"]')
        var telInput = $('[name="tel-2"]')
        name = nameInput.val().trim()
        tel = telInput.val().trim()

        if(arr.includes('name')) {
            if(tel.length < 12) {
                telInput.addClass('error')
                telInput.one('focus', function(){
                    telInput.removeClass('error')
                })
            } else {
                tel = telInput.val()
                $('.offer__input-wrap').css('transform', 'translateX(-980px)')
                $('.offer-submit').css('display', 'none')
            }
        } else {
            if(name.length < 3) {
                nameInput.addClass('error')
                nameInput.one('focus', function(){
                    nameInput.removeClass('error')
                })
            } else {
                $('.offer__input-wrap').css('transform', 'translateX(-490px)')
                arr.push('name')
            }
        }
    })
    $('.offer__input-wrap').submit(function(e){
        e.preventDefault();
        var data = $('.offer__input-wrap').serialize()
        console.log(data)
        $('.offer__input-wrap').css('display', 'none')
        $('.offer__input-slider').find('span').css('display', 'block')
        $('.offer__count').css('display', 'none')
        $('.offer__agree').css('display', 'none')
    })
})