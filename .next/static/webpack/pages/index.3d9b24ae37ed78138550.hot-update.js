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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Auth; }\n/* harmony export */ });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aristarh/Developer/development/github/chat-demo/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Auth() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_0__.Context),\n      username = _useContext.username,\n      setUsername = _useContext.setUsername,\n      secret = _useContext.secret,\n      setSecret = _useContext.setSecret;\n\n  function _onSubmit(e) {\n    e.preventDefault();\n    if (username.length === 1 || secret.length === 1) return;\n    axios__WEBPACK_IMPORTED_MODULE_1___default().put(\"https://api.chatengine.io/users/\", {\n      username: username,\n      secret: secret\n    }, {\n      headers: {\n        \"Private-Key\": \"341384ca-6db0-4767-bf5f-1fc80b9f1bd4\"\n      }\n    }).then(function (r) {\n      router.push(\"/chats\");\n      localStorage.setItem(\"\");\n      localStorage.setItem();\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n    className: \"auth-form\",\n    onSubmit: function onSubmit(e) {\n      return _onSubmit(e);\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"auth-title\",\n      children: \"RKSI Chat\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 12\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"form-cont\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n        type: \"username\",\n        placeholder: \"\\u0418\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\",\n        className: \"text-input\",\n        onChange: function onChange(e) {\n          return setUsername(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n        type: \"password\",\n        placeholder: \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\",\n        className: \"text-input\",\n        onChange: function onChange(e) {\n          return setSecret(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        className: \"submit-button\",\n        children: \"\\u0412\\u043E\\u0439\\u0442\\u0438\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Auth, \"IuCUN5t5UvMb/CLEVxjk3cCpN1E=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = Auth;\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUdlLFNBQVNLLElBQVQsR0FBZ0I7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUF4Qjs7QUFDQSxvQkFBcURELGlEQUFVLENBQUNILDZDQUFELENBQS9EO0FBQUEsTUFBUU8sUUFBUixlQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFdBQWxCLGVBQWtCQSxXQUFsQjtBQUFBLE1BQStCQyxNQUEvQixlQUErQkEsTUFBL0I7QUFBQSxNQUF1Q0MsU0FBdkMsZUFBdUNBLFNBQXZDOztBQUdBLFdBQVNDLFNBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ3BCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFJTixRQUFRLENBQUNPLE1BQVQsS0FBb0IsQ0FBcEIsSUFBeUJMLE1BQU0sQ0FBQ0ssTUFBUCxLQUFrQixDQUEvQyxFQUFrRDtBQUVsRGIsSUFBQUEsZ0RBQUEsQ0FFRSxrQ0FGRixFQUdFO0FBQUVNLE1BQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZRSxNQUFBQSxNQUFNLEVBQU5BO0FBQVosS0FIRixFQUlFO0FBQUVPLE1BQUFBLE9BQU8sRUFBRTtBQUFFLHVCQUFlO0FBQWpCO0FBQVgsS0FKRixFQU1FQyxJQU5GLENBTVEsVUFBQUMsQ0FBQyxFQUFJO0FBQ1haLE1BQUFBLE1BQU0sQ0FBQ2EsSUFBUCxDQUFZLFFBQVo7QUFDQUMsTUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLEVBQXJCO0FBQ0FELE1BQUFBLFlBQVksQ0FBQ0MsT0FBYjtBQUNBLEtBVkY7QUFXQTs7QUFHRCxzQkFDQztBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUE0QixZQUFRLEVBQUcsa0JBQUFULENBQUM7QUFBQSxhQUFJRCxTQUFRLENBQUNDLENBQUQsQ0FBWjtBQUFBLEtBQXhDO0FBQUEsNEJBQ1M7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURULGVBS0M7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNDO0FBQ0MsWUFBSSxFQUFDLFVBRE47QUFFQyxtQkFBVyxFQUFDLDZGQUZiO0FBR0MsaUJBQVMsRUFBQyxZQUhYO0FBSUMsZ0JBQVEsRUFBRyxrQkFBQUEsQ0FBQztBQUFBLGlCQUFJSixXQUFXLENBQUNJLENBQUMsQ0FBQ1UsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQVFDO0FBQ0MsWUFBSSxFQUFDLFVBRE47QUFFQyxtQkFBVyxFQUFDLHNDQUZiO0FBR0MsaUJBQVMsRUFBQyxZQUhYO0FBSUMsZ0JBQVEsRUFBRyxrQkFBQVgsQ0FBQztBQUFBLGlCQUFJRixTQUFTLENBQUNFLENBQUMsQ0FBQ1UsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRCxlQWVDO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQyxlQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMkJBOztHQW5EdUJsQjtVQUNSRDs7O0tBRFFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCJcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGgoKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IHsgdXNlcm5hbWUsIHNldFVzZXJuYW1lLCBzZWNyZXQsIHNldFNlY3JldCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuXG5cblx0ZnVuY3Rpb24gb25TdWJtaXQoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFxuXHRcdGlmICh1c2VybmFtZS5sZW5ndGggPT09IDEgfHwgc2VjcmV0Lmxlbmd0aCA9PT0gMSkgcmV0dXJuXG5cdFx0XG5cdFx0YXhpb3Ncblx0XHRcdC5wdXQoXG5cdFx0XHRcdFwiaHR0cHM6Ly9hcGkuY2hhdGVuZ2luZS5pby91c2Vycy9cIixcblx0XHRcdFx0eyB1c2VybmFtZSwgc2VjcmV0IH0sXG5cdFx0XHRcdHsgaGVhZGVyczogeyBcIlByaXZhdGUtS2V5XCI6IFwiMzQxMzg0Y2EtNmRiMC00NzY3LWJmNWYtMWZjODBiOWYxYmQ0XCIgfSB9XG5cdFx0XHQpXG5cdFx0XHQudGhlbiggciA9PiB7XG5cdFx0XHRcdHJvdXRlci5wdXNoKFwiL2NoYXRzXCIpXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiXCIpXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKClcblx0XHRcdH0pXG5cdH1cblxuXG5cdHJldHVybiAoXG5cdFx0PGZvcm0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtXCIgb25TdWJtaXQ9eyBlID0+IG9uU3VibWl0KGUpIH0+XG4gICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGgtdGl0bGVcIj5cblx0XHRcdFx0UktTSSBDaGF0XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRcIj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInRleHQtaW5wdXRcIlxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSkgfVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInRleHQtaW5wdXRcIlxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgZSA9PiBzZXRTZWNyZXQoZS50YXJnZXQudmFsdWUpIH1cblx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCI+XG5cdFx0XHRcdFx00JLQvtC50YLQuFxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuICAgIFx0PC9mb3JtPlxuXHQpXG59XG4iXSwibmFtZXMiOlsiQ29udGV4dCIsImF4aW9zIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiQXV0aCIsInJvdXRlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzZWNyZXQiLCJzZXRTZWNyZXQiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInB1dCIsImhlYWRlcnMiLCJ0aGVuIiwiciIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});