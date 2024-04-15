import fs from 'fs';

import formatKitchenElementsDBSkeleton from '../src/cuisine/kitchenElements.js';
import formatButtonsDBSkeleton from '../src/cuisine/buttons.js';
import formatKitchenColorsDBSkeleton from '../src/cuisine/kitchenColors.js';
import formatLinksDBSkeleton from '../src/cuisine/appLinks.js';
import formatKitchensDBSkeleton from '../src/cuisine/kitchens.js';

const formatStoreDBSKeleton = () => {
    return {
        appLinks: formatLinksDBSkeleton(),
        appVersion: 'Null',
        buttons: formatButtonsDBSkeleton(),
        id: undefined,
        kitchenColors: formatKitchenColorsDBSkeleton(),
        kitchenElements: formatKitchenElementsDBSkeleton(),
        kitchens: formatKitchensDBSkeleton(),
        label: undefined,
        lastTimeActive: 'Null',
    };
};

const jsonContent = JSON.stringify(formatStoreDBSKeleton());

fs.writeFile(
    'src/cuisine/storeSkeleton.json',
    jsonContent,
    'utf8',
    // eslint-disable-next-line consistent-return
    (err) => {
        if (err) {
            return console.log(err);
        }

        console.log('The file was saved!');
    }
);
