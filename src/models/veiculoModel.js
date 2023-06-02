const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database")

class Veiculo extends Model { }
// id, placa, chassi, renavam, modelo, marca, ano
Veiculo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        placa: {
            type: DataTypes.STRING,
            unique: false
        },
        chassi: {
            type: DataTypes.STRING,
            unique: false
        },
        renavam: {
            type: DataTypes.STRING,
            unique: false
        },

        modelo: {
            type: DataTypes.STRING,
        },
        marca: {
            type: DataTypes.STRING,
        },
        ano: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        modelName: "veiculo",
        timestamps: false,
    }
);

module.exports = Veiculo;
//export default Veiculo;