//// [tests/cases/compiler/typeReferenceDirectives8.ts] ////

//// [index.d.ts]


interface Lib { x }

//// [mod1.ts]

export function foo(): Lib { return {x: 1} }

//// [mod2.ts]

import {foo} from "./mod1";
export const bar = foo();

//// [mod1.js]
"use strict";
function foo() { return { x: 1 }; }
exports.foo = foo;
exports.__esModule = true;
//// [mod2.js]
"use strict";
var mod1_1 = require("./mod1");
exports.bar = mod1_1.foo();
exports.__esModule = true;


//// [mod1.d.ts]
/// <reference types="lib" />
export declare function foo(): Lib;
//// [mod2.d.ts]
/// <reference types="lib" />
export declare const bar: Lib;
