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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aristarh/Developer/development/github/chat-demo/pages/chats.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ChatEngine = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-chat-engine_dist_index_modern_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")).then(function (module) {\n    return module.ChatEngine;\n  });\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")];\n    },\n    modules: [\"chats.js -> \" + \"react-chat-engine\"]\n  }\n});\n_c2 = ChatEngine;\nvar MessageFormSocial = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-chat-engine_dist_index_modern_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")).then(function (module) {\n    return module.MessageFormSocial;\n  });\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")];\n    },\n    modules: [\"chats.js -> \" + \"react-chat-engine\"]\n  }\n});\n_c4 = MessageFormSocial;\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      showChat = _useState[0],\n      setShowChat = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (typeof document !== undefined) {\n      setShowChat(true);\n\n      if (!localStorage.getItem(\"username\") && !localStorage.getItem(\"secret\")) {\n        router.push(\"/\");\n      }\n    }\n  }, []);\n  if (!showChat) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {}, void 0, false);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ChatEngine, {\n    height: \"100vh\",\n    projectID: \"a5987e81-5871-45a8-bc92-77f001bdad43\",\n    userName: localStorage.getItem(\"username\"),\n    userSecret: localStorage.getItem(\"secret\"),\n    renderNewMessageForm: function renderNewMessageForm() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(MessageFormSocial, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 39\n      }, _this);\n    },\n    renderConnectionBar: function renderConnectionBar(chat) {}\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"xiS2SmBNMeCTNWidniVHyUp+wo0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c5 = Home;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"ChatEngine$dynamic\");\n$RefreshReg$(_c2, \"ChatEngine\");\n$RefreshReg$(_c3, \"MessageFormSocial$dynamic\");\n$RefreshReg$(_c4, \"MessageFormSocial\");\n$RefreshReg$(_c5, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBOzs7QUFHQSxJQUFNTyxVQUFVLEdBQUdGLG1EQUFPLE1BQUU7QUFBQSxTQUFNLG1PQUE0QkcsSUFBNUIsQ0FBa0MsVUFBQUMsTUFBTTtBQUFBLFdBQUlBLE1BQU0sQ0FBQ0YsVUFBWDtBQUFBLEdBQXhDLENBQU47QUFBQSxDQUFGO0FBQUE7QUFBQTtBQUFBLGtDQUFlLGdGQUFmO0FBQUE7QUFBQSwrQkFBZSxtQkFBZjtBQUFBO0FBQUEsRUFBMUI7TUFBTUE7QUFDTixJQUFNRyxpQkFBaUIsR0FBR0wsbURBQU8sT0FBRTtBQUFBLFNBQU0sbU9BQTRCRyxJQUE1QixDQUFrQyxVQUFBQyxNQUFNO0FBQUEsV0FBSUEsTUFBTSxDQUFDQyxpQkFBWDtBQUFBLEdBQXhDLENBQU47QUFBQSxDQUFGO0FBQUE7QUFBQTtBQUFBLGtDQUFlLGdGQUFmO0FBQUE7QUFBQSwrQkFBZSxtQkFBZjtBQUFBO0FBQUEsRUFBakM7TUFBTUE7QUFHUyxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzlCLE1BQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBeEI7O0FBQ0Esa0JBQWtDTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFRWSxRQUFSO0FBQUEsTUFBa0JDLFdBQWxCOztBQUVBWixFQUFBQSxnREFBUyxDQUFFLFlBQU07QUFDaEIsUUFBSSxPQUFPYSxRQUFQLEtBQW9CQyxTQUF4QixFQUFtQztBQUNsQ0YsTUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDs7QUFFQSxVQUFJLENBQUNHLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFELElBQXFDLENBQUNELFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUExQyxFQUEwRTtBQUN6RU4sUUFBQUEsTUFBTSxDQUFDTyxJQUFQLENBQVksR0FBWjtBQUNBO0FBQ0Q7QUFDRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsTUFBSSxDQUFDTixRQUFMLEVBQWUsb0JBQU8sNklBQVA7QUFFZixzQkFDTyw4REFBQyxVQUFEO0FBQ0wsVUFBTSxFQUFDLE9BREY7QUFFQyxhQUFTLEVBQUMsc0NBRlg7QUFHQyxZQUFRLEVBQUdJLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUhaO0FBSUMsY0FBVSxFQUFHRCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FKZDtBQUtDLHdCQUFvQixFQUFHO0FBQUEsMEJBQU0sOERBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFOO0FBQUEsS0FMeEI7QUFNTCx1QkFBbUIsRUFBRSw2QkFBQ0UsSUFBRCxFQUFVLENBQUU7QUFONUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURQO0FBVUE7O0dBMUJ1QlQ7VUFDUkw7OztNQURRSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0cy5qcz9hYWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCJcblxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5cbmNvbnN0IENoYXRFbmdpbmUgPSBkeW5hbWljKCAoKSA9PiBpbXBvcnQoXCJyZWFjdC1jaGF0LWVuZ2luZVwiKS50aGVuKCBtb2R1bGUgPT4gbW9kdWxlLkNoYXRFbmdpbmUgKSApXG5jb25zdCBNZXNzYWdlRm9ybVNvY2lhbCA9IGR5bmFtaWMoICgpID0+IGltcG9ydChcInJlYWN0LWNoYXQtZW5naW5lXCIpLnRoZW4oIG1vZHVsZSA9PiBtb2R1bGUuTWVzc2FnZUZvcm1Tb2NpYWwgKSApXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgWyBzaG93Q2hhdCwgc2V0U2hvd0NoYXQgXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0c2V0U2hvd0NoYXQodHJ1ZSlcblxuXHRcdFx0aWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpICYmICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlY3JldFwiKSkge1xuXHRcdFx0XHRyb3V0ZXIucHVzaChcIi9cIilcblx0XHRcdH1cblx0XHR9XG5cdH0sIFtdIClcblxuXHRpZiAoIXNob3dDaGF0KSByZXR1cm4gPD48Lz5cblx0XG5cdHJldHVybiAoXG4gICAgICAgIDxDaGF0RW5naW5lXG5cdFx0XHRoZWlnaHQ9XCIxMDB2aFwiXG4gICAgICAgIFx0cHJvamVjdElEPVwiYTU5ODdlODEtNTg3MS00NWE4LWJjOTItNzdmMDAxYmRhZDQzXCJcbiAgICAgICAgXHR1c2VyTmFtZT17IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikgfVxuICAgICAgICBcdHVzZXJTZWNyZXQ9eyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlY3JldFwiKSB9XG4gICAgICAgIFx0cmVuZGVyTmV3TWVzc2FnZUZvcm09eyAoKSA9PiA8TWVzc2FnZUZvcm1Tb2NpYWwgLz4gfVxuXHRcdFx0cmVuZGVyQ29ubmVjdGlvbkJhcj17KGNoYXQpID0+IHt9fVxuICAgICAgICAvPlxuXHQpXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwiZHluYW1pYyIsInVzZVJvdXRlciIsIkNoYXRFbmdpbmUiLCJ0aGVuIiwibW9kdWxlIiwiTWVzc2FnZUZvcm1Tb2NpYWwiLCJIb21lIiwicm91dGVyIiwic2hvd0NoYXQiLCJzZXRTaG93Q2hhdCIsImRvY3VtZW50IiwidW5kZWZpbmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJjaGF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chats.js\n");

/***/ })

});