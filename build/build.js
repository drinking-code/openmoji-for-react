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
    string = capitalised.join('').split('“'); // e.g. Japanese “here” button
    capitalised = [];

    string.forEach(word => {
        capitalised.push(word[0].toUpperCase() + word.substr(1))
    })

    return capitalised.join('');
}

String.prototype.replaceFirstNumber = function () {
    // check if sting begins with a digit
    if (!this.match(/^\d/)) return this
    return '_' + this
}

String.prototype.removeParenthesis = function () {
    return this.replace(/\([\s\S]+\)/g, '');
}

String.prototype.JSvariablise = function () {
    return this.capitalize()
        .replace(/:/g, '_') // e.g. waving hand: light skin tone
        .replace(/,/g, '') // e.g. person: light skin tone, blond hair
        .replace(/\./g, '') // e.g. Mrs. Claus
        .replace(/’/g, '') // e.g. twelve o’clock
        .replace(/!/g, '') // e.g. ON! arrow
        .replace(/#/g, 'NumberSign') // e.g. keycap: #
        .replace(/\*/g, 'Asterisk') // e.g. keycap: *
        .replaceFirstNumber() // e.g. 1st place medal
        .removeParenthesis() // e.g. A button (blood type)
        .replace(/”/g, '') // e.g. Japanese “here” button
        .replace(/&/g, ''); // e.g. flag: Bosnia & Herzegovina
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
if (fs.existsSync(srcPath)) {
    clearDir(srcPath);
} else {
    fs.mkdir(srcPath, (err) => {
        if (err) throw err;
    });
}

// get openmoji.json
console.log('reading ./input/openmoji.json');
const index = JSON.parse(fs.readFileSync(path.join(__dirname, 'input/openmoji.json'), {encoding: 'utf-8'}));

//make icons directory
fs.mkdir(srcPath + '/icons', (err) => {
    if (err) throw err;
});

let indexJS = 'return module.exports = {\n';
console.log(`writing icon scripts ${''.toString()/*0/${index.length}*/}`);
index.forEach(icon => {
    // get content of <HEXCODE>.svg
    let iconSvg;
    try {
        iconSvg = fs.readFileSync(path.join(__dirname, `input/color/${icon.hexcode}.svg`), {encoding: 'utf-8'})
    } catch (err) {
        return
    }
    if (!iconSvg) {
        console.error(`input/color/${icon.hexcode}.svg does not exist`);
        return;
    }

    let iconName = icon.annotation.JSvariablise();
    //handle duplicate (and multiples) names
    const searchName = new RegExp(`default as ${iconName},`);
    const searchNameCount = (indexJS.match(searchName) || []).length;
    if (searchNameCount > 0) iconName += (searchNameCount + 1);

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
        ${iconSvg
        .replace('<svg', '<svg width={size} height={size}')
        .replace(/x[a-z]+:[a-z]+="[^>]+"/g, '')/*rem namespace tags*/}
    );
};

export default ${iconName};
    `;
    // create icon script
    fs.writeFile(`${srcPath}/icons/${icon.hexcode}.js`, iconScript, {encoding: 'utf-8'}, (err) => {
        if (err) throw err;
    });

    // write to index 'export {default as <ICON-NAME>, default as <HEXCODE>} from <PATH/TO/ICON-SCRIPT>'
    // indexJS += `export {default as ${iconName}, default as _${icon.hexcode.replace(/-/g, '_')}} from './icons/${icon.hexcode}'\n`;
    // -> 'module.exports = {<ICON-NAME>: require(<PATH/TO/ICON-SCRIPT>).default}'
    indexJS += `${iconName}: require('./icons/${icon.hexcode}').default,\n_${icon.hexcode.replace(/-/g, '_')}: require('./icons/${icon.hexcode}').default,`;
});

indexJS = indexJS.substring(0, indexJS.length) + '}';

// write to index 'export function replaceEmojis'

console.log('write index.js');
fs.writeFile(`${srcPath}/index.js`, indexJS, {encoding: 'utf-8'}, (err) => {
    if (err) throw err;
});


