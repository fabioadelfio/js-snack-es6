// Creo un array di oggetti di squadre di calcio
const soccerTeams = [
    {
        name: `Inter`,
        points: 0,
        foulsSuffered: 0
    },
    {
        name: `Napoli`,
        points: 0,
        foulsSuffered: 0
    },
    {
        name: `Atalanta`,
        points: 0,
        foulsSuffered: 0
    },
    {
        name: `Juventus`,
        points: 0,
        foulsSuffered: 0
    },
    {
        name: `Bologna`,
        points: 0,
        foulsSuffered: 0
    },
    {
        name: `Milan`,
        points: 0,
        foulsSuffered: 0
    },
    {
        name: `Lazio`,
        points: 0,
        foulsSuffered: 0
    },
    {
        name: `Roma`,
        points: 0,
        foulsSuffered: 0
    },
    {
        name: `Fiorentina`,
        points: 0,
        foulsSuffered: 0
    },
]

// Dichiaro la funzione per generare numeri random dal minimo al massimo
generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min +1) + min);
}

// Per ogni oggetto vado a generare i rispettivi punti e falli subiti
for(const currentTeam of soccerTeams) {
    currentTeam.points = generateRandomNumber(0, 100);
    currentTeam.foulsSuffered = generateRandomNumber(10, 200);
}

// Creo un nuovo array
let clubs = [];

// Vado a modificare ogni oggetto dell'array delle squadre di calcio considerando solo i nomi e i falli subiti
// E inserisco ogni oggetto modificato nell'array appena creato
for(let currentTeam of soccerTeams) {
    currentTeam = {
        name: currentTeam.name,
        foulsSuffered: currentTeam.foulsSuffered
    };
    clubs.push(currentTeam);
}

// Stampo il primo array contenente i nomi, i punti fatti e i falli subiti
console.table(soccerTeams);

// Stampo il secondo array contenente i nomi e i falli subiti
console.table(clubs);