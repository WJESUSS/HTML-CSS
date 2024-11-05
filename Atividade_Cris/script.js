


function imprimirMensagem() {
    document.write("Olá, Mundo!");
}


function variaveisSimples() {
    let nome = "João";
    let idade = 25;
    document.write(`Meu nome é ${nome} e eu tenho ${idade} anos.`);
    document.write("<br>");
}


function operacoesMatematicas() {
    let a = parseInt(prompt("Insira o primeiro numero :"));
    let b = parseInt(prompt("Insira o segundo numero :"));
    let operacao = parseInt(prompt("Digite a operação : 1-SOMA, 2-SUBTRAÇÃO , 3-MULTIPLICAÇÃO , 4-DIVISÃO "))
    let soma
    let subtracao
    let multiplicacao
    let divisao
    if( operacao == 1){
        soma = a + b;
       prompt(`A soma de ${a} + ${b} = ${soma}`);
    }else if(operacao == 2){
        subtracao = a-b
        prompt(`A subtração de ${a} - ${b} = ${subtracao}`);
    }else if(operacao == 3){
        multiplicacao = a * b
        prompt(`A multiplicação de ${a} * ${b} = ${multiplicacao}`);
    }else if(operacao == 4){
        divisao = a / b
        prompt(`A divisão de ${a} / ${b} = ${divisao}`);

    }else{
        prompt("Operação inválida.");
    }
    
   
}


function calculandoMedia() {
    let nota1 = parseFloat(prompt("Insira a primeira nota:"));
    let nota2 = parseFloat(prompt("Insira a segunda nota:"));
    let nota3 = parseFloat(prompt("Insira a terceira nota:"));
    let media = (nota1 + nota2 + nota3) / 3;
    if (media >= 7) {
        prompt(`Sua média é ${media}. Você foi aprovado.`);
    } else {
        prompt(`Sua média é ${media}. Você foi reprovado.`);
    }
}


function verificarParOuImpar() {
    let numero = parseInt(prompt("Insira um número:"));
    if (numero % 2 === 0) {
        prompt(`O número ${numero} é par.`);
    } else {
      prompt(`O número ${numero} é ímpar.`);

    }

    
}

function verificarIdade() {
    let idade = parseInt(prompt("Insira sua idade:"));
    if (idade >= 18) {
        prompt("Você é maior de idade.");
    } else {
        prompt("Você é menor de idade.");
    }
}


function calculadora(a, b, operacao) {
    let resultado;
    switch (operacao) {
        case 'soma':
            resultado = a + b;
            break;
        case 'subtracao':
            resultado = a - b;
            break;
        case 'multiplicacao':
            resultado = a * b;
            break;
        case 'divisao':
            resultado = a / b;
            break;
        default:
            prompt("Operação inválida.");
            return;
    }
   prompt(`O resultado da ${operacao} é ${resultado}.`);
}


function manipulacaoDeStrings() {
    let nome = prompt("Insira seu nome:");
    prompt(`Nome em maiúsculas: ${nome.toUpperCase()}`);
    prompt(`Nome em minúsculas: ${nome.toLowerCase()}`);
    prompt(`Quantidade de caracteres: ${nome.length}`);
}


function contagemRegressiva() {
    for (let i = 10; i > 0; i--) {
        window(i);
    }
}


function tabuada() {
    let numero = parseInt(prompt("Insira um número:"));
    for (let i = 1; i <= 10; i++) {
       prompt(`${numero} x ${i} = ${numero * i}`);
    }
}


function arrayDeNomes() {
    let nomes = ["Ana", "Bruno", "Carla", "Daniel", "Eduardo"];
    nomes.forEach(nome => prompt(nome));
}

function converterCelsiusParaFahrenheit() {

    let celsius = parseFloat(prompt("Insira o grau Celsius"));
    let fahrenheit = celsius * 9 / 5 + 32;
    prompt(`${celsius}°C é igual a ${fahrenheit}°F.`);
   
}


function manipulacaoDeObjetos() {
    let carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2020
    };
    prompt(`Marca: ${carro.marca}`);
    prompt(`Modelo: ${carro.modelo}`);
    prompt(`Ano: ${carro.ano}`);
}
function maiorNumero(){
    let maiorNumero
    let numero1 = parseInt(prompt("Insira o primeiro número:"));
    let numero2 = parseInt(prompt("Insira o segundo número:"));
   
    if(numero1 > numero2){
        maiorNumero = numero1
        prompt(`O maior número é ${maiorNumero}`);
    }else{
        maiorNumero = numero2
        prompt(`O maior número é ${maiorNumero}`);
    }
}
function loopWhile(){
    let n = parseInt(prompt("Digite um numero do loop"))
    let i = 0;
    while(i < n){
        prompt("Numero do loop: "+ i);
        i++;
    }
}
function numeroAleatorio(){
    let numeroAleatorio = Math.random() * 100;
    prompt(`Número aleatório: ${numeroAleatorio}`);
    prompt(`Número inteiro aleatório: ${Math.floor(numeroAleatorio)}`);
}
function inverterString(){
    let nome = prompt("Insira seu nome:");
    let nomeInvertido = nome.split("").reverse().join("");
    prompt(`Nome invertido: ${nomeInvertido}`);
}