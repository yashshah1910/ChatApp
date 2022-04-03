"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/avatar */ \"@chakra-ui/avatar\");\n/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/button */ \"@chakra-ui/button\");\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ \"@chakra-ui/layout\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"@chakra-ui/icons\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebaseconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebaseconfig */ \"./firebaseconfig.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"react-firebase-hooks/firestore\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _utils_getOtherEmail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/getOtherEmail */ \"./utils/getOtherEmail.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @firebase/util */ \"@firebase/util\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_6__, _firebaseconfig__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_10__, _firebase_util__WEBPACK_IMPORTED_MODULE_13__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_6__, _firebaseconfig__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_10__, _firebase_util__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Sidebar() {\n    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.auth);\n    const [snapshot, loading, error] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useCollection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.db, \"chats\"));\n    const chats = snapshot === null || snapshot === void 0 ? void 0 : snapshot.docs.map((doc)=>({\n            id: doc.id,\n            ...doc.data()\n        })\n    );\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();\n    const redirect = (id)=>{\n        router.push(\"/chat/${id}\");\n    };\n    const chatExists = (email)=>{\n        return chats === null || chats === void 0 ? void 0 : chats.find((chat)=>chat.users.includes(user.email) && chat.users.includes(email)\n        );\n    };\n    const newChat = async ()=>{\n        const input = prompt(\"Enter email of chat recipient\");\n        if (!chatExists(input) && input != user.email) {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.db, \"chats\"), {\n                users: [\n                    user.email,\n                    input\n                ]\n            });\n        }\n    };\n    const chatList = ()=>{\n        return chats === null || chats === void 0 ? void 0 : chats.filter((chat)=>chat.users.includes(user.email)\n        ).map((chat)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                p: 3,\n                align: \"center\",\n                _hover: {\n                    bg: \"gray.100\",\n                    cursor: \"pointer\"\n                },\n                onClick: ()=>redirect(chat.id)\n                ,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                        src: \"\",\n                        marginEnd: 3\n                    }, void 0, false, {\n                        fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 42,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        children: (0,_utils_getOtherEmail__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(chat.users, user)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 43,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, Math.random(), true, {\n                fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                lineNumber: 41,\n                columnNumber: 21\n            }, this)\n        );\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        // bg=\"blue.100\"\n        h: \"100%\",\n        w: \"300px\",\n        borderEnd: \"1px solid\",\n        borderColor: \"gray.200\",\n        direction: \"column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                // bg=\"red.100\"\n                h: \"81px\",\n                w: \"100%\",\n                align: \"center\",\n                justifyContent: \"space-between\",\n                borderBottom: \"1px solid\",\n                borderColor: \"gray.200\",\n                p: 3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                        align: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                                src: user.photoURL,\n                                marginEnd: 3\n                            }, void 0, false, {\n                                fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                children: user.displayName\n                            }, void 0, false, {\n                                fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                        size: \"sm\",\n                        isRound: true,\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.ArrowLeftIcon, {}, void 0, false, void 0, void 0),\n                        onClick: ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.signOut)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.auth)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                m: 5,\n                p: 4,\n                onClick: ()=>newChat()\n                ,\n                children: \"New Chat\"\n            }, void 0, false, {\n                fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                overflowX: \"scroll\",\n                direction: \"column\",\n                sx: {\n                    scrollbarwidth: \"none\"\n                },\n                flex: 1,\n                children: chatList()\n            }, void 0, false, {\n                fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\chat-app\\\\components\\\\Sidebar.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dCQUFDOEQsU0FBUyxFQUFDLFFBQVE7Z0JBQUNULFNBQVMsRUFBQyxRQUFRO2dCQUFDVSxFQUFFLEVBQUU7b0JBQUNDLGNBQWMsRUFBRSxNQUFNO2lCQUFDO2dCQUFFQyxJQUFJLEVBQUUsQ0FBQzswQkFDNUU1QixRQUFRLEVBQUU7Ozs7O29CQUNSOzs7Ozs7WUFHSixDQUVSO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWFwcC8uL2NvbXBvbmVudHMvU2lkZWJhci5qcz8zZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciB9IGZyb20gXCJAY2hha3JhLXVpL2F2YXRhclwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IEZsZXgsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcclxuaW1wb3J0IHsgQXJyb3dMZWZ0SWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IGdldFJlZGlyZWN0UmVzdWx0LCBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2Vjb25maWdcIjtcclxuaW1wb3J0IGdldE90aGVyRW1haWwgZnJvbSBcIi4uL3V0aWxzL2dldE90aGVyRW1haWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIkBmaXJlYmFzZS91dGlsXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XHJcbiAgICBjb25zdCBbc25hcHNob3QsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUNvbGxlY3Rpb24oY29sbGVjdGlvbihkYiwgXCJjaGF0c1wiKSk7XHJcbiAgICBjb25zdCBjaGF0cyA9IHNuYXBzaG90Py5kb2NzLm1hcChkb2MgPT4gKHtpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpfSkpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCByZWRpcmVjdCA9IChpZCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvY2hhdC8ke2lkfScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYXRFeGlzdHMgPSBlbWFpbCA9PiBjaGF0cz8uZmluZChjaGF0ID0+IChjaGF0LnVzZXJzLmluY2x1ZGVzKHVzZXIuZW1haWwpICYmIGNoYXQudXNlcnMuaW5jbHVkZXMoZW1haWwpKSlcclxuXHJcbiAgICBjb25zdCBuZXdDaGF0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gcHJvbXB0KFwiRW50ZXIgZW1haWwgb2YgY2hhdCByZWNpcGllbnRcIik7XHJcbiAgICAgICAgaWYgKCFjaGF0RXhpc3RzKGlucHV0KSAmJiAoaW5wdXQgIT0gdXNlci5lbWFpbCkpe1xyXG4gICAgICAgICAgICBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJjaGF0c1wiKSwgeyB1c2VyczogW3VzZXIuZW1haWwsIGlucHV0XX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBjaGF0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIGNoYXRzPy5maWx0ZXIoY2hhdCA9PiBjaGF0LnVzZXJzLmluY2x1ZGVzKHVzZXIuZW1haWwpKVxyXG4gICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgICAgY2hhdCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGtleT17TWF0aC5yYW5kb20oKX0gcD17M30gYWxpZ249XCJjZW50ZXJcIiBfaG92ZXI9e3tiZzogXCJncmF5LjEwMFwiLCBjdXJzb3I6IFwicG9pbnRlclwifX0gb25DbGljaz17KCkgPT4gcmVkaXJlY3QoY2hhdC5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz1cIlwiIG1hcmdpbkVuZD17M30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD57Z2V0T3RoZXJFbWFpbChjaGF0LnVzZXJzLCB1c2VyKX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIC8vIGJnPVwiYmx1ZS4xMDBcIlxyXG4gICAgICBoPVwiMTAwJVwiXHJcbiAgICAgIHc9XCIzMDBweFwiXHJcbiAgICAgIGJvcmRlckVuZD1cIjFweCBzb2xpZFwiIGJvcmRlckNvbG9yPVwiZ3JheS4yMDBcIlxyXG4gICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgPlxyXG5cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAvLyBiZz1cInJlZC4xMDBcIlxyXG4gICAgICAgICAgICBoPVwiODFweFwiIHc9XCIxMDAlXCJcclxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b209XCIxcHggc29saWRcIiBib3JkZXJDb2xvcj1cImdyYXkuMjAwXCJcclxuICAgICAgICAgICAgcD17M31cclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e3VzZXIucGhvdG9VUkx9IG1hcmdpbkVuZD17M30gLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0Pnt1c2VyLmRpc3BsYXlOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtXCIgaXNSb3VuZCBpY29uPXs8QXJyb3dMZWZ0SWNvbiAvPn0gb25DbGljaz17KCkgPT4gc2lnbk91dChhdXRoKX0gLz5cclxuICAgICAgICBcclxuICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgIDxCdXR0b24gbT17NX0gcD17NH0gb25DbGljaz17KCkgPT4gbmV3Q2hhdCgpfT5OZXcgQ2hhdDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8RmxleCBvdmVyZmxvd1g9XCJzY3JvbGxcIiBkaXJlY3Rpb249XCJjb2x1bW5cIiBzeD17e3Njcm9sbGJhcndpZHRoOiBcIm5vbmVcIn19IGZsZXg9ezF9PlxyXG4gICAgICAgICAgICB7Y2hhdExpc3QoKX1cclxuICAgICAgICA8L0ZsZXg+XHJcblxyXG5cclxuICAgIDwvRmxleD5cclxuXHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIkF2YXRhciIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJGbGV4IiwiVGV4dCIsIkFycm93TGVmdEljb24iLCJnZXRSZWRpcmVjdFJlc3VsdCIsInNpZ25PdXQiLCJhdXRoIiwidXNlQXV0aFN0YXRlIiwidXNlQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkYiIsImdldE90aGVyRW1haWwiLCJ1c2VSb3V0ZXIiLCJhc3luYyIsIlNpZGViYXIiLCJ1c2VyIiwic25hcHNob3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJjaGF0cyIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsImRhdGEiLCJyb3V0ZXIiLCJyZWRpcmVjdCIsInB1c2giLCJjaGF0RXhpc3RzIiwiZW1haWwiLCJmaW5kIiwiY2hhdCIsInVzZXJzIiwiaW5jbHVkZXMiLCJuZXdDaGF0IiwiaW5wdXQiLCJwcm9tcHQiLCJjaGF0TGlzdCIsImZpbHRlciIsInAiLCJhbGlnbiIsIl9ob3ZlciIsImJnIiwiY3Vyc29yIiwib25DbGljayIsInNyYyIsIm1hcmdpbkVuZCIsIk1hdGgiLCJyYW5kb20iLCJoIiwidyIsImJvcmRlckVuZCIsImJvcmRlckNvbG9yIiwiZGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXJCb3R0b20iLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwic2l6ZSIsImlzUm91bmQiLCJpY29uIiwibSIsIm92ZXJmbG93WCIsInN4Iiwic2Nyb2xsYmFyd2lkdGgiLCJmbGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ }),

