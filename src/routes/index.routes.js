const express = require("express");
const veiculoController = require("../controllers/veiculoController");
const router = express.Router();

router.route('/')
    .get(veiculoController.all) // Retorna todos os veículos
    .post(veiculoController.create) // Insere um novo veículo 

router.route("/:id")
    .get(veiculoController.one) // Retorna um veículo conforme id passado como parâmetro
    .put(veiculoController.update) // Altera dados do veículo
    .delete(veiculoController.delete)// Exclui o veículo
    ;
module.exports = router;
