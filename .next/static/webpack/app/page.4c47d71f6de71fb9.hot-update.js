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

/***/ "(app-pages-browser)/./src/Components/Chat.js":
/*!********************************!*\
  !*** ./src/Components/Chat.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./src/Components/Button.jsx\");\n/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Send */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Send.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ChatComponent = (param)=>{\n    let { onClose } = param;\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hi! My name is Akiba and I'm going to be your personal financial agent. How can I assist you today?\"\n        }\n    ]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const sendMessage = async ()=>{\n        if (!message.trim() || isLoading) return;\n        setIsLoading(true);\n        setMessage(\"\");\n        setMessages((messages)=>[\n                ...messages,\n                {\n                    role: \"user\",\n                    content: message\n                },\n                {\n                    role: \"assistant\",\n                    content: \"\"\n                }\n            ]);\n        try {\n            const response = await fetch(\"/api/chat\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify([\n                    ...messages,\n                    {\n                        role: \"user\",\n                        content: message\n                    }\n                ])\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const reader = response.body.getReader();\n            const decoder = new TextDecoder();\n            while(true){\n                const { done, value } = await reader.read();\n                if (done) break;\n                const text = decoder.decode(value, {\n                    stream: true\n                });\n                setMessages((messages)=>{\n                    let lastMessage = messages[messages.length - 1];\n                    let otherMessages = messages.slice(0, messages.length - 1);\n                    return [\n                        ...otherMessages,\n                        {\n                            ...lastMessage,\n                            content: lastMessage.content + text\n                        }\n                    ];\n                });\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n            setMessages((messages)=>[\n                    ...messages,\n                    {\n                        role: \"assistant\",\n                        content: \"I'm sorry, but I encountered an error. Please try again later.\"\n                    }\n                ]);\n        }\n        setIsLoading(false);\n    };\n    const handleKeyPress = (event)=>{\n        if (event.key === \"Enter\" && !event.shiftKey) {\n            event.preventDefault();\n            sendMessage();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        direction: \"column\",\n        width: {\n            xs: \"100%\",\n            sm: \"500px\"\n        },\n        height: {\n            xs: \"100%\",\n            sm: \"700px\"\n        },\n        border: \"1px solid white\",\n        borderRadius: 4,\n        p: 2,\n        spacing: 3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: onClose,\n                text: \"Close\",\n                type: \"secondary\"\n            }, void 0, false, {\n                fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Chat.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                direction: \"column\",\n                spacing: 2,\n                flexGrow: 1,\n                overflow: \"auto\",\n                maxHeight: \"100%\",\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        display: \"flex\",\n                        justifyContent: message.role === \"assistant\" ? \"flex-start\" : \"flex-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                background: message.role === \"assistant\" ? \"linear-gradient(45deg, #FF2C2C, #FFA500)\" : \"linear-gradient(45deg, blue, darkblue)\",\n                                color: \"white\",\n                                // borderRadius: 4,\n                                borderRadius: message.role === \"assistant\" ? \"12px 12px 12px 0px\" : \"12px 12px 0px 12px\",\n                                p: {\n                                    xs: 1,\n                                    sm: 3\n                                }\n                            },\n                            children: message.content\n                        }, void 0, false, {\n                            fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Chat.js\",\n                            lineNumber: 106,\n                            columnNumber: 12\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Chat.js\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Chat.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                direction: \"row\",\n                spacing: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    label: \"Ask me anything!\",\n                    fullWidth: true,\n                    value: message,\n                    onChange: (e)=>setMessage(e.target.value),\n                    onKeyPress: handleKeyPress,\n                    disabled: isLoading,\n                    InputProps: {\n                        endAdornment: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            onClick: sendMessage,\n                            disabled: isLoading,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Chat.js\",\n                                lineNumber: 138,\n                                columnNumber: 17\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Chat.js\",\n                            lineNumber: 132,\n                            columnNumber: 15\n                        }, void 0)\n                    },\n                    sx: {\n                        \"& .MuiOutlinedInput-root\": {\n                            \"& fieldset\": {\n                                borderColor: \"white\"\n                            },\n                            \"&:hover fieldset\": {\n                                borderColor: \"white\"\n                            },\n                            \"&.Mui-focused fieldset\": {\n                                borderColor: \"white\"\n                            },\n                            \"& input\": {\n                                color: \"white\"\n                            }\n                        },\n                        \"& .MuiInputLabel-root\": {\n                            color: \"white\"\n                        },\n                        \"& .MuiInputLabel-root.Mui-focused\": {\n                            color: \"white\"\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Chat.js\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Chat.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emmanuelmakau/Desktop/Headstarter/week_3/ai-customer-support/src/Components/Chat.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatComponent, \"GUwsPCqmMleE4D9qcVI2cxCB5hg=\");\n_c = ChatComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatComponent);\nvar _c;\n$RefreshReg$(_c, \"ChatComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL0NoYXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThEO0FBQzdCO0FBQ0c7QUFDWTtBQUVoRCxNQUFNTyxnQkFBZ0I7UUFBQyxFQUFDQyxPQUFPLEVBQUM7O0lBQzlCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztRQUN2QztZQUNFTyxNQUFNO1lBQ05DLFNBQ0U7UUFDSjtLQUNEO0lBRUQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNYSxjQUFjO1FBQ2xCLElBQUksQ0FBQ0osUUFBUUssSUFBSSxNQUFNSCxXQUFXO1FBQ2xDQyxhQUFhO1FBRWJGLFdBQVc7UUFDWEosWUFBWSxDQUFDRCxXQUFhO21CQUNyQkE7Z0JBQ0g7b0JBQUVFLE1BQU07b0JBQVFDLFNBQVNDO2dCQUFRO2dCQUNqQztvQkFBRUYsTUFBTTtvQkFBYUMsU0FBUztnQkFBRzthQUNsQztRQUVELElBQUk7WUFDRixNQUFNTyxXQUFXLE1BQU1DLE1BQU0sYUFBYTtnQkFDeENDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3VCQUFJaEI7b0JBQVU7d0JBQUVFLE1BQU07d0JBQVFDLFNBQVNDO29CQUFRO2lCQUFFO1lBQ3hFO1lBRUEsSUFBSSxDQUFDTSxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUVBLE1BQU1DLFNBQVNULFNBQVNJLElBQUksQ0FBQ00sU0FBUztZQUN0QyxNQUFNQyxVQUFVLElBQUlDO1lBRXBCLE1BQU8sS0FBTTtnQkFDWCxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUwsT0FBT00sSUFBSTtnQkFDekMsSUFB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YUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9DaGF0LmpzP2VmNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFN0YWNrLCBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZW5kJztcblxuY29uc3QgQ2hhdENvbXBvbmVudCA9ICh7b25DbG9zZX0pID0+IHtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgcm9sZTogXCJhc3Npc3RhbnRcIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiSGkhIE15IG5hbWUgaXMgQWtpYmEgYW5kIEknbSBnb2luZyB0byBiZSB5b3VyIHBlcnNvbmFsIGZpbmFuY2lhbCBhZ2VudC4gSG93IGNhbiBJIGFzc2lzdCB5b3UgdG9kYXk/XCIsXG4gICAgfSxcbiAgXSk7XG5cbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFtZXNzYWdlLnRyaW0oKSB8fCBpc0xvYWRpbmcpIHJldHVybjtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICAgIHNldE1lc3NhZ2VzKChtZXNzYWdlcykgPT4gW1xuICAgICAgLi4ubWVzc2FnZXMsXG4gICAgICB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBtZXNzYWdlIH0sXG4gICAgICB7IHJvbGU6IFwiYXNzaXN0YW50XCIsIGNvbnRlbnQ6IFwiXCIgfSxcbiAgICBdKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jaGF0XCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShbLi4ubWVzc2FnZXMsIHsgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IG1lc3NhZ2UgfV0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICBpZiAoZG9uZSkgYnJlYWs7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkZWNvZGVyLmRlY29kZSh2YWx1ZSwgeyBzdHJlYW06IHRydWUgfSk7XG4gICAgICAgIHNldE1lc3NhZ2VzKChtZXNzYWdlcykgPT4ge1xuICAgICAgICAgIGxldCBsYXN0TWVzc2FnZSA9IG1lc3NhZ2VzW21lc3NhZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGxldCBvdGhlck1lc3NhZ2VzID0gbWVzc2FnZXMuc2xpY2UoMCwgbWVzc2FnZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLm90aGVyTWVzc2FnZXMsXG4gICAgICAgICAgICB7IC4uLmxhc3RNZXNzYWdlLCBjb250ZW50OiBsYXN0TWVzc2FnZS5jb250ZW50ICsgdGV4dCB9LFxuICAgICAgICAgIF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIHNldE1lc3NhZ2VzKChtZXNzYWdlcykgPT4gW1xuICAgICAgICAuLi5tZXNzYWdlcyxcbiAgICAgICAge1xuICAgICAgICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXG4gICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgIFwiSSdtIHNvcnJ5LCBidXQgSSBlbmNvdW50ZXJlZCBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICAgICAgfSxcbiAgICAgIF0pO1xuICAgIH1cblxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2VuZE1lc3NhZ2UoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGRpcmVjdGlvbj17XCJjb2x1bW5cIn1cbiAgICAgIHdpZHRoPXt7IHhzOiBcIjEwMCVcIiwgc206IFwiNTAwcHhcIiB9fVxuICAgICAgaGVpZ2h0PXt7IHhzOiBcIjEwMCVcIiwgc206IFwiNzAwcHhcIiB9fVxuICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkIHdoaXRlXCJcbiAgICAgIGJvcmRlclJhZGl1cz17NH1cbiAgICAgIHA9ezJ9XG4gICAgICBzcGFjaW5nPXszfVxuICAgID5cbiAgICAgIDxDdXN0b21CdXR0b24gb25DbGljaz17b25DbG9zZX0gdGV4dD1cIkNsb3NlXCIgdHlwZT1cInNlY29uZGFyeVwiIC8+XG4gICAgICA8U3RhY2tcbiAgICAgICAgZGlyZWN0aW9uPXtcImNvbHVtblwifVxuICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgb3ZlcmZsb3c9XCJhdXRvXCJcbiAgICAgICAgbWF4SGVpZ2h0PVwiMTAwJVwiXG4gICAgICA+XG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtcbiAgICAgICAgICAgICAgbWVzc2FnZS5yb2xlID09PSBcImFzc2lzdGFudFwiID8gXCJmbGV4LXN0YXJ0XCIgOiBcImZsZXgtZW5kXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG1lc3NhZ2Uucm9sZSA9PT0gXCJhc3Npc3RhbnRcIlxuICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRjJDMkMsICNGRkE1MDApXCIgXG4gICAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgYmx1ZSwgZGFya2JsdWUpXCIsIFxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogbWVzc2FnZS5yb2xlID09PSBcImFzc2lzdGFudFwiID8gXCIxMnB4IDEycHggMTJweCAwcHhcIiA6IFwiMTJweCAxMnB4IDBweCAxMnB4XCIsIFxuICAgICAgICAgICAgICBwOiB7IHhzOiAxLCBzbTogMyB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWVzc2FnZS5jb250ZW50fVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBzcGFjaW5nPXsyfT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGxhYmVsPVwiQXNrIG1lIGFueXRoaW5nIVwiXG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgIGVuZEFkb3JubWVudDogKFxuICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfSBcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNlbmRJY29uIC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Jzoge1xuICAgICAgICAgICAgICAnJiBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJyY6aG92ZXIgZmllbGRzZXQnOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICcmLk11aS1mb2N1c2VkIGZpZWxkc2V0Jzoge1xuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAnJiBpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJiAuTXVpSW5wdXRMYWJlbC1yb290Jzoge1xuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJiAuTXVpSW5wdXRMYWJlbC1yb290Lk11aS1mb2N1c2VkJzoge1xuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogPEN1c3RvbUJ1dHRvbiB0ZXh0PXtpc0xvYWRpbmcgPyBcIlNlbmRpbmcuLi5cIiA6IFwiU2VuZFwifSB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfSBkaXNhYmxlZD17aXNMb2FkaW5nfS8+ICovfVxuICAgICAgPC9TdGFjaz5cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdENvbXBvbmVudDsiXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiU3RhY2siLCJUZXh0RmllbGQiLCJ1c2VTdGF0ZSIsIkN1c3RvbUJ1dHRvbiIsIlNlbmRJY29uIiwiQ2hhdENvbXBvbmVudCIsIm9uQ2xvc2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNlbmRNZXNzYWdlIiwidHJpbSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwiZG9uZSIsInZhbHVlIiwicmVhZCIsInRleHQiLCJkZWNvZGUiLCJzdHJlYW0iLCJsYXN0TWVzc2FnZSIsImxlbmd0aCIsIm90aGVyTWVzc2FnZXMiLCJzbGljZSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUtleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiZGlyZWN0aW9uIiwid2lkdGgiLCJ4cyIsInNtIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicCIsInNwYWNpbmciLCJvbkNsaWNrIiwidHlwZSIsImZsZXhHcm93Iiwib3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJtYXAiLCJpbmRleCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInN4IiwiYmFja2dyb3VuZCIsImNvbG9yIiwibGFiZWwiLCJmdWxsV2lkdGgiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwiZGlzYWJsZWQiLCJJbnB1dFByb3BzIiwiZW5kQWRvcm5tZW50IiwiYm9yZGVyQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/Chat.js\n"));

/***/ })

});