import fs from 'fs';
import storesList from '../src/storesList.js';
import storesListWithLabel from '../src/storesListWithLabel.js';

const compareListLength = storesListWithLabel.length === storesList.length;

if (compareListLength) {
    console.log('The list length is the same');
    console.log('Generating list');

    const jsonList = JSON.stringify(storesList);
    const jsonListWithLabel = JSON.stringify(storesListWithLabel);

    fs.writeFile(
        '.list.json',
        jsonList,
        'utf8',
        // eslint-disable-next-line consistent-return
        (err) => {
            if (err) {
                return console.log(err);
            }

            console.log('File "list.json" was saved!');
        }
    );

    fs.writeFile(
        '.listWithLabel.json',
        jsonListWithLabel,
        'utf8',
        // eslint-disable-next-line consistent-return
        (err) => {
            if (err) {
                return console.log(err);
            }

            console.log('File "listWithLabel.json" was saved!');
        }
    );
} else {
    console.log('The list length is not the same');
}
