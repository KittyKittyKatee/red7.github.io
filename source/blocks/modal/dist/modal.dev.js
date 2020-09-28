"use strict";

$(function () {
  $("#tel").mask("+7(999) 999-9999");
  $("#tel-2").mask("+7(999) 999-9999");

  var ajaxSend = function ajaxSend(url, formData) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(function (response) {
      return alert('Успешно отправлено');
    })["catch"](function (error) {
      return console.error(error);
    });
  };

  $('.modal__form').submit(function (e) {
    e.preventDefault();
    var name = $('[name="name"]');
    name.val(name.val().trim());
    var tel = $('[name="tel"]');

    if (name.val().length < 3) {
      name.addClass('error');
      name.one('focus', function (e) {
        name.removeClass('error');
      });
      return false;
    } else if (tel.val().length < 12) {
      tel.addClass('error');
      tel.one('focus', function () {
        tel.removeClass('error');
      });
      return false;
    }

    var form = $('#modal__form')[0];
    var formData = new FormData(form);
    formData = Object.fromEntries(formData);
    var url = 'http://localhost:3000/request';
    ajaxSend(url, formData);
    form.reset(); // $.ajax({
    //     url: 'http://localhost:3000/request',
    //     method: 'POST',
    //     data: formData,
    // }).done(function(data){
    //     console.log('окей')
    // })
  });
  var modalContent = [{
    id: 1,
    title: 'Запишитесь на просмотр',
    text: 'Заполните форму и мы с Вами свяжемся',
    btnText: 'Записаться на просмотр'
  }, {
    id: 2,
    title: 'Закажите звонок',
    text: 'Наш менеджер свяжется с вами в ближайшее время',
    btnText: 'Позвоните мне'
  }, {
    id: 3,
    title: 'Получить персональное предложение',
    text: 'Наш менеджер свяжется с вами в ближайшее время',
    btnText: 'Получить предложение'
  }];

  function openModal(id) {
    var content = $.grep(modalContent, function (item) {
      return id == item.id;
    })[0];
    $('.modal__title').text(content.title);
    $('.modal__text').text(content.text);
    $('.modal__btn').text(content.btnText);
    $('.modal').fadeIn();
  }

  $('.banner__btn').click(function () {
    openModal(1);
  });
  $('.header__button-call').click(function () {
    openModal(2);
  });
  $('.apartments__btn').click(function () {
    openModal(3);
  });
  $('.modal__close').click(function () {
    $('.modal').fadeOut();
    $('input').val('');
  });
});