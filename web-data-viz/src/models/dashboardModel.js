var database = require("../database/config");
 
function buscarAcertoTotal(fkUsuario) {
    var instrucaoSql = `
        SELECT ROUND(SUM(pontuacao) / SUM(total_perguntas) * 100) AS acerto_total FROM quiz_resultado WHERE fk_usuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
 
function buscarTotalQuiz(fkUsuario) {
    var instrucaoSql = `
        SELECT COUNT(*) AS total_quiz FROM quiz_resultado WHERE fk_usuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
 
function buscarMelhorPontuacao(fkUsuario) {
    var instrucaoSql = `
        SELECT MAX(pontuacao) AS melhor_pontuacao FROM quiz_resultado WHERE fk_usuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
 
function buscarAcertoPorPergunta(fkUsuario) {
    var instrucaoSql = `
        SELECT re.numero_pergunta, ROUND(AVG(re.acertou) * 100) AS taxa_acerto
        FROM quiz_resposta re
        JOIN quiz_resultado rt ON re.fk_quiz_resultado = rt.id_resultado
        WHERE rt.fk_usuario = ${fkUsuario}
        GROUP BY re.numero_pergunta
        ORDER BY re.numero_pergunta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
 
function buscarMaisErradas(fkUsuario) {
    var instrucaoSql = `
        SELECT re.numero_pergunta, ROUND((1 - AVG(re.acertou)) * 100) AS taxa_erro
        FROM quiz_resposta re
        JOIN quiz_resultado rt ON re.fk_quiz_resultado = rt.id_resultado
        WHERE rt.fk_usuario = ${fkUsuario}
        GROUP BY re.numero_pergunta
        ORDER BY taxa_erro DESC
        LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
 
module.exports = {
    buscarAcertoTotal,
    buscarTotalQuiz,
    buscarMelhorPontuacao,
    buscarAcertoPorPergunta,
    buscarMaisErradas
}