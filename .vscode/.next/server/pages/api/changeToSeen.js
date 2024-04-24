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
exports.id = "pages/api/changeToSeen";
exports.ids = ["pages/api/changeToSeen"];
exports.modules = {

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "(api)/./pages/api/changeToSeen.js":
/*!***********************************!*\
  !*** ./pages/api/changeToSeen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async ({ body  }, res)=>{\n    const url = process.env.ENDPOINT;\n    const graphcms = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(url, {\n        // const graphcms = new GraphQLClient(process.env.ENDPOINT, {\n        // headers: { Authorization: process.env.GRAPH_CMS_TOKEN },\n        headers: {\n            Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`\n        }\n    });\n    await graphcms.request(`\n        mutation($slug: String!) {\n            updateVideo(where:\n            { slug: $slug},\n            data: { seen: true}\n            ){\n              id,\n              title,\n              seen\n             }\n            } `, {\n        slug: body.slug\n    });\n    await graphcms.request(`mutation publishVideo($slug: String){ \n            publishVideo(where: { slug: $slug}, to:PUBLISHED) {\n                slug\n              }\n            }\n            `, {\n        slug: body.slug\n    });\n    res.status(201).json({\n        slug: body.slug\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhbmdlVG9TZWVuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRDtBQUVoRCxpRUFBZSxPQUFPLEVBQUVDLEtBQUksRUFBRSxFQUFFQyxNQUFRO0lBQ3RDLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUTtJQUNoQyxNQUFNQyxXQUFXLElBQUlQLDBEQUFhQSxDQUFDRyxLQUFLO1FBQ3RDLDZEQUE2RDtRQUM3RCwyREFBMkQ7UUFDM0RLLFNBQVM7WUFBRUMsZUFBZSxDQUFDLE9BQU8sRUFBRUwsUUFBUUMsR0FBRyxDQUFDSyxlQUFlLENBQUMsQ0FBQztRQUFDO0lBQ3BFO0lBRUEsTUFBTUgsU0FBU0ksT0FBTyxDQUNwQixDQUFDOzs7Ozs7Ozs7O2NBVVMsQ0FBQyxFQUNYO1FBQUVDLE1BQU1YLEtBQUtXLElBQUk7SUFBQztJQUdwQixNQUFNTCxTQUFTSSxPQUFPLENBQ3BCLENBQUM7Ozs7O1lBS08sQ0FBQyxFQUNUO1FBQUVDLE1BQU1YLEtBQUtXLElBQUk7SUFBQztJQUdwQlYsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFRixNQUFNWCxLQUFLVyxJQUFJO0lBQUM7QUFDekMsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rpc25leS1jbG9uZXR3by8uL3BhZ2VzL2FwaS9jaGFuZ2VUb1NlZW4uanM/ZmNhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyBib2R5IH0sIHJlcykgPT4ge1xuICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5FTkRQT0lOVDtcbiAgY29uc3QgZ3JhcGhjbXMgPSBuZXcgR3JhcGhRTENsaWVudCh1cmwsIHtcbiAgICAvLyBjb25zdCBncmFwaGNtcyA9IG5ldyBHcmFwaFFMQ2xpZW50KHByb2Nlc3MuZW52LkVORFBPSU5ULCB7XG4gICAgLy8gaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBwcm9jZXNzLmVudi5HUkFQSF9DTVNfVE9LRU4gfSxcbiAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5HUkFQSF9DTVNfVE9LRU59YCB9LFxuICB9KTtcblxuICBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0KFxuICAgIGBcbiAgICAgICAgbXV0YXRpb24oJHNsdWc6IFN0cmluZyEpIHtcbiAgICAgICAgICAgIHVwZGF0ZVZpZGVvKHdoZXJlOlxuICAgICAgICAgICAgeyBzbHVnOiAkc2x1Z30sXG4gICAgICAgICAgICBkYXRhOiB7IHNlZW46IHRydWV9XG4gICAgICAgICAgICApe1xuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgIHNlZW5cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGAsXG4gICAgeyBzbHVnOiBib2R5LnNsdWcgfVxuICApO1xuXG4gIGF3YWl0IGdyYXBoY21zLnJlcXVlc3QoXG4gICAgYG11dGF0aW9uIHB1Ymxpc2hWaWRlbygkc2x1ZzogU3RyaW5nKXsgXG4gICAgICAgICAgICBwdWJsaXNoVmlkZW8od2hlcmU6IHsgc2x1ZzogJHNsdWd9LCB0bzpQVUJMSVNIRUQpIHtcbiAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGAsXG4gICAgeyBzbHVnOiBib2R5LnNsdWcgfVxuICApO1xuXG4gIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc2x1ZzogYm9keS5zbHVnIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJHcmFwaFFMQ2xpZW50IiwiYm9keSIsInJlcyIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJFTkRQT0lOVCIsImdyYXBoY21zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJHUkFQSF9DTVNfVE9LRU4iLCJyZXF1ZXN0Iiwic2x1ZyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/changeToSeen.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/changeToSeen.js"));
module.exports = __webpack_exports__;

})();