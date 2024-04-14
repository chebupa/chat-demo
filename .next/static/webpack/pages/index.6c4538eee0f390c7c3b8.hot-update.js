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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Auth; }\n/* harmony export */ });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aristarh/Developer/development/github/chat-demo/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Auth() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_0__.Context),\n      username = _useContext.username,\n      setUsername = _useContext.setUsername,\n      secret = _useContext.secret,\n      setSecret = _useContext.setSecret;\n\n  function _onSubmit(e) {\n    e.preventDefault();\n    if (username.length === 1 || secret.length === 1) return;\n    axios__WEBPACK_IMPORTED_MODULE_1___default().put(\"https://api.chatengine.io/users/\", {\n      username: username,\n      secret: secret\n    }, {\n      headers: {\n        \"Private-Key\": \"341384ca-6db0-4767-bf5f-1fc80b9f1bd4\"\n      }\n    }).then(function (r) {\n      router.push(\"/chats\");\n      localStorage.setItem();\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n    className: \"auth-form\",\n    onSubmit: function onSubmit(e) {\n      return _onSubmit(e);\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"auth-title\",\n      children: \"RKSI Chat\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 12\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"form-cont\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n        type: \"username\",\n        placeholder: \"\\u0418\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\",\n        className: \"text-input\",\n        onChange: function onChange(e) {\n          return setUsername(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n        type: \"password\",\n        placeholder: \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\",\n        className: \"text-input\",\n        onChange: function onChange(e) {\n          return setSecret(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        className: \"submit-button\",\n        children: \"\\u0412\\u043E\\u0439\\u0442\\u0438\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Auth, \"IuCUN5t5UvMb/CLEVxjk3cCpN1E=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = Auth;\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUdlLFNBQVNLLElBQVQsR0FBZ0I7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUF4Qjs7QUFDQSxvQkFBcURELGlEQUFVLENBQUNILDZDQUFELENBQS9EO0FBQUEsTUFBUU8sUUFBUixlQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFdBQWxCLGVBQWtCQSxXQUFsQjtBQUFBLE1BQStCQyxNQUEvQixlQUErQkEsTUFBL0I7QUFBQSxNQUF1Q0MsU0FBdkMsZUFBdUNBLFNBQXZDOztBQUdBLFdBQVNDLFNBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ3BCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFJTixRQUFRLENBQUNPLE1BQVQsS0FBb0IsQ0FBcEIsSUFBeUJMLE1BQU0sQ0FBQ0ssTUFBUCxLQUFrQixDQUEvQyxFQUFrRDtBQUVsRGIsSUFBQUEsZ0RBQUEsQ0FFRSxrQ0FGRixFQUdFO0FBQUVNLE1BQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZRSxNQUFBQSxNQUFNLEVBQU5BO0FBQVosS0FIRixFQUlFO0FBQUVPLE1BQUFBLE9BQU8sRUFBRTtBQUFFLHVCQUFlO0FBQWpCO0FBQVgsS0FKRixFQU1FQyxJQU5GLENBTVEsVUFBQUMsQ0FBQyxFQUFJO0FBQ1haLE1BQUFBLE1BQU0sQ0FBQ2EsSUFBUCxDQUFZLFFBQVo7QUFDQUMsTUFBQUEsWUFBWSxDQUFDQyxPQUFiO0FBQ0EsS0FURjtBQVVBOztBQUdELHNCQUNDO0FBQU0sYUFBUyxFQUFDLFdBQWhCO0FBQTRCLFlBQVEsRUFBRyxrQkFBQVQsQ0FBQztBQUFBLGFBQUlELFNBQVEsQ0FBQ0MsQ0FBRCxDQUFaO0FBQUEsS0FBeEM7QUFBQSw0QkFDUztBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFQsZUFLQztBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0M7QUFDQyxZQUFJLEVBQUMsVUFETjtBQUVDLG1CQUFXLEVBQUMsNkZBRmI7QUFHQyxpQkFBUyxFQUFDLFlBSFg7QUFJQyxnQkFBUSxFQUFHLGtCQUFBQSxDQUFDO0FBQUEsaUJBQUlKLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDVSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBUUM7QUFDQyxZQUFJLEVBQUMsVUFETjtBQUVDLG1CQUFXLEVBQUMsc0NBRmI7QUFHQyxpQkFBUyxFQUFDLFlBSFg7QUFJQyxnQkFBUSxFQUFHLGtCQUFBWCxDQUFDO0FBQUEsaUJBQUlGLFNBQVMsQ0FBQ0UsQ0FBQyxDQUFDVSxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUFBO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJELGVBZUM7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDLGVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUEyQkE7O0dBbER1QmxCO1VBQ1JEOzs7S0FEUUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIlxuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCgpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgeyB1c2VybmFtZSwgc2V0VXNlcm5hbWUsIHNlY3JldCwgc2V0U2VjcmV0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG5cblxuXHRmdW5jdGlvbiBvblN1Ym1pdChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XG5cdFx0aWYgKHVzZXJuYW1lLmxlbmd0aCA9PT0gMSB8fCBzZWNyZXQubGVuZ3RoID09PSAxKSByZXR1cm5cblx0XHRcblx0XHRheGlvc1xuXHRcdFx0LnB1dChcblx0XHRcdFx0XCJodHRwczovL2FwaS5jaGF0ZW5naW5lLmlvL3VzZXJzL1wiLFxuXHRcdFx0XHR7IHVzZXJuYW1lLCBzZWNyZXQgfSxcblx0XHRcdFx0eyBoZWFkZXJzOiB7IFwiUHJpdmF0ZS1LZXlcIjogXCIzNDEzODRjYS02ZGIwLTQ3NjctYmY1Zi0xZmM4MGI5ZjFiZDRcIiB9IH1cblx0XHRcdClcblx0XHRcdC50aGVuKCByID0+IHtcblx0XHRcdFx0cm91dGVyLnB1c2goXCIvY2hhdHNcIilcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oKVxuXHRcdFx0fSlcblx0fVxuXG5cblx0cmV0dXJuIChcblx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIiBvblN1Ym1pdD17IGUgPT4gb25TdWJtaXQoZSkgfT5cbiAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aC10aXRsZVwiPlxuXHRcdFx0XHRSS1NJIENoYXRcblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udFwiPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwidXNlcm5hbWVcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1pbnB1dFwiXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBlID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKSB9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1pbnB1dFwiXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBlID0+IHNldFNlY3JldChlLnRhcmdldC52YWx1ZSkgfVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIj5cblx0XHRcdFx0XHTQktC+0LnRgtC4XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG4gICAgXHQ8L2Zvcm0+XG5cdClcbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiYXhpb3MiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJBdXRoIiwicm91dGVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNlY3JldCIsInNldFNlY3JldCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwicHV0IiwiaGVhZGVycyIsInRoZW4iLCJyIiwicHVzaCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});