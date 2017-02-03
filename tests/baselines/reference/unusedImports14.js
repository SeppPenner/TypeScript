//// [tests/cases/compiler/unusedImports14.ts] ////

//// [foo.tsx]

import React = require("react");

export const FooComponent = <div></div>

//// [index.d.ts]
export = React;
export as namespace React;

declare namespace React {
    function createClass<P, S>(spec);
}
declare global {
    namespace JSX {
    }
}




//// [foo.js]
"use strict";
var React = require("react");
exports.FooComponent = React.createElement("div", null);
exports.__esModule = true;
