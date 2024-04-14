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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Auth; }\n/* harmony export */ });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aristarh/Developer/development/github/chat-demo/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Auth() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_0__.Context),\n      username = _useContext.username,\n      setUsername = _useContext.setUsername,\n      secret = _useContext.secret,\n      setSecret = _useContext.setSecret;\n\n  function _onSubmit(e) {\n    e.preventDefault();\n    if (username.length === 1 || secret.length === 1) return;\n    axios__WEBPACK_IMPORTED_MODULE_1___default().put(\"https://api.chatengine.io/users/\", {\n      username: username,\n      secret: secret\n    }, {\n      headers: {\n        \"Private-Key\": \"341384ca-6db0-4767-bf5f-1fc80b9f1bd4\"\n      }\n    }).then(function (r) {\n      router.push(\"/chats\");\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n    className: \"auth-form\",\n    onSubmit: function onSubmit(e) {\n      return _onSubmit(e);\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"auth-title\",\n      children: \"NextJS Chat\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 12\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      placeholder: \"Email\",\n      className: \"text-input\",\n      onChange: function onChange(e) {\n        return setUsername(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"password\",\n      placeholder: \"Password\",\n      className: \"text-input\",\n      onChange: function onChange(e) {\n        return setSecret(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      className: \"submit-button\",\n      children: \"Login / Sign Up\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 10\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Auth, \"IuCUN5t5UvMb/CLEVxjk3cCpN1E=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = Auth;\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUdlLFNBQVNLLElBQVQsR0FBZ0I7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUF4Qjs7QUFDQSxvQkFBcURELGlEQUFVLENBQUNILDZDQUFELENBQS9EO0FBQUEsTUFBUU8sUUFBUixlQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFdBQWxCLGVBQWtCQSxXQUFsQjtBQUFBLE1BQStCQyxNQUEvQixlQUErQkEsTUFBL0I7QUFBQSxNQUF1Q0MsU0FBdkMsZUFBdUNBLFNBQXZDOztBQUdBLFdBQVNDLFNBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ3BCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFJTixRQUFRLENBQUNPLE1BQVQsS0FBb0IsQ0FBcEIsSUFBeUJMLE1BQU0sQ0FBQ0ssTUFBUCxLQUFrQixDQUEvQyxFQUFrRDtBQUVsRGIsSUFBQUEsZ0RBQUEsQ0FFRSxrQ0FGRixFQUdFO0FBQUVNLE1BQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZRSxNQUFBQSxNQUFNLEVBQU5BO0FBQVosS0FIRixFQUlFO0FBQUVPLE1BQUFBLE9BQU8sRUFBRTtBQUFFLHVCQUFlO0FBQWpCO0FBQVgsS0FKRixFQU1FQyxJQU5GLENBTVEsVUFBQUMsQ0FBQyxFQUFJO0FBQ1haLE1BQUFBLE1BQU0sQ0FBQ2EsSUFBUCxDQUFZLFFBQVo7QUFDQSxLQVJGO0FBU0E7O0FBR0Qsc0JBQ0M7QUFBTSxhQUFTLEVBQUMsV0FBaEI7QUFBNEIsWUFBUSxFQUFHLGtCQUFBUCxDQUFDO0FBQUEsYUFBSUQsU0FBUSxDQUFDQyxDQUFELENBQVo7QUFBQSxLQUF4QztBQUFBLDRCQUNTO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVCxlQUtVO0FBQ0YsaUJBQVcsRUFBQyxPQURWO0FBRUEsZUFBUyxFQUFDLFlBRlY7QUFHQSxjQUFRLEVBQUcsa0JBQUFBLENBQUM7QUFBQSxlQUFJSixXQUFXLENBQUNJLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMVixlQVdVO0FBQ0csVUFBSSxFQUFDLFVBRFI7QUFFRyxpQkFBVyxFQUFDLFVBRmY7QUFHSSxlQUFTLEVBQUMsWUFIZDtBQUlJLGNBQVEsRUFBRyxrQkFBQVQsQ0FBQztBQUFBLGVBQUlGLFNBQVMsQ0FBQ0UsQ0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUFBO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYVixlQWtCTztBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGVBQVMsRUFBQyxlQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXdCQTs7R0E5Q3VCaEI7VUFDUkQ7OztLQURRQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiXG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKCkge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCB7IHVzZXJuYW1lLCBzZXRVc2VybmFtZSwgc2VjcmV0LCBzZXRTZWNyZXQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcblxuXG5cdGZ1bmN0aW9uIG9uU3VibWl0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcblx0XHRpZiAodXNlcm5hbWUubGVuZ3RoID09PSAxIHx8IHNlY3JldC5sZW5ndGggPT09IDEpIHJldHVyblxuXHRcdFxuXHRcdGF4aW9zXG5cdFx0XHQucHV0KFxuXHRcdFx0XHRcImh0dHBzOi8vYXBpLmNoYXRlbmdpbmUuaW8vdXNlcnMvXCIsXG5cdFx0XHRcdHsgdXNlcm5hbWUsIHNlY3JldCB9LFxuXHRcdFx0XHR7IGhlYWRlcnM6IHsgXCJQcml2YXRlLUtleVwiOiBcIjM0MTM4NGNhLTZkYjAtNDc2Ny1iZjVmLTFmYzgwYjlmMWJkNFwiIH0gfVxuXHRcdFx0KVxuXHRcdFx0LnRoZW4oIHIgPT4ge1xuXHRcdFx0XHRyb3V0ZXIucHVzaChcIi9jaGF0c1wiKVxuXHRcdFx0fSlcblx0fVxuXG5cblx0cmV0dXJuIChcblx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIiBvblN1Ym1pdD17IGUgPT4gb25TdWJtaXQoZSkgfT5cbiAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aC10aXRsZVwiPlxuXHRcdFx0XHROZXh0SlMgQ2hhdFxuXHRcdFx0PC9kaXY+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICBcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgXHRcdGNsYXNzTmFtZT1cInRleHQtaW5wdXRcIlxuICAgICAgICAgIFx0XHRvbkNoYW5nZT17IGUgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBcdHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcbiAgICAgICAgICAgICAgXHRcdG9uQ2hhbmdlPXsgZSA9PiBzZXRTZWNyZXQoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgIFx0Lz5cblxuICAgICAgICBcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIj5cbiAgICAgICAgICAgIFx0TG9naW4gLyBTaWduIFVwXG4gICAgICAgICAgXHQ8L2J1dHRvbj5cbiAgICBcdDwvZm9ybT5cblx0KVxufVxuIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJheGlvcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsIkF1dGgiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2VjcmV0Iiwic2V0U2VjcmV0Iiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJwdXQiLCJoZWFkZXJzIiwidGhlbiIsInIiLCJwdXNoIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});