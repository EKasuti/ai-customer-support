"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/Components/Navbar.jsx":
/*!***********************************!*\
  !*** ./src/Components/Navbar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Drawer,IconButton,List,Modal,Toolbar!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Drawer,IconButton,List,Modal,Toolbar!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Drawer,IconButton,List,Modal,Toolbar!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Drawer,IconButton,List,Modal,Toolbar!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Drawer,IconButton,List,Modal,Toolbar!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Drawer/Drawer.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Drawer,IconButton,List,Modal,Toolbar!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Modal/Modal.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./src/Components/Button.jsx\");\n/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chat */ \"(app-pages-browser)/./src/Components/Chat.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Close */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Close.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [openChat, setOpenChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openMenu, setOpenMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Handle onClick -> Talk to an agent\n    const handleTalkToAgent = ()=>{\n        // Open component    \n        setOpenChat(true);\n    };\n    // Handle onClick -> Close Chat\n    const handleCloseChat = ()=>{\n        setOpenChat(false);\n    };\n    // Toggle Menu\n    const toggleMenu = ()=>{\n        setOpenMenu(!openMenu);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        position: \"static\",\n        sx: {\n            backgroundColor: \"black\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    flexwrap: \"wrap\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/Images/logo.png\",\n                        alt: \"Logo\",\n                        style: {\n                            height: \"24px\",\n                            marginRight: \"0px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        edge: \"start\",\n                        color: \"inherit\",\n                        \"aria-label\": \"menu\",\n                        onClick: toggleMenu,\n                        sx: {\n                            display: {\n                                xs: \"block\",\n                                sm: \"none\"\n                            }\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        sx: {\n                            display: {\n                                xs: \"none\",\n                                sm: \"flex\"\n                            },\n                            gap: \"10px\",\n                            flexDirection: \"row\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Talk to an agent\",\n                                type: \"secondary\",\n                                onClick: handleTalkToAgent\n                            }, void 0, false, {\n                                fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Login\",\n                                type: \"secondary\",\n                                onClick: ()=>{}\n                            }, void 0, false, {\n                                fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 8\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                open: openMenu,\n                onClose: toggleMenu,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    sx: {\n                        width: 250,\n                        padding: 2\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            onClick: toggleMenu,\n                            sx: {\n                                alignSelf: \"\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            sx: {\n                                display: \"flex\",\n                                flexDirection: \"column\",\n                                gap: 2,\n                                marginTop: 2\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    text: \"Talk to an agent\",\n                                    type: \"secondary\",\n                                    onClick: ()=>{}\n                                }, void 0, false, {\n                                    fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    text: \"Login\",\n                                    type: \"primary\",\n                                    onClick: ()=>{}\n                                }, void 0, false, {\n                                    fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                open: openChat,\n                onClose: handleCloseChat,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Drawer_IconButton_List_Modal_Toolbar_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    sx: {\n                        position: \"absolute\",\n                        top: \"50%\",\n                        left: \"80%\",\n                        transform: \"translate(-50%, -50%)\",\n                        width: {\n                            xs: \"90%\",\n                            sm: 500\n                        },\n                        height: {\n                            xs: \"80%\",\n                            sm: 700\n                        },\n                        backgroundColor: \"black\",\n                        overflow: \"hidden\",\n                        borderRadius: 4\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClose: handleCloseChat\n                    }, void 0, false, {\n                        fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Navbar.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"ATIN7ZBi2wHmGqIQ7R1mvnyFw9A=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL05hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUM4QztBQUNsRDtBQUNEO0FBQ2E7QUFDRTtBQUdsRCxNQUFNYSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3pDLHFDQUFxQztJQUNyQyxNQUFNaUIsb0JBQW9CO1FBQ3hCLHFCQUFxQjtRQUNyQkgsWUFBWTtJQUNkO0lBRUEsK0JBQStCO0lBQy9CLE1BQU1JLGtCQUFrQjtRQUN0QkosWUFBWTtJQUNkO0lBRUEsY0FBYztJQUNkLE1BQU1LLGFBQWE7UUFDakJILFlBQVksQ0FBQ0Q7SUFDZjtJQUlBLHFCQUNFLDhEQUFDZCwySEFBTUE7UUFBQ21CLFVBQVM7UUFBU0MsSUFBSTtZQUFFQyxpQkFBaUI7UUFBTzs7MEJBQ3RELDhEQUFDakIsMkhBQU9BO2dCQUFDZ0IsSUFBSTtvQkFBQ0UsU0FBUztvQkFBUUMsZ0JBQWdCO29CQUFpQkMsVUFBUztnQkFBTTs7a0NBRTdFLDhEQUFDQzt3QkFBSUMsS0FBSzt3QkFBb0JDLEtBQUk7d0JBQU9DLE9BQU87NEJBQUVDLFFBQVE7NEJBQVFDLGFBQWE7d0JBQU07Ozs7OztrQ0FHcEYsOERBQUM1QiwySEFBVUE7d0JBQ1Y2QixNQUFLO3dCQUNMQyxPQUFNO3dCQUNOQyxjQUFXO3dCQUNYQyxTQUFTaEI7d0JBQ1RFLElBQUk7NEJBQUVFLFNBQVM7Z0NBQUVhLElBQUk7Z0NBQVNDLElBQUk7NEJBQU87d0JBQUU7a0NBRTNDLDRFQUFDM0IsZ0VBQVFBOzs7Ozs7Ozs7O2tDQUdaLDhEQUFDUiwySEFBR0E7d0JBQ0RtQixJQUFJOzRCQUNGRSxTQUFTO2dDQUFDYSxJQUFJO2dDQUFRQyxJQUFJOzRCQUFNOzRCQUNoQ0MsS0FBSzs0QkFDTEMsZUFBZTs0QkFDZkMsWUFBWTt3QkFDZDs7MENBQ0YsOERBQUNoQywrQ0FBWUE7Z0NBQUNpQyxNQUFLO2dDQUFtQkMsTUFBSztnQ0FBWVAsU0FBU2xCOzs7Ozs7MENBQ2hFLDhEQUFDVCwrQ0FBWUE7Z0NBQUNpQyxNQUFLO2dDQUFRQyxNQUFLO2dDQUFZUCxTQUFTLEtBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLN0QsOERBQUM3QiwySEFBTUE7Z0JBQ0xxQyxNQUFNNUI7Z0JBQ042QixTQUFTekI7MEJBRVQsNEVBQUNqQiwySEFBR0E7b0JBQUNtQixJQUFJO3dCQUFFd0IsT0FBTzt3QkFBS0MsU0FBUztvQkFBRTs7c0NBQ2hDLDhEQUFDM0MsMkhBQVVBOzRCQUFDZ0MsU0FBU2hCOzRCQUFZRSxJQUFJO2dDQUFFMEIsV0FBVzs0QkFBRztzQ0FDbkQsNEVBQUNwQyxrRUFBU0E7Ozs7Ozs7Ozs7c0NBRVosOERBQUNULDJIQUFHQTs0QkFBQ21CLElBQUk7Z0NBQUVFLFNBQVM7Z0NBQVFnQixlQUFlO2dDQUFVRCxLQUFLO2dDQUFHVSxXQUFXOzRCQUFFOzs4Q0FDeEUsOERBQUN4QywrQ0FBWUE7b0NBQUNpQyxNQUFLO29DQUFtQkMsTUFBSztvQ0FBWVAsU0FBUyxLQUFPOzs7Ozs7OENBQ3ZFLDhEQUFDM0IsK0NBQVlBO29DQUFDaUMsTUFBSztvQ0FBUUMsTUFBSztvQ0FBVVAsU0FBUyxLQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNaEUsOERBQUMvQiw0SEFBS0E7Z0JBQ0p1QyxNQUFNOUI7Z0JBQ04rQixTQUFTMUI7MEJBRVQsNEVBQUNoQiwySEFBR0E7b0JBQ0ZtQixJQUFJO3dCQUNGRCxVQUFVO3dCQUNWNkIsS0FBSzt3QkFDTEMsTUFBTTt3QkFDTkMsV0FBVzt3QkFDWE4sT0FBTzs0QkFBRVQsSUFBSTs0QkFBT0MsSUFBSTt3QkFBSTt3QkFDNUJQLFFBQVE7NEJBQUVNLElBQUk7NEJBQU9DLElBQUk7d0JBQUk7d0JBQzdCZixpQkFBaUI7d0JBQ2pCOEIsVUFBVTt3QkFDVkMsY0FBYztvQkFDaEI7OEJBRUEsNEVBQUM1Qyw2Q0FBYUE7d0JBQUNtQyxTQUFTMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEM7R0F6Rk1OO0tBQUFBO0FBMkZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL05hdmJhci5qc3g/ZWUzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBCYXIsIEJveCwgSWNvbkJ1dHRvbiwgTW9kYWwsIFRvb2xiYXIsIERyYXdlciwgTGlzdCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgQ2hhdENvbXBvbmVudCBmcm9tICcuL0NoYXQnO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xuXG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgW29wZW5DaGF0LCBzZXRPcGVuQ2hhdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBIYW5kbGUgb25DbGljayAtPiBUYWxrIHRvIGFuIGFnZW50XG4gIGNvbnN0IGhhbmRsZVRhbGtUb0FnZW50ID0gKCkgPT4ge1xuICAgIC8vIE9wZW4gY29tcG9uZW50ICAgIFxuICAgIHNldE9wZW5DaGF0KHRydWUpO1xuICB9O1xuXG4gIC8vIEhhbmRsZSBvbkNsaWNrIC0+IENsb3NlIENoYXRcbiAgY29uc3QgaGFuZGxlQ2xvc2VDaGF0ID0gKCkgPT4ge1xuICAgIHNldE9wZW5DaGF0KGZhbHNlKTtcbiAgfTtcblxuICAvLyBUb2dnbGUgTWVudVxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldE9wZW5NZW51KCFvcGVuTWVudSk7XG4gIH07XG5cblxuXG4gIHJldHVybiAoXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJ319PlxuICAgICAgPFRvb2xiYXIgc3g9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGZsZXh3cmFwOid3cmFwJ319PlxuICAgICAgICB7LyogTG9nbyBJbWFnZSBvbiB0aGUgcmlnaHQgKi99XG4gICAgICAgIDxpbWcgc3JjPXtcIi9JbWFnZXMvbG9nby5wbmdcIn0gYWx0PVwiTG9nb1wiIHN0eWxlPXt7IGhlaWdodDogJzI0cHgnLCBtYXJnaW5SaWdodDogJzBweCcgfX0gLz5cblxuICAgICAgICAgey8qIE1lbnUgQnV0dG9uIGZvciBTbWFsbCBTY3JlZW5zICovfVxuICAgICAgICAgPEljb25CdXR0b24gXG4gICAgICAgICAgZWRnZT1cInN0YXJ0XCIgXG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCIgXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIiBcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fSBcbiAgICAgICAgICBzeD17eyBkaXNwbGF5OiB7IHhzOiAnYmxvY2snLCBzbTogJ25vbmUnIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZW51SWNvbiAgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICB7LyogVGFsayB0byB0aGUgQUkgYWdlbnQgb24gdGhlIHJpZ2h0ICovfVxuICAgICAgIDxCb3ggXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IHt4czogJ25vbmUnLCBzbTogJ2ZsZXgnfSwgXG4gICAgICAgICAgICBnYXA6ICcxMHB4JyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgfX0+XG4gICAgICAgIDxDdXN0b21CdXR0b24gdGV4dD1cIlRhbGsgdG8gYW4gYWdlbnRcIiB0eXBlPVwic2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlVGFsa1RvQWdlbnR9IC8+XG4gICAgICAgIDxDdXN0b21CdXR0b24gdGV4dD1cIkxvZ2luXCIgdHlwZT1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpPT4ge319IC8+XG4gICAgICAgPC9Cb3g+XG4gICAgICA8L1Rvb2xiYXI+XG5cbiAgICAgIHsvKiBNZW51IGNvbXBvbmVudCAqL31cbiAgICAgIDxEcmF3ZXJcbiAgICAgICAgb3Blbj17b3Blbk1lbnV9XG4gICAgICAgIG9uQ2xvc2U9e3RvZ2dsZU1lbnV9XG4gICAgICA+XG4gICAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IDI1MCwgcGFkZGluZzogMiB9fT5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVNZW51fSBzeD17eyBhbGlnblNlbGY6ICcnIH19PlxuICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogMiwgbWFyZ2luVG9wOiAyIH19PlxuICAgICAgICAgICAgPEN1c3RvbUJ1dHRvbiB0ZXh0PVwiVGFsayB0byBhbiBhZ2VudFwiIHR5cGU9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiB7fX0gLz5cbiAgICAgICAgICAgIDxDdXN0b21CdXR0b24gdGV4dD1cIkxvZ2luXCIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7fX0gLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0RyYXdlcj5cblxuICAgICAgey8qIENoYXQgQ29tcG9uZW50IGFzIGEgbW9kYWwgKi99XG4gICAgICA8TW9kYWwgXG4gICAgICAgIG9wZW49e29wZW5DaGF0fSBcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VDaGF0fVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgIGxlZnQ6ICc4MCUnLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnOTAlJywgc206IDUwMCB9LCBcbiAgICAgICAgICAgIGhlaWdodDogeyB4czogJzgwJScsIHNtOiA3MDAgfSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENoYXRDb21wb25lbnQgb25DbG9zZT17aGFuZGxlQ2xvc2VDaGF0fSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9BcHBCYXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFwcEJhciIsIkJveCIsIkljb25CdXR0b24iLCJNb2RhbCIsIlRvb2xiYXIiLCJEcmF3ZXIiLCJMaXN0IiwiQ3VzdG9tQnV0dG9uIiwiQ2hhdENvbXBvbmVudCIsIk1lbnVJY29uIiwiQ2xvc2VJY29uIiwiTmF2YmFyIiwib3BlbkNoYXQiLCJzZXRPcGVuQ2hhdCIsIm9wZW5NZW51Iiwic2V0T3Blbk1lbnUiLCJoYW5kbGVUYWxrVG9BZ2VudCIsImhhbmRsZUNsb3NlQ2hhdCIsInRvZ2dsZU1lbnUiLCJwb3NpdGlvbiIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleHdyYXAiLCJpbWciLCJzcmMiLCJhbHQiLCJzdHlsZSIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiZWRnZSIsImNvbG9yIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siLCJ4cyIsInNtIiwiZ2FwIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJ0ZXh0IiwidHlwZSIsIm9wZW4iLCJvbkNsb3NlIiwid2lkdGgiLCJwYWRkaW5nIiwiYWxpZ25TZWxmIiwibWFyZ2luVG9wIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIm92ZXJmbG93IiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/Navbar.jsx\n"));

/***/ })

});