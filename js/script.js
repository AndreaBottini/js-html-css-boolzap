  //INVIO MESSAGGIO CON CLICK MOUSE
$(document).ready(function () {
  $('.icon_send').click(function () {
    sendMessage()
  });
  //INVIO MESSAGGIO CON TASTIERA
  $('.send_message').keypress(function(event) {
    if (event.which == 13) {
      sendMessage();
    }
  });
  //CAMBIO VARIE CHAT
  $(document).on('click', '.person_chat', function() {
    var contents = $(this).attr('data-contact');
    console.log(contents);
    $('.person_chat').removeClass('active');
    $('.field_chat').removeClass('active');
    $(this).addClass('active');
    $('.field_chat[data-contact="' + contents + '"]').addClass('active');

    //CAMBIO ICONA E TESTO CHAT CORRENTE
    var name = $(this).find('.contact_name').text();
    var time = $(this).find('.contact_time').text();
    var image = $(this).find('img').attr('src');
    // console.log(image);
    $('.container_right .current_chat .contact_active .contact_name').text(name);
    $('.container_right .current_chat .contact_active .contact_time').text('Ultimo accesso alle ' + time);
    $('.container_right .current_chat img').attr('src', image);
  });
});
//RICERCA ELEMENTO DA BARRA DI RICERCA
$('.search_bar input').keyup(function () {
  var text = $('.search_bar input').val().toLowerCase();
  console.log(text);

//RICERCA PERSONA CHE VIENE MOSTRATA O MENO
  $('.person_chat').each(function () {
    var contactName = $(this).find('.contact_name').text().toLowerCase();
    if(contactName.includes(text) == true){
      // console.log('incluso');
      $(this).show();
    } else {
      $(this).hide();
    };
  });
});

//DROPDOWN - MOSTRA E TOGLIE I MENU
$(document).on('click', '.message_choice', function () {
  //toggleclass sull'elemento dropdown cliccato
    $(this).parent().siblings('.message_pop').toggleClass('active');
    //tolgo classe active ai dropdown dei message_pop
    $(this).parents('.message').siblings('.message').find('.message_pop').removeClass('active');
  });

//ELIMINA MESSAGGIO
$(document).on('click', '.delete_message', function () {
  $(this).parent().parent().parent().remove();
});

// **********FUNZIONI***********
//FUNZIONE INVIO MESSAGGIO
function sendMessage() {
  var textMessage = $('input.send_message').val();
  console.log(textMessage);
  if(textMessage.length != 0) {
    var newMessage = $('.template .message').clone();
    // console.log(newMessage);
    newMessage.find('.message_text').text(textMessage);

    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours + ':' + minutes;
    newMessage.find('.message_time').text(time);
    newMessage.addClass('sent');
    $('.field_chat.active').append(newMessage);
    setTimeout (sendResponse, 1000);
    $('input.send_message').val('');
  };
};

// FUNZIONE RISPOSTA MESSAGGIO
function sendResponse() {
  var receivedMex = $('.template .message').clone();
  receivedMex.find('.message_text').text('Ok!');
  $('.field_chat.active').append(receivedMex);
  receivedMex.addClass('received');

  var data = new Date()
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours + ':' + minutes;
  receivedMex.find('.message_time').text(time);
  console.log(receivedMex);
};

// FUNZIONE AGGIUNGI ZERO
 function addZero(number) {
   if(number < 10) {
     number = '0' + number;
   }
   return number;
};

 // FUNZIONE CHAT ATTIVA
 // function activeChat() {
 //   var contents = $('.person_chat').attr('data-contact');
 //   console.log(contents);
 //   $('.person_chat').removeClass('active');
 //   $('.field_chat').removeClass('active');
 //   $('.person_chat[data-contact="' + contents + '"]').addClass('active');
 //   $('.field_chat[data-contact="' + contents + '"]').addClass('active');
 // }
