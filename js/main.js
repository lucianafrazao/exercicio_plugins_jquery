$(document).ready(function() {
    $("#telefone").mask("(00) 00000-0000", {
        placeholder: "(00) 00000-0000"
    })

    $("#cep").mask("00000-000", {
        placeholder: "00000-000"
    })

    $("#cpf").mask("000.000.000-00", {
        placeholder: "000.000.000-00"
    })

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira seu nome.",
            email: "Por favor, insira seu e-mail.",
            telefone: "Por favor, insira seu telefone.",
            cpf: "Por favor, insira seu CPF.",
            endereco: "Por favor, insira seu endereço completo.",
            cep: "Por favor, insira seu CEP."
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        },
    })
})