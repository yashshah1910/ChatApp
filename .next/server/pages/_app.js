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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ \"@chakra-ui/icons\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebaseconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebaseconfig */ \"./firebaseconfig.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseconfig__WEBPACK_IMPORTED_MODULE_5__]);\n_firebaseconfig__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction Login() {\n    const [signInWithGoogle, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useSignInWithGoogle)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_5__.auth);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\chat-app\\\\components\\\\Login.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\chat-app\\\\components\\\\Login.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                h: \"100vh\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    align: \"center\",\n                    bgColor: \"#757575\",\n                    p: 16,\n                    rounded: \"3xl\",\n                    spacing: 12,\n                    boxShadow: \"lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            bgColor: \"rgb(33, 150, 243)\",\n                            w: \"fit-content\",\n                            p: 5,\n                            rounded: \"3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ChatIcon, {\n                                w: \"100px\",\n                                h: \"100px\",\n                                color: \"white\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\chat-app\\\\components\\\\Login.js\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\chat-app\\\\components\\\\Login.js\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            boxShadow: \"md\",\n                            onClick: ()=>signInWithGoogle(\"\", {\n                                    prompt: \"select_account\"\n                                })\n                            ,\n                            children: \"Sign In with Google\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\chat-app\\\\components\\\\Login.js\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\chat-app\\\\components\\\\Login.js\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\chat-app\\\\components\\\\Login.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ2U7QUFDVTtBQUNaO0FBQ3NCO0FBQ3ZCO0FBRTFCLFNBQVNRLEtBQUssR0FBRztJQUM1QixNQUFNLENBQUNDLGdCQUFnQixFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxDQUFDLEdBQUdOLDhFQUFtQixDQUFDQyxpREFBSSxDQUFDO0lBQzFFLHFCQUNBOzswQkFFSSw4REFBQ1Asa0RBQUk7MEJBQ0QsNEVBQUNhLE9BQUs7OEJBQUMsT0FBSzs7Ozs7d0JBQVE7Ozs7O29CQUNqQjswQkFDUCw4REFBQ1Ysb0RBQU07Z0JBQ0hXLENBQUMsRUFBQyxPQUFPOzBCQUVULDRFQUFDVixtREFBSztvQkFDRlcsS0FBSyxFQUFDLFFBQVE7b0JBQ2RDLE9BQU8sRUFBQyxTQUFTO29CQUNqQkMsQ0FBQyxFQUFFLEVBQUU7b0JBQ0xDLE9BQU8sRUFBQyxLQUFLO29CQUNiQyxPQUFPLEVBQUUsRUFBRTtvQkFDWEMsU0FBUyxFQUFDLElBQUk7O3NDQUVkLDhEQUFDbEIsaURBQUc7NEJBQ0FjLE9BQU8sRUFBQyxtQkFBbUI7NEJBQzNCSyxDQUFDLEVBQUMsYUFBYTs0QkFDZkosQ0FBQyxFQUFFLENBQUM7NEJBQ0pDLE9BQU8sRUFBQyxLQUFLO3NDQUViLDRFQUFDakIsc0RBQVE7Z0NBQUNvQixDQUFDLEVBQUMsT0FBTztnQ0FBQ1AsQ0FBQyxFQUFDLE9BQU87Z0NBQUNRLEtBQUssRUFBQyxPQUFPOzs7OztvQ0FBRzs7Ozs7Z0NBQzVDO3NDQUdOLDhEQUFDakIsb0RBQU07NEJBQUNlLFNBQVMsRUFBQyxJQUFJOzRCQUFDRyxPQUFPLEVBQUUsSUFBTWQsZ0JBQWdCLENBQUMsRUFBRSxFQUFFO29DQUFDZSxNQUFNLEVBQUUsZ0JBQWdCO2lDQUFDLENBQUM7NEJBQUE7c0NBQUUscUJBQW1COzs7OztnQ0FBUzs7Ozs7O3dCQUNoSDs7Ozs7b0JBQ0g7O29CQUNWLENBQ0o7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLy4vY29tcG9uZW50cy9Mb2dpbi5qcz82NTBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQ2hhdEljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBCb3gsIENlbnRlciwgU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTaWduSW5XaXRoR29vZ2xlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZWNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgICBjb25zdCBbc2lnbkluV2l0aEdvb2dsZSwgdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlU2lnbkluV2l0aEdvb2dsZShhdXRoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Mb2dpbjwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxDZW50ZXJcclxuICAgICAgICAgICAgaD1cIjEwMHZoXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgYmdDb2xvcj1cIiM3NTc1NzVcIlxyXG4gICAgICAgICAgICAgICAgcD17MTZ9XHJcbiAgICAgICAgICAgICAgICByb3VuZGVkPVwiM3hsXCJcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezEyfVxyXG4gICAgICAgICAgICAgICAgYm94U2hhZG93PSdsZydcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgIGJnQ29sb3I9XCJyZ2IoMzMsIDE1MCwgMjQzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdz1cImZpdC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBwPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9JzN4bCdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhdEljb24gdz0nMTAwcHgnIGg9JzEwMHB4JyBjb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBib3hTaGFkb3c9XCJtZFwiIG9uQ2xpY2s9eygpID0+IHNpZ25JbldpdGhHb29nbGUoXCJcIiwge3Byb21wdDogXCJzZWxlY3RfYWNjb3VudFwifSl9PlNpZ24gSW4gd2l0aCBHb29nbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L0NlbnRlcj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJIZWFkIiwiQ2hhdEljb24iLCJCb3giLCJDZW50ZXIiLCJTdGFjayIsIkJ1dHRvbiIsInVzZVNpZ25JbldpdGhHb29nbGUiLCJhdXRoIiwiTG9naW4iLCJzaWduSW5XaXRoR29vZ2xlIiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsInRpdGxlIiwiaCIsImFsaWduIiwiYmdDb2xvciIsInAiLCJyb3VuZGVkIiwic3BhY2luZyIsImJveFNoYWRvdyIsInciLCJjb2xvciIsIm9uQ2xpY2siLCJwcm9tcHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Login.js\n");

