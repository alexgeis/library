"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["signup"],{

/***/ "./src/js/login/signup.js":
/*!********************************!*\
  !*** ./src/js/login/signup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_homepageStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/homepageStyle.css */ "./src/css/homepageStyle.css");
/* harmony import */ var _assets_icons_book_open_page_variant_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/book-open-page-variant-outline.svg */ "./src/assets/icons/book-open-page-variant-outline.svg");


document.querySelector("#lib-icon-signup-page").src = _assets_icons_book_open_page_variant_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const signupSubmitBtn = document.querySelector(".signup-submit-btn");
const createUserHandler = async function (e) {
  e.preventDefault();
  const emailInput = email.value.trim();
  const usernameInput = username.value.trim();
  const passwordInput = password.value.trim();
  if (usernameInput === "") {
    // // CODE TO WARN USER
    // const signupEmailErrMsg = document.querySelector("#signup-err-no-email");
    // signupEmailErrMsg.setAttribute("style", "display: block;");
    // const timeoutAmt = 1000 * 3;
    // setTimeout(() => {
    // 	signupEmailErrMsg.setAttribute("style", "display: none;");
    // }, timeoutAmt);
  }
  if (password) {
    const newUser = {
      emailInput,
      usernameInput,
      passwordInput
    };
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }

    // const userData = postData("/api/users", newUser);
    // setBookReadTotals();
    // renderBooks();
  }

  // const response = postData("/api/users");

  // // old logic
  // currentBooks.push(newUser);
  // setCurrentBooks(currentUsers);
  // console.log(currentUsers);
  // localStorage.setItem("books", JSON.stringify(currentBooks));
  // addBookSection.setAttribute("style", "display: none;");
  // setBookReadTotals();
  // renderBooks();
};

