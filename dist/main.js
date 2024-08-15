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
___CSS_LOADER_EXPORT___.push([module.id, `body {
    display: grid;
    gap: 10px;
    grid-template-areas: 
        "navi main main"
        "navi main main"
        "navi footer footer"
    ;
    background-color: lightblue;
}

#navigation {
    grid-area: navi;
    border: 2px solid green;
}

#main {
    grid-area: main;
    display: flex;
    border: 2px solid orange;
}

#footer {
    grid-area: footer;
    border: 2px solid purple;
}

h1, h2, h3 {
    display: inline;
    margin: 0;
    padding: 0;
}

button {
    width: fit-content;
}

input[type="radio"] {
    display: inline-block;
}

form {
    grid-column-start: 2;
    /* grid-area: main; */
    display: none;
    gap: 5px;
    grid-template-columns: 1fr auto 1fr;
    justify-items: center;
    justify-self: center;
    align-items: center;
    background-color: lightgray;
    padding: 10px;
    z-index: 99999999;
    /* position: absolute; */
}

form * {
    grid-column-start: 2;
}

textarea {
    resize: vertical;
    max-width: 48vw;
}

#project {
    border: 2px solid red;
}

#task_container {
    grid-area: main;
    grid-column-start: 2;
    grid-row-start: 1;
    gap: 10px;
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: baseline;
    border: 2px solid blue;
}

#project_container {
    grid-area: main;
    grid-column-start: 3;
    grid-row-start: 1;
    gap: 10px;
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: baseline;
    border: 2px solid yellow;
}

.task {
    overflow: scroll;
    border: 1px solid black;
    padding: 10px;
    scrollbar-gutter: stable both-edges;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT;;;;IAIA;IACA,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,aAAa;IACb,QAAQ;IACR,mCAAmC;IACnC,qBAAqB;IACrB,oBAAoB;IACpB,mBAAmB;IACnB,2BAA2B;IAC3B,aAAa;IACb,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,SAAS;IACT,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,SAAS;IACT,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,qBAAqB;IACrB,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,aAAa;IACb,mCAAmC;AACvC","sourcesContent":["body {\n    display: grid;\n    gap: 10px;\n    grid-template-areas: \n        \"navi main main\"\n        \"navi main main\"\n        \"navi footer footer\"\n    ;\n    background-color: lightblue;\n}\n\n#navigation {\n    grid-area: navi;\n    border: 2px solid green;\n}\n\n#main {\n    grid-area: main;\n    display: flex;\n    border: 2px solid orange;\n}\n\n#footer {\n    grid-area: footer;\n    border: 2px solid purple;\n}\n\nh1, h2, h3 {\n    display: inline;\n    margin: 0;\n    padding: 0;\n}\n\nbutton {\n    width: fit-content;\n}\n\ninput[type=\"radio\"] {\n    display: inline-block;\n}\n\nform {\n    grid-column-start: 2;\n    /* grid-area: main; */\n    display: none;\n    gap: 5px;\n    grid-template-columns: 1fr auto 1fr;\n    justify-items: center;\n    justify-self: center;\n    align-items: center;\n    background-color: lightgray;\n    padding: 10px;\n    z-index: 99999999;\n    /* position: absolute; */\n}\n\nform * {\n    grid-column-start: 2;\n}\n\ntextarea {\n    resize: vertical;\n    max-width: 48vw;\n}\n\n#project {\n    border: 2px solid red;\n}\n\n#task_container {\n    grid-area: main;\n    grid-column-start: 2;\n    grid-row-start: 1;\n    gap: 10px;\n    padding: 10px;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n    align-items: baseline;\n    border: 2px solid blue;\n}\n\n#project_container {\n    grid-area: main;\n    grid-column-start: 3;\n    grid-row-start: 1;\n    gap: 10px;\n    padding: 10px;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n    align-items: baseline;\n    border: 2px solid yellow;\n}\n\n.task {\n    overflow: scroll;\n    border: 1px solid black;\n    padding: 10px;\n    scrollbar-gutter: stable both-edges;\n}"],"sourceRoot":""}]);
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

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskManager: () => (/* binding */ TaskManager),
/* harmony export */   task_list: () => (/* binding */ task_list)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



// import { task_list } from './storage.js';

let task_list = [];

function TaskManager() {

const title = document.getElementById("task_title").value;
const desc = document.getElementById("desc").value;
const due = document.getElementById("due").value;
const priority = document.getElementById("priority").value;

// tasks.create(title.value,desc.value,due.value,priority.value);
console.log(title,desc,due,priority);
  // tasks.push();


  let task = { title, desc, due, priority };

  task_list.push(task);
  console.log(task_list);

  console.log("the task list is:",task_list)
  // let task_title = task_list[0].title;

  if (task_title == "") {
    titleBlankError();
    return;
  } 

    let title_box = document.getElementById("task_title");
    title_box.style.border = "none";

  // createTask.push;
  // createTask.hello;
  (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.displaySingleTask)("task_container");
  (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.TaskFormToggle)();
}

function titleBlankError() {
  let title_box = document.getElementById("task_title");
  title_box.style.border = "2px solid red";
    console.log("Please add a title to continue!");
    task_list.shift();
    console.log("We removed your last task attempt. this task list is now ",task_list);
}

function displayTaskList() {
  console.log("Success! this task list is ", task_list);
  // console.log("The task title is ", task_title);

  for (let i = 0; i < task_list.length; i++) {
    let task = document.createElement("div");
    console.log(task_list[i]);

  }
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskFormToggle: () => (/* binding */ TaskFormToggle),
/* harmony export */   displaySingleTask: () => (/* binding */ displaySingleTask)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");





//declare default page!
const navigation = document.getElementById("navigation");
const main = document.createElement("div");
const footer = document.createElement("div");

let task_button = document.createElement("button");

// document.body.append(navigation);
// document.body.append(main);
// document.body.append(footer);
// navigation.setAttribute("id", "navigation");
// main.setAttribute("id", "main");
// footer.setAttribute("id", "footer");

navigation.append(task_button);
task_button.addEventListener("click", TaskFormToggle);
task_button.setAttribute("grid-area", "navigation");
task_button.innerText = "Add Task";

// //make task & project holder on main section
// let task_container = document.createElement("div");
// let project_container = document.createElement("div");

// task_container.setAttribute("id", "task_container");
// project_container.setAttribute("id", "project_container");

// main.append(task_container,project_container);

//create Form
const form = document.createElement("form");
const field_set = document.createElement("fieldset");
const field_legend = document.createElement("legend");
let h1 = document.createElement("h1");

document.body.prepend(form);
form.style.display = "grid";
form.prepend(h1);
h1.innerText = "New Task:";
form.setAttribute("id", "task_form");

//make invisible
form.style.display = "none";

// create fieldsets
function createFormElement(
  item_id,
  name,
  label_text,
  element_tag,
  element_type,
) {
  const field_label = document.createElement("label");
  const element_itself = document.createElement(element_tag);

  form.appendChild(field_label);
  form.appendChild(element_itself);

  element_itself.setAttribute("id", item_id);
  element_itself.setAttribute("name", name);
  element_itself.setAttribute("label", label_text);
  field_label.innerText = "\n" + label_text;
  element_itself.setAttribute("type", element_type);
}

//create the task form elements!
createFormElement("task_title", "title_input", "Title:", "input", "text");
createFormElement("desc", "desc_input", "desc:", "textarea");
createFormElement("due", "due_input", "Due Date:", "input", "date");
createFormElement(
  "priority",
  "priority_number_input",
  "Priority:",
  "input",
  "number",
);
// optional elements for post-completion: notes, checklist

//define any stragglers for the constructor above
const priority = document.getElementById("priority");
let priority_min = 1;
let priority_max = 3;
priority.setAttribute("min", priority_min);
priority.setAttribute("max", priority_max);

//create task form submit button
let button = document.createElement("button");
button.setAttribute("type", "button");

//add completed form
form.appendChild(button);

//make form submit button
button.innerText = "Submit the info!";
button.style.width = "flex-self";
button.addEventListener("click", () => {
  (0,_controller_js__WEBPACK_IMPORTED_MODULE_2__.TaskManager)();
  clearInputFields();
});

function clearInputFields() {
  let title = document.getElementById("task_title");
  let desc = document.getElementById("desc");
  let priority = document.getElementById("priority");
  let due = document.getElementById("due");

  title.value = "";
  desc.value = "";
  priority.value = "";
  due.value = "";
}

function TaskFormToggle() {
  let form = document.getElementById("task_form");

  if (form.style.display == "none") {
    form.style.display = "grid";
  } else {
    form.style.display = "none";
  }
}

function displaySingleTask(destinationID) {
  // console.log("the due date is", task_list[0].due);
  // title_box.style.border = "none";

  let list = _controller_js__WEBPACK_IMPORTED_MODULE_2__.task_list;
  let container = document.getElementById(destinationID);

  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    let task_box = document.createElement("div");
    task_box.setAttribute("class", "task");

    console.log("We are printing object ", i + 1);
    // console.log("the item is ", task_list[i]);

    console.log("the items in the list are: ", list[i]);
    // console.log(list[i].title);
    // console.log(list[i].desc);
    // console.log(list[i].due);
    // console.log(list[i].priority);
    let shortcut = list[i];

    console.log("shortcut is",shortcut);
    // console.log(shortcut.desc);

    if (
      shortcut.desc == shortcut.priority &&
      shortcut.priority == shortcut.due
    ) {
      console.log("There is only a title");
      let h3 = document.createElement("h3");
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");

      container.append(task_box);
      task_box.append(checkbox);
      task_box.append(h3);
      h3.innerText = shortcut.title;
    } else {
      console.log("There is a title & others");
      let details = document.createElement("details");
      let summary = document.createElement("summary");
      let h3 = document.createElement("h3");

      let non_titles = [
        shortcut.desc,
        shortcut.priority,
        shortcut.due,
      ];

      non_titles.forEach(function (non) {
        let p = document.createElement("p");
        p.innerText = non;
        details.append(p);
      });

      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");

      container.append(task_box);
      task_box.append(details);
      details.append(summary);
      summary.append(checkbox);
      summary.append(h3);
      h3.innerText = shortcut.title;
    }
  }
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hello: () => (/* binding */ hello),
/* harmony export */   task_list: () => (/* binding */ task_list)
/* harmony export */ });
let task_list = [];
const hello = () => { console.log("Storage says hi")}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");


const tasks  = (function () {

  //define it
  function Task(title, desc, due, priority) {
    this.title = title;
    this.description = desc;
    this.due_date = due;
    this.priority = priority;
  }

  const create = (title,desc,due,priority) => {
    let task = new Task(title, desc, due, priority);
    return task;
  }

  const push = () => {
    _storage_js__WEBPACK_IMPORTED_MODULE_0__.task_list.unshift(create);
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.hello)();
  }

  return {
    create,
    push,
  }
});

console.log("The type of tasks is:", typeof tasks);

//learning 
function PrintHandler() {
  let shout = () => console.log("I am shouting");
  let whisper = () => console.log("I am whispering");
  return {
  shout,
  whisper,
};
}
PrintHandler().shout() 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map