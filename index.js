let nomeHeroi = "Joyce";
let xpHeroi = 10001;
let nivel;

if (xpHeroi <= 1000){
    nivel = "Ferro"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "." );
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "." );
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "." );
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "." );
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "." );
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "." );
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "." );
} else {
    nivel = "Radiante"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "." );
}