/***/ "./firebaseconfig.js":
/*!***************************!*\
  !*** ./firebaseconfig.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBk6dZ6BuDBle0EMm1KUSyhH4oARgzzRWo\",\n    authDomain: \"chatapp-17c89.firebaseapp.com\",\n    projectId: \"chatapp-17c89\",\n    storageBucket: \"chatapp-17c89.appspot.com\",\n    messagingSenderId: \"417697164436\",\n    appId: \"1:417697164436:web:c70e68356013967750d881\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZWNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNWO0FBQ0w7QUFDVTtBQUVsRCx3Q0FBd0M7QUFDeEMsTUFBTUcsY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsK0JBQStCO0lBQzNDQyxTQUFTLEVBQUUsZUFBZTtJQUMxQkMsYUFBYSxFQUFFLDJCQUEyQjtJQUMxQ0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztDQUNuRDtBQUVELHNCQUFzQjtBQUN0QixNQUFNQyxHQUFHLEdBQUdWLDJEQUFhLENBQUNHLGNBQWMsQ0FBQztBQUN6QyxNQUFNUSxJQUFJLEdBQUdWLHNEQUFPLEVBQUU7QUFDdEIsTUFBTVcsRUFBRSxHQUFHVixnRUFBWSxFQUFFO0FBRU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWFwcC8uL2ZpcmViYXNlY29uZmlnLmpzP2Q5NTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Qms2ZFo2QnVEQmxlMEVNbTFLVVN5aEg0b0FSZ3p6UldvXCIsXHJcbiAgYXV0aERvbWFpbjogXCJjaGF0YXBwLTE3Yzg5LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJjaGF0YXBwLTE3Yzg5XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJjaGF0YXBwLTE3Yzg5LmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDE3Njk3MTY0NDM2XCIsXHJcbiAgYXBwSWQ6IFwiMTo0MTc2OTcxNjQ0MzY6d2ViOmM3MGU2ODM1NjAxMzk2Nzc1MGQ4ODFcIlxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuXHJcbmV4cG9ydCB7IGF1dGgsIGRiIH0iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImF1dGgiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebaseconfig.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__]);\n_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\chat-app\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\chat-app\\\\pages\\\\index.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\chat-app\\\\pages\\\\index.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\chat-app\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                h: \"100vh\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\chat-app\\\\pages\\\\index.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\chat-app\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\chat-app\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXNDO0FBQ1Y7QUFDZTtBQUc1QixTQUFTRyxJQUFJLEdBQUc7SUFDN0IscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDSCxrREFBSTs7a0NBQ0gsOERBQUNJLE9BQUs7a0NBQUMsaUJBQWU7Ozs7OzRCQUFRO2tDQUM5Qiw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBQyw4QkFBOEI7Ozs7OzRCQUFHO2tDQUNsRSw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNsQzswQkFDUCw4REFBQ1gsaURBQUc7Z0JBQUNZLENBQUMsRUFBQyxPQUFPOzBCQUNaLDRFQUFDViwyREFBTzs7Ozt3QkFBRzs7Ozs7b0JBQ1A7Ozs7OztZQUNGLENBQ1A7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Qm94IGg9XCIxMDB2aFwiPlxuICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJIZWFkIiwiU2lkZWJhciIsIkhvbWUiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/getOtherEmail.js":
/*!********************************!*\
  !*** ./utils/getOtherEmail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getOtherEmail = (users, currentUser)=>{\n    return users === null || users === void 0 ? void 0 : users.filter((user)=>user !== currentUser.email\n    )[0];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getOtherEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nZXRPdGhlckVtYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQ0MsS0FBSyxFQUFFQyxXQUFXLEdBQUs7SUFDMUMsT0FBT0QsS0FBSyxhQUFMQSxLQUFLLFdBQVEsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxLQUFLLENBQUVFLE1BQU0sQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFJQSxJQUFJLEtBQUtGLFdBQVcsQ0FBQ0csS0FBSztJQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM3RDtBQUVELGlFQUFlTCxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWFwcC8uL3V0aWxzL2dldE90aGVyRW1haWwuanM/OWY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRPdGhlckVtYWlsID0gKHVzZXJzLCBjdXJyZW50VXNlcikgPT4ge1xyXG4gICAgcmV0dXJuIHVzZXJzPy5maWx0ZXIodXNlciA9PiB1c2VyICE9PSBjdXJyZW50VXNlci5lbWFpbClbMF07XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGdldE90aGVyRW1haWw7Il0sIm5hbWVzIjpbImdldE90aGVyRW1haWwiLCJ1c2VycyIsImN1cnJlbnRVc2VyIiwiZmlsdGVyIiwidXNlciIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/getOtherEmail.js\n");

/***/ }),

/***/ "@chakra-ui/avatar":
/*!************************************!*\
  !*** external "@chakra-ui/avatar" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/avatar");

/***/ }),

/***/ "@chakra-ui/button":
/*!************************************!*\
  !*** external "@chakra-ui/button" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/button");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/layout":
/*!************************************!*\
  !*** external "@chakra-ui/layout" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react-firebase-hooks/firestore":
/*!*************************************************!*\
  !*** external "react-firebase-hooks/firestore" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/firestore");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@firebase/util":
/*!*********************************!*\
  !*** external "@firebase/util" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@firebase/util");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();