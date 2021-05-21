String.prototype.capitalize = function () {
    let string = this.split(' '),
        capitalised = [];

    try {
        string.forEach(word => {
            if (!word) return
            capitalised.push(word[0].toUpperCase() + word.substr(1))
        })
    } catch (e) {
        console.log(string)
        string.forEach(word => console.log(word))
        throw new Error(e);
    }

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
    // check if string begins with a digit
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

Array.prototype.count = function (regex) {
    let count = 0
    this.forEach(el => {
        if (!(el.match(regex) || []).length > 0) return
        count++
        console.log(el.match(regex))
    })
    return count
}

module.exports = {String, Array}
