
//---Váriaveis----

colaboradores = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idades = [69, 66, 58, 61, 60, 64, 59, 55]
temposDeTrabalho = [31, 29, 30, 26, 25, 24, 26, 29]

//--- Funções ---

function imprimir(args) {
    console.log(args)
}

function verificarIdade(indice) {
    if (idades[indice] < 65) {
        return false
    } else {
        return true
    }
}

function verificarTempoDeServico(indice) {
    if (temposDeTrabalho[indice] < 30) {
        return false
    } else {
        return true
    }
}

function verificarTempoDeServicoComIdade(indice) {
    if (idades[indice] >= 60 && temposDeTrabalho[indice] >= 25) {
        return true
    } else {
        return false
    }
}

//----Regra do nogócio-----
function verificaCondicoes(indice) {
    if (verificarIdade(indice) || verificarTempoDeServico(indice) || verificarTempoDeServicoComIdade(indice) == true) {
        imprimir("Parabéns, já pode sair de férias eternas :)")
    } else {
        imprimir("Infelizmente para você, ainda falta um tempo :(")
    }
}



function verificarAposentadoria(nome) {
    for (indice = 0; indice < colaboradores.length; indice++) {
        if (nome == colaboradores[indice]) {
            return verificaCondicoes(indice)
        }
    }
    return imprimir('Colaborador inválido')
}



// --- execucao ----
verificarAposentadoria('Agripino')
// --- pode chamar qualquer outra função -----