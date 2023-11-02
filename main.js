function Veiculos(marca, modelo, valor) {
    this.marca = marca;
    this.modelo = modelo;
    this.valor = valor;

    this.dizVeiculo = function() {
        console.log(`A marca do veículo é ${this.marca}, o modelo é ${this.modelo}, valor do veículo é R$${this.valor}`)
    }
}

function Carro(marca, modelo, valor) {
    Veiculos.call(this, marca, modelo, valor)

    this.dizCarro = function() {
        console.log(`Marca do Carro ${this.marca}, Modelo ${this.modelo}, Valor do Carro R$ ${this.valor},00`)
    }

}

function Aviao(marca, modelo, valor) {
    Veiculos.call(this, marca, modelo, valor)

    this.dizAviao = function() {
        console.log(`Marca do Avião ${this.marca}, Modelo ${this.modelo}, Valor do Avião R$ ${this.valor}`)
    }
}

function Moto(marca, modelo, valor, cilindradas) {
    Veiculos.call(this, marca, modelo, valor)
    this.cilindradas = cilindradas

    this.dizMoto = function() {
        console.log(`Marca da Moto é ${this.marca}, Modelo é ${this.modelo}, a Moto tem ${this.cilindradas} cilindradas, valor da Moto é de R$ ${this.valor}`)
    }
}

const carro1 = new Carro('Ford', 'Fiesta', 18000)
const aviao1 = new Aviao('Vans Aircraft, Inc', 'RV-10', 1490000)
const moto1 = new Moto('Honda', 'Hornet', 29000, 600)

carro1.dizVeiculo()
carro1.dizCarro()

aviao1.dizVeiculo()
aviao1.dizAviao()

moto1.dizVeiculo()
moto1.dizMoto()