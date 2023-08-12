/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* @font-face {
    font-family: 'MyFont';
    src: url('./my-font.woff2') format('woff2'),
        url('./my-font.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

.hello {
    color: red;
    font-family: 'MyFont';
    background: url('./icon.png');
} */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
* {
    /*border: 1px solid red;*/
    box-sizing: border-box;
}

body {
    display: flex;
    flex-direction: column;
}
header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5.5rem;
}

#main-display {
    display: flex;
    justify-content: center;
}
.displays {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40rem;
    width: 40rem;
}
.placement-display {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40rem;
    width: 40rem;
}
.placement {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0 3rem 0;
    border: solid 0.15rem black;
    height: 15rem;
    width: 15rem;
}
.placement-img {
    width: 3rem;
}
.placement-img.horizontal {
    transform: rotate(90deg);
}
.rotate-button {
    position: absolute;
    top: 12rem; left: 0rem;
}
.next-box {
    height: 3.5rem;
    width: 15rem;
}
.next-ships {
    display: flex;
    flex-direction: column;
}

.gameboard {
    display: flex;
    flex-direction: column;
    border: solid 0.1rem black;
}
.row {
    display: flex;
    flex: 1;
}

.cell {
    position: relative;
    height: 3.5rem;
    width: 3.5rem;
    overflow: visible;
    border: solid 0.1rem black;
}

.ship {
    position: absolute;
    z-index: -1;
    width: 100%;
}
.patrol.horizontal {
    transform: rotate(90deg) translate(-1.7rem, -1.7rem);
}
.submarine.horizontal,
.destroyer.horizontal {
    transform: rotate(90deg) translate(-3.4rem, -3.4rem);
}
.battleship.horizontal {
    transform: rotate(90deg) translate(-5.1rem, -5.1rem);
}
.carrier.horizontal {
    transform: rotate(90deg) translate(-6.75rem, -6.75rem);
}
.marker-box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.marker {
    position: relative;
    width: 80%;
    height: auto;
}
.reset-button,
.start-button {
    height: 5rem;
    font-size: 3rem;
    margin: 1rem 2rem;
}
.start-button {
    background-color: rgb(127, 255, 165);
}
.reset-button {
    background-color: rgb(255, 165, 165);
}

.overlay {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
}

.message {
    font-size: 5.5rem;
}
.winner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 15rem;
    width: 40rem;
    background-color: white;
}

.hidden {
    visibility: hidden;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;GAYG;AACH;;;CAGC;AACD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;AACA,gDAAgD;AAChD;;;;;;;;;;;IAWI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,YAAY;AAChB;AACA;;;;IAII,WAAW;IACX,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;AACA;IACI,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,2BAA2B;IAC3B,aAAa;IACb,YAAY;AAChB;AACA;IACI,WAAW;AACf;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,kBAAkB;IAClB,UAAU,EAAE,UAAU;AAC1B;AACA;IACI,cAAc;IACd,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,0BAA0B;AAC9B;AACA;IACI,aAAa;IACb,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;AACf;AACA;IACI,oDAAoD;AACxD;AACA;;IAEI,oDAAoD;AACxD;AACA;IACI,oDAAoD;AACxD;AACA;IACI,sDAAsD;AAC1D;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;AAChB;AACA;;IAEI,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["/* @font-face {\n    font-family: 'MyFont';\n    src: url('./my-font.woff2') format('woff2'),\n        url('./my-font.woff') format('woff');\n    font-weight: 600;\n    font-style: normal;\n}\n\n.hello {\n    color: red;\n    font-family: 'MyFont';\n    background: url('./icon.png');\n} */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: \"\";\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n* {\n    /*border: 1px solid red;*/\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 5.5rem;\n}\n\n#main-display {\n    display: flex;\n    justify-content: center;\n}\n.displays {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 40rem;\n    width: 40rem;\n}\n.placement-display {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 40rem;\n    width: 40rem;\n}\n.placement {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 3rem 0 3rem 0;\n    border: solid 0.15rem black;\n    height: 15rem;\n    width: 15rem;\n}\n.placement-img {\n    width: 3rem;\n}\n.placement-img.horizontal {\n    transform: rotate(90deg);\n}\n.rotate-button {\n    position: absolute;\n    top: 12rem; left: 0rem;\n}\n.next-box {\n    height: 3.5rem;\n    width: 15rem;\n}\n.next-ships {\n    display: flex;\n    flex-direction: column;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    border: solid 0.1rem black;\n}\n.row {\n    display: flex;\n    flex: 1;\n}\n\n.cell {\n    position: relative;\n    height: 3.5rem;\n    width: 3.5rem;\n    overflow: visible;\n    border: solid 0.1rem black;\n}\n\n.ship {\n    position: absolute;\n    z-index: -1;\n    width: 100%;\n}\n.patrol.horizontal {\n    transform: rotate(90deg) translate(-1.7rem, -1.7rem);\n}\n.submarine.horizontal,\n.destroyer.horizontal {\n    transform: rotate(90deg) translate(-3.4rem, -3.4rem);\n}\n.battleship.horizontal {\n    transform: rotate(90deg) translate(-5.1rem, -5.1rem);\n}\n.carrier.horizontal {\n    transform: rotate(90deg) translate(-6.75rem, -6.75rem);\n}\n.marker-box {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n}\n.marker {\n    position: relative;\n    width: 80%;\n    height: auto;\n}\n.reset-button,\n.start-button {\n    height: 5rem;\n    font-size: 3rem;\n    margin: 1rem 2rem;\n}\n.start-button {\n    background-color: rgb(127, 255, 165);\n}\n.reset-button {\n    background-color: rgb(255, 165, 165);\n}\n\n.overlay {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    height: 100vh;\n    width: 100vw;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\n.message {\n    font-size: 5.5rem;\n}\n.winner {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 15rem;\n    width: 40rem;\n    background-color: white;\n}\n\n.hidden {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _shipCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipCreator */ "./src/shipCreator.js");


class Board {
    constructor() {
        this.board = {};
        this.ships = {};
    }

    placeShip(ship, coordinate) {
        const tmp = this.ships[`${ship}`];
        const parsedCoord = JSON.parse(coordinate);
        let row = parsedCoord[0];
        let col = parsedCoord[1];
        const placement = [];
        for (let i = 0; i < tmp.length; i++) {
            const cell = this.board[`[${row},${col}]`];
            if (cell === null) {
                placement.push(`[${row},${col}]`);
            } else {
                return false;
            }

            if (tmp.vertical) {
                col -= 1;
            } else {
                row += 1;
            }
        }

        placement.forEach((location) => {
            this.board[`${location}`] = tmp.name;
        });
        return true;
    }

    receiveAttack(coordinate) {
        // If the spot hasn't been attacked yet, it can fire
        const aim = this.board[`${coordinate}`];
        if (aim !== "hit" && aim !== "miss") {
            if (aim === null) {
                this.board[`${coordinate}`] = "miss";
            } else {
                // Assume its a ship
                this.ships[`${aim}`].isHit();
                this.board[`${coordinate}`] = "hit";
            }
        }
    }

    hasLost() {
        if (!this.ships.carrier.sink) return false;
        if (!this.ships.battleship.sink) return false;
        if (!this.ships.submarine.sink) return false;
        if (!this.ships.destroyer.sink) return false;
        if (!this.ships.patrol.sink) return false;
        return true;
    }

    init() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                this.board[`[${i},${j}]`] = null;
            }
        }

        this.ships.carrier = new _shipCreator__WEBPACK_IMPORTED_MODULE_0__["default"]("carrier");
        this.ships.carrier.init();
        this.ships.battleship = new _shipCreator__WEBPACK_IMPORTED_MODULE_0__["default"]("battleship");
        this.ships.battleship.init();
        this.ships.submarine = new _shipCreator__WEBPACK_IMPORTED_MODULE_0__["default"]("submarine");
        this.ships.submarine.init();
        this.ships.destroyer = new _shipCreator__WEBPACK_IMPORTED_MODULE_0__["default"]("destroyer");
        this.ships.destroyer.init();
        this.ships.patrol = new _shipCreator__WEBPACK_IMPORTED_MODULE_0__["default"]("patrol");
        this.ships.patrol.init();
    }
}


