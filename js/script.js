$(document).ready(function () {
  $('.icon_send').click(function () {
    sendMessage()
  });

});

function sendMessage() {
  var textMessage = $('input.send_message').val();
  console.log(textMessage);
  if(textMessage.length != 0) {
    var newMessage = $('.template .message').clone();
    console.log(newMessage);

    newMessage.find('.message_text').text(textMessage);
    var data = '10:30'
    newMessage.find('.message_time').text(data);
    newMessage.addClass('sent');
    $('.field_chat').append(newMessage);
    $('input.send_message').val('');
  }
}
