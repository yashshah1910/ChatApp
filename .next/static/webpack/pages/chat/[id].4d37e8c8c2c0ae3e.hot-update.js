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

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var D_chat_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_chat_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_chat_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/avatar */ \"./node_modules/@chakra-ui/avatar/dist/chakra-ui-avatar.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/button */ \"./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _firebaseconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebaseconfig */ \"./firebaseconfig.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _utils_getOtherEmail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getOtherEmail */ \"./utils/getOtherEmail.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @firebase/util */ \"./node_modules/@firebase/util/dist/index.esm2017.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Sidebar() {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_3__.auth), 1), user = ref[0];\n    var ref1 = _slicedToArray((0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__.useCollection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_3__.db, \"chats\")), 3), snapshot = ref1[0], loading = ref1[1], error = ref1[2];\n    var chats = snapshot === null || snapshot === void 0 ? void 0 : snapshot.docs.map(function(doc) {\n        return _objectSpread({\n            id: doc.id\n        }, doc.data());\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    var redirect = function(id) {\n        router.push(\"/chat/${id}\");\n    };\n    var newChat = function() {\n        var _ref = _asyncToGenerator(D_chat_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var input;\n            return D_chat_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        input = prompt(\"Enter email of chat recipient\");\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_3__.db, \"chats\"), {\n                            users: [\n                                user.email,\n                                input\n                            ]\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function newChat() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var chatList = function() {\n        var _this1 = _this;\n        return chats === null || chats === void 0 ? void 0 : chats.filter(function(chat) {\n            return chat.users.includes(user.email);\n        }).map(function(chat) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_10__.Flex, {\n                p: 3,\n                align: \"center\",\n                _hover: {\n                    bg: \"gray.100\",\n                    cursor: \"pointer\"\n                },\n                onClick: function() {\n                    return redirect(chat.id);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_11__.Avatar, {\n                        src: \"\",\n                        marginEnd: 3\n                    }, void 0, false, {\n                        fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 39,\n                        columnNumber: 25\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                        children: (0,_utils_getOtherEmail__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(chat.users, user)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 40,\n                        columnNumber: 25\n                    }, _this1)\n                ]\n            }, Math.random(), true, {\n                fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                lineNumber: 38,\n                columnNumber: 21\n            }, _this1);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_10__.Flex, {\n        // bg=\"blue.100\"\n        h: \"100%\",\n        w: \"300px\",\n        borderEnd: \"1px solid\",\n        borderColor: \"gray.200\",\n        direction: \"column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_10__.Flex, {\n                // bg=\"red.100\"\n                h: \"81px\",\n                w: \"100%\",\n                align: \"center\",\n                justifyContent: \"space-between\",\n                borderBottom: \"1px solid\",\n                borderColor: \"gray.200\",\n                p: 3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_10__.Flex, {\n                        align: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_11__.Avatar, {\n                                src: user.photoURL,\n                                marginEnd: 3\n                            }, void 0, false, {\n                                fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                children: user.displayName\n                            }, void 0, false, {\n                                fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_12__.IconButton, {\n                        size: \"sm\",\n                        isRound: true,\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_13__.ArrowLeftIcon, {}, void 0, false, void 0, void 0),\n                        onClick: function() {\n                            return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_3__.auth);\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {\n                m: 5,\n                p: 4,\n                onClick: function() {\n                    return newChat();\n                },\n                children: \"New Chat\"\n            }, void 0, false, {\n                fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_10__.Flex, {\n                overflowX: \"scroll\",\n                direction: \"column\",\n                sx: {\n                    scrollbarwidth: \"none\"\n                },\n                flex: 1,\n                children: chatList()\n            }, void 0, false, {\n                fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n};\n_s(Sidebar, \"YQFU/vQ2EfFV99PVuACGEnkrc0g=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState,\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__.useCollection,\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBCQUM1RTlCLFFBQVEsRUFBRTs7Ozs7b0JBQ1I7Ozs7OztZQUdKLENBRVI7Q0FDRjtHQWxFdUJuQixPQUFPOztRQUNaUixtRUFBWTtRQUNRQyx5RUFBYTtRQUVqQ0ssa0RBQVM7OztBQUpKRSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci5qcz8zZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciB9IGZyb20gXCJAY2hha3JhLXVpL2F2YXRhclwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IEZsZXgsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcclxuaW1wb3J0IHsgQXJyb3dMZWZ0SWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IGdldFJlZGlyZWN0UmVzdWx0LCBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2Vjb25maWdcIjtcclxuaW1wb3J0IGdldE90aGVyRW1haWwgZnJvbSBcIi4uL3V0aWxzL2dldE90aGVyRW1haWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIkBmaXJlYmFzZS91dGlsXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XHJcbiAgICBjb25zdCBbc25hcHNob3QsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUNvbGxlY3Rpb24oY29sbGVjdGlvbihkYiwgXCJjaGF0c1wiKSk7XHJcbiAgICBjb25zdCBjaGF0cyA9IHNuYXBzaG90Py5kb2NzLm1hcChkb2MgPT4gKHtpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpfSkpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCByZWRpcmVjdCA9IChpZCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvY2hhdC8ke2lkfScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld0NoYXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBwcm9tcHQoXCJFbnRlciBlbWFpbCBvZiBjaGF0IHJlY2lwaWVudFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJjaGF0c1wiKSwgeyB1c2VyczogW3VzZXIuZW1haWwsIGlucHV0XX0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGNoYXRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgY2hhdHM/LmZpbHRlcihjaGF0ID0+IGNoYXQudXNlcnMuaW5jbHVkZXModXNlci5lbWFpbCkpXHJcbiAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICBjaGF0ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgga2V5PXtNYXRoLnJhbmRvbSgpfSBwPXszfSBhbGlnbj1cImNlbnRlclwiIF9ob3Zlcj17e2JnOiBcImdyYXkuMTAwXCIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChjaGF0LmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPVwiXCIgbWFyZ2luRW5kPXszfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PntnZXRPdGhlckVtYWlsKGNoYXQudXNlcnMsIHVzZXIpfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgLy8gYmc9XCJibHVlLjEwMFwiXHJcbiAgICAgIGg9XCIxMDAlXCJcclxuICAgICAgdz1cIjMwMHB4XCJcclxuICAgICAgYm9yZGVyRW5kPVwiMXB4IHNvbGlkXCIgYm9yZGVyQ29sb3I9XCJncmF5LjIwMFwiXHJcbiAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICA+XHJcblxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIC8vIGJnPVwicmVkLjEwMFwiXHJcbiAgICAgICAgICAgIGg9XCI4MXB4XCIgdz1cIjEwMCVcIlxyXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbT1cIjFweCBzb2xpZFwiIGJvcmRlckNvbG9yPVwiZ3JheS4yMDBcIlxyXG4gICAgICAgICAgICBwPXszfVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17dXNlci5waG90b1VSTH0gbWFyZ2luRW5kPXszfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e3VzZXIuZGlzcGxheU5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21cIiBpc1JvdW5kIGljb249ezxBcnJvd0xlZnRJY29uIC8+fSBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KGF1dGgpfSAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBtPXs1fSBwPXs0fSBvbkNsaWNrPXsoKSA9PiBuZXdDaGF0KCl9Pk5ldyBDaGF0PC9CdXR0b24+XHJcblxyXG4gICAgICAgIDxGbGV4IG92ZXJmbG93WD1cInNjcm9sbFwiIGRpcmVjdGlvbj1cImNvbHVtblwiIHN4PXt7c2Nyb2xsYmFyd2lkdGg6IFwibm9uZVwifX0gZmxleD17MX0+XHJcbiAgICAgICAgICAgIHtjaGF0TGlzdCgpfVxyXG4gICAgICAgIDwvRmxleD5cclxuXHJcblxyXG4gICAgPC9GbGV4PlxyXG5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiQXZhdGFyIiwiQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIkZsZXgiLCJUZXh0IiwiQXJyb3dMZWZ0SWNvbiIsImdldFJlZGlyZWN0UmVzdWx0Iiwic2lnbk91dCIsImF1dGgiLCJ1c2VBdXRoU3RhdGUiLCJ1c2VDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsImFkZERvYyIsImRiIiwiZ2V0T3RoZXJFbWFpbCIsInVzZVJvdXRlciIsImFzeW5jIiwiU2lkZWJhciIsInVzZXIiLCJzbmFwc2hvdCIsImxvYWRpbmciLCJlcnJvciIsImNoYXRzIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsInJvdXRlciIsInJlZGlyZWN0IiwicHVzaCIsIm5ld0NoYXQiLCJpbnB1dCIsInByb21wdCIsInVzZXJzIiwiZW1haWwiLCJjaGF0TGlzdCIsImZpbHRlciIsImNoYXQiLCJpbmNsdWRlcyIsInAiLCJhbGlnbiIsIl9ob3ZlciIsImJnIiwiY3Vyc29yIiwib25DbGljayIsInNyYyIsIm1hcmdpbkVuZCIsIk1hdGgiLCJyYW5kb20iLCJoIiwidyIsImJvcmRlckVuZCIsImJvcmRlckNvbG9yIiwiZGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXJCb3R0b20iLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwic2l6ZSIsImlzUm91bmQiLCJpY29uIiwibSIsIm92ZXJmbG93WCIsInN4Iiwic2Nyb2xsYmFyd2lkdGgiLCJmbGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ })

});