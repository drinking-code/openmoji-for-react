# Openmoji for React
unofficial; bodged by drinking-code  
**do not use in production**
#### What is Openmoji for React?
Openmoji is a collection of open source emojis. This repository lets you use these emojis in a reactjs-app easily.
#### Built from (coloured) Openmoji  `v12.2.0`

## Installation
```
npm i react-openmoji
```

## Usage
### Automatically
For easy and dynamic use you can replace emojis completely automatically:
```javascript
import React from 'react';
import reactReplaceEmojis from 'react-openmoji';

const App = () => {
    return reactReplaceEmojis(<p>Hello 🙋‍♂️ World! 🌍</p>)
};

export default App;
```

### Manually
#### Via icon name
```javascript
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
```javascript
import React from 'react';
import {_1F64B_200D_2642_FE0F} from 'react-openmoji';

const App = () => {
  return <p>Hello World! <_1F64B_200D_2642_FE0F/></p>
};

export default App;
```

You can also include all 3458 emojis:
```javascript
import React from 'react';
import * as Emoji from 'react-openmoji';

const App = () => {
  return <p>Hello <Emoji.ManRaisingHand/> World! <Emoji._1F30D/></p>
};

export default App;
```
