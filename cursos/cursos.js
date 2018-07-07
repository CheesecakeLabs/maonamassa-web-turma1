$(document).ready(function () {
    $('.categoria-select').select2({
        placeholder: "Categoria"
    });

    var cardcursos = `        <div class="card card-curso">
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
                    <p class="lista-item" id="um" >Avenida Mauro Ramos - IFSC</p>
                    <p class="lista-item" id="dois">Data de inicio: 14/03/2018</p>
                    <p class="lista-item">Periodo de inscrição: 18/02/2018 - 27/02/2018</p>
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
    </div>`
             
    var cursos = [
        {
            title: "Curso 1",
            link: 'http://ckl.io',
            description: "Meu curso 1"
        },
        {
            title: "Curso 2",
            link: 'http://ckl.io',
            description: "Meu curso 2"
        },
        {
            title: "Curso 3",
            link: 'http://ckl.io',
            description: "Meu curso 3"
        }
    ]
    var meuservidor = 'https://ondetem-c714c.firebaseio.com/projects.json';

    $.get(meuservidor, function(data) {
        var chaves = Object.keys(data);

    
        $(chaves).each(function (index) {
            var chave = chaves[index]
            var dados = data[chave]

                 var Curso = $(cardcursos)
            Curso.appendTo($(".container2"))
            Curso.find('.lista-titulo').html(dados.title)
            Curso.find('.lista-descricao').html(dados.description)
            Curso.find('.lista-logo').attr("src",dados.imageUrl)
            Curso.find('#um').html(dados.place)
            Curso.find('#dois').html(dados.dateStart)           
            
        })
    });

});