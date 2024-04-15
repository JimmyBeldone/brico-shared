import fs from 'fs';

import eletroportatifDefaultTypes from '../src/electroportatif/index.js';

const jsonContent = JSON.stringify(eletroportatifDefaultTypes);

fs.writeFile(
    'src/electroportatif/storeSkeleton.json',
    jsonContent,
    'utf8',
    // eslint-disable-next-line consistent-return
    (err) => {
        if (err) {
            return console.log(err);
        }

        console.log('File Electroportatif was saved!');
    }
);
