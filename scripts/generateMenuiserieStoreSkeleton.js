import fs from 'fs';

const skeleton = {
    appVersion: 'Null',
    id: undefined,
    label: undefined,
    lastTimeActive: 'Null',
};

const jsonContent = JSON.stringify(skeleton);

fs.writeFile(
    'src/menuiserie/storeSkeleton.json',
    jsonContent,
    'utf8',
    // eslint-disable-next-line consistent-return
    (err) => {
        if (err) {
            return console.log(err);
        }

        console.log('File Menuiserie was saved!');
    }
);
