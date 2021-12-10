const fs = require('fs'),
    path = require('path')

const libPath = path.join(__dirname.replace('/build', ''), '/lib')
const iconScriptFiles = fs.readdirSync(libPath + '/icons');
console.log('(correcting DOM property)');
iconScriptFiles.forEach(file => {
    let content = fs.readFileSync(libPath + '/icons/' + file, {encoding: 'utf-8'});
    fs.writeFile(libPath + '/icons/' + file,
        content.replace(/"stroke-width"/g, 'strokeWidth')
            .replace(/"stroke-linejoin"/g, 'strokeLinejoin')
            .replace(/"stroke-linecap"/g, 'strokeLinecap')
            .replace(/"stroke-miterlimit"/g, 'strokeMiterlimit')
            .replace(/"fill-rule"/g, 'fillRule')
            .replace(/"clip-rule"/g, 'clipRule'),
        {encoding: 'utf-8'}, (err) => {
        if (err) throw err;
    });
});
