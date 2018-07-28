$(document).ready(function() {
  var id = getUrlParameter('id');
  var meuprojeto = 'https://ondetem-c714c.firebaseio.com/projects/' + id + '.json';

  // var googleMapsURL = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyD2iTFB6jOZX4lKRxGezpV-9rjlW_E-V1E&q='

  $.get(meuprojeto)
     .done(function(data) {
        var descricao = `
        <p>
          ${data.description}
        </p>
        <p>
          <b>Período:</b><br>
          ${data.period}
        </p>
        `
        $('#home').html(descricao);

        var profileHTML = `
        <p>
          <b>Escolaridade:</b><br>
          ${data.minSchool}
        </p>
        <p>
          <b>Idade mínima:</b><br>
          ${data.minAge}
        </p>
        `;
        $('#profile').html(profileHTML);

        var contatoHTML = `
        <div>
        <p>
          <b>Nome:</b> ${data.contactName}
        </p>
        </div>
        <div>
        <p>
          <b>E-mail:</b> ${data.contactEmail}
        </p>
        </div>
        <div>
        <p>
          <b>Telefone:</b> ${data.contactPhone}
        </p>
        </div>
        `;

        $('.contato-curso').html(contatoHTML);

        $('.imagem-curso').attr('src', data.imageUrl);

        $('.local-curso').html(data.place)

        $('.nome-curso').html(data.title);

        var googleMapsURL = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyD2iTFB6jOZX4lKRxGezpV-9rjlW_E-V1E&q=' + data.mapLatitude + ',' + data.mapLongitude
        $('.mapa').attr('src', googleMapsURL)
      })
      .fail(function() { alert('Deu ruim'); });
});

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
      }
  }
};
