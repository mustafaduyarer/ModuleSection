// ES6 code goes here
//console.log('es6 code goes here');

// import { greeting } from "./helper";

// console.log(greeting)


// import { multiply } from './helper';

// console.log(multiply(2, 5));

////////////////////////////////////////////////
// Import etmenin farkli yollari
/*
1.yol
import { greeting, multiply } from "./helper";

console.log(greeting)

console.log(multiply(6, 5));
*/

// 2.yol
// import * as helper from "./helper";

// console.log(helper.greeting)

// console.log(helper.multiply(6, 5));

/////////////////////////////////////////////////////

import navigation, {greeting, multiply} from "./navigation";

console.log(navigation());

console.log(greeting)

console.log(multiply(6, 5));