chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    $('#id_editor').attr('style', 'font-size:' + request.font_size + 'px;');
  }
);
