const React = require('react')
const Emoji = require('./index');
require('./default-svg.css')

function reactReplaceEmojis(reactChild, options) {
    let newReactChild;
    if (Array.isArray(reactChild.props.children)) {
        let newChildren = [];
        for (let i in reactChild.props.children) {
            if (!reactChild.props.children.hasOwnProperty(i)) continue
            const child = reactChild.props.children[Number(i)];
            if (React.isValidElement(child)) {
                newChildren[i] = reactReplaceEmojis(child, options)
            } else {
                newChildren[i] = React.cloneElement(
                    reactChild,
                    {},
                    replaceEmojis(child, options)
                )
            }
        }
        newReactChild = React.cloneElement(
            reactChild,
            {},
            newChildren
        );
    } else {
        newReactChild = React.cloneElement(
            reactChild,
            {},
            replaceEmojis(reactChild.props.children, options)
        )
    }
    return newReactChild;
}

function replaceEmojis(string, options) {
    options = {
        size: typeof options?.size === 'string' ? options.size : undefined,
        outline: typeof options?.outline === 'boolean' ? options.outline : undefined
    }
    if (!string) return;
    const emojis = string.match(/[\p{Emoji}\u200d\ufe0f]+/gu);
    if (!emojis) return string;

    string = string.split(/([\p{Emoji}\u200d\ufe0f]+)/gu);

    // replace emojis with SVGs
    emojis.forEach((emoji, i) => {
        // get the char codes of the emojis
        let unicode = "";

        function getNextChar(pointer) {
            const subUnicode = emoji.codePointAt(pointer);
            if (!subUnicode) return;
            if (!(subUnicode >= 56320 && subUnicode <= 57343)) { // 56320-57343: Low Surrogates Character
                unicode += '-' + subUnicode.toString(16);
            }
            getNextChar(++pointer);
        }

        getNextChar(0);
        unicode = unicode.substr(1);

        const emojiName = `U_${unicode.toUpperCase().replace(/-/g, '_')}`;

        const emojiIndex = string.indexOf(emoji);
        let emojiSvg = Emoji[emojiName];

        options.key = i

        if (emojiSvg) {
            string[emojiIndex] = React.createElement(emojiSvg, options);
        } else {
            console.warn('SVG not found: ' + emojiName);
        }
    })

    // return converted react HTML
    return string;
}

reactReplaceEmojis.replaceEmojis = replaceEmojis
for (const key in Emoji) {
    if (!Emoji.hasOwnProperty(key)) continue
    reactReplaceEmojis[key] = Emoji[key]
}

module.exports = reactReplaceEmojis
