import React from 'react'
import * as Emoji from './index'
import './default-svg.css'

export default function reactReplaceEmojis(reactElement, options) {
    // shortcut -> no children means nothing to replace
    if (!reactElement.props.children) return reactElement
    let newReactElement,
        hasMultipleChildren = Array.isArray(reactElement.props.children),
        newChildren = []

    // if element has multiple children call the recursive function once for each
    if (hasMultipleChildren) {
        for (let i in reactElement.props.children) {
            if (!reactElement.props.children.hasOwnProperty(i)) continue
            const child = reactElement.props.children[Number(i)];
            newChildren[i] = _applyCorrectReplace(child, options)
        }
    } else // if element has only one child call the recursive function directly
        newChildren = _applyCorrectReplace(reactElement.props.children, options)

    newReactElement = React.cloneElement(
        reactElement,
        {},
        newChildren
    );
    return newReactElement;
}

const _applyCorrectReplace = (child, options) =>
    React.isValidElement(child)
        ? reactReplaceEmojis(child, options)
        : replaceEmojis(child, options)

export function replaceEmojis(string, options) {
    if (!string) return;
    let array = [string]
    if (!options)
        options = {}
    options = {
        size: typeof options.size === 'string' ? options.size : undefined,
        outline: typeof options.outline === 'boolean' ? options.outline : undefined
    };

    /*
    * matches all emojis       matches all attached components
    * \p{Extended_Pictographic}[\u{1f3fb}-\u{1f3ff}\u{1f9b0}-\u{1f9b3}]?                        un-matches "text style"
    * (\u200d\p{Extended_Pictographic}[\u{1f3fb}-\u{1f3ff}\u{1f9b0}-\u{1f9b3}]?)*[\u2640\u2642]?\ufe0f?(?!\ufe0e)/gu
    * matches all joined (ZWJ) emojis with all attached components               matches attached gender
    */

    const regex = /\p{Extended_Pictographic}[\u{1f3fb}-\u{1f3ff}\u{1f9b0}-\u{1f9b3}]?\ufe0f?(\u200d\p{Extended_Pictographic}[\u{1f3fb}-\u{1f3ff}\u{1f9b0}-\u{1f9b3}]?\ufe0f?)*[\u2640\u2642]?\ufe0f?(?!\ufe0e)/gu;
    let m, j = 0;

    while ((m = regex.exec(string)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // find the code for the emoji
        let emojiName = 'U', done = false
        for (let i = 0; !done; i++) {
            let subUnicode = m[0].codePointAt(i)
            // dismiss low surrogates characters (56320-57343)
            if ((subUnicode >= 56320 && subUnicode <= 57343)) continue
            if (subUnicode)
                emojiName += '_' + subUnicode.toString(16).toUpperCase()

            // check if is done: if this hexcode is longer than 4, check the next but one codepoint
            done = m[0].codePointAt(i).toString(16).length > 4
                ? !m[0].codePointAt(i + 2)
                : !m[0].codePointAt(i + 1)
        }

        let emojiSvg = Emoji[emojiName];
        options.key = j
        j++
        if (emojiSvg) {
            // gets last string ['String with {Emoji} and {Emoji} in it'] -> 'String with {Emoji} and {Emoji} in it'
            let workingString = array.pop()
            // 'String with {Emoji} and {Emoji} in it' -> ['String with ', ' and ', ' in it']
            workingString = workingString.split(m[0])
            // [] -> ['String with ']
            // ['String with ', ' and ', ' in it'] -> [' and ', ' in it']
            array.push(workingString.shift())
            // ['String with '] -> ['String with ', <Emoji>]
            array.push(React.createElement(emojiSvg, options))
            // [' and ', ' in it'] -> ' and {Emoji} in it'
            // ['String with ', <Emoji>] -> ['String with ', <Emoji>, ' and {Emoji} in it']
            array.push(workingString.join(m[0]))
        } else {
            console.warn('SVG not found: ' + emojiName);
        }
    }

    return array;
}

export * from './index';
