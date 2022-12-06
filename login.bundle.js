"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["login"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_homepageStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/homepageStyle.css */ "./src/css/homepageStyle.css");
/* harmony import */ var _js_login_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/login/login */ "./src/js/login/login.js");
/* harmony import */ var _assets_icons_book_open_page_variant_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/book-open-page-variant-outline.svg */ "./src/assets/icons/book-open-page-variant-outline.svg");


const loginSubmitBtn = document.querySelector(".login-submit-btn");
loginSubmitBtn.addEventListener("click", _js_login_login__WEBPACK_IMPORTED_MODULE_1__.loginUserHandler);

document.querySelector("#lib-icon-home-page").src = _assets_icons_book_open_page_variant_outline_svg__WEBPACK_IMPORTED_MODULE_2__;

// window.onload = () => {
// 	setCurrentTheme(DEFAULT_THEME);
// 	setCurrentBooks(currentBooks);
// 	renderBooks();
// };

/***/ }),

/***/ "./src/js/login/login.js":
/*!*******************************!*\
  !*** ./src/js/login/login.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginUserHandler": () => (/* binding */ loginUserHandler)
/* harmony export */ });
const usernameEl = document.querySelector("#username");
const passwordEl = document.querySelector("#password");
const loginUserHandler = async function (e) {
  e.preventDefault();
  const username = usernameEl.value.trim();
  const password = passwordEl.value.trim();

  // CODE TO VALIDATE EMPTY INPUTS

  if (username && password) {
    const loginUserData = {
      username,
      password
    };
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify(loginUserData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response);
    if (response.ok) {
      // direct logged-in user to home page
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/homepageStyle.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/homepageStyle.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/book-wall-background.jpg */ "./src/assets/img/book-wall-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/arrow-right-thin-circle-outline.png */ "./src/assets/icons/arrow-right-thin-circle-outline.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    /* main theme */\n    --white: white;\n    --primary-light: #f8f9fa;\n    --secondary-light: #e9ecef;\n\n    --primary-dark-blue: #3a0ca3;\n    --primary-light-blue: #4cc9f0;\n    --primary-dark-purple: #7209b7;\n    --secondary-mid-blue: #4361ee;\n\n    --highlight-pink: #f72585;\n\n    --black: #000;\n    --primary-dark: #212529;\n    --secondary-dark-gray: #979dac;\n    /* DARK MODE BELOW */\n    /* OTHER THEME BELOW */\n}\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody, html {\n    font-family: 'Arvo', serif;\n}\nbody {\n    min-height: 100vh;\n    /* padding: 0 20px; */\n    background-color: azure;\n}\n\n#column-wrap {\n    background-color: var(--primary-light);\n\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    \n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    \n    -webkit-flex-wrap: wrap;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    \n    min-height: 100vh;\n}\n\n#column-left {\n    width: 35%;\n    margin: 0 auto;\n    min-height: 100vh;\n    height: 100%;\n\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n#column-left .inner {\n    padding: 0 50px;\n    margin: 0 auto;\n    max-width: 485px;\n}\n\n#column-left img {\n    width: 120px;\n    display: block;\n    margin: 0 auto;\n}\n\n#column-left h1 {\n    /* font-family: 'Arvo', serif; */\n    color: #444;\n    font-size: 30px;\n    font-weight: 400;\n    text-align: center;\n    margin: 24px 0;\n}\n\n#column-left .create {\n    text-align: center;\n    margin: 0 0 20px 0;\n}\n\n#column-left form {\n    margin: 20px 0;\n}\n\n#column-left .input-wrap {\n    margin: 0 0 25px 0;\n}\n#column-left label {\n    display: block;\n    color: #444;\n    font-size: 1rem;\n    font-weight: 700;\n    margin: 0 0 10px 0;\n}\n#column-left input[type=text], \n#column-left input[type=password],\n#column-left input[type=email] {\n    display: block;\n    width: 100%;\n    border: 1px solid #ddd;\n    border-radius: 3px;\n    font-size: 18px;\n    line-height: 1;\n    padding: 13px 15px;\n    color: #444;\n    -webkit-appearance: none;\n    appearance: none;\n}\n#column-left button {\n    display: block;\n    width: 100%;\n    line-height: 1;\n    background-color: #e27730;\n    border-radius: 3px;\n    border: none;\n    color: #fff;\n    font-size: 18px;\n    font-weight: 700;\n    padding: 16px 15px;\n    cursor: pointer;\n}\n#column-left .forgot {\n    text-align: center;\n    font-size: 16px;\n    margin: 20px 0 0;\n}\n#column-left .forgot a {\n    color: #666;\n    text-decoration: underline;\n}\n#column-left .footer {\n    text-align: center;\n    margin: 40px 0 0;\n    color: #888;\n    font-size: 12px;\n}\n\n#column-right {\n    margin: 0;\n    width: 65%;\n    min-height: 100vh;\n    height: 100%;\n\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-color: #cccccc;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n#column-right .inner {\n    display: block;\n    width: 100%;\n    text-align: center;\n}\n\n#column-right .inner .landing_page_message {\n    padding: 44px 60px 50px 60px;\n    background-color: #fff;\n    max-width: 440px;\n    margin: auto;\n    text-align: left;\n}\n\n#column-right .inner .landing_page_message .msg_title {\n    /* font-family: 'Arvo', serif; */\n    color: #444444;\n    margin-bottom: 26px;\n    line-height: 1.4;\n    font-size: 27px;\n    font-weight: 400;\n    margin-top: 0;\n}\n\n#column-right .inner .landing_page_message .msg_content {\n    color: #777777;\n    font-size: 18px;\n    margin-bottom: 32px;\n    line-height: 1.6em;\n}\n\n#column-right .inner .landing_page_message .msg_button {\n    background-color: #DE7739;\n    border-radius: 3px;\n    font-size: 16px;\n}\n#column-right .inner .landing_page_message .msg_button a {\n    display: block;\n    width: 100%;\n    color: #fff;\n    padding: 20px;\n    text-decoration: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: calc(100% - 20px) center;\n    background-size: 18px;\n}\n#column-left button:hover,\n#column-right .inner .landing_page_message .msg_button:hover {\n    background-color: #c45e1b;\n}\n\n\n@media screen and (max-width: 959px) {\n    #column-left {\n        width: 100%;\n        min-height: 0;\n        height: auto;\n        display: block;\n        padding-top: 60px;\n    }\n    #column-left .inner {\n        padding: 0 30px;\n    }\n    #column-right {\n        display: none;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/homepageStyle.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    /* main theme */\n    --white: white;\n    --primary-light: #f8f9fa;\n    --secondary-light: #e9ecef;\n\n    --primary-dark-blue: #3a0ca3;\n    --primary-light-blue: #4cc9f0;\n    --primary-dark-purple: #7209b7;\n    --secondary-mid-blue: #4361ee;\n\n    --highlight-pink: #f72585;\n\n    --black: #000;\n    --primary-dark: #212529;\n    --secondary-dark-gray: #979dac;\n    /* DARK MODE BELOW */\n    /* OTHER THEME BELOW */\n}\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody, html {\n    font-family: 'Arvo', serif;\n}\nbody {\n    min-height: 100vh;\n    /* padding: 0 20px; */\n    background-color: azure;\n}\n\n#column-wrap {\n    background-color: var(--primary-light);\n\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    \n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    \n    -webkit-flex-wrap: wrap;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    \n    min-height: 100vh;\n}\n\n#column-left {\n    width: 35%;\n    margin: 0 auto;\n    min-height: 100vh;\n    height: 100%;\n\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n#column-left .inner {\n    padding: 0 50px;\n    margin: 0 auto;\n    max-width: 485px;\n}\n\n#column-left img {\n    width: 120px;\n    display: block;\n    margin: 0 auto;\n}\n\n#column-left h1 {\n    /* font-family: 'Arvo', serif; */\n    color: #444;\n    font-size: 30px;\n    font-weight: 400;\n    text-align: center;\n    margin: 24px 0;\n}\n\n#column-left .create {\n    text-align: center;\n    margin: 0 0 20px 0;\n}\n\n#column-left form {\n    margin: 20px 0;\n}\n\n#column-left .input-wrap {\n    margin: 0 0 25px 0;\n}\n#column-left label {\n    display: block;\n    color: #444;\n    font-size: 1rem;\n    font-weight: 700;\n    margin: 0 0 10px 0;\n}\n#column-left input[type=text], \n#column-left input[type=password],\n#column-left input[type=email] {\n    display: block;\n    width: 100%;\n    border: 1px solid #ddd;\n    border-radius: 3px;\n    font-size: 18px;\n    line-height: 1;\n    padding: 13px 15px;\n    color: #444;\n    -webkit-appearance: none;\n    appearance: none;\n}\n#column-left button {\n    display: block;\n    width: 100%;\n    line-height: 1;\n    background-color: #e27730;\n    border-radius: 3px;\n    border: none;\n    color: #fff;\n    font-size: 18px;\n    font-weight: 700;\n    padding: 16px 15px;\n    cursor: pointer;\n}\n#column-left .forgot {\n    text-align: center;\n    font-size: 16px;\n    margin: 20px 0 0;\n}\n#column-left .forgot a {\n    color: #666;\n    text-decoration: underline;\n}\n#column-left .footer {\n    text-align: center;\n    margin: 40px 0 0;\n    color: #888;\n    font-size: 12px;\n}\n\n#column-right {\n    margin: 0;\n    width: 65%;\n    min-height: 100vh;\n    height: 100%;\n\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n\n    background-image: url(\"../assets/img/book-wall-background.jpg\");\n    background-color: #cccccc;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n#column-right .inner {\n    display: block;\n    width: 100%;\n    text-align: center;\n}\n\n#column-right .inner .landing_page_message {\n    padding: 44px 60px 50px 60px;\n    background-color: #fff;\n    max-width: 440px;\n    margin: auto;\n    text-align: left;\n}\n\n#column-right .inner .landing_page_message .msg_title {\n    /* font-family: 'Arvo', serif; */\n    color: #444444;\n    margin-bottom: 26px;\n    line-height: 1.4;\n    font-size: 27px;\n    font-weight: 400;\n    margin-top: 0;\n}\n\n#column-right .inner .landing_page_message .msg_content {\n    color: #777777;\n    font-size: 18px;\n    margin-bottom: 32px;\n    line-height: 1.6em;\n}\n\n#column-right .inner .landing_page_message .msg_button {\n    background-color: #DE7739;\n    border-radius: 3px;\n    font-size: 16px;\n}\n#column-right .inner .landing_page_message .msg_button a {\n    display: block;\n    width: 100%;\n    color: #fff;\n    padding: 20px;\n    text-decoration: none;\n    background-image: url(../assets/icons/arrow-right-thin-circle-outline.png);\n    background-repeat: no-repeat;\n    background-position: calc(100% - 20px) center;\n    background-size: 18px;\n}\n#column-left button:hover,\n#column-right .inner .landing_page_message .msg_button:hover {\n    background-color: #c45e1b;\n}\n\n\n@media screen and (max-width: 959px) {\n    #column-left {\n        width: 100%;\n        min-height: 0;\n        height: auto;\n        display: block;\n        padding-top: 60px;\n    }\n    #column-left .inner {\n        padding: 0 30px;\n    }\n    #column-right {\n        display: none;\n    }\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/homepageStyle.css":
/*!***********************************!*\
  !*** ./src/css/homepageStyle.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_homepageStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./homepageStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/homepageStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_homepageStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_homepageStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_homepageStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_homepageStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/assets/icons/arrow-right-thin-circle-outline.png":
/*!**************************************************************!*\
  !*** ./src/assets/icons/arrow-right-thin-circle-outline.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2d2f77b716033cd3b26.png";

/***/ }),

/***/ "./src/assets/icons/book-open-page-variant-outline.svg":
/*!*************************************************************!*\
  !*** ./src/assets/icons/book-open-page-variant-outline.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05b6980826aa2e4fffba.svg";

/***/ }),

