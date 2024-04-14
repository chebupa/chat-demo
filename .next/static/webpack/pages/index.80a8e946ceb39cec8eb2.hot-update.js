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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Auth\": function() { return /* binding */ Auth; }\n/* harmony export */ });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aristarh/Developer/development/github/chat-demo/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Auth = function Auth() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_0__.Context),\n      username = _useContext.username,\n      setUsername = _useContext.setUsername,\n      secret = _useContext.secret,\n      setSecret = _useContext.setSecret;\n\n  function _onSubmit(e) {\n    e.preventDefault();\n    if (username.length === 1 || secret.length === 1) return;\n    axios__WEBPACK_IMPORTED_MODULE_2___default().put(\"https://api.chatengine.io/users/\", {\n      username: username,\n      secret: secret\n    }, {\n      headers: {\n        \"Private-Key\": \"341384ca-6db0-4767-bf5f-1fc80b9f1bd4\"\n      }\n    }).then(function (r) {\n      router.push(\"/chats\");\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"background\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"auth-container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n        className: \"auth-form\",\n        onSubmit: function onSubmit(e) {\n          return _onSubmit(e);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"auth-title\",\n          children: \"NextJS Chat\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"input-container\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            placeholder: \"Email\",\n            className: \"text-input\",\n            onChange: function onChange(e) {\n              return setUsername(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"input-container\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"password\",\n            placeholder: \"Password\",\n            className: \"text-input\",\n            onChange: function onChange(e) {\n              return setSecret(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          className: \"submit-button\",\n          children: \"Login / Sign Up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 6\n  }, _this);\n};\n\n_s(Auth, \"IuCUN5t5UvMb/CLEVxjk3cCpN1E=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = Auth;\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFHTyxJQUFNSyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBeEI7O0FBQ0Esb0JBQXFERixpREFBVSxDQUFDRiw2Q0FBRCxDQUEvRDtBQUFBLE1BQVFPLFFBQVIsZUFBUUEsUUFBUjtBQUFBLE1BQWtCQyxXQUFsQixlQUFrQkEsV0FBbEI7QUFBQSxNQUErQkMsTUFBL0IsZUFBK0JBLE1BQS9CO0FBQUEsTUFBdUNDLFNBQXZDLGVBQXVDQSxTQUF2Qzs7QUFHQSxXQUFTQyxTQUFULENBQWtCQyxDQUFsQixFQUFxQjtBQUNwQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUEsUUFBSU4sUUFBUSxDQUFDTyxNQUFULEtBQW9CLENBQXBCLElBQXlCTCxNQUFNLENBQUNLLE1BQVAsS0FBa0IsQ0FBL0MsRUFBa0Q7QUFFbERYLElBQUFBLGdEQUFBLENBRUUsa0NBRkYsRUFHRTtBQUFFSSxNQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUUsTUFBQUEsTUFBTSxFQUFOQTtBQUFaLEtBSEYsRUFJRTtBQUFFTyxNQUFBQSxPQUFPLEVBQUU7QUFBRSx1QkFBZTtBQUFqQjtBQUFYLEtBSkYsRUFNRUMsSUFORixDQU1RLFVBQUFDLENBQUMsRUFBSTtBQUNYWixNQUFBQSxNQUFNLENBQUNhLElBQVAsQ0FBWSxRQUFaO0FBQ0EsS0FSRjtBQVNBOztBQUdELHNCQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDZCQUNJO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUE0QixnQkFBUSxFQUFHLGtCQUFBUCxDQUFDO0FBQUEsaUJBQUlELFNBQVEsQ0FBQ0MsQ0FBRCxDQUFaO0FBQUEsU0FBeEM7QUFBQSxnQ0FFRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQU1FO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNFO0FBQ0csdUJBQVcsRUFBQyxPQURmO0FBRUcscUJBQVMsRUFBQyxZQUZiO0FBR0csb0JBQVEsRUFBRyxrQkFBQUEsQ0FBQztBQUFBLHFCQUFJSixXQUFXLENBQUNJLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBY0E7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0k7QUFDRyxnQkFBSSxFQUFDLFVBRFI7QUFFRyx1QkFBVyxFQUFDLFVBRmY7QUFHRyxxQkFBUyxFQUFDLFlBSGI7QUFJRyxvQkFBUSxFQUFHLGtCQUFBVCxDQUFDO0FBQUEscUJBQUlGLFNBQVMsQ0FBQ0UsQ0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUFBO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEEsZUF1QkE7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDLGVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUNBLENBdkRNOztHQUFNaEI7VUFDR0Q7OztLQURIQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuZXhwb3J0IGNvbnN0IEF1dGggPSAoKSA9PiB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IHsgdXNlcm5hbWUsIHNldFVzZXJuYW1lLCBzZWNyZXQsIHNldFNlY3JldCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuXG5cblx0ZnVuY3Rpb24gb25TdWJtaXQoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcblx0XHRpZiAodXNlcm5hbWUubGVuZ3RoID09PSAxIHx8IHNlY3JldC5sZW5ndGggPT09IDEpIHJldHVyblxuXHRcdFxuXHRcdGF4aW9zXG5cdFx0XHQucHV0KFxuXHRcdFx0XHRcImh0dHBzOi8vYXBpLmNoYXRlbmdpbmUuaW8vdXNlcnMvXCIsXG5cdFx0XHRcdHsgdXNlcm5hbWUsIHNlY3JldCB9LFxuXHRcdFx0XHR7IGhlYWRlcnM6IHsgXCJQcml2YXRlLUtleVwiOiBcIjM0MTM4NGNhLTZkYjAtNDc2Ny1iZjVmLTFmYzgwYjlmMWJkNFwiIH0gfVxuXHRcdFx0KVxuXHRcdFx0LnRoZW4oIHIgPT4ge1xuXHRcdFx0XHRyb3V0ZXIucHVzaChcIi9jaGF0c1wiKVxuXHRcdFx0fSlcblx0fVxuXG5cblx0cmV0dXJuIChcbiAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGgtY29udGFpbmVyXCI+XG4gICAgICAgIFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIiBvblN1Ym1pdD17IGUgPT4gb25TdWJtaXQoZSkgfT5cblxuICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGgtdGl0bGVcIj5cblx0XHRcdFx0XHROZXh0SlMgQ2hhdFxuXHRcdFx0XHQ8L2Rpdj5cblxuICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgXHRcdDxpbnB1dFxuICAgICAgICAgICAgICBcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgXHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1pbnB1dFwiXG4gICAgICAgICAgICAgIFx0XHRcdG9uQ2hhbmdlPXsgZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSkgfVxuICAgICAgICAgICAgXHRcdC8+XG4gICAgICAgICAgXHRcdDwvZGl2PlxuXG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgXHRcdDxpbnB1dFxuICAgICAgICAgICAgICBcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgXHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1pbnB1dFwiXG4gICAgICAgICAgICAgIFx0XHRcdG9uQ2hhbmdlPXsgZSA9PiBzZXRTZWNyZXQoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgIFx0XHQvPlxuXHQgICAgICAgIFx0PC9kaXY+XG5cbiAgICAgICAgXHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIj5cbiAgICAgICAgICAgIFx0XHRMb2dpbiAvIFNpZ24gVXBcbiAgICAgICAgICBcdFx0PC9idXR0b24+XG4gICAgICAgIFx0PC9mb3JtPlxuICAgICAgXHQ8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJheGlvcyIsInVzZVJvdXRlciIsIkF1dGgiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2VjcmV0Iiwic2V0U2VjcmV0Iiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJwdXQiLCJoZWFkZXJzIiwidGhlbiIsInIiLCJwdXNoIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});