/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


class Game {
    constructor() {
        this.player = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.enemy = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.turn = 0;
    }

    checkWin(player) {
        let win = true;
        if (player === "player") {
            // Check player win
            Object.keys(this.enemy.ships).forEach((ship) => {
                if (!this.enemy.ships[`${ship}`].sink) win = false;
            });
        } else {
            // Check bot win
            Object.keys(this.player.ships).forEach((ship) => {
                if (!this.player.ships[`${ship}`].sink) win = false;
            });
        }
        return win;
    }

    botMove(difficulty) {
        let row;
        let col;
        if (difficulty === "easy") {
            row = parseInt(Math.random() * 10, 10);
            col = parseInt(Math.random() * 10, 10);

            // Check if the bot already attacked the spot
            while (
                this.player.board[`[${col},${row}]`] === "hit" ||
                this.player.board[`[${col},${row}]`] === "miss"
            ) {
                row = parseInt(Math.random() * 10, 10);
                col = parseInt(Math.random() * 10, 10);
                // console.log(this.player.board[`[${col},${row}]`]);
            }
        }
        this.player.receiveAttack(`[${col},${row}]`);
        return [col, row];
    }

    placement() {
        Object.keys(this.enemy.ships).forEach((ship) => {
            let row = parseInt(Math.random() * 10, 10);
            let col = parseInt(Math.random() * 10, 10);
            const coinFlip = Math.random() < 0.5;
            this.enemy.ships[`${ship}`].vertical = coinFlip;
            let placement = this.enemy.placeShip(ship, `[${col},${row}]`);

            while (!placement) {
                // console.log(ship, row, col);
                row = parseInt(Math.random() * 10, 10);
                col = parseInt(Math.random() * 10, 10);
                placement = this.enemy.placeShip(ship, `[${col},${row}]`);
            }
        });
    }

    init() {
        this.player.init();
        this.enemy.init();
        this.placement();
        // console.log(this.player);
        // console.log(this.enemy);
    }
}


/***/ }),

/***/ "./src/renderBoard.js":
/*!****************************!*\
  !*** ./src/renderBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderUI)
/* harmony export */ });
/* harmony import */ var _assets_patrol_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/patrol.png */ "./src/assets/patrol.png");
/* harmony import */ var _assets_submarine_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/submarine.png */ "./src/assets/submarine.png");
/* harmony import */ var _assets_destroyer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/destroyer.png */ "./src/assets/destroyer.png");
/* harmony import */ var _assets_battleship_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/battleship.png */ "./src/assets/battleship.png");
/* harmony import */ var _assets_carrier_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/carrier.png */ "./src/assets/carrier.png");
/* harmony import */ var _assets_hit_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/hit.png */ "./src/assets/hit.png");
/* harmony import */ var _assets_miss_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/miss.png */ "./src/assets/miss.png");
/* harmony import */ var _assets_rotate_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/rotate.png */ "./src/assets/rotate.png");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");











// import Icon from './icon.png';

// // // Add the image to our existing div.
// // const myIcon = new Image();
// // myIcon.src = Icon;

// // element.appendChild(myIcon)

let game = new _gameloop__WEBPACK_IMPORTED_MODULE_8__["default"]();
game.init();
let shipsToPlace = [_assets_carrier_png__WEBPACK_IMPORTED_MODULE_4__, _assets_battleship_png__WEBPACK_IMPORTED_MODULE_3__, _assets_destroyer_png__WEBPACK_IMPORTED_MODULE_2__, _assets_submarine_png__WEBPACK_IMPORTED_MODULE_1__, _assets_patrol_png__WEBPACK_IMPORTED_MODULE_0__];
let shipsToPlaceString = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrol'];
let shipsPlaced = 0;
const horizontal = true;

const display1 = document.querySelector(".display1");
const display2 = document.querySelector(".display2");

function clearDisplay() {
    display1.textContent = '';
    display2.textContent = '';
}

function renderMarker(cell, playerBoard, coordinates) {
    const location = playerBoard[`${coordinates}`];
    const myIcon = new Image();
    const markerBox = document.createElement("div");
    // console.log(location);

    if (location === "hit" || location === "miss") {
        myIcon.classList.add("marker");
        markerBox.classList.add("marker-box");
        if (location === "miss") {
            myIcon.src = _assets_miss_png__WEBPACK_IMPORTED_MODULE_6__;
        } else {
            myIcon.src = _assets_hit_png__WEBPACK_IMPORTED_MODULE_5__;
        }
        cell.appendChild(markerBox);
        markerBox.appendChild(myIcon);
    }
}

function win(winner) {
    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('hidden');
    
    const box = document.createElement('div');
    box.classList.add('winner');
    overlay.appendChild(box);

    const message = document.createElement('div');
    message.classList.add('message');
    if (winner === 'player') message.textContent = 'YOU WIN!!!';
    else message.textContent = 'BOT WINS :(';
    box.appendChild(message);

    const resetButton = document.createElement('button');
    resetButton.textContent = 'RESET';
    resetButton.classList.add('reset-button');
    box.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        reset();
        overlay.classList.add('hidden');
        overlay.textContent = '';
    });
}

function botAttack() {
    const coordinates = game.botMove("easy");
    const playerCell = document.querySelector(
        `.gameboard [data-row="${coordinates[1]}"][data-col="${coordinates[0]}"]`,
    );
    renderMarker(
        playerCell,
        game.player.board,
        `[${coordinates[0]},${coordinates[1]}]`,
    );
    if (game.checkWin("bot")) win('bot');
}

