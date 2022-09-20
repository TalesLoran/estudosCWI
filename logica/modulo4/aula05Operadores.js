
//Nome é igual?

let nomeDoFulano = "Tales"
let nomeDoBeltrano = "Machado"

let mesmoNome = (nomeDoFulano == nomeDoBeltrano)

console.log("Nomes idênticos? " + mesmoNome)

//É maior de idade?
let idade = 16

let maiorDeIdade = (idade >= 18)

console.log("Maior de idade? "  + maiorDeIdade)

//Boleto atrasado? É mais 10% ;(
let valor = 100.00

let valorComJuros = valor+(valor * 0.1)

console.log("Valor atual do boleto é de R$" + valorComJuros)

//Média aritimética
let item1 = 9.5
let item2 = 6.5
let item3 = 5.5
let item4 = 8
let item5 = 9

media = (item1 + item2 + item3 + item4 + item5) / 5

console.log("Sua média é " + media + " parabéns!")

//Percentual da margem bruta

let receitaLiquida = 120000.00
let custoDosProdutos = 96000.00
let lucroBruto = receitaLiquida - custoDosProdutos
let margemBruta = (lucroBruto / receitaLiquida) * 100

console.log("Nossa margem bruta é de " + margemBruta + "%")

//Recebemos o salário, bora gasta ;)

let saldoDaConta = 1000.00
let calca = 99.90
let salario = 2500.00
let doacao = 0.10
let arcondicionado = 0.75
let pgtodivida = 2

let cc = (saldoDaConta - calca + salario - doacao) * arcondicionado / pgtodivida
console.log(cc)