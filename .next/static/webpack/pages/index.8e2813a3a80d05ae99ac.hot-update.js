"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Auth; }\n/* harmony export */ });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aristarh/Developer/development/github/chat-demo/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Auth() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  function _onSubmit(e) {\n    e.preventDefault();\n    if (username.length === 1 || secret.length === 1) return;\n    axios__WEBPACK_IMPORTED_MODULE_1___default().put(\"https://api.chatengine.io/users/\", {\n      username: username,\n      secret: secret\n    }, {\n      headers: {\n        \"Private-Key\": \"341384ca-6db0-4767-bf5f-1fc80b9f1bd4\"\n      }\n    }).then(function (r) {\n      router.push(\"/chats\");\n      localStorage.setItem(\"username\", username);\n      localStorage.setItem(\"secret\", secret);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n    className: \"auth-form\",\n    onSubmit: function onSubmit(e) {\n      return _onSubmit(e);\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"auth-title\",\n      children: \"RKSI Chat\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 12\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"form-cont\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n        type: \"username\",\n        placeholder: \"\\u0418\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\",\n        className: \"text-input\",\n        onChange: function onChange(e) {\n          return setUsername(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n        type: \"password\",\n        placeholder: \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\",\n        className: \"text-input\",\n        onChange: function onChange(e) {\n          return setSecret(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        className: \"submit-button\",\n        children: \"\\u0412\\u043E\\u0439\\u0442\\u0438\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Auth, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = Auth;\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUdlLFNBQVNNLElBQVQsR0FBZ0I7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUF4Qjs7QUFJQSxXQUFTRyxTQUFULENBQWtCQyxDQUFsQixFQUFxQjtBQUNwQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUEsUUFBSUMsUUFBUSxDQUFDQyxNQUFULEtBQW9CLENBQXBCLElBQXlCQyxNQUFNLENBQUNELE1BQVAsS0FBa0IsQ0FBL0MsRUFBa0Q7QUFFbERYLElBQUFBLGdEQUFBLENBRUUsa0NBRkYsRUFHRTtBQUFFVSxNQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUUsTUFBQUEsTUFBTSxFQUFOQTtBQUFaLEtBSEYsRUFJRTtBQUFFRSxNQUFBQSxPQUFPLEVBQUU7QUFBRSx1QkFBZTtBQUFqQjtBQUFYLEtBSkYsRUFNRUMsSUFORixDQU1RLFVBQUFDLENBQUMsRUFBSTtBQUNYVixNQUFBQSxNQUFNLENBQUNXLElBQVAsQ0FBWSxRQUFaO0FBQ0FDLE1BQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixFQUFpQ1QsUUFBakM7QUFDQVEsTUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLEVBQStCUCxNQUEvQjtBQUNBLEtBVkY7QUFXQTs7QUFHRCxzQkFDQztBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUE0QixZQUFRLEVBQUcsa0JBQUFKLENBQUM7QUFBQSxhQUFJRCxTQUFRLENBQUNDLENBQUQsQ0FBWjtBQUFBLEtBQXhDO0FBQUEsNEJBQ1M7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURULGVBS0M7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNDO0FBQ0MsWUFBSSxFQUFDLFVBRE47QUFFQyxtQkFBVyxFQUFDLDZGQUZiO0FBR0MsaUJBQVMsRUFBQyxZQUhYO0FBSUMsZ0JBQVEsRUFBRyxrQkFBQUEsQ0FBQztBQUFBLGlCQUFJWSxXQUFXLENBQUNaLENBQUMsQ0FBQ2EsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQVFDO0FBQ0MsWUFBSSxFQUFDLFVBRE47QUFFQyxtQkFBVyxFQUFDLHNDQUZiO0FBR0MsaUJBQVMsRUFBQyxZQUhYO0FBSUMsZ0JBQVEsRUFBRyxrQkFBQWQsQ0FBQztBQUFBLGlCQUFJZSxTQUFTLENBQUNmLENBQUMsQ0FBQ2EsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRCxlQWVDO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQyxlQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMkJBOztHQW5EdUJqQjtVQUNSRDs7O0tBRFFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCJcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKCkge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRcblxuXG5cdGZ1bmN0aW9uIG9uU3VibWl0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcblx0XHRpZiAodXNlcm5hbWUubGVuZ3RoID09PSAxIHx8IHNlY3JldC5sZW5ndGggPT09IDEpIHJldHVyblxuXHRcdFxuXHRcdGF4aW9zXG5cdFx0XHQucHV0KFxuXHRcdFx0XHRcImh0dHBzOi8vYXBpLmNoYXRlbmdpbmUuaW8vdXNlcnMvXCIsXG5cdFx0XHRcdHsgdXNlcm5hbWUsIHNlY3JldCB9LFxuXHRcdFx0XHR7IGhlYWRlcnM6IHsgXCJQcml2YXRlLUtleVwiOiBcIjM0MTM4NGNhLTZkYjAtNDc2Ny1iZjVmLTFmYzgwYjlmMWJkNFwiIH0gfVxuXHRcdFx0KVxuXHRcdFx0LnRoZW4oIHIgPT4ge1xuXHRcdFx0XHRyb3V0ZXIucHVzaChcIi9jaGF0c1wiKVxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIHVzZXJuYW1lKVxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlY3JldFwiLCBzZWNyZXQpXG5cdFx0XHR9KVxuXHR9XG5cblxuXHRyZXR1cm4gKFxuXHRcdDxmb3JtIGNsYXNzTmFtZT1cImF1dGgtZm9ybVwiIG9uU3VibWl0PXsgZSA9PiBvblN1Ym1pdChlKSB9PlxuICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJhdXRoLXRpdGxlXCI+XG5cdFx0XHRcdFJLU0kgQ2hhdFxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250XCI+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcblx0XHRcdFx0XHRvbkNoYW5nZT17IGUgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpIH1cblx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcblx0XHRcdFx0XHRvbkNoYW5nZT17IGUgPT4gc2V0U2VjcmV0KGUudGFyZ2V0LnZhbHVlKSB9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiPlxuXHRcdFx0XHRcdNCS0L7QudGC0Lhcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cbiAgICBcdDwvZm9ybT5cblx0KVxufVxuIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJheGlvcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQXV0aCIsInJvdXRlciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJsZW5ndGgiLCJzZWNyZXQiLCJwdXQiLCJoZWFkZXJzIiwidGhlbiIsInIiLCJwdXNoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNldFVzZXJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTZWNyZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});