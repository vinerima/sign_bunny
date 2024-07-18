# sign_bunny
Render an ascii bunny holding a sign

## Installation

`npm install @vinerima/sign_bunny`

or

download `bunny.ts` and use it in your project

## Usage

```
import {buildBunny} from '@vinerima/sign_bunny';

const signText = "I'm holding a sign!";
const bunny = buildBunny(signText);

console.log(bunny);
```

Output: 

```
 _______________
|               |
| I'm holding a |
| sign!         |
|_______________|
(\__/)|| 
(•ㅅ•)|| 
/ 　 づ
```