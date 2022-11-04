const renderBooks = async function () {
	const bookContainer = document.querySelector(".book-card-container");
	bookContainer.innerHTML = "";

	const currentBooks = await fetch("/api/books");
	console.log(currentBooks);

	for (let i = 0; i < currentBooks.length; i++) {
		const book = currentBooks[i];
		// console.log(book.readStatus);
		//
		const bookCard = document.createElement("div");

		// if (book.readStatus === true || book.readStatus === "true")
		if (book.readStatus === true || book.readStatus === "true") {
			bookCard.classList.add("read");
		} else if (book.readStatus === false) bookCard.classList.add("not-read");

		bookCard.classList.add("single-book", "scale-in-center");
		bookCard.setAttribute("id", "book-" + i);
		bookCard.setAttribute("data-index", i);
		//
		const closeBtn = document.createElement("span");
		closeBtn.classList.add("material-icons", "remove-book");
		closeBtn.textContent = " close ";
		closeBtn.addEventListener("click", function (event) {
			let element = event.target;
			console.log(element);
			let index = element.parentElement.getAttribute("data-index");
			currentBooks.splice(index, 1);
			setCurrentBooks(currentBooks);
			localStorage.setItem("books", JSON.stringify(currentBooks));
			console.log(currentBooks);
			renderBooks();
		});
		//
		const bookTitle = document.createElement("h3");
		bookTitle.classList.add("book-title");
		bookTitle.textContent = book.title;
		//
		const bookAuthor = document.createElement("span");
		bookAuthor.classList.add("book-author");
		const labelAuthor = document.createElement("span");
		labelAuthor.classList.add("b-label");
		labelAuthor.textContent = "By: ";
		const authorDisplay = document.createElement("span");
		authorDisplay.classList.add("author");
		authorDisplay.textContent = book.author;
		bookAuthor.append(labelAuthor, authorDisplay);
		//
		const pagesCount = document.createElement("span");
		pagesCount.classList.add("pages-count");
		const labelPages = document.createElement("span");
		labelPages.classList.add("b-label");
		labelPages.textContent = "Number of pages: ";
		const bookPages = document.createElement("span");
		bookPages.classList.add("b-pages");
		bookPages.textContent = book.pages;
		pagesCount.append(labelPages, bookPages);
		//
		const bookLanguage = document.createElement("span");
		bookLanguage.classList.add("book-language");
		const labelLanguage = document.createElement("span");
		labelLanguage.classList.add("b-label");
		labelLanguage.textContent = "Language: ";
		const languageDisplay = document.createElement("span");
		languageDisplay.classList.add("language");
		languageDisplay.textContent = book.language;
		bookLanguage.append(labelLanguage, languageDisplay);
		//
		const publishDate = document.createElement("span");
		publishDate.classList.add("book-published");
		const labelDate = document.createElement("span");
		labelDate.classList.add("b-label");
		labelDate.textContent = "Published: ";
		const dateDisplay = document.createElement("span");
		dateDisplay.classList.add("publish-date");
		dateDisplay.textContent = book.publishDate;
		publishDate.append(labelDate, dateDisplay);
		//
		const readToggleLabel = document.createElement("span");
		readToggleLabel.classList.add("read_toggle_label");
		readToggleLabel.textContent = "Mark as read: ";
		//
		const toggleControlLabel = document.createElement("label");
		toggleControlLabel.classList.add("switch");
		const toggleControlCheckbox = document.createElement("input");
		toggleControlCheckbox.setAttribute("type", "checkbox");
		toggleControlCheckbox.classList.add("read_toggle");
		// if (book.readStatus===true) toggleControlCheckbox.setAttribute("checked", "");
		if (book.readStatus === true || book.readStatus === "true")
			toggleControlCheckbox.checked = true;
		if (bookReadStatusForm.value === true) toggleControlCheckbox.checked = true;
		const toggleControlSpan = document.createElement("span");
		toggleControlSpan.classList.add("read-toggle-slider", "round");
		toggleControlLabel.append(toggleControlCheckbox, toggleControlSpan);
		//

		toggleControlCheckbox.addEventListener("click", function (event) {
			let element = event.target;
			// console.log(element.checked);
			let bookContainer = element.parentElement.parentElement;
			// console.log(bookContainer);
			if (bookContainer.classList.contains("not-read") === true) {
				bookContainer.classList.remove("not-read");
				bookContainer.classList.add("read");
			} else if (bookContainer.classList.contains("read") === true) {
				bookContainer.classList.remove("read");
				bookContainer.classList.add("not-read");
			}
			let index = bookContainer.getAttribute("data-index");
			currentBooks[index].readStatus = element.checked;
			// renderBooks();
		});

		bookCard.append(
			closeBtn,
			bookTitle,
			bookAuthor,
			pagesCount,
			bookLanguage,
			publishDate,
			readToggleLabel,
			toggleControlLabel
		);
		bookContainer.appendChild(bookCard);
	}
};
