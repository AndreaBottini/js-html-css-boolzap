$(document).ready(function () {
  $('.icon_send').click(function () {
    sendMessage()
  });

  // RISPOSTA UTENTE DOPO UN SECONDO

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
    $('.field_chat').append(newMessage);
    $('input.send_message').val('');
  }
};

// RISPOSTA MESSAGGIO
setTimeout (function() {
  var receivedMex = $('.template .message').clone();
  receivedMex.find('.message_text').text('Sono contenta, quando ci vediamo?');
  $('.field_chat').append(receivedMex);
  receivedMex.addClass('received');
  var data = new Date()
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours + ':' + minutes;
  receivedMex.find('.message_time').text(time);
  console.log(receivedMex);
}, 1000);

// FUNZIONE AGGIUNGI zero

 function addZero(number) {
   if(number < 10) {
     number = '0' + number;
   }
   return number;
 }