function renderShips(playerBoard, display) {
    const screen = display === 1 ? "display1" : "display2";
    const seen = {};
    // Check board for ships top to bottom left to right
    for (let row = 9; row >= 0; row--) {
        for (let col = 0; col < 10; col++) {
            const ship = playerBoard.board[`[${col},${row}]`];
            if (
                (ship === "patrol" ||
                    ship === "destroyer" ||
                    ship === "submarine" ||
                    ship === "battleship" ||
                    ship === "carrier") &&
                !seen[`${ship}`]
            ) {
                seen[`${ship}`] = true;
                const myIcon = new Image();
                const cell = document.querySelector(
                    `.${screen} .gameboard [data-row="${row}"][data-col="${col}"]`,
                );
                if (playerBoard.ships[`${ship}`].vertical === false)
                    myIcon.classList.add("horizontal");
                if (ship === "patrol") {
                    myIcon.src = _assets_patrol_png__WEBPACK_IMPORTED_MODULE_0__;
                    myIcon.classList.add("patrol");
                } else if (ship === "destroyer") {
                    myIcon.src = _assets_destroyer_png__WEBPACK_IMPORTED_MODULE_2__;
                    myIcon.classList.add("destroyer");
                } else if (ship === "submarine") {
                    myIcon.src = _assets_submarine_png__WEBPACK_IMPORTED_MODULE_1__;
                    myIcon.classList.add("submarine");
                } else if (ship === "battleship") {
                    myIcon.src = _assets_battleship_png__WEBPACK_IMPORTED_MODULE_3__;
                    myIcon.classList.add("battleship");
                } else {
                    myIcon.src = _assets_carrier_png__WEBPACK_IMPORTED_MODULE_4__;
                    myIcon.classList.add("carrier");
                }
                myIcon.classList.add("ship");
                cell.appendChild(myIcon);
                // console.log(ship, col, row);
            }
        }
    }
}

function attackCellListeners(cell) {
    cell.addEventListener("click", () => {
        const row = cell.getAttribute("data-row");
        const col = cell.getAttribute("data-col");
        const location = `[${col},${row}]`;
        if (
            game.enemy.board[`${location}`] !== "hit" &&
            game.enemy.board[`${location}`] !== "miss"
        ) {
            // Player attacks
            game.enemy.receiveAttack(`${location}`);
            renderMarker(cell, game.enemy.board, `${location}`);
            if (game.checkWin("player")) win('player');

            // Bot attacks after you
            botAttack();
        }
    });
}

function createRotateButton(parent) {
    const rotateButton = document.createElement('div');
    rotateButton.classList.add('rotate-button');

    const myIcon = new Image();
    myIcon.src = _assets_rotate_png__WEBPACK_IMPORTED_MODULE_7__;

    parent.appendChild(rotateButton);
    rotateButton.appendChild(myIcon);

    rotateButton.addEventListener('click', () => {
        const img = document.querySelector('.placement>.placement-img');
        if (game.player.ships[`${shipsToPlaceString[shipsPlaced]}`].vertical === false) {
            // Horizontal => vertical
            img.classList.remove('horizontal');
            game.player.ships[`${shipsToPlaceString[shipsPlaced]}`].vertical = true;
        } else {
            // Vertical => horizontal
            img.classList.add('horizontal');
            game.player.ships[`${shipsToPlaceString[shipsPlaced]}`].vertical = false;
        }
    });
}

function renderPlacement() {
    display2.textContent = '';

    const container = document.createElement('div');
    const placementBox = document.createElement('div');
    placementBox.classList.add('placement');
    const rotateButton = document.createElement('button');
    rotateButton.classList.add('rotate-button');
    
    const next = document.createElement('div');
    next.classList.add('next-ships');

    container.appendChild(placementBox);
    placementBox.appendChild(rotateButton);
    container.appendChild(next);
    display2.appendChild(container);



    // Reset content
    placementBox.textContent = '';
    createRotateButton(placementBox);
    next.textContent = '';

    // Render the next ship to place in the box
    const img = new Image();
    img.src = shipsToPlace.shift();
    img.classList.add('placement-img');
    if (horizontal) img.classList.add('horizontal');

    // Render the remaining ships below;
    if (shipsToPlace.length > 0) {
        shipsToPlace.forEach(ship => {
            const box = document.createElement('div');
            box.classList.add('next-box');
            const nextShips = new Image();
            nextShips.src = ship;
            nextShips.classList.add('placement-img');
            nextShips.classList.add('horizontal');
            if (ship === _assets_patrol_png__WEBPACK_IMPORTED_MODULE_0__) nextShips.classList.add("patrol");
            else if (ship === _assets_destroyer_png__WEBPACK_IMPORTED_MODULE_2__) nextShips.classList.add("destroyer");
            else if (ship === _assets_submarine_png__WEBPACK_IMPORTED_MODULE_1__) nextShips.classList.add("submarine");
            else if (ship === _assets_battleship_png__WEBPACK_IMPORTED_MODULE_3__) nextShips.classList.add("battleship");
            else nextShips.classList.add("carrier");

            box.appendChild(nextShips);
            next.appendChild(box);
        });
    }
    if (shipsPlaced < 5) placementBox.appendChild(img);
}

function reset() {
    game = new _gameloop__WEBPACK_IMPORTED_MODULE_8__["default"]();
    game.init();
    clearDisplay();
    shipsToPlace = [_assets_carrier_png__WEBPACK_IMPORTED_MODULE_4__, _assets_battleship_png__WEBPACK_IMPORTED_MODULE_3__, _assets_destroyer_png__WEBPACK_IMPORTED_MODULE_2__, _assets_submarine_png__WEBPACK_IMPORTED_MODULE_1__, _assets_patrol_png__WEBPACK_IMPORTED_MODULE_0__];
    shipsToPlaceString = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrol'];
    shipsPlaced = 0;

    renderBoard(display1);
    renderPlacement();
    renderShips(game.player, 1);
}



function renderConfirmation() {
    display2.textContent = '';
    const box = document.createElement('div');
    box.classList.add('button-holder');
    const start = document.createElement('button');
    start.textContent = 'START';
    start.classList.add('start-button');
    const resetButton = document.createElement('button');
    resetButton.textContent = 'RESET'
    resetButton.classList.add('reset-button');

    box.appendChild(start);
    box.appendChild(resetButton);
    display2.appendChild(box);

    start.addEventListener('click', () => {
        clearDisplay(); 
        renderBoard(display1);
        renderBoard(display2);
        renderShips(game.player, 1);
    });

    resetButton.addEventListener('click', () => {
        reset();
    });
}

