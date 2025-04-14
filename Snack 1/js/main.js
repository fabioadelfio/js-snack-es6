const racingBikes = [
    {
        name: `Rose X-Lite 04`,
        weight: 7.3
    },
    {
        name: `Cube Litening Air`,
        weight: 7.1
    },
    {
        name: `Shockblaze S7 Race`,
        weight: 9.5
    },
    {
        name: `Wilier Triestina Verticale SLR`,
        weight: 6.5
    },
    {
        name: `Pinarello Dogma F`,
        weight: 6.9
    },
    {
        name: `Cervélo R5`,
        weight: 6.8
    },
    {
        name: `Colnago V4Rs`,
        weight: 7.0
    },
];

let lighterBike = racingBikes[0];

for (const currentBike of racingBikes) {
    if(currentBike.weight < lighterBike.weight) {
        lighterBike = currentBike;
    }
}

console.log(`La bici da corsa più leggera è la ` + lighterBike.name + ` con il peso di ` + lighterBike.weight + ` kg`);