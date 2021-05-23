# Openmoji for React

unofficial; bodged by drinking-code

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

[Openmoji](https://github.com/hfg-gmuend/openmoji) is a collection of open source emojis. This repository lets you use
these emojis in a React app easily.

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

|Field|Type|Description|Default|  
|---|---|---|---|  
|`size`| CSS length (string) | size of the emojis | `1.5em` |  
|`outline`| boolean | set to `true` if you want the colourless emojis | `false` |

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

Is the string equivalent to `reactReplaceEmojis`. Use this if you just want to replace emojis within a string.

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
import {ManRaisingHand} from 'react-openmoji';

const App = () => {
    return <p>Hello World! <ManRaisingHand/></p>
};

export default App;
```

Icon names from the [Openmoji Library](https://openmoji.org/library/) are converted into PascalCase,
so `man raising hand` translates to `ManRaisingHand`.

##### Additions

`:` is replaced with `_`.

```
waving hand: light skin tone  ->  WavingHand_LightSkinTone
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
keycap: #  ->  Keycap_NumberSign
keycap: *  ->  Keycap_Asterisk
```

Everything in brackets is removed.

```
A button (blood type) -> AButton
```

If a name starts with a number, a `_` is added in front of the name.

```
1st place medal -> _1stPlaceMedal
```

> **Note:** Some names may appear more than once in the Library (i.e. some emoji variations). Those duplicates are renamed to `DuplicatedName2`, `DuplicatedName3` etc.

#### Via unicode

You can use the unicode of the emoji to import it. Unicodes are also listed in
the [Openmoji Library](https://openmoji.org/library/). All unicode names have the `U_` prefix in `react-openmoji`.

```jsx
import React from 'react';
import {U_1F64B_200D_2642_FE0F} from 'react-openmoji';

const App = () => {
    return <p>Hello World! <U_1F64B_200D_2642_FE0F/></p>
};

export default App;
```

> **Fun fact:** Importing all 3678 emojis at once is actually just as fast as the other methods because all emojis are dynamically loaded:

```jsx
import React from 'react';
import * as Emoji from 'react-openmoji';

const App = () => {
    return <p>Hello <Emoji.ManRaisingHand/> World! <Emoji._1F30D/></p>
};

export default App;
```

#### Attributes

With all manual methods you can use two attributes:

|Field|Type|Description|Default|  
|---|---|---|---|  
|`size`| CSS length (string) | size of the emojis | `1.5em` |  
|`outline`| boolean attribute | add if you want the colourless emojis | `false` |

```jsx
import React from 'react';
import {ManRaisingHand} from 'react-openmoji';

const App = () => {
    return <p>Hello World! <ManRaisingHand size={'1.2em'} outline/></p>
};

export default App;
```