/***/ "./src/assets/img/book-wall-background.jpg":
/*!*************************************************!*\
  !*** ./src/assets/img/book-wall-background.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "beb8fbe5a00cae96cf55.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLFFBQVEsS0FBSyxLQUFLLFVBQVUsVUFB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QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2Nzcy9ob21lcGFnZVN0eWxlLmNzcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2Nzcy9ob21lcGFnZVN0eWxlLmNzcz9jMjNiIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jc3MvaG9tZXBhZ2VTdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgbG9naW5Vc2VySGFuZGxlciB9IGZyb20gXCIuL2pzL2xvZ2luL2xvZ2luXCJcbmNvbnN0IGxvZ2luU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1zdWJtaXQtYnRuXCIpO1xuXG5sb2dpblN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9naW5Vc2VySGFuZGxlcik7XG5cbmltcG9ydCBib29rc2hlbGZJY29uIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9ib29rLW9wZW4tcGFnZS12YXJpYW50LW91dGxpbmUuc3ZnXCJcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaWItaWNvbi1ob21lLXBhZ2VcIikuc3JjID0gYm9va3NoZWxmSWNvbjtcblxuXG4vLyB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuLy8gXHRzZXRDdXJyZW50VGhlbWUoREVGQVVMVF9USEVNRSk7XG4vLyBcdHNldEN1cnJlbnRCb29rcyhjdXJyZW50Qm9va3MpO1xuLy8gXHRyZW5kZXJCb29rcygpO1xuLy8gfTtcbiIsImNvbnN0IHVzZXJuYW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJuYW1lXCIpO1xuY29uc3QgcGFzc3dvcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5cbmV4cG9ydCBjb25zdCBsb2dpblVzZXJIYW5kbGVyID0gYXN5bmMgZnVuY3Rpb24gKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGNvbnN0IHVzZXJuYW1lID0gdXNlcm5hbWVFbC52YWx1ZS50cmltKCk7XG5cdGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRFbC52YWx1ZS50cmltKCk7XG5cblx0Ly8gQ09ERSBUTyBWQUxJREFURSBFTVBUWSBJTlBVVFNcblxuXHRpZiAodXNlcm5hbWUgJiYgcGFzc3dvcmQpIHtcblx0XHRjb25zdCBsb2dpblVzZXJEYXRhID0ge1xuXHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRwYXNzd29yZCxcblx0XHR9O1xuXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnMvbG9naW5cIiwge1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGxvZ2luVXNlckRhdGEpLFxuXHRcdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHRcdH0pO1xuXG5cdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG5cdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHQvLyBkaXJlY3QgbG9nZ2VkLWluIHVzZXIgdG8gaG9tZSBwYWdlXG5cdFx0XHRkb2N1bWVudC5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWxlcnQoXCJGYWlsZWQgdG8gbG9nIGluLlwiKTtcblx0XHR9XG5cdH1cbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltZy9ib29rLXdhbGwtYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvYXJyb3ctcmlnaHQtdGhpbi1jaXJjbGUtb3V0bGluZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAvKiBtYWluIHRoZW1lICovXFxuICAgIC0td2hpdGU6IHdoaXRlO1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNmOGY5ZmE7XFxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZTllY2VmO1xcblxcbiAgICAtLXByaW1hcnktZGFyay1ibHVlOiAjM2EwY2EzO1xcbiAgICAtLXByaW1hcnktbGlnaHQtYmx1ZTogIzRjYzlmMDtcXG4gICAgLS1wcmltYXJ5LWRhcmstcHVycGxlOiAjNzIwOWI3O1xcbiAgICAtLXNlY29uZGFyeS1taWQtYmx1ZTogIzQzNjFlZTtcXG5cXG4gICAgLS1oaWdobGlnaHQtcGluazogI2Y3MjU4NTtcXG5cXG4gICAgLS1ibGFjazogIzAwMDtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMyMTI1Mjk7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcmstZ3JheTogIzk3OWRhYztcXG4gICAgLyogREFSSyBNT0RFIEJFTE9XICovXFxuICAgIC8qIE9USEVSIFRIRU1FIEJFTE9XICovXFxufVxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0Fydm8nLCBzZXJpZjtcXG59XFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBwYWRkaW5nOiAwIDIwcHg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4jY29sdW1uLXdyYXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG5cXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gICAgXFxuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIFxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbHVtbi1sZWZ0IHtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb2x1bW4tbGVmdCAuaW5uZXIge1xcbiAgICBwYWRkaW5nOiAwIDUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDQ4NXB4O1xcbn1cXG5cXG4jY29sdW1uLWxlZnQgaW1nIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiNjb2x1bW4tbGVmdCBoMSB7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnQXJ2bycsIHNlcmlmOyAqL1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjRweCAwO1xcbn1cXG5cXG4jY29sdW1uLWxlZnQgLmNyZWF0ZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xcbn1cXG5cXG4jY29sdW1uLWxlZnQgZm9ybSB7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4jY29sdW1uLWxlZnQgLmlucHV0LXdyYXAge1xcbiAgICBtYXJnaW46IDAgMCAyNXB4IDA7XFxufVxcbiNjb2x1bW4tbGVmdCBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XFxufVxcbiNjb2x1bW4tbGVmdCBpbnB1dFt0eXBlPXRleHRdLCBcXG4jY29sdW1uLWxlZnQgaW5wdXRbdHlwZT1wYXNzd29yZF0sXFxuI2NvbHVtbi1sZWZ0IGlucHV0W3R5cGU9ZW1haWxdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHBhZGRpbmc6IDEzcHggMTVweDtcXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuI2NvbHVtbi1sZWZ0IGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjc3MzA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBwYWRkaW5nOiAxNnB4IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2NvbHVtbi1sZWZ0IC5mb3Jnb3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMDtcXG59XFxuI2NvbHVtbi1sZWZ0IC5mb3Jnb3QgYSB7XFxuICAgIGNvbG9yOiAjNjY2O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI2NvbHVtbi1sZWZ0IC5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNDBweCAwIDA7XFxuICAgIGNvbG9yOiAjODg4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbiNjb2x1bW4tcmlnaHQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNjb2x1bW4tcmlnaHQgLmlubmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb2x1bW4tcmlnaHQgLmlubmVyIC5sYW5kaW5nX3BhZ2VfbWVzc2FnZSB7XFxuICAgIHBhZGRpbmc6IDQ0cHggNjBweCA1MHB4IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG1heC13aWR0aDogNDQwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2NvbHVtbi1yaWdodCAuaW5uZXIgLmxhbmRpbmdfcGFnZV9tZXNzYWdlIC5tc2dfdGl0bGUge1xcbiAgICAvKiBmb250LWZhbWlseTogJ0Fydm8nLCBzZXJpZjsgKi9cXG4gICAgY29sb3I6ICM0NDQ0NDQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuI2NvbHVtbi1yaWdodCAuaW5uZXIgLmxhbmRpbmdfcGFnZV9tZXNzYWdlIC5tc2dfY29udGVudCB7XFxuICAgIGNvbG9yOiAjNzc3Nzc3O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcXG59XFxuXFxuI2NvbHVtbi1yaWdodCAuaW5uZXIgLmxhbmRpbmdfcGFnZV9tZXNzYWdlIC5tc2dfYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFNzczOTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbiNjb2x1bW4tcmlnaHQgLmlubmVyIC5sYW5kaW5nX3BhZ2VfbWVzc2FnZSAubXNnX2J1dHRvbiBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyMHB4KSBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMThweDtcXG59XFxuI2NvbHVtbi1sZWZ0IGJ1dHRvbjpob3ZlcixcXG4jY29sdW1uLXJpZ2h0IC5pbm5lciAubGFuZGluZ19wYWdlX21lc3NhZ2UgLm1zZ19idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQ1ZTFiO1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xcbiAgICAjY29sdW1uLWxlZnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgfVxcbiAgICAjY29sdW1uLWxlZnQgLmlubmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcXG4gICAgfVxcbiAgICAjY29sdW1uLXJpZ2h0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob21lcGFnZVN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLDBCQUEwQjs7SUFFMUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsNkJB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Q1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5REFBMEU7SUFDMUUsNEJBQTRCO0lBQzVCLDZDQUE2QztJQUM3QyxxQkFBcUI7QUFDekI7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLFlBQVk7UUFDWixjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAvKiBtYWluIHRoZW1lICovXFxuICAgIC0td2hpdGU6IHdoaXRlO1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNmOGY5ZmE7XFxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZTllY2VmO1xcblxcbiAgICAtLXByaW1hcnktZGFyay1ibHVlOiAjM2EwY2EzO1xcbiAgICAtLXByaW1hcnktbGlnaHQtYmx1ZTogIzRjYzlmMDtcXG4gICAgLS1wcmltYXJ5LWRhcmstcHVycGxlOiAjNzIwOWI3O1xcbiAgICAtLXNlY29uZGFyeS1taWQtYmx1ZTogIzQzNjFlZTtcXG5cXG4gICAgLS1oaWdobGlnaHQtcGluazogI2Y3MjU4NTtcXG5cXG4gICAgLS1ibGFjazogIzAwMDtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMyMTI1Mjk7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcmstZ3JheTogIzk3OWRhYztcXG4gICAgLyogREFSSyBNT0RFIEJFTE9XICovXFxuICAgIC8qIE9USEVSIFRIRU1FIEJFTE9XICovXFxufVxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0Fydm8nLCBzZXJpZjtcXG59XFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBwYWRkaW5nOiAwIDIwcHg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4jY29sdW1uLXdyYXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG5cXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gICAgXFxuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIFxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbHVtbi1sZWZ0IHtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb2x1bW4tbGVmdCAuaW5uZXIge1xcbiAgICBwYWRkaW5nOiAwIDUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDQ4NXB4O1xcbn1cXG5cXG4jY29sdW1uLWxlZnQgaW1nIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiNjb2x1bW4tbGVmdCBoMSB7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnQXJ2bycsIHNlcmlmOyAqL1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjRweCAwO1xcbn1cXG5cXG4jY29sdW1uLWxlZnQgLmNyZWF0ZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xcbn1cXG5cXG4jY29sdW1uLWxlZnQgZm9ybSB7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4jY29sdW1uLWxlZnQgLmlucHV0LXdyYXAge1xcbiAgICBtYXJnaW46IDAgMCAyNXB4IDA7XFxufVxcbiNjb2x1bW4tbGVmdCBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XFxufVxcbiNjb2x1bW4tbGVmdCBpbnB1dFt0eXBlPXRleHRdLCBcXG4jY29sdW1uLWxlZnQgaW5wdXRbdHlwZT1wYXNzd29yZF0sXFxuI2NvbHVtbi1sZWZ0IGlucHV0W3R5cGU9ZW1haWxdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHBhZGRpbmc6IDEzcHggMTVweDtcXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuI2NvbHVtbi1sZWZ0IGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjc3MzA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBwYWRkaW5nOiAxNnB4IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2NvbHVtbi1sZWZ0IC5mb3Jnb3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMDtcXG59XFxuI2NvbHVtbi1sZWZ0IC5mb3Jnb3QgYSB7XFxuICAgIGNvbG9yOiAjNjY2O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI2NvbHVtbi1sZWZ0IC5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNDBweCAwIDA7XFxuICAgIGNvbG9yOiAjODg4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbiNjb2x1bW4tcmlnaHQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ltZy9ib29rLXdhbGwtYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI2NvbHVtbi1yaWdodCAuaW5uZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbHVtbi1yaWdodCAuaW5uZXIgLmxhbmRpbmdfcGFnZV9tZXNzYWdlIHtcXG4gICAgcGFkZGluZzogNDRweCA2MHB4IDUwcHggNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWF4LXdpZHRoOiA0NDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jY29sdW1uLXJpZ2h0IC5pbm5lciAubGFuZGluZ19wYWdlX21lc3NhZ2UgLm1zZ190aXRsZSB7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnQXJ2bycsIHNlcmlmOyAqL1xcbiAgICBjb2xvcjogIzQ0NDQ0NDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gICAgZm9udC1zaXplOiAyN3B4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4jY29sdW1uLXJpZ2h0IC5pbm5lciAubGFuZGluZ19wYWdlX21lc3NhZ2UgLm1zZ19jb250ZW50IHtcXG4gICAgY29sb3I6ICM3Nzc3Nzc7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xcbn1cXG5cXG4jY29sdW1uLXJpZ2h0IC5pbm5lciAubGFuZGluZ19wYWdlX21lc3NhZ2UgLm1zZ19idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREU3NzM5O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuI2NvbHVtbi1yaWdodCAuaW5uZXIgLmxhbmRpbmdfcGFnZV9tZXNzYWdlIC5tc2dfYnV0dG9uIGEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaWNvbnMvYXJyb3ctcmlnaHQtdGhpbi1jaXJjbGUtb3V0bGluZS5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyMHB4KSBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMThweDtcXG59XFxuI2NvbHVtbi1sZWZ0IGJ1dHRvbjpob3ZlcixcXG4jY29sdW1uLXJpZ2h0IC5pbm5lciAubGFuZGluZ19wYWdlX21lc3NhZ2UgLm1zZ19idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQ1ZTFiO1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xcbiAgICAjY29sdW1uLWxlZnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgfVxcbiAgICAjY29sdW1uLWxlZnQgLmlubmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcXG4gICAgfVxcbiAgICAjY29sdW1uLXJpZ2h0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWVwYWdlU3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lcGFnZVN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsic3R5bGVzIiwibG9naW5Vc2VySGFuZGxlciIsImxvZ2luU3VibWl0QnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvb2tzaGVsZkljb24iLCJzcmMiLCJ1c2VybmFtZUVsIiwicGFzc3dvcmRFbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJuYW1lIiwidmFsdWUiLCJ0cmltIiwicGFzc3dvcmQiLCJsb2dpblVzZXJEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJvayIsImxvY2F0aW9uIiwicmVwbGFjZSIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==