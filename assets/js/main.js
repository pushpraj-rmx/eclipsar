/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_themeToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/themeToggle */ \"./src/js/modules/themeToggle.js\");\n/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropdown */ \"./src/js/modules/dropdown.js\");\n// main.js\n\n\n\n// Initialize the theme toggle functionality\n(0,_modules_themeToggle__WEBPACK_IMPORTED_MODULE_0__.themeToggle)();\n(0,_modules_dropdown__WEBPACK_IMPORTED_MODULE_1__.dropdown)();\n\n// Add more code as needed...\nconsole.log('hi..');\n\n//# sourceURL=webpack://eclipsar/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/dropdown.js":
/*!************************************!*\
  !*** ./src/js/modules/dropdown.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dropdown: () => (/* binding */ dropdown)\n/* harmony export */ });\nfunction dropdown() {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var dropdownBtn = document.querySelector(\".dropbtn\");\n    var dropdownContent = document.querySelector(\".dropdown-content\");\n\n    // Function to show the dropdown content\n    function showDropdown() {\n      dropdownContent.classList.add(\"show\");\n    }\n\n    // Function to hide the dropdown content\n    function hideDropdown() {\n      dropdownContent.classList.remove(\"show\");\n    }\n\n    // Event listeners for hover events\n    dropdownBtn.addEventListener(\"mouseover\", showDropdown);\n    dropdownBtn.addEventListener(\"mouseout\", hideDropdown);\n    dropdownContent.addEventListener(\"mouseout\", hideDropdown);\n  });\n}\n\n//# sourceURL=webpack://eclipsar/./src/js/modules/dropdown.js?");

/***/ }),

/***/ "./src/js/modules/themeToggle.js":
/*!***************************************!*\
  !*** ./src/js/modules/themeToggle.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   themeToggle: () => (/* binding */ themeToggle)\n/* harmony export */ });\n// themeToggle.js\nfunction themeToggle() {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var themeToggleBtn = document.getElementById(\"themeToggleBtn\");\n    var themeIcon = document.getElementById(\"themeIcon\");\n    themeToggleBtn.addEventListener(\"click\", function () {\n      // Toggle the 'dark-theme' class on the body\n      document.body.classList.toggle(\"dark-theme\");\n      document.body.classList.toggle(\"light-theme\");\n\n      // Toggle the icon between 'fa-sun' and 'fa-moon'\n      if (themeIcon.classList.contains(\"fa-sun\")) {\n        themeIcon.classList.remove(\"fa-sun\");\n        themeIcon.classList.add(\"fa-moon\");\n      } else {\n        themeIcon.classList.remove(\"fa-moon\");\n        themeIcon.classList.add(\"fa-sun\");\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://eclipsar/./src/js/modules/themeToggle.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;