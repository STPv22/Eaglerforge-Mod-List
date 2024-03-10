/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chatspammer.ts":
/*!****************************!*\
  !*** ./src/chatspammer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.chatspammer = void 0;
function chatspammer() {
    function runCode() {
        if (document.pointerLockElement != null) { //if pointerlock is enabled (the player is in game)
            //@ts-ignore
            ModAPI.displayToChat({ msg: "hello" });
            //@ts-ignore
            ModAPI.displayToChat({ msg: "welcome to eaglerforge!" });
        }
    }
    var intervalId = setInterval(runCode, 50); //run the code in a loop
}
exports.chatspammer = chatspammer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var chatspammer_1 = __webpack_require__(/*! ./chatspammer */ "./src/chatspammer.ts");
console.log("starting yourmodname...");
(0, chatspammer_1.chatspammer)(); //(the chat spam is only visible to you)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS10eXBlc2NyaXB0LW1vZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBLG1DQUFtQyxnQ0FBZ0M7QUFDbkU7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLG1CQUFtQjs7Ozs7OztVQ2RuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixtQkFBTyxDQUFDLDJDQUFlO0FBQzNDO0FBQ0Esa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS10eXBlc2NyaXB0LW1vZC8uL3NyYy9jaGF0c3BhbW1lci50cyIsIndlYnBhY2s6Ly9leGFtcGxlLXR5cGVzY3JpcHQtbW9kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4YW1wbGUtdHlwZXNjcmlwdC1tb2QvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2hhdHNwYW1tZXIgPSB2b2lkIDA7XG5mdW5jdGlvbiBjaGF0c3BhbW1lcigpIHtcbiAgICBmdW5jdGlvbiBydW5Db2RlKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50ICE9IG51bGwpIHsgLy9pZiBwb2ludGVybG9jayBpcyBlbmFibGVkICh0aGUgcGxheWVyIGlzIGluIGdhbWUpXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIE1vZEFQSS5kaXNwbGF5VG9DaGF0KHsgbXNnOiBcImhlbGxvXCIgfSk7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIE1vZEFQSS5kaXNwbGF5VG9DaGF0KHsgbXNnOiBcIndlbGNvbWUgdG8gZWFnbGVyZm9yZ2UhXCIgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChydW5Db2RlLCA1MCk7IC8vcnVuIHRoZSBjb2RlIGluIGEgbG9vcFxufVxuZXhwb3J0cy5jaGF0c3BhbW1lciA9IGNoYXRzcGFtbWVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNoYXRzcGFtbWVyXzEgPSByZXF1aXJlKFwiLi9jaGF0c3BhbW1lclwiKTtcbmNvbnNvbGUubG9nKFwic3RhcnRpbmcgeW91cm1vZG5hbWUuLi5cIik7XG4oMCwgY2hhdHNwYW1tZXJfMS5jaGF0c3BhbW1lcikoKTsgLy8odGhlIGNoYXQgc3BhbSBpcyBvbmx5IHZpc2libGUgdG8geW91KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
