
export default class Calculadora{


    static soma(a, b){
        let resultado
        if (!a || !b){
            resultado = "Você esqueceu de digitar algum dos números, corrija."
        } else {
            resultado = a + b
        }
            return resultado
     }
    

    static subtracao(a,b){
        let resultado
        if (!a || !b){
            resultado = "Você esqueceu de digitar algum dos números, corrija."
        } else {
            resultado = a - b
        }
            return resultado
    }


    static multiplicacao(a,b){
        let resultado
        if (!a || !b){
            resultado = "Você esqueceu de digitar algum dos números, corrija."
        } else {
            resultado = a * b
        }
        return resultado
    }


    static divisao(a,b){
        let resultado
        if (a == NaN || b == NaN || a == undefined || b == undefined){
            resultado = "Você esqueceu de digitar algum dos números, corrija."
        } else {
            if (a == 0 || b == 0){
                resultado = "Você não pode dividir por 0";
            } else {
                resultado = a / b
            }
        }

        return resultado
    }


    static calcimc(peso,altura){
        altura = (altura/100)

        let imc = peso / (altura*altura)
        let resultado

        if (imc < 20) {
            resultado = "Abaixo do peso!"
        } else if (imc <= 25){
            resultado = "Peso ideal!"
        } else if (imc<= 30){
            resultado = "Sobrepeso!"
        } else if(imc <= 35){
            resultado = "Obesidade!"
        } else if(imc >36) {
            resultado = "Obesidade grave!"
        } else {
            resultado = "Resultado inválido, verifique os dados!"
        }

        return resultado
    }


    static binario(a){
        let resultado
        if (!a){
            resultado = 'Você esqueceu de digitar algum dos números, corrija.'
        } else {
            let numero = a
            resultado = numero.toString(2);
        }
        return resultado
    }


    static areacirculo(a){
        let resultado
        
        if (!a){
            resultado = "Você esqueceu de digitar algum dos números, corrija."
        } else {
            let raio = a
            let pi = 3.14
            let area = pi * (raio * raio)
            if (resultado == 3.14){
                resultado = "Raio igual a zero, corrija."
            } else {
                resultado = area + " m²"
            }
        }
            return resultado
    }


    static porcentagem(a, b){
        let resultado
        if(!a || !b){
            resultado = "Você esqueceu de digitar algum dos números, corrija."
        } else {
            let porcento = a
            let numero = b
            let porcentagem = porcento / 100
            resultado = porcentagem * numero
        }
        return resultado
    }


    static media(a,b){
        let resultado
        if (!a || !b){
            resultado = "Você esqueceu de digitar algum dos números, corrija."
        } else {
            resultado = (a + b)/2
        }

        return resultado
    }


    static potencia(a,b){
        let resultado
        if (!a || !b){
            resultado = "Você esqueceu de digitar algum dos números, corrija."
        } else {
            resultado = a ** b
        }
        
        return resultado
    }
}