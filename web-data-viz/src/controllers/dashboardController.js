var dashboardModel = require("../models/dashboardModel");
 
function buscarAcertoTotal(req, res) {
 
    var idUsuario = req.params.idUsuario;
 
    console.log(`Recuperando o acerto geral do usuario ${idUsuario}`);
 
    dashboardModel.buscarAcertoTotal(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o acerto geral.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
 
function buscarTotalQuiz(req, res) {
 
    var idUsuario = req.params.idUsuario;
 
    console.log(`Recuperando o total de quiz do usuario ${idUsuario}`);
 
    dashboardModel.buscarTotalQuiz(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o total de quiz.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
 
function buscarMelhorPontuacao(req, res) {
 
    var idUsuario = req.params.idUsuario;
 
    console.log(`Recuperando a melhor pontuacao do usuario ${idUsuario}`);
 
    dashboardModel.buscarMelhorPontuacao(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a melhor pontuacao.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
 
function buscarAcertoPorPergunta(req, res) {
 
    var idUsuario = req.params.idUsuario;
 
    console.log(`Recuperando o acerto por pergunta do usuario ${idUsuario}`);
 
    dashboardModel.buscarAcertoPorPergunta(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o acerto por pergunta.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
 
function buscarMaisErradas(req, res) {
 
    var idUsuario = req.params.idUsuario;
 
    console.log(`Recuperando as perguntas mais erradas do usuario ${idUsuario}`);
 
    dashboardModel.buscarMaisErradas(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as perguntas mais erradas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
 
module.exports = {
    buscarAcertoTotal,
    buscarTotalQuiz,
    buscarMelhorPontuacao,
    buscarAcertoPorPergunta,
    buscarMaisErradas
}