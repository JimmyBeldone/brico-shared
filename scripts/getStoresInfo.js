import storesListCompleted from '../src/storesListCompleted.js';

/*
Fonction qui renvoit le nombre de dépot, le nombre de dépot pour chaque bassin
ainsi qu'un log sous forme de tableau ou chaque colonne sera un bassin,
avec en titre de colonne le nom du bassin, et chaque ligne sera un label de dépot

format de la liste des dépots:
{
    id: 1111,
    label: 'TEST',
    legacy: 1111,
    easier: 9999,
    region: 'test',
    bassin: 'Discounter',
}
*/

const getStoresInfo = () => {
    const basinMap = {};

    storesListCompleted.forEach((store) => {
        if (!basinMap[store.bassin]) {
            basinMap[store.bassin] = [];
        }
        basinMap[store.bassin].push(store.label);
    });

    const totalDepots = storesListCompleted.length;
    const depotsPerBasin = Object.keys(basinMap).reduce((acc, basin) => {
        acc[basin] = basinMap[basin].length;
        return acc;
    }, {});

    console.log('Total Depots:', totalDepots);
    console.log('Depots per Basin:', depotsPerBasin);

    // Format the table for better readability
    Object.entries(basinMap).forEach(([basin, labels]) => {
        console.log(`\n${basin}:`);
        labels.forEach((label, index) => {
            process.stdout.write(
                `${label}${(index + 1) % 5 === 0 ? '\n' : '\t'}`
            );
        });
        console.log('\n');
    });

    return {
        totalDepots,
        depotsPerBasin,
        basinMap,
    };
};

console.log(getStoresInfo());
