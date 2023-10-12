let nome = "Pirocud"
let exp = 5000

if (exp < 1000) {
    exp = "Ferro"
} else if (exp < 2001) {
    exp = "Bronze"
} else if (exp < 5001) {
    exp = "Prata"
} else if (exp < 7000) {
    exp = "Platina"
} else if (exp < 9000){
    exp = "Ascendente"
} else if (exp < 10000) {
    exp = "Imortal"
} else if (exp >= 10001) {
    exp = "Radiante"
} else {
    exp = "Inexistente"
}
console.log ("O heroi de nome " + nome + " está no elo " + exp)

