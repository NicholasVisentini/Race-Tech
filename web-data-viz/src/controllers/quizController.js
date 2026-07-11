var quizModel = require("../models/quizModel");

function salvar(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var respostas = req.body.respostasServer;

    if (pontuacao == undefined) {
        res.status(400).send("A pontuação está indefinida!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O id do usuário está indefinido!");
    } else if (respostas == undefined) {
        res.status(400).send("As respostas estão indefinidas!");
    } else {
        quizModel.salvarResultado(pontuacao, fkUsuario)
            .then(
                function (resultado) {
                    var idResultado = resultado.insertId;

                    var listaInserts = [];
                    for (var i = 0; i < respostas.length; i++) {
                        listaInserts.push(quizModel.salvarResposta(idResultado, respostas[i].numero_pergunta, respostas[i].acertou));
                    }

                    Promise.all(listaInserts)
                        .then(
                            function () {
                                res.json({ idResultado: idResultado });
                            }
                        )
                        .catch(
                            function (erro) {
                                console.log(erro);
                                console.log("Houve um erro ao salvar as respostas do quiz: ", erro.sqlMessage);
                                res.status(500).json(erro.sqlMessage);
                            }
                        );
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao salvar o resultado do quiz: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    salvar
}