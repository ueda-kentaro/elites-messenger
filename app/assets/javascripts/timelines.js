$(function(){
  $('form.input_message_form input.post').click(function(e){
    var form = $('form.input_message_form');
    form.removeAttr('data-remote');
    form.removeData("remote");
    form.attr('action', form.attr('action').replace('.json', ''));
  });

  $('form.input_message_form').on('ajax:complete', function(event, data, status){
    if ( status == 'success') {
      var json = JSON.parse(data.responseText);
      if (json.timeline){
      $('div.alert').empty();
      $('div.timeline').prepend(json.timeline);
      }
        else if (json.error){
            $('div.alert').empty();
            for( var i in json.error) {
                $('div.alert').append($('<p>' + json.error[i] + '</p>'));
            } 
        }
    }
  });
});