var meucurso = `
    <div class="card card-curso">
        <a href="/curso">
            <div class="row">
                <div class="col-4 col-md-4 col-lg-2 lista-curso ">
                    <div class="lista-imagem">
                        <img class="lista-logo" src="https://s3.amazonaws.com/ckl-blog-static/misc/onde-tem/Logo-negativo.svg">
                    </div>
                </div>
                <div class="col-8 col-md-8 col-lg-5 lista-curso">
                    <div>
                        <h5 class="lista-titulo">Mão na massa - Android avançado/kotlin</h5>
                        <p class="lista-item local">Avenida Mauro Ramos - IFSC</p>
                        <p class="lista-item">Data de inicio: <span class="data-inicio">04/03/2018</span></p>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-5 lista-descricao">
                    <div>
                        <h5 class="lista-descricao">Curso sobre Android avançado, o segundo módulo do curso, com foco em Kotlin, apresentando facilidades
                            que a linguagem pode oferecer para o desenvolvimento.</h5>
                    </div>
                    <div class="lista-tags">
                        <p class="">Tags: Tecnologia</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
`
$(document).ready(function () {
    $('.categoria-select').select2({
        placeholder: "Categoria"
    });

    var meuservidor = 'https://ondetem-c714c.firebaseio.com/projects.json';

    $.get(meuservidor)
     .done(function(data) {
        var chaves = Object.keys(data);

        $(chaves).each(function(index) {
            var Curso = $(meucurso);
            Curso.find('.lista-logo').attr("src",data[this].imageUrl);
            Curso.find('.lista-titulo').html(data[this].title);
            Curso.find('.lista-descricao').html(data[this].description);
            Curso.find('.lista-item.local').html(data[this].place);
            Curso.find('span.data-inicio').html(data[this].dateStart);
            Curso.appendTo($("#lista-cursos"));
        });
      })
      .fail(function() { alert('Deu ruim'); });

});