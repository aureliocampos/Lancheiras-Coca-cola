function populate() {

    var obj = [{
            "lanc-title-js": "Teste de Título",
            "lanc-subtitle-js": "Subtitulo"
        },
    ];

    return obj;
}

//poderia ser popularModal(i), ou qualquer outro parametro pra acessar os valores
function popularModal(arg) {

    var produto = populate()[arg];

    for (var field in produto) {
        $('#' + field).text(produto[field]);

        // alert(field + " " + produto[field]);
    }

}