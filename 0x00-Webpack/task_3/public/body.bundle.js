(self["webpackChunktask_1"] = self["webpackChunktask_1"] || []).push([["body"],{

/***/ "./modules/body/body.js":
/*!******************************!*\
  !*** ./modules/body/body.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.css */ "./modules/body/body.css");
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_body_css__WEBPACK_IMPORTED_MODULE_0__);

const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
const _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

let counter = 0;

$("<button>Click here to get started</button>").appendTo('body');
$("<p id='count'></p>").appendTo('body');

function updateCounter() {
  counter++;
  $('#count').html(`${counter} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));


/***/ }),

/***/ "./modules/body/body.css":
/*!*******************************!*\
  !*** ./modules/body/body.css ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\n\nSyntaxError\n\n(2:7) /alx-react/0x00-Webpack/task_3/modules/body/body.css Unknown word\n\n \u001b[90m 1 | \u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 2 | \u001b[39m      import API from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m      \u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 3 | \u001b[39m      import domAPI from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/styleDomAPI.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m      import insertFn from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/insertBySelector.js\"\u001b[39m\u001b[33m;\u001b[39m\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./modules/body/body.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9CO0FBQ3BCLFVBQVUsbUJBQU8sQ0FBQyxvREFBUTtBQUMxQixVQUFVLG1CQUFPLENBQUMsK0NBQVE7O0FBRTFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9COztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza18xLy4vbW9kdWxlcy9ib2R5L2JvZHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2JvZHkuY3NzJztcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxubGV0IGNvdW50ZXIgPSAwO1xuXG4kKFwiPGJ1dHRvbj5DbGljayBoZXJlIHRvIGdldCBzdGFydGVkPC9idXR0b24+XCIpLmFwcGVuZFRvKCdib2R5Jyk7XG4kKFwiPHAgaWQ9J2NvdW50Jz48L3A+XCIpLmFwcGVuZFRvKCdib2R5Jyk7XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXIoKSB7XG4gIGNvdW50ZXIrKztcbiAgJCgnI2NvdW50JykuaHRtbChgJHtjb3VudGVyfSBjbGlja3Mgb24gdGhlIGJ1dHRvbmApO1xufVxuXG4kKFwiYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgXy5kZWJvdW5jZSh1cGRhdGVDb3VudGVyLCA1MDApKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==