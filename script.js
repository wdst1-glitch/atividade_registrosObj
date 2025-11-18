let aluno1 = {
    aluno: "Willian",
    conteudo: "Programação",
    agendado: ["12/08/2025"],
    pendente: ["11/07/2025"],
    valor: 10,
    pago: false
}

let aluno2 = {}





let menu = prompt("Você quer 'Registrar aulas', 'Desmarcar aulas pendentes', 'Registrar pagamento', 'Consultar agenda', 'sair'" )

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
}