function placementCellListeners(cell) {
    cell.addEventListener("click", () => {
        const row = cell.getAttribute("data-row");
        const col = cell.getAttribute("data-col");
        const location = `[${col},${row}]`;

        // If you didn't already place all ships and the location is placeable => incriment counter, place the ship, render
        if (shipsPlaced < 5 && game.player.placeShip(shipsToPlaceString[shipsPlaced], `${location}`)) {
            shipsPlaced++;
            renderPlacement();
            renderShips(game.player, 1);
            if (shipsPlaced === 5) {
                renderConfirmation();
            };
        }
    });
}

function renderBoard(parent) {
    const board = document.createElement("div");
    board.classList.add("gameboard");
    parent.appendChild(board);
    for (let i = 9; i >= 0; i--) {
        const row = document.createElement("div");
        row.classList.add("row");
        board.appendChild(row);
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("div");
            cell.setAttribute("data-row", i);
            cell.setAttribute("data-col", j);
            cell.classList.add("cell");
            row.appendChild(cell);
            if (parent === display2) attackCellListeners(cell);
            if (parent === display1) placementCellListeners(cell);
        }
    }
}

function renderUI() {
    renderBoard(display1);
    renderPlacement();
    renderShips(game.player, 1);
}


/***/ }),

/***/ "./src/shipCreator.js":
/*!****************************!*\
  !*** ./src/shipCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(name) {
        this.name = name;
        this.length = null;
        this.hits = 0;
        this.sink = false;
        this.vertical = false;
    }

    getLength(name) {
        if (name === "carrier") this.length = 5;
        else if (name === "battleship") this.length = 4;
        else if (name === "submarine") this.length = 3;
        else if (name === "destroyer") this.length = 3;
        else if (name === "patrol") this.length = 2;
    }

    isHit() {
        this.hits++;
        this.isSunk();
    }

    isSunk() {
        if (this.hits === this.length) this.sink = true;
    }

    init() {
        this.getLength(this.name);
    }
}


/***/ }),

/***/ "./src/assets/battleship.png":
/*!***********************************!*\
  !*** ./src/assets/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "404f6a86df9b53b4706c.png";

/***/ }),

/***/ "./src/assets/carrier.png":
/*!********************************!*\
  !*** ./src/assets/carrier.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "456da2438acffd756c63.png";

/***/ }),

/***/ "./src/assets/destroyer.png":
/*!**********************************!*\
  !*** ./src/assets/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c76f85d4fce8dd95885f.png";

/***/ }),

/***/ "./src/assets/hit.png":
/*!****************************!*\
  !*** ./src/assets/hit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5da4e6ad9b0e7cc9300b.png";

/***/ }),

/***/ "./src/assets/miss.png":
/*!*****************************!*\
  !*** ./src/assets/miss.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df63d51552f855f6e648.png";

/***/ }),

/***/ "./src/assets/patrol.png":
/*!*******************************!*\
  !*** ./src/assets/patrol.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d5a03b4af5a46aa2f97.png";

/***/ }),

/***/ "./src/assets/rotate.png":
/*!*******************************!*\
  !*** ./src/assets/rotate.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8480e994c3de1b37fe49.png";

/***/ }),

/***/ "./src/assets/submarine.png":
/*!**********************************!*\
  !*** ./src/assets/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a32d71379ba45d67c5c4.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _renderBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderBoard */ "./src/renderBoard.js");



