timesDeFutebol = ["Grêmio", "Inter", "Corinthians", "Flamengo", "Palmeiras"]

quantidadeDeTimes = timesDeFutebol.length

console.log(quantidadeDeTimes)

for(i = 0; i < timesDeFutebol.length; i++){
    console.log(timesDeFutebol[i])
};

num = 0

do{
    console.log(timesDeFutebol[num++])
}while(num < timesDeFutebol.length);

elem = 0

while(elem < timesDeFutebol.length){
    
    console.log(timesDeFutebol[elem++])
};

notas = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]
media = 0

for(i = 0; i < notas.length; i++){
    media += notas[i]
}
console.log(media/notas.length);

meuNome = "Tales"
nomesComun = false

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]


for(i = 0; i < nomesComuns.length; i++){
    if(meuNome == nomesComuns[i]){
        nomesComun = true
        break
    }
}

if (nomesComun) {
    console.log("É, nome comum, :P")
} else {
    console.log("Diferentão, hein? XD")
}