const fs = require('fs'),
    path = require('path'),
    {String, Array} = require('./transforms')

console.log('build react-openmoji')

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

const OPENMOJI_DIR = '../../openmoji'

// get openmoji.json
console.log('reading openmoji.json');
const index = JSON.parse(fs.readFileSync(path.join(__dirname, OPENMOJI_DIR, 'data/openmoji.json'), {encoding: 'utf-8'}));

//make icons directory
fs.mkdir(srcPath + '/icons', (err) => {
    if (err) throw err;
});

let indexJS = '';
const usedNames = []
console.log(`writing icon scripts`);
index.forEach(icon => {
    // get content of <HEXCODE>.svg
    let iconSvg, outlineSvg;
    try {
        iconSvg = fs.readFileSync(path.join(__dirname, OPENMOJI_DIR, `color/svg/${icon.hexcode}.svg`), {encoding: 'utf-8'})
        outlineSvg = fs.readFileSync(path.join(__dirname, OPENMOJI_DIR, `black/svg/${icon.hexcode}.svg`), {encoding: 'utf-8'})
    } catch (err) {
        return
    }
    if (!iconSvg) {
        console.error(`color/svg/${icon.hexcode}.svg does not exist`);
        return;
    }
    if (!outlineSvg) {
        console.error(`black/svg/${icon.hexcode}.svg does not exist`);
        return;
    }

    let iconName = icon.annotation.JSvariablise();
    // handle duplicate (and multiples) names
    if (usedNames.includes(iconName)) {
        const occurrences = usedNames.count(new RegExp(`^${iconName}\\d*$`))
        iconName = iconName + (Number(occurrences) + 1)
    }
    usedNames.push(iconName)

    // write <ICON-SCRIPT>.js with:
    /*
        import React
        const <ICON-NAME> = (size) => {
            if (!size) size = '1.7em';
            return (icon with size in width and height)
        }
        export default <ICON-NAME>
    */
    const iconScript = `
import React from 'react';

const ${iconName} = ({size, outline}) => {
    if (!size) size = '1.7em';
    if (!outline) {
        return (
            ${iconSvg
        .replace('<svg', '<svg width={size} height={size}')
        .replace(/x[a-z]+:[a-z]+="[^>]+"/g, '')/*rem namespace tags*/}
        );
    } else {
        return (
            ${outlineSvg
        .replace('<svg', '<svg width={size} height={size}')
        .replace(/x[a-z]+:[a-z]+="[^>]+"/g, '')/*rem namespace tags*/}
        );
    }
};

export default ${iconName};
    `;
    // create icon script file
    fs.writeFile(`${srcPath}/icons/${icon.hexcode}.js`, iconScript, {encoding: 'utf-8'}, (err) => {
        if (err) throw err;
    });

    // console.log(iconName, icon.annotation, icon.hexcode)

    // write to index 'export {default as <ICON-NAME>, default as <HEXCODE>} from <PATH/TO/ICON-SCRIPT>'
    indexJS += `export {default as ${iconName}, default as _${icon.hexcode.replace(/-/g, '_')}} from './icons/${icon.hexcode}'\n`;
    // -> 'module.exports = {<ICON-NAME>: require(<PATH/TO/ICON-SCRIPT>).default}'
});

// write to index 'export function replaceEmojis'

console.log('write index.js');
fs.writeFile(`${srcPath}/index.js`, indexJS, {encoding: 'utf-8'}, (err) => {
    if (err) throw err;
});

console.log('copy main.js');
fs.copyFileSync(path.join(__dirname, 'main.js'), `${srcPath}/main.js`);

console.log('transpiling icon scripts...');
