(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["requestMethods"],{

/***/ "./src/js/requestMethods.js":
/*!**********************************!*\
  !*** ./src/js/requestMethods.js ***!
  \**********************************/
/***/ (() => {

//GET
// async function getData(url = "") {
// 	const response = await fetch(url, {
// 		mode: "cors",
// 		credentials: "same-origin",
// 	});
// 	return response.json(); // parses JSON response into native JavaScript objects
// }

//POST
async function postData() {
  let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/requestMethods.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdE1ldGhvZHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZUEsUUFBUSxHQUFzQjtFQUFBLElBQXJCQyxHQUFHLHVFQUFHLEVBQUU7RUFBQSxJQUFFQyxJQUFJLHVFQUFHLENBQUMsQ0FBQztFQUMxQyxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxHQUFHLEVBQUU7SUFDakNJLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRSxNQUFNO0lBQ1pDLEtBQUssRUFBRSxVQUFVO0lBQ2pCQyxXQUFXLEVBQUUsYUFBYTtJQUMxQkMsT0FBTyxFQUFFO01BQ1IsY0FBYyxFQUFFO0lBQ2pCLENBQUM7SUFDREMsUUFBUSxFQUFFLFFBQVE7SUFDbEJDLGNBQWMsRUFBRSxhQUFhO0lBQzdCQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDWixJQUFJO0VBQzFCLENBQUMsQ0FBQztFQUNGLE9BQU9DLFFBQVEsQ0FBQ1ksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9qcy9yZXF1ZXN0TWV0aG9kcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0dFVFxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSh1cmwgPSBcIlwiKSB7XG4vLyBcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4vLyBcdFx0bW9kZTogXCJjb3JzXCIsXG4vLyBcdFx0Y3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbi8vIFx0fSk7XG4vLyBcdHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xuLy8gfVxuXG4vL1BPU1RcbmFzeW5jIGZ1bmN0aW9uIHBvc3REYXRhKHVybCA9IFwiXCIsIGRhdGEgPSB7fSkge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0bW9kZTogXCJjb3JzXCIsXG5cdFx0Y2FjaGU6IFwibm8tY2FjaGVcIixcblx0XHRjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHRcdH0sXG5cdFx0cmVkaXJlY3Q6IFwiZm9sbG93XCIsXG5cdFx0cmVmZXJyZXJQb2xpY3k6IFwibm8tcmVmZXJyZXJcIixcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcblx0fSk7XG5cdHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xufVxuIl0sIm5hbWVzIjpbInBvc3REYXRhIiwidXJsIiwiZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==