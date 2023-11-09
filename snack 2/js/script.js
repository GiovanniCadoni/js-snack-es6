//Chiediamo i nomi di tutte le squadre
let nameSquad1 = prompt("Inserisci il nome della squadra 1");
let nameSquad2 = prompt("Inserisci il nome della squadra 2");
let nameSquad3 = prompt("Inserisci il nome della squadra 3");
let nameSquad4 = prompt("Inserisci il nome della squadra 4");
let nameSquad5 = prompt("Inserisci il nome della squadra 5");

//Creiamo il nostro array
const squadre = [
    {
        name: nameSquad1,
        points: 0,
        fouls: 0,
    },
    {
        name: nameSquad2,
        points: 0,
        fouls: 0,
    },
    {
        name: nameSquad3,
        points: 0,
        fouls: 0,
    },
    {
        name: nameSquad4,
        points: 0,
        fouls: 0,
    },
    {
        name: nameSquad5,
        points: 0,
        fouls: 0,
    },
];
console.log(squadre);

//Inseriamo per ogni oggetto i numeri di punti e i falli fatti
squadre.forEach((squadra) => {
    squadra.points = rdnNumber();
    squadra.fouls = rdnNumber();
});
console.log(squadre);

//Creiamo un nuovo array con gli stessi oggetti dell'array di partenza e inseriamo solo il nome e i falli fatti
const newSquad = squadre.map((squadre) => {
    const {name, fouls} = squadre;
    console.log(name, fouls);
    return {
        name,
        fouls,
    };
})
console.log(newSquad);

//Funzione che restituisce un numero random
function rdnNumber() {
    let randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
};