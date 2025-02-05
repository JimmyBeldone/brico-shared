import fs from 'fs';
import storesListCompleted from '../src/storesListCompleted.js';

console.log('Generating list');

// const jsonList = JSON.stringify(storesList);
const jsonListCompleted = JSON.stringify(storesListCompleted);

// fs.writeFile(
//     'list.json',
//     jsonList,
//     'utf8',
//     // eslint-disable-next-line consistent-return
//     (err) => {
//         if (err) {
//             return console.log(err);
//         }

//         console.log('File "list.json" was saved!');
//     }
// );

fs.writeFile(
    'listWithLabel.json',
    jsonListCompleted,
    'utf8',
    // eslint-disable-next-line consistent-return
    (err) => {
        if (err) {
            return console.log(err);
        }

        console.log('File "listWithLabel.json" was saved!');
    }
);