signupSubmitBtn.addEventListener("submit", createUserHandler);

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/login/signup.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvbG9naW4vc2lnbnVwLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jc3MvaG9tZXBhZ2VTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jc3MvaG9tZXBhZ2VTdHlsZS5jc3M/YzIzYiIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uLy4uL2Nzcy9ob21lcGFnZVN0eWxlLmNzc1wiO1xuaW1wb3J0IGJvb2tzaGVsZkljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29ucy9ib29rLW9wZW4tcGFnZS12YXJpYW50LW91dGxpbmUuc3ZnXCJcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaWItaWNvbi1zaWdudXAtcGFnZVwiKS5zcmMgPSBib29rc2hlbGZJY29uO1xuXG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG5jb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWVcIik7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5jb25zdCBzaWdudXBTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1zdWJtaXQtYnRuXCIpO1xuXG5jb25zdCBjcmVhdGVVc2VySGFuZGxlciA9IGFzeW5jIGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgZW1haWxJbnB1dCA9IGVtYWlsLnZhbHVlLnRyaW0oKTtcblx0Y29uc3QgdXNlcm5hbWVJbnB1dCA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcblx0Y29uc3QgcGFzc3dvcmRJbnB1dCA9IHBhc3N3b3JkLnZhbHVlLnRyaW0oKTtcblxuXHRpZiAodXNlcm5hbWVJbnB1dCA9PT0gXCJcIikge1xuXHRcdC8vIC8vIENPREUgVE8gV0FSTiBVU0VSXG5cdFx0Ly8gY29uc3Qgc2lnbnVwRW1haWxFcnJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZ251cC1lcnItbm8tZW1haWxcIik7XG5cdFx0Ly8gc2lnbnVwRW1haWxFcnJNc2cuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG5cdFx0Ly8gY29uc3QgdGltZW91dEFtdCA9IDEwMDAgKiAzO1xuXHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdC8vIFx0c2lnbnVwRW1haWxFcnJNc2cuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblx0XHQvLyB9LCB0aW1lb3V0QW10KTtcblx0fVxuXG5cdGlmIChwYXNzd29yZCkge1xuXHRcdGNvbnN0IG5ld1VzZXIgPSB7XG5cdFx0XHRlbWFpbElucHV0LFxuXHRcdFx0dXNlcm5hbWVJbnB1dCxcblx0XHRcdHBhc3N3b3JkSW5wdXQsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXJzXCIsIHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShuZXdVc2VyKSxcblx0XHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0XHR9KTtcblxuXHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0ZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFsZXJ0KFwiRmFpbGVkIHRvIHNpZ24gdXAuXCIpO1xuXHRcdH1cblxuXHRcdC8vIGNvbnN0IHVzZXJEYXRhID0gcG9zdERhdGEoXCIvYXBpL3VzZXJzXCIsIG5ld1VzZXIpO1xuXHRcdC8vIHNldEJvb2tSZWFkVG90YWxzKCk7XG5cdFx0Ly8gcmVuZGVyQm9va3MoKTtcblx0fVxuXG5cdC8vIGNvbnN0IHJlc3BvbnNlID0gcG9zdERhdGEoXCIvYXBpL3VzZXJzXCIpO1xuXG5cdC8vIC8vIG9sZCBsb2dpY1xuXHQvLyBjdXJyZW50Qm9va3MucHVzaChuZXdVc2VyKTtcblx0Ly8gc2V0Q3VycmVudEJvb2tzKGN1cnJlbnRVc2Vycyk7XG5cdC8vIGNvbnNvbGUubG9nKGN1cnJlbnRVc2Vycyk7XG5cdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYm9va3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEJvb2tzKSk7XG5cdC8vIGFkZEJvb2tTZWN0aW9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cdC8vIHNldEJvb2tSZWFkVG90YWxzKCk7XG5cdC8vIHJlbmRlckJvb2tzKCk7XG59O1xuc2lnbnVwU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY3JlYXRlVXNlckhhbmRsZXIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWcvYm9vay13YWxsLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL2Fycm93LXJpZ2h0LXRoaW4tY2lyY2xlLW91dGxpbmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLyogbWFpbiB0aGVtZSAqL1xcbiAgICAtLXdoaXRlOiB3aGl0ZTtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjZjhmOWZhO1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2U5ZWNlZjtcXG5cXG4gICAgLS1wcmltYXJ5LWRhcmstYmx1ZTogIzNhMGNhMztcXG4gICAgLS1wcmltYXJ5LWxpZ2h0LWJsdWU6ICM0Y2M5ZjA7XFxuICAgIC0tcHJpbWFyeS1kYXJrLXB1cnBsZTogIzcyMDliNztcXG4gICAgLS1zZWNvbmRhcnktbWlkLWJsdWU6ICM0MzYxZWU7XFxuXFxuICAgIC0taGlnaGxpZ2h0LXBpbms6ICNmNzI1ODU7XFxuXFxuICAgIC0tYmxhY2s6ICMwMDA7XFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMjEyNTI5O1xcbiAgICAtLXNlY29uZGFyeS1kYXJrLWdyYXk6ICM5NzlkYWM7XFxuICAgIC8qIERBUksgTU9ERSBCRUxPVyAqL1xcbiAgICAvKiBPVEhFUiBUSEVNRSBCRUxPVyAqL1xcbn1cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBcnZvJywgc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogcGFkZGluZzogMCAyMHB4OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG59XFxuXFxuI2NvbHVtbi13cmFwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIFxcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb2x1bW4tbGVmdCB7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29sdW1uLWxlZnQgLmlubmVyIHtcXG4gICAgcGFkZGluZzogMCA1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA0ODVweDtcXG59XFxuXFxuI2NvbHVtbi1sZWZ0IGltZyB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jY29sdW1uLWxlZnQgaDEge1xcbiAgICAvKiBmb250LWZhbWlseTogJ0Fydm8nLCBzZXJpZjsgKi9cXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDI0cHggMDtcXG59XFxuXFxuI2NvbHVtbi1sZWZ0IC5jcmVhdGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcXG59XFxuXFxuI2NvbHVtbi1sZWZ0IGZvcm0ge1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuI2NvbHVtbi1sZWZ0IC5pbnB1dC13cmFwIHtcXG4gICAgbWFyZ2luOiAwIDAgMjVweCAwO1xcbn1cXG4jY29sdW1uLWxlZnQgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbn1cXG4jY29sdW1uLWxlZnQgaW5wdXRbdHlwZT10ZXh0XSwgXFxuI2NvbHVtbi1sZWZ0IGlucHV0W3R5cGU9cGFzc3dvcmRdLFxcbiNjb2x1bW4tbGVmdCBpbnB1dFt0eXBlPWVtYWlsXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBwYWRkaW5nOiAxM3B4IDE1cHg7XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbiNjb2x1bW4tbGVmdCBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI3NzMwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZzogMTZweCAxNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNjb2x1bW4tbGVmdCAuZm9yZ290IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMjBweCAwIDA7XFxufVxcbiNjb2x1bW4tbGVmdCAuZm9yZ290IGEge1xcbiAgICBjb2xvcjogIzY2NjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbiNjb2x1bW4tbGVmdCAuZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDQwcHggMCAwO1xcbiAgICBjb2xvcjogIzg4ODtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jY29sdW1uLXJpZ2h0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jY29sdW1uLXJpZ2h0IC5pbm5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29sdW1uLXJpZ2h0IC5pbm5lciAubGFuZGluZ19wYWdlX21lc3NhZ2Uge1xcbiAgICBwYWRkaW5nOiA0NHB4IDYwcHggNTBweCA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNjb2x1bW4tcmlnaHQgLmlubmVyIC5sYW5kaW5nX3BhZ2VfbWVzc2FnZSAubXNnX3RpdGxlIHtcXG4gICAgLyogZm9udC1mYW1pbHk6ICdBcnZvJywgc2VyaWY7ICovXFxuICAgIGNvbG9yOiAjNDQ0NDQ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMS40O1xcbiAgICBmb250LXNpemU6IDI3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbiNjb2x1bW4tcmlnaHQgLmlubmVyIC5sYW5kaW5nX3BhZ2VfbWVzc2FnZSAubXNnX2NvbnRlbnQge1xcbiAgICBjb2xvcjogIzc3Nzc3NztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMS42ZW07XFxufVxcblxcbiNjb2x1bW4tcmlnaHQgLmlubmVyIC5sYW5kaW5nX3BhZ2VfbWVzc2FnZSAubXNnX2J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERTc3Mzk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4jY29sdW1uLXJpZ2h0IC5pbm5lciAubGFuZGluZ19wYWdlX21lc3NhZ2UgLm1zZ19idXR0b24gYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE4cHg7XFxufVxcbiNjb2x1bW4tbGVmdCBidXR0b246aG92ZXIsXFxuI2NvbHVtbi1yaWdodCAuaW5uZXIgLmxhbmRpbmdfcGFnZV9tZXNzYWdlIC5tc2dfYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0NWUxYjtcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcXG4gICAgI2NvbHVtbi1sZWZ0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLWhlaWdodDogMDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIH1cXG4gICAgI2NvbHVtbi1sZWZ0IC5pbm5lciB7XFxuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XFxuICAgIH1cXG4gICAgI2NvbHVtbi1yaWdodCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaG9tZXBhZ2VTdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHdCQUF3QjtJQUN4QiwwQkFBMEI7O0lBRTFCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDZCQUE2Qjs7SUFFN0IseUJBQXlCOztJQUV6QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLDBCQUEw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Q1osY0FBYztRQUNkLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLyogbWFpbiB0aGVtZSAqL1xcbiAgICAtLXdoaXRlOiB3aGl0ZTtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjZjhmOWZhO1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2U5ZWNlZjtcXG5cXG4gICAgLS1wcmltYXJ5LWRhcmstYmx1ZTogIzNhMGNhMztcXG4gICAgLS1wcmltYXJ5LWxpZ2h0LWJsdWU6ICM0Y2M5ZjA7XFxuICAgIC0tcHJpbWFyeS1kYXJrLXB1cnBsZTogIzcyMDliNztcXG4gICAgLS1zZWNvbmRhcnktbWlkLWJsdWU6ICM0MzYxZWU7XFxuXFxuICAgIC0taGlnaGxpZ2h0LXBpbms6ICNmNzI1ODU7XFxuXFxuICAgIC0tYmxhY2s6ICMwMDA7XFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMjEyNTI5O1xcbiAgICAtLXNlY29uZGFyeS1kYXJrLWdyYXk6ICM5NzlkYWM7XFxuICAgIC8qIERBUksgTU9ERSBCRUxPVyAqL1xcbiAgICAvKiBPVEhFUiBUSEVNRSBCRUxPVyAqL1xcbn1cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBcnZvJywgc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogcGFkZGluZzogMCAyMHB4OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG59XFxuXFxuI2NvbHVtbi13cmFwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIFxcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb2x1bW4tbGVmdCB7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29sdW1uLWxlZnQgLmlubmVyIHtcXG4gICAgcGFkZGluZzogMCA1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA0ODVweDtcXG59XFxuXFxuI2NvbHVtbi1sZWZ0IGltZyB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jY29sdW1uLWxlZnQgaDEge1xcbiAgICAvKiBmb250LWZhbWlseTogJ0Fydm8nLCBzZXJpZjsgKi9cXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDI0cHggMDtcXG59XFxuXFxuI2NvbHVtbi1sZWZ0IC5jcmVhdGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcXG59XFxuXFxuI2NvbHVtbi1sZWZ0IGZvcm0ge1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuI2NvbHVtbi1sZWZ0IC5pbnB1dC13cmFwIHtcXG4gICAgbWFyZ2luOiAwIDAgMjVweCAwO1xcbn1cXG4jY29sdW1uLWxlZnQgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbn1cXG4jY29sdW1uLWxlZnQgaW5wdXRbdHlwZT10ZXh0XSwgXFxuI2NvbHVtbi1sZWZ0IGlucHV0W3R5cGU9cGFzc3dvcmRdLFxcbiNjb2x1bW4tbGVmdCBpbnB1dFt0eXBlPWVtYWlsXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBwYWRkaW5nOiAxM3B4IDE1cHg7XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbiNjb2x1bW4tbGVmdCBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI3NzMwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZzogMTZweCAxNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNjb2x1bW4tbGVmdCAuZm9yZ290IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMjBweCAwIDA7XFxufVxcbiNjb2x1bW4tbGVmdCAuZm9yZ290IGEge1xcbiAgICBjb2xvcjogIzY2NjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbiNjb2x1bW4tbGVmdCAuZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDQwcHggMCAwO1xcbiAgICBjb2xvcjogIzg4ODtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jY29sdW1uLXJpZ2h0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWcvYm9vay13YWxsLWJhY2tncm91bmQuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNjb2x1bW4tcmlnaHQgLmlubmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb2x1bW4tcmlnaHQgLmlubmVyIC5sYW5kaW5nX3BhZ2VfbWVzc2FnZSB7XFxuICAgIHBhZGRpbmc6IDQ0cHggNjBweCA1MHB4IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG1heC13aWR0aDogNDQwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2NvbHVtbi1yaWdodCAuaW5uZXIgLmxhbmRpbmdfcGFnZV9tZXNzYWdlIC5tc2dfdGl0bGUge1xcbiAgICAvKiBmb250LWZhbWlseTogJ0Fydm8nLCBzZXJpZjsgKi9cXG4gICAgY29sb3I6ICM0NDQ0NDQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuI2NvbHVtbi1yaWdodCAuaW5uZXIgLmxhbmRpbmdfcGFnZV9tZXNzYWdlIC5tc2dfY29udGVudCB7XFxuICAgIGNvbG9yOiAjNzc3Nzc3O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcXG59XFxuXFxuI2NvbHVtbi1yaWdodCAuaW5uZXIgLmxhbmRpbmdfcGFnZV9tZXNzYWdlIC5tc2dfYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFNzczOTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbiNjb2x1bW4tcmlnaHQgLmlubmVyIC5sYW5kaW5nX3BhZ2VfbWVzc2FnZSAubXNnX2J1dHRvbiBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ljb25zL2Fycm93LXJpZ2h0LXRoaW4tY2lyY2xlLW91dGxpbmUucG5nKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE4cHg7XFxufVxcbiNjb2x1bW4tbGVmdCBidXR0b246aG92ZXIsXFxuI2NvbHVtbi1yaWdodCAuaW5uZXIgLmxhbmRpbmdfcGFnZV9tZXNzYWdlIC5tc2dfYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0NWUxYjtcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcXG4gICAgI2NvbHVtbi1sZWZ0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLWhlaWdodDogMDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIH1cXG4gICAgI2NvbHVtbi1sZWZ0IC5pbm5lciB7XFxuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XFxuICAgIH1cXG4gICAgI2NvbHVtbi1yaWdodCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lcGFnZVN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZXBhZ2VTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbImJvb2tzaGVsZkljb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJlbWFpbCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzaWdudXBTdWJtaXRCdG4iLCJjcmVhdGVVc2VySGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsSW5wdXQiLCJ2YWx1ZSIsInRyaW0iLCJ1c2VybmFtZUlucHV0IiwicGFzc3dvcmRJbnB1dCIsIm5ld1VzZXIiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwib2siLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJhbGVydCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9