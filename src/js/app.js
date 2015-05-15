$(document).ready(function() {
  $('#gform-submit').click(function(event) {
    var formData = $('#gform').serializeArray();
    var formJson = {};
    _.forEach(formData, function(n) {
      formJson[n['name']] = n['value'];
    })
  $.ajax({
    method: "POST",
    url: 'https://docs.google.com/forms/d/1KEhf7Bu9HxgOcEzCvgpBEhsekkvg8j-bWNsiu1fRC3w/formResponse',
    data: formJson,
    dataType: 'jsonp',
    contentType: 'application/json'
  })
    .done()
    .fail();
  });
});