# Emojify

Convert emoji colon syntax (e.g: Slack style) to raw emoji.

## Installing

**Via `npm`:**

```
npm install @twuni/emojify
```

**Via `yarn`:**

```
yarn add @twuni/emojify
```

## Usage

Importing via ES6/TypeScript modules:

```
import { emojify } from '@twuni/emojify';
```

Importing via CommonJS (Node.js) modules:

```
const { emojify } = require('@twuni/emojify');
```

Then, to convert some text:

```
emojify('I love :pizza:');
// "I love 🍕"
```
