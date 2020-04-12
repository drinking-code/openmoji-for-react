const fs = require('fs'),
    path = require('path')
    readline = require('readline');

// methods
String.prototype.capitalize = function () {
    let string = this.split(' '),
        capitalised = [];

    string.forEach(word => {
        capitalised.push(word[0].toUpperCase() + word.substr(1))
    })

    string = capitalised.join('').split('-');
    capitalised = [];

    string.forEach(word => {
        capitalised.push(word[0].toUpperCase() + word.substr(1))
    })

    return capitalised.join('');
}

// cleanup /src
clearDir = function (dirPath) {
    let files;
    try {
        files = fs.readdirSync(dirPath);
    } catch (err) {
        return;
    }
    if (files.length === 0) return;
    files.forEach(file => {
        let filePath = dirPath + '/' + file;
        if (fs.statSync(filePath).isFile()) {
            fs.unlinkSync(filePath);
        } else {
            clearDir(filePath);
            fs.rmdirSync(filePath);
        }
    });
};

console.log('cleaning up src/');
const srcPath = path.join(__dirname.replace('/build', ''), '/src');
clearDir(srcPath);

// get openmoji.json
console.log('reading ./input/openmoji.json');
const index = JSON.parse(fs.readFileSync('./input/openmoji.json', {encoding: 'utf-8'}));

//make icons directory
fs.mkdir(srcPath + '/icons', (err) => {
    if (err) throw err;
});

let indexJS = '';
console.log(`writing icon scripts ${''.toString()/*0/${index.length}*/}`);
index.forEach(icon => {
    // get <HEXCODE>.svg
    let iconSvg;
    try {
        iconSvg = fs.readFileSync(`./input/color/${icon.hexcode}.svg`, {encoding: 'utf-8'})
    } catch (err) {
        return
    }
    if (!iconSvg) {
        console.error(`./input/color/${icon.hexcode}.svg does not exist`);
        return;
    }

    const iconName = icon.annotation.capitalize().replace(' ', '');

    // write <ICON-SCRIPT>.js with:
    /*
        import React
        const <ICON-NAME> = (size) => {
            if (!size) size = '1.2em';
            return (icon with size in width and height)
        }
        export default <ICON-NAME>
    */
    const iconScript = `
import React from 'react';

const ${iconName} = (size) => {
    if (!size) size = '1.2em';
    return (
        ${iconSvg.replace('<svg', '<svg width={size} height={size}')}
    );
};

export default ${iconName};
    `;
    // create icon script
    fs.writeFile(`${srcPath}/icons/${icon.hexcode}.js`, iconScript, {encoding: 'utf-8'}, (err) => {
        if (err) throw err;
    });

    // write to index 'export {default as <ICON-NAME>, default as <HEXCODE>} from <PATH/TO/ICON-SCRIPT>'
    indexJS += `export {default as ${iconName}, default as _${icon.hexcode.replace('-', '_')}} from './icons/${icon.hexcode}'\n`;
});

// write to index 'export function replaceEmojis'


fs.writeFile(`${srcPath}/index.js`, indexJS, {encoding: 'utf-8'}, (err) => {
    if (err) throw err;
});


