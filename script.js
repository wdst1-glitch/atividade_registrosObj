const prompt = require ('prompt-sync')()

let aluno1 = {
    aluno: "Willian",
    conteudo: "Programação",
    agendado: ["12/08/2025"],
    pendente: ["11/07/2025"],
    valor: 10,
    pago: false
}


/* ^^^^^^^^^^^ Aluno ^^^^^^^^^^^*/


let menu = prompt("Você quer 'Registrar aulas', 'Desmarcar aulas pendentes', 'Registrar pagamento', 'Consultar agenda', 'Sair' ")

menu.toLowerCase()


/* ^^^^^^^^^^^ O sistema que define os comportamentos do algorítmo ^^^^^^^^^^^*/


switch (menu) {
    case "registrar aulas":
        aluno1.agendado = prompt("Digite a sua nova data")
        break;
    case "desmarcar aulas pendentes":
        aluno1.pendente = prompt("Qual dia? ")

        for(let i = 0; i <= i.lenght; i++) {
            if(aluno.pendente[i]) {
                delete[i]
            }
        }
        break;
    case "registrar pagamento":
        let tipoDePagamento = prompt("Qual forma de pagamento? ")

        if(tipoDePagamento === "diario") {
            aluno1.valor - 10
        } else if(tipoDePagamento === "semanal") {
            aluno1.valor - 70
        } else if(tipoDePagamento) {
            aluno1.pendente - 300
        }
        break;
    case "consultar agenda":
        console.log(aluno1.agendado)
        break;
    case "sair":
        false
        break;
    default:
        false
}


/* ^^^^^^^^^^^ As possibilidades do código ^^^^^^^^^^^*/


if(aluno1.pago === 0) {
    aluno1.pago = prompt(true)
}

/* ^^^^^^^^^^^ Serve para atualizar o estado de pagamento ^^^^^^^^^^^*/


let pergunta2 = prompt("Quer ver o seu perfil ")

switch (pergunta2) {
    case sim:
        console.log(aluno1)
        break;
    case nao:
        console.log("Sistema desligando")
        break;
        default:
            console.log("Algo de errado no seu dígito")
}

/* ^^^^^^^^^^^ Perguntas finais ^^^^^^^^^^^*/
