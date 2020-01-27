$(document).ready(function () {
  $('.icon_send').click(function () {
    sendMessage()
  });


});

$('.search_bar input').keyup(function () {
  var text = $('.search_bar input').val().toLowerCase();
  console.log(text);
})


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
    setTimeout (sendResponse, 1000);
    $('input.send_message').val('');
  }
};

// FUNZIONE RISPOSTA MESSAGGIO
function sendResponse() {
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
}

// FUNZIONE RICERCA CONTATTO


// FUNZIONE AGGIUNGI ZERO

 function addZero(number) {
   if(number < 10) {
     number = '0' + number;
   }
   return number;
 }
