/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ \"./src/pages.js\");\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log(\"TEST\");\nconst arr = [1, 2, 3];\n\nconst blah = () => console.log(...arr);\n\nconsole.log(arr);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /var/www/Bullvalene/pp/src/pages.js: Unexpected token (25:1)\\n\\n\\u001b[0m \\u001b[90m 23 | \\u001b[39m\\t}\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 24 | \\u001b[39m\\t\\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 25 | \\u001b[39m\\t\\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m style\\u001b[33m=\\u001b[39m{outBorder}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\t\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 26 | \\u001b[39m\\t\\t\\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m style\\u001b[33m=\\u001b[39m{midBorder}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 27 | \\u001b[39m\\t\\t\\t\\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m style\\u001b[33m=\\u001b[39m{innerBorder}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 28 | \\u001b[39m\\t\\t\\t\\t{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mprops\\u001b[33m.\\u001b[39mcontents}\\u001b[0m\\n    at Parser.raise (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:3834:17)\\n    at Parser.unexpected (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:5142:16)\\n    at Parser.parseExprAtom (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:6279:20)\\n    at Parser.parseExprSubscripts (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:5848:23)\\n    at Parser.parseMaybeUnary (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:5828:21)\\n    at Parser.parseExprOps (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:5717:23)\\n    at Parser.parseMaybeConditional (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:5690:23)\\n    at Parser.parseMaybeAssign (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:5635:21)\\n    at Parser.parseParenAndDistinguishExpression (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:6429:28)\\n    at Parser.parseExprAtom (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:6211:21)\\n    at Parser.parseExprSubscripts (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:5848:23)\\n    at Parser.parseMaybeUnary (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:5828:21)\\n    at Parser.parseExprOps (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:5717:23)\\n    at Parser.parseMaybeConditional (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:5690:23)\\n    at Parser.parseMaybeAssign (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:5635:21)\\n    at Parser.parseExpression (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:5587:23)\\n    at Parser.parseReturnStatement (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:7559:28)\\n    at Parser.parseStatementContent (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:7237:21)\\n    at Parser.parseStatement (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:7199:17)\\n    at Parser.parseBlockOrModuleBlockBody (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:7757:25)\\n    at Parser.parseBlockBody (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:7744:10)\\n    at Parser.parseBlock (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:7733:10)\\n    at Parser.parseFunctionBody (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:6865:24)\\n    at Parser.parseFunctionBodyAndFinish (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:6847:10)\\n    at Parser.parseMethod (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:6789:10)\\n    at Parser.pushClassMethod (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:8140:30)\\n    at Parser.parseClassMemberWithIsStatic (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:8065:12)\\n    at Parser.parseClassMember (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:8007:10)\\n    at withTopicForbiddingContext (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:7962:14)\\n    at Parser.withTopicForbiddingContext (/var/www/Bullvalene/pp/node_modules/@babel/parser/lib/index.js:7133:14)\");\n\n//# sourceURL=webpack:///./src/pages.js?");

/***/ })

/******/ });