const fs = require('fs'),
    path = require('path'),
    {String, Array} = require('./transforms')

const clearDir = function (dirPath) {
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

// cleanup /src if necessary
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
const index = JSON.parse(fs.readFileSync(path.join(__dirname, OPENMOJI_DIR, 'data/openmoji.json')).toString());

// make icons directory
fs.mkdir(srcPath + '/icons', (err) => {
    if (err) throw err;
});

let indexJS = `const DI = require('react-dynamic-import')
module.exports = {\n`;
const usedNames = []

index.forEach(icon => {
    // get content of <HEXCODE>.svg
    let iconSvg, outlineSvg;
    try {
        iconSvg = fs.readFileSync(path.join(__dirname, OPENMOJI_DIR, `color/svg/${icon.hexcode}.svg`)).toString()
        outlineSvg = fs.readFileSync(path.join(__dirname, OPENMOJI_DIR, `black/svg/${icon.hexcode}.svg`)).toString()
    } catch (err) {
        return
    }

    if (!iconSvg)
        return console.error(`color/svg/${icon.hexcode}.svg does not exist`);
    if (!outlineSvg)
        return console.error(`black/svg/${icon.hexcode}.svg does not exist`);

    let iconName = icon.annotation.JSvariablise();
    // handle duplicate (and multiples) names
    if (usedNames.includes(iconName)) {
        const occurrences = usedNames.count(new RegExp(`^${iconName}\\d*$`))
        iconName = iconName + (Number(occurrences) + 1)
    }
    usedNames.push(iconName)

    // write <ICON-SCRIPT>.js
    const iconScript = `\
const React = require('react')

const ${iconName} = ({size, outline}) => {
    if (!size) size = '1.5em';
    if (!outline) {
        return (
            ${iconSvg.replace(
                '<svg id="emoji"',
        '<svg width={size} height={size} className="openmoji"'
    )
        .replace(/x[a-z]+:[a-z]+="[^>]+"/g, '')/*rem namespace tags*/
        .replace(/\n */g, '')}
        );
    } else {
        return (
            ${outlineSvg.replace(
        '<svg id="emoji"',
        '<svg width={size} height={size} className="openmoji"'
    )
        .replace(/x[a-z]+:[a-z]+="[^>]+"/g, '')/*rem namespace tags*/
        .replace(/\n +/g, '')}
        );
    }
};

module.exports = ${iconName};`;

    // create icon script file
    fs.writeFile(`${srcPath}/icons/${icon.hexcode}.js`, iconScript, (err) => {
        if (err) throw err;
    });

    // write to index 'export {default as <ICON-NAME>, default as <HEXCODE>} from <PATH/TO/ICON-SCRIPT>'
    indexJS += `${iconName}: DI({loader: () => import('./icons/${icon.hexcode}')}),\n`
    indexJS += `U_${icon.hexcode.replace(/-/g, '_')}: DI({loader: () => import('./icons/${icon.hexcode}')}),\n`
});

indexJS += '}';

// write to index 'export function replaceEmojis'
fs.writeFile(`${srcPath}/index.js`, indexJS, (err) => {
    if (err) throw err;
});

fs.copyFileSync(path.join(__dirname, 'main.js'), `${srcPath}/main.js`);
fs.copyFileSync(path.join(__dirname, 'default-svg.css'), `${srcPath}/default-svg.css`);
