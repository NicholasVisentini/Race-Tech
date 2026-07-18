var database = require("../database/config");

function salvarResultado(pontuacao, fkUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarResultado(): ", pontuacao, fkUsuario);
    var instrucaoSql = `
        INSERT INTO quiz_resultado (pontuacao, fk_usuario) VALUES (${pontuacao}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarResposta(fkResultado, numeroPergunta, acertou) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarResposta(): ", fkResultado, numeroPergunta, acertou);
    var instrucaoSql = `
        INSERT INTO quiz_resposta (fk_quiz_resultado, numero_pergunta, acertou) VALUES (${fkResultado}, ${numeroPergunta}, ${acertou});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResultado,
    salvarResposta
}