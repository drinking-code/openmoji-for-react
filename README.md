# Openmoji for React
unofficial; bodged by drinking-code  
not optimized for production use  

1. [What is Openmoji for React?](#what-is-openmoji-for-react)
2. [Installation](#installation)
3. [Usage](#usage)
    1. [Automatically](#automatically)
        1. [`reactReplaceEmojis(jsx[, options])`](#reactreplaceemojisjsx-options)
        2. [`replaceEmojis(string[, options])`](#replaceemojisstring-options)
    2. [Manually](#manually)
        1. [Via icon name](#via-icon-name)
        2. [Via unicode](#via-unicode)
        3. [Attributes](#attributes)

#### What is Openmoji for React?
[Openmoji](https://github.com/hfg-gmuend/openmoji) is a collection of open source emojis. This repository lets you use these emojis in a React app easily.

> Please comply with the [Openmoji Attribution Requirements](https://github.com/hfg-gmuend/openmoji#attribution-requirements)

## Installation
```shell script
npm i react-openmoji
```

## Usage
### Automatically
#### `reactReplaceEmojis(jsx[, options])`
For easy and dynamic use you can replace emojis completely automatically:
```jsx
import React from 'react';
import reactReplaceEmojis from 'react-openmoji';

const App = () => {
    return reactReplaceEmojis(<p>Hello 🙋‍♂️ World! 🌍</p>)
};

export default App;
```

You can also set options:  
`size` — size of the emojis; default `1.7em`  
`outline` — set to `true` if you want the colourless emojis; default `false`

```jsx
import React from 'react';
import reactReplaceEmojis from 'react-openmoji';

const App = () => {
    return reactReplaceEmojis(
        <p>Hello 🙋‍♂️ World! 🌍</p>,
        {size: '1.2em', outline: true}
    )
};

export default App;
```

#### `replaceEmojis(string[, options])`
Is the sting equivalent to `reactReplaceEmojis`. Use this if you only want to replace emojis within a string.
```jsx
import React from 'react';
import {replaceEmojis} from 'react-openmoji';

const App = () => {
    return <p>{replaceEmojis('Hello 🙋‍♂️ World! 🌍')}</p>
};

export default App;
```

### Manually
#### Via icon name
```jsx
import React from 'react';
import { ManRaisingHand } from 'react-openmoji';

const App = () => {
  return <p>Hello World! <ManRaisingHand/></p>
};

export default App;
```
Icon names from the [Openmoji Library](https://openmoji.org/library/) are converted into camelCase, so `man raising hand` translates to `ManRaisingHand`.
##### Additions
`:` are replaced with `_`.
```
waving hand: light skin tone -> WavingHand_LightSkinTone
```
`,`, `.`, `’`, `!`, `”`, and `&` are removed.
```
person: light skin tone, blond hair -> Person_LightSkinToneBlondHair
Mrs. Claus                          -> MrsClaus
twelve o’clock                      -> TwelveOclock
ON! arrow                           -> ONArrow
Japanese “here” button              -> JapaneseHereButton
flag: Bosnia & Herzegovina          -> Flag_BosniaHerzegovina
```
`#` is replaced with `NumberSign`, `*` is replaced with `Asterisk`.
```
keycap: # -> Keycap_NumberSign
keycap: * -> Keycap_Asterisk
```
Everything in brackets is removed.
```
A button (blood type) -> AButton
```
If a name starts with a number, a `_` is added in front of the name.
```
1st place medal -> _1stPlaceMedal
```

#### Via unicode
You can use the unicode of the emoji to import it. Unicodes are listed also in the [Openmoji Library](https://openmoji.org/library/).
```jsx
import React from 'react';
import {_1F64B_200D_2642_FE0F} from 'react-openmoji';

const App = () => {
  return <p>Hello World! <_1F64B_200D_2642_FE0F/></p>
};

export default App;
```

You can also include all 3458 emojis:
```jsx
import React from 'react';
import * as Emoji from 'react-openmoji';

const App = () => {
  return <p>Hello <Emoji.ManRaisingHand/> World! <Emoji._1F30D/></p>
};

export default App;
```

#### Attributes
In all manual cases you can use two attributes:  
`size` — sets the size of the emojis; default `1.7em`  
`outline` — add if you want the colourless emojis

```jsx
import React from 'react';
import { ManRaisingHand } from 'react-openmoji';

const App = () => {
  return <p>Hello World! <ManRaisingHand size={'1.2em'} outline/></p>
};

export default App;
```
