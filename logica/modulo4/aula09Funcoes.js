

let saudacoes = "Hello Word =D"
function imprimir(args){
    console.log(args)
}

imprimir(saudacoes)



function verificaIgualdade(nome1, nome2){
    if(nome1 == nome2){
        imprimir("Os nomes são idênticos =D")
    }else{
        imprimir("Os nomes não conferem =/ ")
    }
}
let pessoa1 = "Tales";
let pessoa2 = "Tales";
verificaIgualdade(pessoa1, pessoa2)



function verificaIdade(idade){
    if(idade < 18){
        imprimir("Você não possui idade suficiente para esse conteúdo!")
    }else if(idade <110){
        imprimir("Você é um adulto, seu acesso foi consedido.")
    }else{
        imprimir("Por favor, verifique a idade selecionada. Se estiver correta, nos chame nos canais de suporte. O.O")
    }
}
let idadeAtual = 200
verificaIdade(idadeAtual)


let boleto = 984.5
let juros = 1.1
function acrescimoDeJuros(boleto, juros){
    if(boleto > 0){
    return boleto*juros
    }else{
        imprimir("Por favor, informe o valor do boleto corretamente")
    }
}

imprimir(acrescimoDeJuros(boleto, juros))

avaliacoes = [1, 4, 10]

function mediaAritimetica(valores){
    let mediaArt =0
    for(i = 0; i < valores.length; i++) {
        mediaArt += valores[i]
           
    }
    return mediaArt/valores.length   
}
imprimir(mediaAritimetica(avaliacoes))


function calcLucroBruto (vendas, custos) {
    let lucroBruto1 = vendas - custos
    return lucroBruto1
}

let receitaLiquida1 = 120000.00
let custoDosProdutos1 = 96000.00 
function calcMargemBruta( vendas, custos) {
    let margemBruta1=(calcLucroBruto(vendas, custos)/ vendas)*100
    return margemBruta1
}

imprimir(calcMargemBruta(receitaLiquida1, custoDosProdutos1)+"%")