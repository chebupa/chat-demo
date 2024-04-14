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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aristarh/Developer/development/github/chat-demo/pages/chats.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ChatEngine = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-chat-engine_dist_index_modern_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")).then(function (module) {\n    return module.ChatEngine;\n  });\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")];\n    },\n    modules: [\"chats.js -> \" + \"react-chat-engine\"]\n  }\n});\n_c2 = ChatEngine;\nvar MessageFormSocial = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-chat-engine_dist_index_modern_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")).then(function (module) {\n    return module.MessageFormSocial;\n  });\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")];\n    },\n    modules: [\"chats.js -> \" + \"react-chat-engine\"]\n  }\n});\n_c4 = MessageFormSocial;\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context),\n      username = _useContext.username,\n      secret = _useContext.secret;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      showChat = _useState[0],\n      setShowChat = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (typeof document !== undefined) {\n      setShowChat(true);\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (username === \"\" || secret === \"\") {\n      router.push(\"/\");\n    }\n  }, [username, secret]);\n  if (!showChat) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 25\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ChatEngine, {\n    height: \"calc(100vh - 212px)\",\n    projectID: \"a5987e81-5871-45a8-bc92-77f001bdad43\",\n    userName: username,\n    userSecret: secret,\n    renderNewMessageForm: function renderNewMessageForm() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(MessageFormSocial, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 39\n      }, _this);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"gQ5m4oMHq+GSYj2OIN+DW4vEenQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c5 = Home;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"ChatEngine$dynamic\");\n$RefreshReg$(_c2, \"ChatEngine\");\n$RefreshReg$(_c3, \"MessageFormSocial$dynamic\");\n$RefreshReg$(_c4, \"MessageFormSocial\");\n$RefreshReg$(_c5, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBOztBQUVBLElBQU1PLFVBQVUsR0FBR0YsbURBQU8sTUFBQztBQUFBLFNBQ3pCLG1PQUE0QkcsSUFBNUIsQ0FBaUMsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0YsVUFBbkI7QUFBQSxHQUFqQyxDQUR5QjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQ2pCLGdGQURpQjtBQUFBO0FBQUEsK0JBQ2pCLG1CQURpQjtBQUFBO0FBQUEsRUFBMUI7TUFBTUE7QUFHTixJQUFNRyxpQkFBaUIsR0FBR0wsbURBQU8sT0FBQztBQUFBLFNBQ2hDLG1PQUE0QkcsSUFBNUIsQ0FBaUMsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsaUJBQW5CO0FBQUEsR0FBakMsQ0FEZ0M7QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUN4QixnRkFEd0I7QUFBQTtBQUFBLCtCQUN4QixtQkFEd0I7QUFBQTtBQUFBLEVBQWpDO01BQU1BO0FBSVMsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixvQkFBNkJSLGlEQUFVLENBQUNDLDZDQUFELENBQXZDO0FBQUEsTUFBUVEsUUFBUixlQUFRQSxRQUFSO0FBQUEsTUFBa0JDLE1BQWxCLGVBQWtCQSxNQUFsQjs7QUFDQSxrQkFBZ0NaLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUFBLE1BQU9hLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHVixzREFBUyxFQUF4QjtBQUVBSixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLE9BQU9lLFFBQVAsS0FBb0JDLFNBQXhCLEVBQW1DO0FBQ2pDSCxNQUFBQSxXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0Q7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlVLFFBQVEsS0FBSyxFQUFiLElBQW1CQyxNQUFNLEtBQUssRUFBbEMsRUFBc0M7QUFDcENHLE1BQUFBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDUCxRQUFELEVBQVdDLE1BQVgsQ0FKTSxDQUFUO0FBTUEsTUFBSSxDQUFDQyxRQUFMLEVBQWUsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRWYsc0JBR00sOERBQUMsVUFBRDtBQUNFLFVBQU0sRUFBQyxxQkFEVDtBQUVFLGFBQVMsRUFBQyxzQ0FGWjtBQUdFLFlBQVEsRUFBRUYsUUFIWjtBQUlFLGNBQVUsRUFBRUMsTUFKZDtBQUtFLHdCQUFvQixFQUFFO0FBQUEsMEJBQU0sOERBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFOO0FBQUE7QUFMeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhOO0FBYUQ7O0dBaEN1QkY7VUFHUEw7OztNQUhPSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0cy5qcz9hYWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgQ2hhdEVuZ2luZSA9IGR5bmFtaWMoKCkgPT5cbiAgaW1wb3J0KFwicmVhY3QtY2hhdC1lbmdpbmVcIikudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuQ2hhdEVuZ2luZSlcbik7XG5jb25zdCBNZXNzYWdlRm9ybVNvY2lhbCA9IGR5bmFtaWMoKCkgPT5cbiAgaW1wb3J0KFwicmVhY3QtY2hhdC1lbmdpbmVcIikudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuTWVzc2FnZUZvcm1Tb2NpYWwpXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHVzZXJuYW1lLCBzZWNyZXQgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IFtzaG93Q2hhdCwgc2V0U2hvd0NoYXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0U2hvd0NoYXQodHJ1ZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlcm5hbWUgPT09IFwiXCIgfHwgc2VjcmV0ID09PSBcIlwiKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbdXNlcm5hbWUsIHNlY3JldF0pO1xuXG4gIGlmICghc2hvd0NoYXQpIHJldHVybiA8ZGl2IC8+O1xuXG4gIHJldHVybiAoXG5cblxuICAgICAgICA8Q2hhdEVuZ2luZVxuICAgICAgICAgIGhlaWdodD1cImNhbGMoMTAwdmggLSAyMTJweClcIlxuICAgICAgICAgIHByb2plY3RJRD1cImE1OTg3ZTgxLTU4NzEtNDVhOC1iYzkyLTc3ZjAwMWJkYWQ0M1wiXG4gICAgICAgICAgdXNlck5hbWU9e3VzZXJuYW1lfVxuICAgICAgICAgIHVzZXJTZWNyZXQ9e3NlY3JldH1cbiAgICAgICAgICByZW5kZXJOZXdNZXNzYWdlRm9ybT17KCkgPT4gPE1lc3NhZ2VGb3JtU29jaWFsIC8+fVxuICAgICAgICAvPlxuXG5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJkeW5hbWljIiwidXNlUm91dGVyIiwiQ2hhdEVuZ2luZSIsInRoZW4iLCJtb2R1bGUiLCJNZXNzYWdlRm9ybVNvY2lhbCIsIkhvbWUiLCJ1c2VybmFtZSIsInNlY3JldCIsInNob3dDaGF0Iiwic2V0U2hvd0NoYXQiLCJyb3V0ZXIiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chats.js\n");

/***/ })

});