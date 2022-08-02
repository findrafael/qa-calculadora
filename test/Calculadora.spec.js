import chai from 'chai'
import calc from '../src/Calculadora.js'
const expect = chai.expect;


describe('Testes de Soma', () => {

    it('Deve somar 4 e 5, resultando em: 9', () => {
        let resultado = calc.soma(4,5);
        expect(resultado).to.be.equals(9);
    })

    it('Não deve somar pois, não foi informado nenhum número.', () => {
        let resultado = calc.soma();
        expect(resultado).to.be.equals('Você esqueceu de digitar algum dos números, corrija.');
    })

})


describe('Testes de Subtração', () =>{
    it('Deve subtrair 7 de 3, resultando em: -4', () =>{
        let resultado = calc.subtracao(3,7);
        expect(resultado).to.be.equals(-4);
    })
    it('Não deve subtrair pois, não foi informado nenhum número.', () => {
        let resultado = calc.subtracao(0);
        expect(resultado).to.be.equals('Você esqueceu de digitar algum dos números, corrija.');
    })
})


describe('Testes de Multiplicação', () =>{
    it('Deve multiplicar 15 por 6, resultando em: 90', () =>{
        let resultado = calc.multiplicacao(15,6);
        expect(resultado).to.be.equals(90);
    })

    it('Não deve multiplicar pois, não foi informado nenhum número.', () =>{
        let resultado = calc.multiplicacao();
        expect(resultado).to.be.equals('Você esqueceu de digitar algum dos números, corrija.');
    })
})


describe('Testes de Divisão', () =>{
    it('Deve dividir 13 por 5, resultando em: 2,6', () =>{
        let resultado = calc.divisao(13,5);
        expect(resultado).to.be.equals(2.6);
    })

    it('Não deve dividir pois, não foi informado nenhum número.', () =>{
        let resultado = calc.divisao();
        expect(resultado).to.be.equals('Você esqueceu de digitar algum dos números, corrija.');
    })

    it('Não deve dividir 2 por 0', () =>{
        let resultado = calc.divisao(2,0);
        expect(resultado).to.be.equals('Você não pode dividir por 0');
    })
})


describe('Testes de IMC', () => {

    it('Deve informar: Abaixo do peso', () => {
        let resultado = calc.calcimc(50,180);
        expect(resultado).to.be.equals("Abaixo do peso!");
    })

    it('Deve informar: Peso ideal', () => {
        let resultado = calc.calcimc(70,170);
        expect(resultado).to.be.equals("Peso ideal!");
    })

    it('Deve informar: Sobrepeso', () => {
        let resultado = calc.calcimc(80,176);
        expect(resultado).to.be.equals("Sobrepeso!");
    })

    it('Deve informar: Obesidade', () => {
        let resultado = calc.calcimc(95,170);
        expect(resultado).to.be.equals("Obesidade!");
    })

    it('Deve informar: Obesidade grave', () => {
        let resultado = calc.calcimc(100,160);
        expect(resultado).to.be.equals("Obesidade grave!");
    })

    it('Deve informar: Resultado inválido, verifique os dados!', () => {
        let resultado = calc.calcimc(0,0);
        expect(resultado).to.be.equals("Resultado inválido, verifique os dados!");
    })

})


describe('Testes de Conversão de Binário', ()=>{
    it('Deve converter 10 para binário, resultando em: 1010',()=>{
        let resultado = calc.binario(10);
        expect(resultado).to.be.equals('1010');
    })

    it('Não deve converter para binário pois, não foi informado nenhum número.',()=>{
        let resultado = calc.binario();
        expect(resultado).to.be.equals('Você esqueceu de digitar algum dos números, corrija.');
    })

})


describe('Testes de Área do Circulo', () =>{
    it('Deve obter a área de um círculo com 13 de raio, resultando em: 530.66 m²', () =>{
        let resultado = calc.areacirculo(13);
        expect(resultado).to.be.equals('530.66 m²');
    })

    it('Não deve obter a área de um circulo pois, não foi informado nenhum valor.', () =>{
        let resultado = calc.areacirculo();
        expect(resultado).to.be.equals('Você esqueceu de digitar algum dos números, corrija.');
    })

    it('Não deve obter a área de um circulo pois, raio menor ou igual a zero.', () =>{
        let resultado = calc.areacirculo(1);
        expect(resultado).to.be.equals('3.14 m²');
    })

})


describe('Testes de Porcentagem', () =>{
    it('Deve obter a equivalência de 20% em 57', () =>{
        let resultado = calc.porcentagem(20,57);
        expect(resultado).to.be.equals(11.4);
    })

    it('Não deve obter a porcentagem, pois falta um ou mais números.', () =>{
        let resultado = calc.porcentagem(59);
        expect(resultado).to.be.equals('Você esqueceu de digitar algum dos números, corrija.');
    })

})


describe('Testes de Média', () =>{
    it('Deve obter a média de 45 e 89, resultando em: 67', () =>{
        let resultado = calc.media(45,89);
        expect(resultado).to.be.equals(67);
    })

    it('Não deve obter a média, pois falta um dos números.', () =>{
        let resultado = calc.media();
        expect(resultado).to.be.equals('Você esqueceu de digitar algum dos números, corrija.');
    })
})


describe('Testes de Potência', () =>{
    it('Deve obter a 6º potência de 2, resultando em: 64', () =>{
        let resultado = calc.potencia(2,6);
        expect(resultado).to.be.equals(64);
    })

    it('Não deve obter a potência, pois falta um dos números.', () =>{
        let resultado = calc.potencia(4);
        expect(resultado).to.be.equals('Você esqueceu de digitar algum dos números, corrija.');
    })
})