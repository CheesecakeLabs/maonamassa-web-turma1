$(document).ready(function () {
    $('.categoria-select').select2({
        placeholder: "Categoria"
    });

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

   
    $(cursos).each(function () {
        var Curso = $(".card.card-curso").first().clone()
        Curso.appendTo($(".container"))
        Curso.find('.lista-titulo').html(this.title)
        Curso.find('.lista-descricao').html(this.description)
        console.log(this.description)
    })
});