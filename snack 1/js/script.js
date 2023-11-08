//Array delle bici con i loro nomi e il peso
const bici = [
    {
        name: "coppi",
        weight: 10,
    },
    {
        name: "bmx",
        weight: 20,
    },
    {
        name: "extreme",
        weight: 7,
    },
    {
        name: "minor baby",
        weight: 9,
    },
    {
        name: "mountain",
        weight: 12,
    },
];
console.log(bici);

//Richiamo della funzione
const biciMinWeight = minWeightBici();

//Stampa a schermo del risultato
const title = document.querySelector(".title");
title.innerHTML = `La bicicletta da corsa con il peso minore si chiama: ${biciMinWeight}`;

//Funzione che controlla tutti gli oggetti dell'array per verificare quello con il peso minore
function minWeightBici() {
    let i = 0;
    let minWeight = bici[0].weight;
    let nameBici = bici[0].name;
    while(i < 5)
    {
        if(bici[i].weight < minWeight)
        {
            minWeight = bici[i].weight;
            nameBici = bici[i].name;
        }
        i++;
    }
    return nameBici;
};
