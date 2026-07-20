var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");
 
router.get("/acerto-total/:idUsuario", function (req, res) {
    dashboardController.buscarAcertoTotal(req, res);
});
 
router.get("/total-quiz/:idUsuario", function (req, res) {
    dashboardController.buscarTotalQuiz(req, res);
});
 
router.get("/melhor-pontuacao/:idUsuario", function (req, res) {
    dashboardController.buscarMelhorPontuacao(req, res);
});
 
router.get("/acerto-por-pergunta/:idUsuario", function (req, res) {
    dashboardController.buscarAcertoPorPergunta(req, res);
});
 
router.get("/mais-erradas/:idUsuario", function (req, res) {
    dashboardController.buscarMaisErradas(req, res);
});
 
module.exports = router;