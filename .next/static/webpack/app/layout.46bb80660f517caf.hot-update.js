"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f2f02a3bf3e4\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzE5MDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJmMmYwMmEzYmYzZTRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/PageTransition.tsx":
/*!***************************************!*\
  !*** ./components/PageTransition.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageTransitionProvider: function() { return /* binding */ PageTransitionProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ PageTransitionProvider auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst PageTransitionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nconst pageVariants = {\n    initial: {\n        opacity: 0,\n        y: 20\n    },\n    enter: {\n        opacity: 1,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        y: -20\n    }\n};\nconst pageTransition = {\n    type: \"tween\",\n    ease: \"anticipate\",\n    duration: 0.6\n};\nfunction PageTransitionProvider(param) {\n    let { children } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageTransitionContext.Provider, {\n        value: {},\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n            mode: \"wait\",\n            initial: false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: \"initial\",\n                animate: \"enter\",\n                exit: \"exit\",\n                variants: pageVariants,\n                transition: pageTransition,\n                children: children\n            }, pathname, false, {\n                fileName: \"/Users/mohammedhinanak/Downloads/portfolio/components/PageTransition.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mohammedhinanak/Downloads/portfolio/components/PageTransition.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mohammedhinanak/Downloads/portfolio/components/PageTransition.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(PageTransitionProvider, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = PageTransitionProvider;\nvar _c;\n$RefreshReg$(_c, \"PageTransitionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUGFnZVRyYW5zaXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV1RDtBQUNWO0FBQ0k7QUFFakQsTUFBTUksc0NBQXdCRCxvREFBYUEsQ0FBQyxDQUFDO0FBRTdDLE1BQU1FLGVBQWU7SUFDbkJDLFNBQVM7UUFDUEMsU0FBUztRQUNUQyxHQUFHO0lBQ0w7SUFDQUMsT0FBTztRQUNMRixTQUFTO1FBQ1RDLEdBQUc7SUFDTDtJQUNBRSxNQUFNO1FBQ0pILFNBQVM7UUFDVEMsR0FBRyxDQUFDO0lBQ047QUFDRjtBQUVBLE1BQU1HLGlCQUFpQjtJQUNyQkMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLFVBQVU7QUFDWjtBQUVPLFNBQVNDLHVCQUF1QixLQUEyQztRQUEzQyxFQUFFQyxRQUFRLEVBQWlDLEdBQTNDOztJQUNyQyxNQUFNQyxXQUFXZiw0REFBV0E7SUFFNUIscUJBQ0UsOERBQUNFLHNCQUFzQmMsUUFBUTtRQUFDQyxPQUFPLENBQUM7a0JBQ3RDLDRFQUFDbEIsMERBQWVBO1lBQUNtQixNQUFLO1lBQU9kLFNBQVM7c0JBQ3BDLDRFQUFDTixpREFBTUEsQ0FBQ3FCLEdBQUc7Z0JBRVRmLFNBQVE7Z0JBQ1JnQixTQUFRO2dCQUNSWixNQUFLO2dCQUNMYSxVQUFVbEI7Z0JBQ1ZtQixZQUFZYjswQkFFWEs7ZUFQSUM7Ozs7Ozs7Ozs7Ozs7OztBQVlmO0dBbkJnQkY7O1FBQ0diLHdEQUFXQTs7O0tBRGRhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFnZVRyYW5zaXRpb24udHN4PzA2MTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBQYWdlVHJhbnNpdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxuXG5jb25zdCBwYWdlVmFyaWFudHMgPSB7XG4gIGluaXRpYWw6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHk6IDIwXG4gIH0sXG4gIGVudGVyOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB5OiAwXG4gIH0sXG4gIGV4aXQ6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHk6IC0yMFxuICB9XG59XG5cbmNvbnN0IHBhZ2VUcmFuc2l0aW9uID0ge1xuICB0eXBlOiBcInR3ZWVuXCIsXG4gIGVhc2U6IFwiYW50aWNpcGF0ZVwiLFxuICBkdXJhdGlvbjogMC42XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQYWdlVHJhbnNpdGlvblByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpXG4gIFxuICByZXR1cm4gKFxuICAgIDxQYWdlVHJhbnNpdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t9fT5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT1cIndhaXRcIiBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAga2V5PXtwYXRobmFtZX1cbiAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgYW5pbWF0ZT1cImVudGVyXCJcbiAgICAgICAgICBleGl0PVwiZXhpdFwiXG4gICAgICAgICAgdmFyaWFudHM9e3BhZ2VWYXJpYW50c31cbiAgICAgICAgICB0cmFuc2l0aW9uPXtwYWdlVHJhbnNpdGlvbn1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9QYWdlVHJhbnNpdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVBhdGhuYW1lIiwiY3JlYXRlQ29udGV4dCIsIlBhZ2VUcmFuc2l0aW9uQ29udGV4dCIsInBhZ2VWYXJpYW50cyIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImVudGVyIiwiZXhpdCIsInBhZ2VUcmFuc2l0aW9uIiwidHlwZSIsImVhc2UiLCJkdXJhdGlvbiIsIlBhZ2VUcmFuc2l0aW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsInBhdGhuYW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIm1vZGUiLCJkaXYiLCJhbmltYXRlIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/PageTransition.tsx\n"));

/***/ })

});