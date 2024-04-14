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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aristarh/Developer/development/github/chat-demo/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Auth = function Auth() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_0__.Context),\n      username = _useContext.username,\n      setUsername = _useContext.setUsername,\n      secret = _useContext.secret,\n      setSecret = _useContext.setSecret;\n\n  function _onSubmit(e) {\n    e.preventDefault();\n    if (username.length === 1 || secret.length === 1) return;\n    axios__WEBPACK_IMPORTED_MODULE_2___default().put(\"https://api.chatengine.io/users/\", {\n      username: username,\n      secret: secret\n    }, {\n      headers: {\n        \"Private-Key\": \"341384ca-6db0-4767-bf5f-1fc80b9f1bd4\"\n      }\n    }).then(function (r) {\n      router.push(\"/chats\");\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"background\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"auth-container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n        className: \"auth-form\",\n        onSubmit: function onSubmit(e) {\n          return _onSubmit(e);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"auth-title\",\n          children: \"NextJS Chat\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"input-container\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            placeholder: \"Email\",\n            className: \"text-input\",\n            onChange: function onChange(e) {\n              return setUsername(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"input-container\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"password\",\n            placeholder: \"Password\",\n            className: \"text-input\",\n            onChange: function onChange(e) {\n              return setSecret(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          className: \"submit-button\",\n          children: \"Login / Sign Up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 6\n  }, _this);\n};\n\n_s(Auth, \"IuCUN5t5UvMb/CLEVxjk3cCpN1E=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQXhCOztBQUNBLG9CQUFxREYsaURBQVUsQ0FBQ0YsNkNBQUQsQ0FBL0Q7QUFBQSxNQUFRTyxRQUFSLGVBQVFBLFFBQVI7QUFBQSxNQUFrQkMsV0FBbEIsZUFBa0JBLFdBQWxCO0FBQUEsTUFBK0JDLE1BQS9CLGVBQStCQSxNQUEvQjtBQUFBLE1BQXVDQyxTQUF2QyxlQUF1Q0EsU0FBdkM7O0FBRUEsV0FBU0MsU0FBVCxDQUFrQkMsQ0FBbEIsRUFBcUI7QUFDcEJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBLFFBQUlOLFFBQVEsQ0FBQ08sTUFBVCxLQUFvQixDQUFwQixJQUF5QkwsTUFBTSxDQUFDSyxNQUFQLEtBQWtCLENBQS9DLEVBQWtEO0FBRWxEWCxJQUFBQSxnREFBQSxDQUVFLGtDQUZGLEVBR0U7QUFBRUksTUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlFLE1BQUFBLE1BQU0sRUFBTkE7QUFBWixLQUhGLEVBSUU7QUFBRU8sTUFBQUEsT0FBTyxFQUFFO0FBQUUsdUJBQWU7QUFBakI7QUFBWCxLQUpGLEVBTUVDLElBTkYsQ0FNUSxVQUFBQyxDQUFDLEVBQUk7QUFDWFosTUFBQUEsTUFBTSxDQUFDYSxJQUFQLENBQVksUUFBWjtBQUNBLEtBUkY7QUFTQTs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw2QkFDSTtBQUFNLGlCQUFTLEVBQUMsV0FBaEI7QUFBNEIsZ0JBQVEsRUFBRyxrQkFBQVAsQ0FBQztBQUFBLGlCQUFJRCxTQUFRLENBQUNDLENBQUQsQ0FBWjtBQUFBLFNBQXhDO0FBQUEsZ0NBRUU7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFNRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxpQ0FDRTtBQUNHLHVCQUFXLEVBQUMsT0FEZjtBQUVHLHFCQUFTLEVBQUMsWUFGYjtBQUdHLG9CQUFRLEVBQUcsa0JBQUFBLENBQUM7QUFBQSxxQkFBSUosV0FBVyxDQUFDSSxDQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUE7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQWNBO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNJO0FBQ0csZ0JBQUksRUFBQyxVQURSO0FBRUcsdUJBQVcsRUFBQyxVQUZmO0FBR0cscUJBQVMsRUFBQyxZQUhiO0FBSUcsb0JBQVEsRUFBRyxrQkFBQVQsQ0FBQztBQUFBLHFCQUFJRixTQUFTLENBQUNFLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQTtBQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRBLGVBdUJBO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQVMsRUFBQyxlQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlDQSxDQXJERDs7R0FBTWhCO1VBQ1VEOzs7S0FEVkM7QUF1RE4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmNvbnN0IEF1dGggPSAoKSA9PiB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IHsgdXNlcm5hbWUsIHNldFVzZXJuYW1lLCBzZWNyZXQsIHNldFNlY3JldCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuXG5cdGZ1bmN0aW9uIG9uU3VibWl0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XG5cdFx0aWYgKHVzZXJuYW1lLmxlbmd0aCA9PT0gMSB8fCBzZWNyZXQubGVuZ3RoID09PSAxKSByZXR1cm5cblx0XHRcblx0XHRheGlvc1xuXHRcdFx0LnB1dChcblx0XHRcdFx0XCJodHRwczovL2FwaS5jaGF0ZW5naW5lLmlvL3VzZXJzL1wiLFxuXHRcdFx0XHR7IHVzZXJuYW1lLCBzZWNyZXQgfSxcblx0XHRcdFx0eyBoZWFkZXJzOiB7IFwiUHJpdmF0ZS1LZXlcIjogXCIzNDEzODRjYS02ZGIwLTQ3NjctYmY1Zi0xZmM4MGI5ZjFiZDRcIiB9IH1cblx0XHRcdClcblx0XHRcdC50aGVuKCByID0+IHtcblx0XHRcdFx0cm91dGVyLnB1c2goXCIvY2hhdHNcIilcblx0XHRcdH0pXG5cdH1cblxuXHRyZXR1cm4gKFxuICAgIFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1jb250YWluZXJcIj5cbiAgICAgICAgXHRcdDxmb3JtIGNsYXNzTmFtZT1cImF1dGgtZm9ybVwiIG9uU3VibWl0PXsgZSA9PiBvblN1Ym1pdChlKSB9PlxuXG4gICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aC10aXRsZVwiPlxuXHRcdFx0XHRcdE5leHRKUyBDaGF0XG5cdFx0XHRcdDwvZGl2PlxuXG4gICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICBcdFx0PGlucHV0XG4gICAgICAgICAgICAgIFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICBcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcbiAgICAgICAgICAgICAgXHRcdFx0b25DaGFuZ2U9eyBlID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKSB9XG4gICAgICAgICAgICBcdFx0Lz5cbiAgICAgICAgICBcdFx0PC9kaXY+XG5cbiAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICBcdFx0PGlucHV0XG4gICAgICAgICAgICAgIFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcbiAgICAgICAgICAgICAgXHRcdFx0b25DaGFuZ2U9eyBlID0+IHNldFNlY3JldChlLnRhcmdldC52YWx1ZSkgfVxuICAgICAgICAgICAgXHRcdC8+XG5cdCAgICAgICAgXHQ8L2Rpdj5cblxuICAgICAgICBcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiPlxuICAgICAgICAgICAgXHRcdExvZ2luIC8gU2lnbiBVcFxuICAgICAgICAgIFx0XHQ8L2J1dHRvbj5cbiAgICAgICAgXHQ8L2Zvcm0+XG4gICAgICBcdDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGg7XG4iXSwibmFtZXMiOlsiQ29udGV4dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsImF4aW9zIiwidXNlUm91dGVyIiwiQXV0aCIsInJvdXRlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzZWNyZXQiLCJzZXRTZWNyZXQiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInB1dCIsImhlYWRlcnMiLCJ0aGVuIiwiciIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});