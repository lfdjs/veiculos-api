let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
const server = 'http://localhost:3333';

// Para cada teste a ser realizado que exija parâmetro com id e que retorne status 200, altere esta variável
let id = "3";

//Id utilizado para realizar os testes de veículo não encontrado
let idErrorTest = 1000

chai.use(chaiHttp);

describe('Veículos', () => {

    describe('/GET Veículos', () => {
        it('Testando GET todos os Veículos', (done) => {
            chai.request(server)
                .get('/api/veiculos')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/GET/:id Veículos', () => {
        it('Verificar se o veiculo retornou normalmente com o id passado como parâmetro', (done) => {
            chai.request('http://localhost:3333')
                .get(`/api/veiculos/${id}`)
                .end((err, res) => {
                    if (res.should.have.status(200) &&
                        // Verifica se as propriedades da consulta existem
                        res.body.should.have.property('id') &&
                        res.body.should.have.property('placa') &&
                        res.body.should.have.property('chassi') &&
                        res.body.should.have.property('renavam') &&
                        res.body.should.have.property('modelo') &&
                        res.body.should.have.property('marca') &&
                        res.body.should.have.property('ano')
                    )
                        done();
                    else
                        throw err
                });

        });
    });

    describe('/GET/:id Veículos', () => {
        it('Verificar se retorna uma mensagem de veiculo não encontrado ao consultar conforme id passado como parâmetro', (done) => {
            chai.request('http://localhost:3333')
                .get(`/api/veiculos/${idErrorTest}`)
                .end((err, res) => {
                    if (res.should.have.status(404))
                        done();
                    else
                        throw err;
                });

        });
    });

    describe('/POST Veiculo', () => {
        it('Verificar se o cadastro de Veiculo foi realizado com sucesso', (done) => {
            let veiculo = { // Vamos deinir o veiculo que vamos inserir
                placa: "JHG2342",
                chassi: "CERDASER48",
                renavam: 012345678,
                modelo: "Kwid",
                marca: "Renault",
                ano: 2020
            }
            chai.request(server)
                .post('/api/veiculos')
                .send(veiculo) // vamos enviar esse arquivo
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('/PUT/:id Veículo', () => {
        it('Verificar se os dados do veiculo foram alterados com sucesso conforme id passado como argumento', (done) => {

            let veiculo = { // Definição do veiculo a ser alterado
                placa: "III2342",
                chassi: "CER458712",
                renavam: 0123456789,
                modelo: "Opala",
                marca: "Chevrolet",
                ano: 2020
            }
            chai.request('http://localhost:3333')
                .put(`/api/veiculos/${id}`)
                .send(veiculo) // vamos enviar esse arquivo
                .end((err, res) => {
                    if (res.should.have.status(201))
                        done();
                    else
                        throw err;
                });

        });
    });

    describe('/PUT/:id Veículo', () => {
        it('Verificar se retorna uma mensagem de veiculo não encontrado ao alterar conforme id passado como parâmetro', (done) => {
            chai.request('http://localhost:3333')
                .put(`/api/veiculos/${idErrorTest}`)
                .end((err, res) => {
                    if (res.should.have.status(404))
                        done();
                    else
                        throw err;
                });

        });
    });

    describe('/DELETE/:id Veículo', () => {
        it('Verificar se os dados do veiculo foram excluidos com sucesso conforme id passado como argumento', (done) => {
            chai.request('http://localhost:3333')
                .delete(`/api/veiculos/${id}`)
                .end((err, res) => {
                    if (res.should.have.status(200))
                        done();
                    else
                        throw err;
                });

        });
    });

    describe('/DELETE/:id Veículo', () => {
        it('Verificar se retorna uma mensagem de veiculo não encontrado ao deletar conforme id passado como parâmetro', (done) => {
            let id = "30";
            chai.request('http://localhost:3333')
                .delete(`/api/veiculos/${idErrorTest}`)
                .end((err, res) => {
                    if (res.should.have.status(404))
                        done();
                    else
                        throw err;
                });

        });
    });
});