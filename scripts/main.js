function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

includeHTML();

$(document).ready(function(){
  $("body").on("submit", "#form-contato", function(event){
    event.preventDefault();
    var nome = $('#contato-nome').val();
    var email =  $('#contato-email').val();
    var mensagem =  $('#contato-mensagem').val();

    $.ajax({
      url: 'https://ondetem-c714c.firebaseio.com/contacts.json',
      method: "POST",
      data: JSON.stringify({
        name: nome,
        email: email,
        message: mensagem,
      }),
      contentType: "application/json",
      success: function() {
        alert("Sua mensagem foi enviada com sucesso");
      }
    });
  })
});
