$(function() {
    $("#tel").mask("+7(999) 999-9999");
    $("#tel-2").mask("+7(999) 999-9999");

    $('.modal__form').submit(function(e){
        e.preventDefault();

        var name = $('[name="name"]').val().trim()
        var tel = $('[name="tel"]').val().trim()

        if(name.length < 3) {
            $('[name="name"]').addClass('error')
            $('[name="name"]').one('focus', function(e){
                $('[name="name"]').removeClass('error')
            })
        }

        var form = $('#modal__form')[0]
        var data = new FormData(form)
        $('.modal__form').serialize()
    })

    var modalContent = [
        {
            id: 1,
            title: 'Запишитесь на просмотр',
            text: 'Заполните форму и мы с Вами свяжемся',
            btnText: 'Записаться на просмотр'
        },
        {
            id: 2,
            title: 'Закажите звонок',
            text: 'Наш менеджер свяжется с вами в ближайшее время',
            btnText: 'Позвоните мне'
        },
        {
            id: 3,
            title: 'Получить персональное предложение',
            text: 'Наш менеджер свяжется с вами в ближайшее время',
            btnText: 'Получить предложение'
        }
    ];

    function openModal(id){
        var content = $.grep(modalContent, function(item){
            return id == item.id
        })[0]
        $('.modal__title').text(content.title)
        $('.modal__text').text(content.text)
        $('.modal__btn').text(content.btnText)
        $('.modal').fadeIn();
    }

    $('.banner__btn').click(function(){
        openModal(1)
    })

    $('.apartments__btn').click(function(){
        openModal(3)
    })

    $('.modal__close').click(function(){
        $('.modal').fadeOut();
    })
})

