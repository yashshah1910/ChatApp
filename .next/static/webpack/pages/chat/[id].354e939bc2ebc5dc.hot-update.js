"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat/[id]",{

/***/ "./pages/chat/[id].js":
/*!****************************!*\
  !*** ./pages/chat/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebaseconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebaseconfig */ \"./firebaseconfig.js\");\n/* harmony import */ var _utils_getOtherEmail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/getOtherEmail */ \"./utils/getOtherEmail.js\");\n/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Topbar */ \"./components/Topbar.js\");\n/* harmony import */ var _components_Bottombar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Bottombar */ \"./components/Bottombar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Chat() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var id = router.query.id;\n    var ref = _slicedToArray((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.auth), 1), user = ref[0];\n    var ref1 = _slicedToArray((0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useDocumentData)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.db, \"chats\", id)), 1), chat = ref1[0];\n    var q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.db, \"chats/\".concat(id, \"/messages\")), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.orderBy)(\"timestamp\"));\n    var ref2 = _slicedToArray((0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollectionData)(q), 1), messages = ref2[0];\n    var bottomOfChat = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)();\n    var getMessages = function() {\n        var _this1 = _this;\n        return messages === null || messages === void 0 ? void 0 : messages.map(function(msg) {\n            var sender = msg.sender === user.email;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_12__.Flex, {\n                alignSelf: sender ? \"flex-start\" : \"flex-end\",\n                bg: sender ? \"blue.100\" : \"green.100\",\n                w: \"fit-content\",\n                minWidth: \"100px\",\n                borderRadius: \"lg\",\n                p: 3,\n                m: 1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_12__.Text, {\n                    children: msg.text\n                }, void 0, false, {\n                    fileName: \"D:\\\\chat-app\\\\pages\\\\chat\\\\[id].js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, _this1)\n            }, Math.random(), false, {\n                fileName: \"D:\\\\chat-app\\\\pages\\\\chat\\\\[id].js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, _this1);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(function() {\n        setTimeout(bottomOfChat.current.scrollIntoView({\n            behavior: \"smooth\",\n            block: \"start\"\n        }), 100), [\n            messages\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_12__.Flex, {\n        h: \"100vh\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Chat App\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\chat-app\\\\pages\\\\chat\\\\[id].js\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\chat-app\\\\pages\\\\chat\\\\[id].js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\chat-app\\\\pages\\\\chat\\\\[id].js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_12__.Flex, {\n                flex: 1,\n                direction: \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Topbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        email: (0,_utils_getOtherEmail__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(chat === null || chat === void 0 ? void 0 : chat.users, user)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\chat-app\\\\pages\\\\chat\\\\[id].js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_12__.Flex, {\n                        flex: 1,\n                        direction: \"column\",\n                        pt: 4,\n                        mx: 5,\n                        overflowX: \"scroll\",\n                        sx: {\n                            scrollbarWidth: \"none\"\n                        },\n                        children: [\n                            getMessages(),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: bottomOfChat\n                            }, void 0, false, {\n                                fileName: \"D:\\\\chat-app\\\\pages\\\\chat\\\\[id].js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\chat-app\\\\pages\\\\chat\\\\[id].js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Bottombar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        id: id,\n                        user: user\n                    }, void 0, false, {\n                        fileName: \"D:\\\\chat-app\\\\pages\\\\chat\\\\[id].js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\chat-app\\\\pages\\\\chat\\\\[id].js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\chat-app\\\\pages\\\\chat\\\\[id].js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n};\n_s(Chat, \"TMDWLHR+qYJLnRZcIIKbxoQpojw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState,\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useDocumentData,\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollectionData\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO2tDQUVuRCw4REFBQ3RCLG9EQUFJO3dCQUFDaUQsSUFBSSxFQUFFLENBQUM7d0JBQUVDLFNBQVMsRUFBQyxRQUFRO3dCQUFDRSxFQUFFLEVBQUUsQ0FBQzt3QkFBRUMsRUFBRSxFQUFFLENBQUM7d0JBQUVDLFNBQVMsRUFBQyxRQUFRO3dCQUFDQyxFQUFFLEVBQUU7NEJBQUNDLGNBQWMsRUFBRSxNQUFNO3lCQUFDOzs0QkFDNUY3QixXQUFXLEVBQUU7MENBQ2QsOERBQUM4QixLQUFHO2dDQUFDQyxHQUFHLEVBQUVoQyxZQUFZOzs7OztvQ0FBUTs7Ozs7OzRCQUN6QjtrQ0FFUCw4REFBQ1YsOERBQVM7d0JBQUNLLEVBQUUsRUFBRUEsRUFBRTt3QkFBRUMsSUFBSSxFQUFFQSxJQUFJOzs7Ozs0QkFBSTs7Ozs7O29CQUM1Qjs7Ozs7O1lBRUYsQ0FFUjtDQUNGO0dBakR1QkgsSUFBSTs7UUFDWGYsa0RBQVM7UUFFVEcsbUVBQVk7UUFDWkQsMkVBQWU7UUFFWEQsNkVBQWlCOzs7QUFOZGMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0L1tpZF0uanM/ZDg4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NpZGViYXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbkRhdGEsIHVzZURvY3VtZW50RGF0YSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBkb2MsIG9yZGVyQnksIHF1ZXJ5IH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCB9IGZyb20gXCIuLi8uLi9maXJlYmFzZWNvbmZpZ1wiO1xyXG5pbXBvcnQgZ2V0T3RoZXJFbWFpbCBmcm9tIFwiLi4vLi4vdXRpbHMvZ2V0T3RoZXJFbWFpbFwiO1xyXG5pbXBvcnQgVG9wYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RvcGJhclwiO1xyXG5pbXBvcnQgQm90dG9tYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0JvdHRvbWJhclwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xyXG4gIGNvbnN0IFtjaGF0XSA9IHVzZURvY3VtZW50RGF0YShkb2MoZGIsIFwiY2hhdHNcIiwgaWQpKTtcclxuICBjb25zdCBxID0gcXVlcnkoY29sbGVjdGlvbihkYiwgYGNoYXRzLyR7aWR9L21lc3NhZ2VzYCksIG9yZGVyQnkoXCJ0aW1lc3RhbXBcIikpO1xyXG4gIGNvbnN0IFttZXNzYWdlc10gPSB1c2VDb2xsZWN0aW9uRGF0YShxKTtcclxuICBjb25zdCBib3R0b21PZkNoYXQgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSAoKSA9PlxyXG4gICAgbWVzc2FnZXM/Lm1hcChtc2cgPT4ge1xyXG4gICAgICBjb25zdCBzZW5kZXIgPSBtc2cuc2VuZGVyID09PSB1c2VyLmVtYWlsO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGbGV4IGtleT17TWF0aC5yYW5kb20oKX0gYWxpZ25TZWxmPXtzZW5kZXIgPyBcImZsZXgtc3RhcnRcIiA6IFwiZmxleC1lbmRcIn0gYmc9e3NlbmRlciA/IFwiYmx1ZS4xMDBcIiA6IFwiZ3JlZW4uMTAwXCJ9IHc9XCJmaXQtY29udGVudFwiIG1pbldpZHRoPVwiMTAwcHhcIiBib3JkZXJSYWRpdXM9XCJsZ1wiIHA9ezN9IG09ezF9PlxyXG4gICAgICAgICAgPFRleHQ+e21zZy50ZXh0fTwvVGV4dD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIClcclxuICAgIH0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KFxyXG4gICAgICBib3R0b21PZkNoYXQuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICBibG9jazogJ3N0YXJ0JyxcclxuICAgIH0pLCAxMDApXHJcbiAgLCBbbWVzc2FnZXNdfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBoPVwiMTAwdmhcIlxyXG4gICAgPlxyXG4gICAgICA8SGVhZD48dGl0bGU+Q2hhdCBBcHA8L3RpdGxlPjwvSGVhZD5cclxuXHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICA8RmxleCBmbGV4PXsxfSBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICA8VG9wYmFyIGVtYWlsPXtnZXRPdGhlckVtYWlsKGNoYXQ/LnVzZXJzLCB1c2VyKX0gLz5cclxuXHJcbiAgICAgICAgPEZsZXggZmxleD17MX0gZGlyZWN0aW9uPVwiY29sdW1uXCIgcHQ9ezR9IG14PXs1fSBvdmVyZmxvd1g9XCJzY3JvbGxcIiBzeD17e3Njcm9sbGJhcldpZHRoOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAge2dldE1lc3NhZ2VzKCl9XHJcbiAgICAgICAgICA8ZGl2IHJlZj17Ym90dG9tT2ZDaGF0fT48L2Rpdj5cclxuICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgIDxCb3R0b21iYXIgaWQ9e2lkfSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICA8L0ZsZXg+XHJcblxyXG4gICAgPC9GbGV4PlxyXG5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiRmxleCIsIlRleHQiLCJTaWRlYmFyIiwiSGVhZCIsInVzZVJvdXRlciIsInVzZUNvbGxlY3Rpb25EYXRhIiwidXNlRG9jdW1lbnREYXRhIiwidXNlQXV0aFN0YXRlIiwiY29sbGVjdGlvbiIsImRvYyIsIm9yZGVyQnkiLCJxdWVyeSIsImRiIiwiYXV0aCIsImdldE90aGVyRW1haWwiLCJUb3BiYXIiLCJCb3R0b21iYXIiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJDaGF0Iiwicm91dGVyIiwiaWQiLCJ1c2VyIiwiY2hhdCIsInEiLCJtZXNzYWdlcyIsImJvdHRvbU9mQ2hhdCIsImdldE1lc3NhZ2VzIiwibWFwIiwibXNnIiwic2VuZGVyIiwiZW1haWwiLCJhbGlnblNlbGYiLCJiZyIsInciLCJtaW5XaWR0aCIsImJvcmRlclJhZGl1cyIsInAiLCJtIiwidGV4dCIsIk1hdGgiLCJyYW5kb20iLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImgiLCJ0aXRsZSIsImZsZXgiLCJkaXJlY3Rpb24iLCJ1c2VycyIsInB0IiwibXgiLCJvdmVyZmxvd1giLCJzeCIsInNjcm9sbGJhcldpZHRoIiwiZGl2IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat/[id].js\n");

/***/ })

});