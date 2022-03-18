const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    

    validation(nome,altura,peso,resultado)
    calculoIMC(nome,altura,peso,resultado)


}

function validation(nome,altura,peso,resultado){

    if(nome !== '' && altura !== '' && peso !=='' ){

    }else{
        resultado.textContent = 'Valor Invalido Por favor repita Novamente'
    }

}

function calculoIMC(nome,altura,peso,resultado){
    const calculo = (peso/(altura * altura))

    let verificar = "";

    if(calculo<16){
        verificar = "Sub Peso Severo"
    }else if(calculo>16 && calculo<19,9){
        verificar = "Sub Peso"
    }else if(calculo>=20 && calculo<=24,9){
        verificar = "Normal"
    }else if(calculo>=25 && calculo <= 29,9){
        verificar = "Sobre Peso"
    }else if(calculo>30 && calculo<= 39,9){
        verificar= "Obeso"
    }else{
        verificar = "Obeso Morbido"
    }

    resultado.textContent = `${nome} seu imc é ${calculo.toFixed(1)}`
}

calcular.addEventListener('click',imc)