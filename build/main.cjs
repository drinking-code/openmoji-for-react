import * as Emoji from './index.cjs';
import React from 'react';

export default function reactReplaceEmojis(reactChild, options) {
    // console.log(reactChild);
    let newReactChild;
    if (Array.isArray(reactChild.props.children)) {
        let newChildren = [];
        for (let i in reactChild.props.children) {
            // console.log(reactChild.props.children)
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

export function replaceEmojis(string, options) {
    if (!string) return;
    const emojis = string.match(/[\p{Emoji}\u200d\ufe0f]+/gu);
    if (!emojis) return string;

    string = string.split(/([\p{Emoji}\u200d\ufe0f]+)/gu);

    // replace emojis with SVGs
    emojis.forEach(emoji => {
        // get the char codes of the emojis
        let unicode = "";

        function getNextChar(pointer) {
            const subUnicode = emoji.codePointAt(pointer);
            // console.log(emoji, pointer, subUnicode);
            if (!subUnicode) return;
            if (!(subUnicode >= 56320 && subUnicode <= 57343)) { // 56320-57343: Low Surrogates Character
                // console.log(subUnicode, subUnicode.toString(16));
                unicode += '-' + subUnicode.toString(16);
                // getNextChar(++pointer);
            }
            getNextChar(++pointer);
        }

        getNextChar(0);
        unicode = unicode.substr(1);
        // console.log(unicode.toUpperCase());

        const emojiName = `_${unicode.toUpperCase().replace(/-/g, '_')}`;

        const emojiIndex = string.indexOf(emoji);
        let emojiSvg = Emoji[emojiName];

        if (!options) options = {}

        if (emojiSvg) {
            string[emojiIndex] = React.createElement(emojiSvg, options);
        } else {
            console.warn('SVG not found: ' + emojiName);
        }
    })

    // return converted react HTML
    return string;
}

export * from './index.cjs';
