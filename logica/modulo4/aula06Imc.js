//Imc, vamos cuidar da saúde!
let peso = 51

let altura = 1.76

let imc = peso / (altura**2)

let classificacao = ""
let grau = 0

if(imc < 18.50){
   classificacao = "Magreza"
}
else if(imc <= 24.99 ){
    classificacao = "Normal"
}
else if (imc <= 29.99){
    classificacao = "Sobrepeso."
    grau = 1
     
}
else if (imc <= 39.99){
    classificacao = "Obesidade."
    grau = 2
    
}
else {
    classificacao = "Obesidade grave."
    grau = 3
    
}
console.log("Seu IMC é " + imc + " " + classificacao)
if (grau > 0 ){
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
    if(grau > 2 ){
        console.log("É importante procurar um médico para avaliar a sua saúde.")
    }
}