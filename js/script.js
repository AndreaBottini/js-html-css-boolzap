$(document).ready(function () {
  $('.icon_send').click(function () {
    sendMessage()
  });
  $('.send_message').keypress(function(event) {
    if (event.which == 13) {
      sendMessage();
    }
  });
  //CHAT ATTIVE
  $(document).on('click', '.person_chat', function() {
    var contents = $(this).attr('data-contact');
    console.log(contents);
    $('.person_chat').removeClass('active');
    $('.field_chat').removeClass('active');
    $(this).addClass('active');
    $('.field_chat[data-contact="' + contents + '"]').addClass('active');

    var name = $(this).find('.contact_name').text();
    var time = $(this).find('.contact_time').text();
    var image = $(this).find('img').attr('src');
    console.log(image);
    $('.container_right .current_chat .contact_active .contact_name').text(name);
    $('.container_right .current_chat .contact_active .contact_time').text('Ultimo accesso alle ' + time);
    $('.container_right .current_chat img').attr('src', image);
  });
});

$('.search_bar input').keyup(function () {
  var text = $('.search_bar input').val().toLowerCase();
  console.log(text);

  $('.person_chat').each(function () {
    var contactName = $(this).find('.contact_name').text().toLowerCase();
    if(contactName.includes(text) == true){
      // console.log('incluso');
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});


// INVIO MESSAGGIO
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
  }
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

// FUNZIONE CHAT ATTIVA
// function activeChat() {
//   var contents = $('.person_chat').attr('data-contact');
//   console.log(contents);
//   $('.person_chat').removeClass('active');
//   $('.field_chat').removeClass('active');
//   $('.person_chat[data-contact="' + contents + '"]').addClass('active');
//   $('.field_chat[data-contact="' + contents + '"]').addClass('active');
// }



// FUNZIONE AGGIUNGI ZERO

 function addZero(number) {
   if(number < 10) {
     number = '0' + number;
   }
   return number;
 }
