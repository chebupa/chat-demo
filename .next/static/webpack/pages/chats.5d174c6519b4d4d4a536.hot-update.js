"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chats",{

/***/ "./pages/chats.js":
/*!************************!*\
  !*** ./pages/chats.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aristarh/Developer/development/github/chat-demo/pages/chats.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ChatEngine = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-chat-engine_dist_index_modern_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")).then(function (module) {\n    return module.ChatEngine;\n  });\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")];\n    },\n    modules: [\"chats.js -> \" + \"react-chat-engine\"]\n  }\n});\n_c2 = ChatEngine;\nvar MessageFormSocial = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-chat-engine_dist_index_modern_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")).then(function (module) {\n    return module.MessageFormSocial;\n  });\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")];\n    },\n    modules: [\"chats.js -> \" + \"react-chat-engine\"]\n  }\n});\n_c4 = MessageFormSocial;\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context),\n      username = _useContext.username,\n      secret = _useContext.secret;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      showChat = _useState[0],\n      setShowChat = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (typeof document !== undefined) {\n      setShowChat(true);\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (username === \"\" || secret === \"\") {\n      router.push(\"/\");\n    }\n  }, [username, secret]);\n  if (!showChat) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 24\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ChatEngine, {\n    height: \"100vh\",\n    projectID: \"a5987e81-5871-45a8-bc92-77f001bdad43\",\n    userName: username,\n    userSecret: secret,\n    renderNewMessageForm: function renderNewMessageForm() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(MessageFormSocial, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 39\n      }, _this);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"Q3yFD3+umxjtiQMoKu1egcIZpPQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c5 = Home;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"ChatEngine$dynamic\");\n$RefreshReg$(_c2, \"ChatEngine\");\n$RefreshReg$(_c3, \"MessageFormSocial$dynamic\");\n$RefreshReg$(_c4, \"MessageFormSocial\");\n$RefreshReg$(_c5, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBOztBQUdBLElBQU1PLFVBQVUsR0FBR0YsbURBQU8sTUFBRTtBQUFBLFNBQU0sbU9BQ2hDRyxJQURnQyxDQUMxQixVQUFBQyxNQUFNO0FBQUEsV0FBSUEsTUFBTSxDQUFDRixVQUFYO0FBQUEsR0FEb0IsQ0FBTjtBQUFBLENBQUY7QUFBQTtBQUFBO0FBQUEsa0NBQWUsZ0ZBQWY7QUFBQTtBQUFBLCtCQUFlLG1CQUFmO0FBQUE7QUFBQSxFQUExQjtNQUFNQTtBQUdOLElBQU1HLGlCQUFpQixHQUFHTCxtREFBTyxPQUFFO0FBQUEsU0FBTSxtT0FDdkNHLElBRHVDLENBQ2pDLFVBQUFDLE1BQU07QUFBQSxXQUFJQSxNQUFNLENBQUNDLGlCQUFYO0FBQUEsR0FEMkIsQ0FBTjtBQUFBLENBQUY7QUFBQTtBQUFBO0FBQUEsa0NBQWUsZ0ZBQWY7QUFBQTtBQUFBLCtCQUFlLG1CQUFmO0FBQUE7QUFBQSxFQUFqQztNQUFNQTtBQUlTLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUF4Qjs7QUFFQSxvQkFBNkJILGlEQUFVLENBQUNDLDZDQUFELENBQXZDO0FBQUEsTUFBUVMsUUFBUixlQUFRQSxRQUFSO0FBQUEsTUFBa0JDLE1BQWxCLGVBQWtCQSxNQUFsQjs7QUFDQSxrQkFBa0NiLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQVFjLFFBQVI7QUFBQSxNQUFrQkMsV0FBbEI7O0FBR0FkLEVBQUFBLGdEQUFTLENBQUUsWUFBTTtBQUNoQixRQUFJLE9BQU9lLFFBQVAsS0FBb0JDLFNBQXhCLEVBQW1DO0FBQ2xDRixNQUFBQSxXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0E7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFkLEVBQUFBLGdEQUFTLENBQUUsWUFBTTtBQUNoQixRQUFJVyxRQUFRLEtBQUssRUFBYixJQUFtQkMsTUFBTSxLQUFLLEVBQWxDLEVBQXNDO0FBQ3JDRixNQUFBQSxNQUFNLENBQUNPLElBQVAsQ0FBWSxHQUFaO0FBQ0E7QUFDRCxHQUpRLEVBSU4sQ0FBRU4sUUFBRixFQUFZQyxNQUFaLENBSk0sQ0FBVDtBQU9BLE1BQUksQ0FBQ0MsUUFBTCxFQUFlLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdmLHNCQUNPLDhEQUFDLFVBQUQ7QUFDTCxVQUFNLEVBQUMsT0FERjtBQUVDLGFBQVMsRUFBQyxzQ0FGWDtBQUdDLFlBQVEsRUFBR0YsUUFIWjtBQUlDLGNBQVUsRUFBR0MsTUFKZDtBQUtDLHdCQUFvQixFQUFHO0FBQUEsMEJBQU0sOERBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFOO0FBQUE7QUFMeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURQO0FBU0E7O0dBaEN1Qkg7VUFDUkw7OztNQURRSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0cy5qcz9hYWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCJcblxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5cbmNvbnN0IENoYXRFbmdpbmUgPSBkeW5hbWljKCAoKSA9PiBpbXBvcnQoXCJyZWFjdC1jaGF0LWVuZ2luZVwiKVxuXHQudGhlbiggbW9kdWxlID0+IG1vZHVsZS5DaGF0RW5naW5lICkgKVxuXG5jb25zdCBNZXNzYWdlRm9ybVNvY2lhbCA9IGR5bmFtaWMoICgpID0+IGltcG9ydChcInJlYWN0LWNoYXQtZW5naW5lXCIpXG5cdC50aGVuKCBtb2R1bGUgPT4gbW9kdWxlLk1lc3NhZ2VGb3JtU29jaWFsICkgKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0Y29uc3QgeyB1c2VybmFtZSwgc2VjcmV0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG5cdGNvbnN0IFsgc2hvd0NoYXQsIHNldFNob3dDaGF0IF0gPSB1c2VTdGF0ZShmYWxzZSlcblx0XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRzZXRTaG93Q2hhdCh0cnVlKTtcblx0XHR9XG5cdH0sIFtdIClcblx0XG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICh1c2VybmFtZSA9PT0gXCJcIiB8fCBzZWNyZXQgPT09IFwiXCIpIHtcblx0XHRcdHJvdXRlci5wdXNoKFwiL1wiKVxuXHRcdH1cblx0fSwgWyB1c2VybmFtZSwgc2VjcmV0IF0gKVxuXHRcblxuXHRpZiAoIXNob3dDaGF0KSByZXR1cm4gPGRpdiAvPlxuXHRcblxuXHRyZXR1cm4gKFxuICAgICAgICA8Q2hhdEVuZ2luZVxuXHRcdFx0aGVpZ2h0PVwiMTAwdmhcIlxuICAgICAgICBcdHByb2plY3RJRD1cImE1OTg3ZTgxLTU4NzEtNDVhOC1iYzkyLTc3ZjAwMWJkYWQ0M1wiXG4gICAgICAgIFx0dXNlck5hbWU9eyB1c2VybmFtZSB9XG4gICAgICAgIFx0dXNlclNlY3JldD17IHNlY3JldCB9XG4gICAgICAgIFx0cmVuZGVyTmV3TWVzc2FnZUZvcm09eyAoKSA9PiA8TWVzc2FnZUZvcm1Tb2NpYWwgLz4gfVxuICAgICAgICAvPlxuXHQpXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwiZHluYW1pYyIsInVzZVJvdXRlciIsIkNoYXRFbmdpbmUiLCJ0aGVuIiwibW9kdWxlIiwiTWVzc2FnZUZvcm1Tb2NpYWwiLCJIb21lIiwicm91dGVyIiwidXNlcm5hbWUiLCJzZWNyZXQiLCJzaG93Q2hhdCIsInNldFNob3dDaGF0IiwiZG9jdW1lbnQiLCJ1bmRlZmluZWQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chats.js\n");

/***/ })

});