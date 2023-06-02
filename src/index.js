const express = require("express");
const sequelize = require('./config/database');
const Routes = require("./routes/index.routes");
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json')

const app = express();

sequelize.sync().then(() => console.log("Banco de dados conectado com sucesso"));

// Inicializando cors antes das outras funções
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(express.json());

app.use("/api/veiculos", Routes)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3333, () => {
    console.log("Servidor iniciado na porta 3333")
})