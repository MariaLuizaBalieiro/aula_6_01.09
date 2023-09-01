// ********************************************************************************
// Objetivo: realizar o calculo de uma tabuada através de estruturas de repetição *
// data: 01/09/2023                                                               *
// autor: Maria Luiza                                                             *
// vrsão: 1.0                                                                     *
// ********************************************************************************


// função para gerar uma tabuada 
const gerarTabuada = function(valorTabuada, contadorInicial, contadorFinal){
// etrada de dados que vieram pelos argumentos das funções 
    let tabuada = valorTabuada;
    let contInicial = contadorInicial;
    let contFinal = contadorFinal;
    
    let resultado;
    let status = false;

   
    if(contFinal< contInicial){
        // validação os valores em ordem crescente
        contInicial=contFinal;
        contFinal=contInicial
    
    } if (contInicial == ''|| contFinal == ''|| tabuada == ''){
        console.log('ERRO: está vazio :(')
    
    }else if (isNaN(contInicial) || isNaN(contFinal)|| isNaN(tabuada)){
        console.log('ERRO: só é valida a entrada de números')
    } 
    
    else{
        contInicial = Number(contInicial);
        contInicial = Number(contFinal);
        
        while(contInicial <= contFinal){
            resultado = tabuada * contInicial;
            console.log(`${tabuada} x ${contInicial} = ${resultado}`)
            contInicial + contInicial + 1
            status = true;
        }
    }
    return status;
}
 console.log(gerarTabuada(2,0,10));