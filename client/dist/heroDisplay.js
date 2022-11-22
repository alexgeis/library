(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["heroDisplay"],{

/***/ "./src/js/library/heroDisplay.js":
/*!***************************************!*\
  !*** ./src/js/library/heroDisplay.js ***!
  \***************************************/
/***/ (() => {

// PROGRESS BAR
const renderProgressBar = async () => {
  const currentBooksData = await fetch("/api/books");
  let currentBooks = await currentBooksData.json();
  const currentBooksReadCount = currentBooks.filter(book => book.is_read === true).length;
  const currentBooksTotalCount = currentBooks.length;
  // BOOK TOTALS DISPLAY
  const bookReadDisplay = document.querySelector(".books-read-display");
  bookReadDisplay.textContent = `Books read: ${currentBooksReadCount}`;
  const bookTotalDisplay = document.querySelector(".books-total-display");
  bookTotalDisplay.textContent = `Books total: ${currentBooksTotalCount}`;
  const bookReadDisplayHero = document.querySelector(".books-read-display-hero");
  bookReadDisplayHero.textContent = `Books read: ${currentBooksReadCount}`;
  const bookTotalDisplayHero = document.querySelector(".books-total-display-hero");
  bookTotalDisplayHero.textContent = `Books total: ${currentBooksTotalCount}`;

  // PROGRESS BAR DISPLAY
  const progressBar = document.querySelector(".progress-bar");
  const progressBarHero = document.querySelector(".progress-bar-hero");
  let progressWidth;
  if (currentBooksReadCount === 0 && currentBooksTotalCount === 0) {
    progressWidth = 0;
  } else {
    progressWidth = Math.floor(currentBooksReadCount / currentBooksTotalCount * 100);
  }
  progressBar.style.width = `${progressWidth}%`;
  progressBarHero.style.width = `${progressWidth}%`;
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/library/heroDisplay.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb0Rpc3BsYXkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLE1BQU1BLGlCQUFpQixHQUFHLFlBQVk7RUFDckMsTUFBTUMsZ0JBQWdCLEdBQUcsTUFBTUMsS0FBSyxDQUFDLFlBQVksQ0FBQztFQUNsRCxJQUFJQyxZQUFZLEdBQUcsTUFBTUYsZ0JBQWdCLENBQUNHLElBQUksRUFBRTtFQUVoRCxNQUFNQyxxQkFBcUIsR0FBR0YsWUFBWSxDQUFDRyxNQUFNLENBQy9DQyxJQUFJLElBQUtBLElBQUksQ0FBQ0MsT0FBTyxLQUFLLElBQUksQ0FDL0IsQ0FBQ0MsTUFBTTtFQUNSLE1BQU1DLHNCQUFzQixHQUFHUCxZQUFZLENBQUNNLE1BQU07RUFDbEQ7RUFDQSxNQUFNRSxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBQ3JFRixlQUFlLENBQUNHLFdBQVcsR0FBSSxlQUFjVCxxQkFBc0IsRUFBQztFQUVwRSxNQUFNVSxnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7RUFDdkVFLGdCQUFnQixDQUFDRCxXQUFXLEdBQUksZ0JBQWVKLHNCQUF1QixFQUFDO0VBRXZFLE1BQU1NLG1CQUFtQixHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FDakQsMEJBQTBCLENBQzFCO0VBQ0RHLG1CQUFtQixDQUFDRixXQUFXLEdBQUksZUFBY1QscUJBQXNCLEVBQUM7RUFFeEUsTUFBTVksb0JBQW9CLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUNsRCwyQkFBMkIsQ0FDM0I7RUFDREksb0JBQW9CLENBQUNILFdBQVcsR0FBSSxnQkFBZUosc0JBQXVCLEVBQUM7O0VBRTNFO0VBQ0EsTUFBTVEsV0FBVyxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFDM0QsTUFBTU0sZUFBZSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztFQUVwRSxJQUFJTyxhQUFhO0VBQ2pCLElBQUlmLHFCQUFxQixLQUFLLENBQUMsSUFBSUssc0JBQXNCLEtBQUssQ0FBQyxFQUFFO0lBQ2hFVSxhQUFhLEdBQUcsQ0FBQztFQUNsQixDQUFDLE1BQU07SUFDTkEsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FDeEJqQixxQkFBcUIsR0FBR0ssc0JBQXNCLEdBQUksR0FBRyxDQUN0RDtFQUNGO0VBRUFRLFdBQVcsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEdBQUksR0FBRUosYUFBYyxHQUFFO0VBQzdDRCxlQUFlLENBQUNJLEtBQUssQ0FBQ0MsS0FBSyxHQUFJLEdBQUVKLGFBQWMsR0FBRTtBQUNsRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2pzL2xpYnJhcnkvaGVyb0Rpc3BsYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUFJPR1JFU1MgQkFSXG5jb25zdCByZW5kZXJQcm9ncmVzc0JhciA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgY3VycmVudEJvb2tzRGF0YSA9IGF3YWl0IGZldGNoKFwiL2FwaS9ib29rc1wiKTtcblx0bGV0IGN1cnJlbnRCb29rcyA9IGF3YWl0IGN1cnJlbnRCb29rc0RhdGEuanNvbigpO1xuXG5cdGNvbnN0IGN1cnJlbnRCb29rc1JlYWRDb3VudCA9IGN1cnJlbnRCb29rcy5maWx0ZXIoXG5cdFx0KGJvb2spID0+IGJvb2suaXNfcmVhZCA9PT0gdHJ1ZVxuXHQpLmxlbmd0aDtcblx0Y29uc3QgY3VycmVudEJvb2tzVG90YWxDb3VudCA9IGN1cnJlbnRCb29rcy5sZW5ndGg7XG5cdC8vIEJPT0sgVE9UQUxTIERJU1BMQVlcblx0Y29uc3QgYm9va1JlYWREaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29rcy1yZWFkLWRpc3BsYXlcIik7XG5cdGJvb2tSZWFkRGlzcGxheS50ZXh0Q29udGVudCA9IGBCb29rcyByZWFkOiAke2N1cnJlbnRCb29rc1JlYWRDb3VudH1gO1xuXG5cdGNvbnN0IGJvb2tUb3RhbERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2tzLXRvdGFsLWRpc3BsYXlcIik7XG5cdGJvb2tUb3RhbERpc3BsYXkudGV4dENvbnRlbnQgPSBgQm9va3MgdG90YWw6ICR7Y3VycmVudEJvb2tzVG90YWxDb3VudH1gO1xuXG5cdGNvbnN0IGJvb2tSZWFkRGlzcGxheUhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFwiLmJvb2tzLXJlYWQtZGlzcGxheS1oZXJvXCJcblx0KTtcblx0Ym9va1JlYWREaXNwbGF5SGVyby50ZXh0Q29udGVudCA9IGBCb29rcyByZWFkOiAke2N1cnJlbnRCb29rc1JlYWRDb3VudH1gO1xuXG5cdGNvbnN0IGJvb2tUb3RhbERpc3BsYXlIZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5ib29rcy10b3RhbC1kaXNwbGF5LWhlcm9cIlxuXHQpO1xuXHRib29rVG90YWxEaXNwbGF5SGVyby50ZXh0Q29udGVudCA9IGBCb29rcyB0b3RhbDogJHtjdXJyZW50Qm9va3NUb3RhbENvdW50fWA7XG5cblx0Ly8gUFJPR1JFU1MgQkFSIERJU1BMQVlcblx0Y29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLWJhclwiKTtcblx0Y29uc3QgcHJvZ3Jlc3NCYXJIZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzcy1iYXItaGVyb1wiKTtcblxuXHRsZXQgcHJvZ3Jlc3NXaWR0aDtcblx0aWYgKGN1cnJlbnRCb29rc1JlYWRDb3VudCA9PT0gMCAmJiBjdXJyZW50Qm9va3NUb3RhbENvdW50ID09PSAwKSB7XG5cdFx0cHJvZ3Jlc3NXaWR0aCA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cHJvZ3Jlc3NXaWR0aCA9IE1hdGguZmxvb3IoXG5cdFx0XHQoY3VycmVudEJvb2tzUmVhZENvdW50IC8gY3VycmVudEJvb2tzVG90YWxDb3VudCkgKiAxMDBcblx0XHQpO1xuXHR9XG5cblx0cHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc1dpZHRofSVgO1xuXHRwcm9ncmVzc0Jhckhlcm8uc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc1dpZHRofSVgO1xufTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJQcm9ncmVzc0JhciIsImN1cnJlbnRCb29rc0RhdGEiLCJmZXRjaCIsImN1cnJlbnRCb29rcyIsImpzb24iLCJjdXJyZW50Qm9va3NSZWFkQ291bnQiLCJmaWx0ZXIiLCJib29rIiwiaXNfcmVhZCIsImxlbmd0aCIsImN1cnJlbnRCb29rc1RvdGFsQ291bnQiLCJib29rUmVhZERpc3BsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImJvb2tUb3RhbERpc3BsYXkiLCJib29rUmVhZERpc3BsYXlIZXJvIiwiYm9va1RvdGFsRGlzcGxheUhlcm8iLCJwcm9ncmVzc0JhciIsInByb2dyZXNzQmFySGVybyIsInByb2dyZXNzV2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJzdHlsZSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==