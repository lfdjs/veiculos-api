const Veiculo = require("../models/veiculoModel");

//export default 
module.exports = {
    // Retornar todos os veículos cadastrados
    async all(req, res) {
        try {
            const veiculos = await Veiculo.findAll();
            res.status(200).json(veiculos);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    // Retornar veiculo conforme id listado
    async one(req, res) {
        try {
            const id = req.params.id

            const veiculo = await Veiculo.findOne({ where: { id } })
            if (!veiculo) {
                return res.status(404).json({ "message": `Veículo não encontrado!` });
            }
            res.status(200).json(veiculo);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async create(req, res) {
        try {
            await Veiculo.create(req.body);
            res.status(200).json({ "message": `Veículo cadatsrado com sucesso!` });
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async update(req, res) {
        try {
            const { placa, chassi, renavam, modelo, marca, ano } = req.body;
            const id = req.params.id

            const veiculo = await Veiculo.findOne({ where: { id } })
            if (!veiculo) {
                return res.status(404).json({ "message": `Veículo não encontrado!` });
            }

            veiculo.placa = placa;
            veiculo.chassi = chassi;
            veiculo.renavam = renavam;
            veiculo.modelo = modelo;
            veiculo.marca = marca;
            veiculo.ano = ano;

            await veiculo.save();
            res.status(201).json({ "message": `Veículo alterado com sucesso` })


        } catch (error) {
            res.status(400).send(error);
        }
    },
    async delete(req, res) {
        try {
            const id = req.params.id

            const veiculo = await Veiculo.destroy({ where: { id } })
            if (!veiculo) {
                return res.status(404).json({ "message": `Veículo não encontrado!` });
            }
            res.status(200).json({"message": `Veículo excluido com sucesso`});
        } catch (error) {
            res.status(400).send(error);
        }
    },
}