(0,_renderBoard__WEBPACK_IMPORTED_MODULE_1__["default"])();
// npx prettier . --write

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJGQUEyRixLQUFLLE9BQU8sS0FBSyxxRkFBcUYsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLGdCQUFnQixVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sUUFBUSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFB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RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZ0I7O0FBRXJDLHdEQUFRO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXJCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBDcmVhdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICBzcmM6IHVybCgnLi9teS1mb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4vbXktZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oZWxsbyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2ljb24ucG5nJyk7XG59ICovXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuKiB7XG4gICAgLypib3JkZXI6IDFweCBzb2xpZCByZWQ7Ki9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDUuNXJlbTtcbn1cblxuI21haW4tZGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kaXNwbGF5cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNDByZW07XG4gICAgd2lkdGg6IDQwcmVtO1xufVxuLnBsYWNlbWVudC1kaXNwbGF5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MHJlbTtcbiAgICB3aWR0aDogNDByZW07XG59XG4ucGxhY2VtZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogM3JlbSAwIDNyZW0gMDtcbiAgICBib3JkZXI6IHNvbGlkIDAuMTVyZW0gYmxhY2s7XG4gICAgaGVpZ2h0OiAxNXJlbTtcbiAgICB3aWR0aDogMTVyZW07XG59XG4ucGxhY2VtZW50LWltZyB7XG4gICAgd2lkdGg6IDNyZW07XG59XG4ucGxhY2VtZW50LWltZy5ob3Jpem9udGFsIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4ucm90YXRlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJyZW07IGxlZnQ6IDByZW07XG59XG4ubmV4dC1ib3gge1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIHdpZHRoOiAxNXJlbTtcbn1cbi5uZXh0LXNoaXBzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5nYW1lYm9hcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IHNvbGlkIDAuMXJlbSBibGFjaztcbn1cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbn1cblxuLmNlbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICB3aWR0aDogMy41cmVtO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGJvcmRlcjogc29saWQgMC4xcmVtIGJsYWNrO1xufVxuXG4uc2hpcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnBhdHJvbC5ob3Jpem9udGFsIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKC0xLjdyZW0sIC0xLjdyZW0pO1xufVxuLnN1Ym1hcmluZS5ob3Jpem9udGFsLFxuLmRlc3Ryb3llci5ob3Jpem9udGFsIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKC0zLjRyZW0sIC0zLjRyZW0pO1xufVxuLmJhdHRsZXNoaXAuaG9yaXpvbnRhbCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgtNS4xcmVtLCAtNS4xcmVtKTtcbn1cbi5jYXJyaWVyLmhvcml6b250YWwge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoLTYuNzVyZW0sIC02Ljc1cmVtKTtcbn1cbi5tYXJrZXItYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5tYXJrZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5yZXNldC1idXR0b24sXG4uc3RhcnQtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIG1hcmdpbjogMXJlbSAycmVtO1xufVxuLnN0YXJ0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjU1LCAxNjUpO1xufVxuLnJlc2V0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY1LCAxNjUpO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLm1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogNS41cmVtO1xufVxuLndpbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNXJlbTtcbiAgICB3aWR0aDogNDByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5oaWRkZW4ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0g7OztDQUdDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlGSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHdCQUF3QjtBQUM1QjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7SUFXSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjtBQUNBOzs7O0lBSUksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVLEVBQUUsVUFBVTtBQUMxQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLE9BQU87QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0RBQW9EO0FBQ3hEO0FBQ0E7O0lBRUksb0RBQW9EO0FBQ3hEO0FBQ0E7SUFDSSxvREFBb0Q7QUFDeEQ7QUFDQTtJQUNJLHNEQUFzRDtBQUMxRDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vbXktZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnLi9teS1mb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uaGVsbG8ge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pY29uLnBuZycpO1xcbn0gKi9cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuKiB7XFxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgcmVkOyovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA1LjVyZW07XFxufVxcblxcbiNtYWluLWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmRpc3BsYXlzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDByZW07XFxuICAgIHdpZHRoOiA0MHJlbTtcXG59XFxuLnBsYWNlbWVudC1kaXNwbGF5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcmVtO1xcbiAgICB3aWR0aDogNDByZW07XFxufVxcbi5wbGFjZW1lbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDNyZW0gMCAzcmVtIDA7XFxuICAgIGJvcmRlcjogc29saWQgMC4xNXJlbSBibGFjaztcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbn1cXG4ucGxhY2VtZW50LWltZyB7XFxuICAgIHdpZHRoOiAzcmVtO1xcbn1cXG4ucGxhY2VtZW50LWltZy5ob3Jpem9udGFsIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG4ucm90YXRlLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMnJlbTsgbGVmdDogMHJlbTtcXG59XFxuLm5leHQtYm94IHtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIHdpZHRoOiAxNXJlbTtcXG59XFxuLm5leHQtc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiBzb2xpZCAwLjFyZW0gYmxhY2s7XFxufVxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIHdpZHRoOiAzLjVyZW07XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICBib3JkZXI6IHNvbGlkIDAuMXJlbSBibGFjaztcXG59XFxuXFxuLnNoaXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnBhdHJvbC5ob3Jpem9udGFsIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgtMS43cmVtLCAtMS43cmVtKTtcXG59XFxuLnN1Ym1hcmluZS5ob3Jpem9udGFsLFxcbi5kZXN0cm95ZXIuaG9yaXpvbnRhbCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoLTMuNHJlbSwgLTMuNHJlbSk7XFxufVxcbi5iYXR0bGVzaGlwLmhvcml6b250YWwge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKC01LjFyZW0sIC01LjFyZW0pO1xcbn1cXG4uY2Fycmllci5ob3Jpem9udGFsIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgtNi43NXJlbSwgLTYuNzVyZW0pO1xcbn1cXG4ubWFya2VyLWJveCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5tYXJrZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuLnJlc2V0LWJ1dHRvbixcXG4uc3RhcnQtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMXJlbSAycmVtO1xcbn1cXG4uc3RhcnQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjU1LCAxNjUpO1xcbn1cXG4ucmVzZXQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY1LCAxNjUpO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogNS41cmVtO1xcbn1cXG4ud2lubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIHdpZHRoOiA0MHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwQ3JlYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSB7fTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHt9O1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlKSB7XG4gICAgICAgIGNvbnN0IHRtcCA9IHRoaXMuc2hpcHNbYCR7c2hpcH1gXTtcbiAgICAgICAgY29uc3QgcGFyc2VkQ29vcmQgPSBKU09OLnBhcnNlKGNvb3JkaW5hdGUpO1xuICAgICAgICBsZXQgcm93ID0gcGFyc2VkQ29vcmRbMF07XG4gICAgICAgIGxldCBjb2wgPSBwYXJzZWRDb29yZFsxXTtcbiAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtgWyR7cm93fSwke2NvbH1dYF07XG4gICAgICAgICAgICBpZiAoY2VsbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudC5wdXNoKGBbJHtyb3d9LCR7Y29sfV1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG1wLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgY29sIC09IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdyArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGxhY2VtZW50LmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2Ake2xvY2F0aW9ufWBdID0gdG1wLm5hbWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHNwb3QgaGFzbid0IGJlZW4gYXR0YWNrZWQgeWV0LCBpdCBjYW4gZmlyZVxuICAgICAgICBjb25zdCBhaW0gPSB0aGlzLmJvYXJkW2Ake2Nvb3JkaW5hdGV9YF07XG4gICAgICAgIGlmIChhaW0gIT09IFwiaGl0XCIgJiYgYWltICE9PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgaWYgKGFpbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYCR7Y29vcmRpbmF0ZX1gXSA9IFwibWlzc1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWUgaXRzIGEgc2hpcFxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNbYCR7YWltfWBdLmlzSGl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtgJHtjb29yZGluYXRlfWBdID0gXCJoaXRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0xvc3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5zaGlwcy5jYXJyaWVyLnNpbmspIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzLmJhdHRsZXNoaXAuc2luaykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuc2hpcHMuc3VibWFyaW5lLnNpbmspIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzLmRlc3Ryb3llci5zaW5rKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5zaGlwcy5wYXRyb2wuc2luaykgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYFske2l9LCR7an1dYF0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaGlwcy5jYXJyaWVyID0gbmV3IFNoaXAoXCJjYXJyaWVyXCIpO1xuICAgICAgICB0aGlzLnNoaXBzLmNhcnJpZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLnNoaXBzLmJhdHRsZXNoaXAgPSBuZXcgU2hpcChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgIHRoaXMuc2hpcHMuYmF0dGxlc2hpcC5pbml0KCk7XG4gICAgICAgIHRoaXMuc2hpcHMuc3VibWFyaW5lID0gbmV3IFNoaXAoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgIHRoaXMuc2hpcHMuc3VibWFyaW5lLmluaXQoKTtcbiAgICAgICAgdGhpcy5zaGlwcy5kZXN0cm95ZXIgPSBuZXcgU2hpcChcImRlc3Ryb3llclwiKTtcbiAgICAgICAgdGhpcy5zaGlwcy5kZXN0cm95ZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLnNoaXBzLnBhdHJvbCA9IG5ldyBTaGlwKFwicGF0cm9sXCIpO1xuICAgICAgICB0aGlzLnNoaXBzLnBhdHJvbC5pbml0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgQm9hcmQoKTtcbiAgICAgICAgdGhpcy5lbmVteSA9IG5ldyBCb2FyZCgpO1xuICAgICAgICB0aGlzLnR1cm4gPSAwO1xuICAgIH1cblxuICAgIGNoZWNrV2luKHBsYXllcikge1xuICAgICAgICBsZXQgd2luID0gdHJ1ZTtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgICAgLy8gQ2hlY2sgcGxheWVyIHdpblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5lbmVteS5zaGlwcykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbmVteS5zaGlwc1tgJHtzaGlwfWBdLnNpbmspIHdpbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBDaGVjayBib3Qgd2luXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBsYXllci5zaGlwcykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXIuc2hpcHNbYCR7c2hpcH1gXS5zaW5rKSB3aW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aW47XG4gICAgfVxuXG4gICAgYm90TW92ZShkaWZmaWN1bHR5KSB7XG4gICAgICAgIGxldCByb3c7XG4gICAgICAgIGxldCBjb2w7XG4gICAgICAgIGlmIChkaWZmaWN1bHR5ID09PSBcImVhc3lcIikge1xuICAgICAgICAgICAgcm93ID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwLCAxMCk7XG4gICAgICAgICAgICBjb2wgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAsIDEwKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGJvdCBhbHJlYWR5IGF0dGFja2VkIHRoZSBzcG90XG4gICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYm9hcmRbYFske2NvbH0sJHtyb3d9XWBdID09PSBcImhpdFwiIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYm9hcmRbYFske2NvbH0sJHtyb3d9XWBdID09PSBcIm1pc3NcIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcm93ID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwLCAxMCk7XG4gICAgICAgICAgICAgICAgY29sID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwLCAxMCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wbGF5ZXIuYm9hcmRbYFske2NvbH0sJHtyb3d9XWBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXllci5yZWNlaXZlQXR0YWNrKGBbJHtjb2x9LCR7cm93fV1gKTtcbiAgICAgICAgcmV0dXJuIFtjb2wsIHJvd107XG4gICAgfVxuXG4gICAgcGxhY2VtZW50KCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmVuZW15LnNoaXBzKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwLCAxMCk7XG4gICAgICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBjb2luRmxpcCA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gICAgICAgICAgICB0aGlzLmVuZW15LnNoaXBzW2Ake3NoaXB9YF0udmVydGljYWwgPSBjb2luRmxpcDtcbiAgICAgICAgICAgIGxldCBwbGFjZW1lbnQgPSB0aGlzLmVuZW15LnBsYWNlU2hpcChzaGlwLCBgWyR7Y29sfSwke3Jvd31dYCk7XG5cbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2hpcCwgcm93LCBjb2wpO1xuICAgICAgICAgICAgICAgIHJvdyA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMCwgMTApO1xuICAgICAgICAgICAgICAgIGNvbCA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMCwgMTApO1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9IHRoaXMuZW5lbXkucGxhY2VTaGlwKHNoaXAsIGBbJHtjb2x9LCR7cm93fV1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLmVuZW15LmluaXQoKTtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wbGF5ZXIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVuZW15KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgcGF0cm9sIGZyb20gXCIuL2Fzc2V0cy9wYXRyb2wucG5nXCI7XG5pbXBvcnQgc3VibWFyaW5lIGZyb20gXCIuL2Fzc2V0cy9zdWJtYXJpbmUucG5nXCI7XG5pbXBvcnQgZGVzdHJveWVyIGZyb20gXCIuL2Fzc2V0cy9kZXN0cm95ZXIucG5nXCI7XG5pbXBvcnQgYmF0dGxlc2hpcCBmcm9tIFwiLi9hc3NldHMvYmF0dGxlc2hpcC5wbmdcIjtcbmltcG9ydCBjYXJyaWVyIGZyb20gXCIuL2Fzc2V0cy9jYXJyaWVyLnBuZ1wiO1xuaW1wb3J0IGhpdCBmcm9tIFwiLi9hc3NldHMvaGl0LnBuZ1wiO1xuaW1wb3J0IG1pc3MgZnJvbSBcIi4vYXNzZXRzL21pc3MucG5nXCI7XG5pbXBvcnQgcm90YXRlIGZyb20gXCIuL2Fzc2V0cy9yb3RhdGUucG5nXCI7XG5cbmltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVsb29wXCI7XG5cbi8vIGltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcnO1xuXG4vLyAvLyAvLyBBZGQgdGhlIGltYWdlIHRvIG91ciBleGlzdGluZyBkaXYuXG4vLyAvLyBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbi8vIC8vIG15SWNvbi5zcmMgPSBJY29uO1xuXG4vLyAvLyBlbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbilcblxubGV0IGdhbWUgPSBuZXcgR2FtZSgpO1xuZ2FtZS5pbml0KCk7XG5sZXQgc2hpcHNUb1BsYWNlID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xdO1xubGV0IHNoaXBzVG9QbGFjZVN0cmluZyA9IFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ2Rlc3Ryb3llcicsICdzdWJtYXJpbmUnLCAncGF0cm9sJ107XG5sZXQgc2hpcHNQbGFjZWQgPSAwO1xuY29uc3QgaG9yaXpvbnRhbCA9IHRydWU7XG5cbmNvbnN0IGRpc3BsYXkxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5MVwiKTtcbmNvbnN0IGRpc3BsYXkyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5MlwiKTtcblxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCkge1xuICAgIGRpc3BsYXkxLnRleHRDb250ZW50ID0gJyc7XG4gICAgZGlzcGxheTIudGV4dENvbnRlbnQgPSAnJztcbn1cblxuZnVuY3Rpb24gcmVuZGVyTWFya2VyKGNlbGwsIHBsYXllckJvYXJkLCBjb29yZGluYXRlcykge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gcGxheWVyQm9hcmRbYCR7Y29vcmRpbmF0ZXN9YF07XG4gICAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgbWFya2VyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG5cbiAgICBpZiAobG9jYXRpb24gPT09IFwiaGl0XCIgfHwgbG9jYXRpb24gPT09IFwibWlzc1wiKSB7XG4gICAgICAgIG15SWNvbi5jbGFzc0xpc3QuYWRkKFwibWFya2VyXCIpO1xuICAgICAgICBtYXJrZXJCb3guY2xhc3NMaXN0LmFkZChcIm1hcmtlci1ib3hcIik7XG4gICAgICAgIGlmIChsb2NhdGlvbiA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICAgIG15SWNvbi5zcmMgPSBtaXNzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXlJY29uLnNyYyA9IGhpdDtcbiAgICAgICAgfVxuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKG1hcmtlckJveCk7XG4gICAgICAgIG1hcmtlckJveC5hcHBlbmRDaGlsZChteUljb24pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gd2luKHdpbm5lcikge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoYm94KTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcbiAgICBpZiAod2lubmVyID09PSAncGxheWVyJykgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdZT1UgV0lOISEhJztcbiAgICBlbHNlIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQk9UIFdJTlMgOignO1xuICAgIGJveC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblxuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnUkVTRVQnO1xuICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Jlc2V0LWJ1dHRvbicpO1xuICAgIGJveC5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG5cbiAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgb3ZlcmxheS50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBib3RBdHRhY2soKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnYW1lLmJvdE1vdmUoXCJlYXN5XCIpO1xuICAgIGNvbnN0IHBsYXllckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke2Nvb3JkaW5hdGVzWzFdfVwiXVtkYXRhLWNvbD1cIiR7Y29vcmRpbmF0ZXNbMF19XCJdYCxcbiAgICApO1xuICAgIHJlbmRlck1hcmtlcihcbiAgICAgICAgcGxheWVyQ2VsbCxcbiAgICAgICAgZ2FtZS5wbGF5ZXIuYm9hcmQsXG4gICAgICAgIGBbJHtjb29yZGluYXRlc1swXX0sJHtjb29yZGluYXRlc1sxXX1dYCxcbiAgICApO1xuICAgIGlmIChnYW1lLmNoZWNrV2luKFwiYm90XCIpKSB3aW4oJ2JvdCcpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTaGlwcyhwbGF5ZXJCb2FyZCwgZGlzcGxheSkge1xuICAgIGNvbnN0IHNjcmVlbiA9IGRpc3BsYXkgPT09IDEgPyBcImRpc3BsYXkxXCIgOiBcImRpc3BsYXkyXCI7XG4gICAgY29uc3Qgc2VlbiA9IHt9O1xuICAgIC8vIENoZWNrIGJvYXJkIGZvciBzaGlwcyB0b3AgdG8gYm90dG9tIGxlZnQgdG8gcmlnaHRcbiAgICBmb3IgKGxldCByb3cgPSA5OyByb3cgPj0gMDsgcm93LS0pIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gcGxheWVyQm9hcmQuYm9hcmRbYFske2NvbH0sJHtyb3d9XWBdO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChzaGlwID09PSBcInBhdHJvbFwiIHx8XG4gICAgICAgICAgICAgICAgICAgIHNoaXAgPT09IFwiZGVzdHJveWVyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgc2hpcCA9PT0gXCJzdWJtYXJpbmVcIiB8fFxuICAgICAgICAgICAgICAgICAgICBzaGlwID09PSBcImJhdHRsZXNoaXBcIiB8fFxuICAgICAgICAgICAgICAgICAgICBzaGlwID09PSBcImNhcnJpZXJcIikgJiZcbiAgICAgICAgICAgICAgICAhc2VlbltgJHtzaGlwfWBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzZWVuW2Ake3NoaXB9YF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLiR7c2NyZWVufSAuZ2FtZWJvYXJkIFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyQm9hcmQuc2hpcHNbYCR7c2hpcH1gXS52ZXJ0aWNhbCA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIG15SWNvbi5jbGFzc0xpc3QuYWRkKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcCA9PT0gXCJwYXRyb2xcIikge1xuICAgICAgICAgICAgICAgICAgICBteUljb24uc3JjID0gcGF0cm9sO1xuICAgICAgICAgICAgICAgICAgICBteUljb24uY2xhc3NMaXN0LmFkZChcInBhdHJvbFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXAgPT09IFwiZGVzdHJveWVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbXlJY29uLnNyYyA9IGRlc3Ryb3llcjtcbiAgICAgICAgICAgICAgICAgICAgbXlJY29uLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwID09PSBcInN1Ym1hcmluZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG15SWNvbi5zcmMgPSBzdWJtYXJpbmU7XG4gICAgICAgICAgICAgICAgICAgIG15SWNvbi5jbGFzc0xpc3QuYWRkKFwic3VibWFyaW5lXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcCA9PT0gXCJiYXR0bGVzaGlwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbXlJY29uLnNyYyA9IGJhdHRsZXNoaXA7XG4gICAgICAgICAgICAgICAgICAgIG15SWNvbi5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBteUljb24uc3JjID0gY2FycmllcjtcbiAgICAgICAgICAgICAgICAgICAgbXlJY29uLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBteUljb24uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChteUljb24pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXAsIGNvbCwgcm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYXR0YWNrQ2VsbExpc3RlbmVycyhjZWxsKSB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpO1xuICAgICAgICBjb25zdCBjb2wgPSBjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29sXCIpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGBbJHtjb2x9LCR7cm93fV1gO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBnYW1lLmVuZW15LmJvYXJkW2Ake2xvY2F0aW9ufWBdICE9PSBcImhpdFwiICYmXG4gICAgICAgICAgICBnYW1lLmVuZW15LmJvYXJkW2Ake2xvY2F0aW9ufWBdICE9PSBcIm1pc3NcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFBsYXllciBhdHRhY2tzXG4gICAgICAgICAgICBnYW1lLmVuZW15LnJlY2VpdmVBdHRhY2soYCR7bG9jYXRpb259YCk7XG4gICAgICAgICAgICByZW5kZXJNYXJrZXIoY2VsbCwgZ2FtZS5lbmVteS5ib2FyZCwgYCR7bG9jYXRpb259YCk7XG4gICAgICAgICAgICBpZiAoZ2FtZS5jaGVja1dpbihcInBsYXllclwiKSkgd2luKCdwbGF5ZXInKTtcblxuICAgICAgICAgICAgLy8gQm90IGF0dGFja3MgYWZ0ZXIgeW91XG4gICAgICAgICAgICBib3RBdHRhY2soKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3RhdGVCdXR0b24ocGFyZW50KSB7XG4gICAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZS1idXR0b24nKTtcblxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG15SWNvbi5zcmMgPSByb3RhdGU7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocm90YXRlQnV0dG9uKTtcbiAgICByb3RhdGVCdXR0b24uYXBwZW5kQ2hpbGQobXlJY29uKTtcblxuICAgIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlbWVudD4ucGxhY2VtZW50LWltZycpO1xuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXIuc2hpcHNbYCR7c2hpcHNUb1BsYWNlU3RyaW5nW3NoaXBzUGxhY2VkXX1gXS52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIEhvcml6b250YWwgPT4gdmVydGljYWxcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgICAgICAgICBnYW1lLnBsYXllci5zaGlwc1tgJHtzaGlwc1RvUGxhY2VTdHJpbmdbc2hpcHNQbGFjZWRdfWBdLnZlcnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFZlcnRpY2FsID0+IGhvcml6b250YWxcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG4gICAgICAgICAgICBnYW1lLnBsYXllci5zaGlwc1tgJHtzaGlwc1RvUGxhY2VTdHJpbmdbc2hpcHNQbGFjZWRdfWBdLnZlcnRpY2FsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxhY2VtZW50KCkge1xuICAgIGRpc3BsYXkyLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwbGFjZW1lbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGFjZW1lbnRCb3guY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50Jyk7XG4gICAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZS1idXR0b24nKTtcbiAgICBcbiAgICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV4dC5jbGFzc0xpc3QuYWRkKCduZXh0LXNoaXBzJyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VtZW50Qm94KTtcbiAgICBwbGFjZW1lbnRCb3guYXBwZW5kQ2hpbGQocm90YXRlQnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV4dCk7XG4gICAgZGlzcGxheTIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuXG5cbiAgICAvLyBSZXNldCBjb250ZW50XG4gICAgcGxhY2VtZW50Qm94LnRleHRDb250ZW50ID0gJyc7XG4gICAgY3JlYXRlUm90YXRlQnV0dG9uKHBsYWNlbWVudEJveCk7XG4gICAgbmV4dC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgLy8gUmVuZGVyIHRoZSBuZXh0IHNoaXAgdG8gcGxhY2UgaW4gdGhlIGJveFxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBzaGlwc1RvUGxhY2Uuc2hpZnQoKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LWltZycpO1xuICAgIGlmIChob3Jpem9udGFsKSBpbWcuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuXG4gICAgLy8gUmVuZGVyIHRoZSByZW1haW5pbmcgc2hpcHMgYmVsb3c7XG4gICAgaWYgKHNoaXBzVG9QbGFjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNoaXBzVG9QbGFjZS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnbmV4dC1ib3gnKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRTaGlwcyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgbmV4dFNoaXBzLnNyYyA9IHNoaXA7XG4gICAgICAgICAgICBuZXh0U2hpcHMuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LWltZycpO1xuICAgICAgICAgICAgbmV4dFNoaXBzLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgICAgICAgICAgIGlmIChzaGlwID09PSBwYXRyb2wpIG5leHRTaGlwcy5jbGFzc0xpc3QuYWRkKFwicGF0cm9sXCIpO1xuICAgICAgICAgICAgZWxzZSBpZiAoc2hpcCA9PT0gZGVzdHJveWVyKSBuZXh0U2hpcHMuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llclwiKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHNoaXAgPT09IHN1Ym1hcmluZSkgbmV4dFNoaXBzLmNsYXNzTGlzdC5hZGQoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgICAgICBlbHNlIGlmIChzaGlwID09PSBiYXR0bGVzaGlwKSBuZXh0U2hpcHMuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgICAgICBlbHNlIG5leHRTaGlwcy5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcblxuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKG5leHRTaGlwcyk7XG4gICAgICAgICAgICBuZXh0LmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2hpcHNQbGFjZWQgPCA1KSBwbGFjZW1lbnRCb3guYXBwZW5kQ2hpbGQoaW1nKTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgZ2FtZS5pbml0KCk7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgc2hpcHNUb1BsYWNlID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xdO1xuICAgIHNoaXBzVG9QbGFjZVN0cmluZyA9IFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ2Rlc3Ryb3llcicsICdzdWJtYXJpbmUnLCAncGF0cm9sJ107XG4gICAgc2hpcHNQbGFjZWQgPSAwO1xuXG4gICAgcmVuZGVyQm9hcmQoZGlzcGxheTEpO1xuICAgIHJlbmRlclBsYWNlbWVudCgpO1xuICAgIHJlbmRlclNoaXBzKGdhbWUucGxheWVyLCAxKTtcbn1cblxuXG5cbmZ1bmN0aW9uIHJlbmRlckNvbmZpcm1hdGlvbigpIHtcbiAgICBkaXNwbGF5Mi50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKCdidXR0b24taG9sZGVyJyk7XG4gICAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTVEFSVCc7XG4gICAgc3RhcnQuY2xhc3NMaXN0LmFkZCgnc3RhcnQtYnV0dG9uJyk7XG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSRVNFVCdcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZXNldC1idXR0b24nKTtcblxuICAgIGJveC5hcHBlbmRDaGlsZChzdGFydCk7XG4gICAgYm94LmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgICBkaXNwbGF5Mi5hcHBlbmRDaGlsZChib3gpO1xuXG4gICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyRGlzcGxheSgpOyBcbiAgICAgICAgcmVuZGVyQm9hcmQoZGlzcGxheTEpO1xuICAgICAgICByZW5kZXJCb2FyZChkaXNwbGF5Mik7XG4gICAgICAgIHJlbmRlclNoaXBzKGdhbWUucGxheWVyLCAxKTtcbiAgICB9KTtcblxuICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZXNldCgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBwbGFjZW1lbnRDZWxsTGlzdGVuZXJzKGNlbGwpIHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIik7XG4gICAgICAgIGNvbnN0IGNvbCA9IGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIik7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYFske2NvbH0sJHtyb3d9XWA7XG5cbiAgICAgICAgLy8gSWYgeW91IGRpZG4ndCBhbHJlYWR5IHBsYWNlIGFsbCBzaGlwcyBhbmQgdGhlIGxvY2F0aW9uIGlzIHBsYWNlYWJsZSA9PiBpbmNyaW1lbnQgY291bnRlciwgcGxhY2UgdGhlIHNoaXAsIHJlbmRlclxuICAgICAgICBpZiAoc2hpcHNQbGFjZWQgPCA1ICYmIGdhbWUucGxheWVyLnBsYWNlU2hpcChzaGlwc1RvUGxhY2VTdHJpbmdbc2hpcHNQbGFjZWRdLCBgJHtsb2NhdGlvbn1gKSkge1xuICAgICAgICAgICAgc2hpcHNQbGFjZWQrKztcbiAgICAgICAgICAgIHJlbmRlclBsYWNlbWVudCgpO1xuICAgICAgICAgICAgcmVuZGVyU2hpcHMoZ2FtZS5wbGF5ZXIsIDEpO1xuICAgICAgICAgICAgaWYgKHNoaXBzUGxhY2VkID09PSA1KSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ29uZmlybWF0aW9uKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJvYXJkKHBhcmVudCkge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkXCIpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgZm9yIChsZXQgaSA9IDk7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCBpKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIiwgaik7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgaWYgKHBhcmVudCA9PT0gZGlzcGxheTIpIGF0dGFja0NlbGxMaXN0ZW5lcnMoY2VsbCk7XG4gICAgICAgICAgICBpZiAocGFyZW50ID09PSBkaXNwbGF5MSkgcGxhY2VtZW50Q2VsbExpc3RlbmVycyhjZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVUkoKSB7XG4gICAgcmVuZGVyQm9hcmQoZGlzcGxheTEpO1xuICAgIHJlbmRlclBsYWNlbWVudCgpO1xuICAgIHJlbmRlclNoaXBzKGdhbWUucGxheWVyLCAxKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBudWxsO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLnNpbmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldExlbmd0aChuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBcImNhcnJpZXJcIikgdGhpcy5sZW5ndGggPSA1O1xuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcImJhdHRsZXNoaXBcIikgdGhpcy5sZW5ndGggPSA0O1xuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcInN1Ym1hcmluZVwiKSB0aGlzLmxlbmd0aCA9IDM7XG4gICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwiZGVzdHJveWVyXCIpIHRoaXMubGVuZ3RoID0gMztcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJwYXRyb2xcIikgdGhpcy5sZW5ndGggPSAyO1xuICAgIH1cblxuICAgIGlzSGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB0aGlzLnNpbmsgPSB0cnVlO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0TGVuZ3RoKHRoaXMubmFtZSk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHJlbmRlclVJIGZyb20gXCIuL3JlbmRlckJvYXJkXCI7XG5cbnJlbmRlclVJKCk7XG4vLyBucHggcHJldHRpZXIgLiAtLXdyaXRlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=