/***/ }),

/***/ "./firebaseconfig.js":
/*!***************************!*\
  !*** ./firebaseconfig.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBk6dZ6BuDBle0EMm1KUSyhH4oARgzzRWo\",\n    authDomain: \"chatapp-17c89.firebaseapp.com\",\n    projectId: \"chatapp-17c89\",\n    storageBucket: \"chatapp-17c89.appspot.com\",\n    messagingSenderId: \"417697164436\",\n    appId: \"1:417697164436:web:c70e68356013967750d881\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZWNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNWO0FBQ0w7QUFDVTtBQUVsRCx3Q0FBd0M7QUFDeEMsTUFBTUcsY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsK0JBQStCO0lBQzNDQyxTQUFTLEVBQUUsZUFBZTtJQUMxQkMsYUFBYSxFQUFFLDJCQUEyQjtJQUMxQ0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztDQUNuRDtBQUVELHNCQUFzQjtBQUN0QixNQUFNQyxHQUFHLEdBQUdWLDJEQUFhLENBQUNHLGNBQWMsQ0FBQztBQUN6QyxNQUFNUSxJQUFJLEdBQUdWLHNEQUFPLEVBQUU7QUFDdEIsTUFBTVcsRUFBRSxHQUFHVixnRUFBWSxFQUFFO0FBRU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWFwcC8uL2ZpcmViYXNlY29uZmlnLmpzP2Q5NTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Qms2ZFo2QnVEQmxlMEVNbTFLVVN5aEg0b0FSZ3p6UldvXCIsXHJcbiAgYXV0aERvbWFpbjogXCJjaGF0YXBwLTE3Yzg5LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJjaGF0YXBwLTE3Yzg5XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJjaGF0YXBwLTE3Yzg5LmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDE3Njk3MTY0NDM2XCIsXHJcbiAgYXBwSWQ6IFwiMTo0MTc2OTcxNjQ0MzY6d2ViOmM3MGU2ODM1NjAxMzk2Nzc1MGQ4ODFcIlxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuXHJcbmV4cG9ydCB7IGF1dGgsIGRiIH0iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImF1dGgiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebaseconfig.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Login */ \"./components/Login.js\");\n/* harmony import */ var _firebaseconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseconfig */ \"./firebaseconfig.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Login__WEBPACK_IMPORTED_MODULE_3__, _firebaseconfig__WEBPACK_IMPORTED_MODULE_4__]);\n([_components_Login__WEBPACK_IMPORTED_MODULE_3__, _firebaseconfig__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_4__.auth);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                h: \"100vh\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {\n                    size: \"xl\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\chat-app\\\\pages\\\\_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\chat-app\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\chat-app\\\\pages\\\\_app.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this);\n    }\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\chat-app\\\\pages\\\\_app.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\chat-app\\\\pages\\\\_app.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\chat-app\\\\pages\\\\_app.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\chat-app\\\\pages\\\\_app.js\",\n        lineNumber: 27,\n        columnNumber: 7\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW1FO0FBQ1Y7QUFDakI7QUFDQztBQUV6QyxTQUFTTSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLENBQUMsR0FBR1IsdUVBQVksQ0FBQ0UsaURBQUksQ0FBQztJQUVqRCxJQUFJSyxPQUFPLEVBQUU7UUFDWCxxQkFDRSw4REFBQ1QsNERBQWM7c0JBQ2IsNEVBQUNELG9EQUFNO2dCQUFDWSxDQUFDLEVBQUMsT0FBTzswQkFDZiw0RUFBQ1YscURBQU87b0JBQUNXLElBQUksRUFBQyxJQUFJOzs7Ozt3QkFBRzs7Ozs7b0JBQ2Q7Ozs7O2dCQUNNLENBQ2xCO0tBQ0Y7SUFFRCxJQUFJLENBQUNKLElBQUksRUFBRTtRQUNULHFCQUNFLDhEQUFDUiw0REFBYztzQkFDYiw0RUFBQ0cseURBQUs7Ozs7b0JBQUc7Ozs7O2dCQUNNLENBQ2xCO0tBQ0Y7SUFDRCxxQkFDSSw4REFBQ0gsNERBQWM7a0JBQ2IsNEVBQUNNLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDYixDQUNwQjtDQUVGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWFwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZW50ZXIsIENoYWtyYVByb3ZpZGVyLCBTcGlubmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlY29uZmlnXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPENoYWtyYVByb3ZpZGVyPlxuICAgICAgICA8Q2VudGVyIGg9XCIxMDB2aFwiPlxuICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJ4bFwiIC8+XG4gICAgICAgIDwvQ2VudGVyPlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICApXG4gIH1cblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENoYWtyYVByb3ZpZGVyPlxuICAgICAgICA8TG9naW4gLz5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgKVxuICB9XG4gIHJldHVybiAoXG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJDZW50ZXIiLCJDaGFrcmFQcm92aWRlciIsIlNwaW5uZXIiLCJ1c2VBdXRoU3RhdGUiLCJMb2dpbiIsImF1dGgiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJoIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

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

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();