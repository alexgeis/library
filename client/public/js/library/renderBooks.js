const renderBooks = async function (searchTerm = "") {
	console.log({ searchTerm });
	const bookContainer = document.querySelector(".book-card-container");
	bookContainer.innerHTML = "";

	const currentBooksData = await fetch("/api/books");
	console.log({ currentBooksData });
	let currentBooks = await currentBooksData.json();
	console.log({ currentBooks });

	searchTerm = searchTerm.toLowerCase();
	if (searchTerm !== "" && typeof searchTerm === "string") {
		currentBooks = currentBooks.filter((book) => {
			book.title.toLowerCase().includes(searchTerm) ||
				book.author.toLowerCase().includes(searchTerm);
		});
	}
	console.log({ currentBooks });

	for (let i = 0; i < currentBooks.length; i++) {
		const book = currentBooks[i];
		const bookCard = document.createElement("div");

		// if (book.is_read === true || book.is_read === "true")
		if (book.is_read === true || book.is_read === "true") {
			bookCard.classList.add("read");
		} else if (book.is_read === false) bookCard.classList.add("not-read");

		bookCard.classList.add("single-book", "scale-in-center");
		bookCard.setAttribute("id", "book-" + i);
		bookCard.setAttribute("data-index", i);

		// CLOSE AND DELETE
		const closeBtn = document.createElement("span");
		closeBtn.classList.add("material-icons", "remove-book");
		closeBtn.textContent = " close ";
		closeBtn.addEventListener("click", function (event) {
			let element = event.target;
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
		bookPages.classList.add("pages");
		bookPages.textContent = book.pages;
		pagesCount.append(labelPages, bookPages);
		//
		const bookEdition = document.createElement("span");
		bookEdition.classList.add("book-edition");
		const labelEdition = document.createElement("span");
		labelEdition.classList.add("b-label");
		labelEdition.textContent = "Edition: ";
		const editionDisplay = document.createElement("span");
		editionDisplay.classList.add("edition");
		editionDisplay.textContent = book.edition;
		bookEdition.append(labelEdition, editionDisplay);
		//
		const publishDate = document.createElement("span");
		publishDate.classList.add("book-published");
		const labelDate = document.createElement("span");
		labelDate.classList.add("b-label");
		labelDate.textContent = "Published: ";
		const dateDisplay = document.createElement("span");
		dateDisplay.classList.add("publish-date");
		dateDisplay.textContent = book.publish_date;
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
		// if (book.is_read===true) toggleControlCheckbox.setAttribute("checked", "");
		if (book.is_read === true || book.is_read === "true")
			toggleControlCheckbox.checked = true;
		// if (bookReadStatusForm.value === true) toggleControlCheckbox.checked = true;
		const toggleControlSpan = document.createElement("span");
		toggleControlSpan.classList.add("read-toggle-slider", "round");
		toggleControlLabel.append(toggleControlCheckbox, toggleControlSpan);
		//

		toggleControlCheckbox.addEventListener("click", async function (event) {
			let element = event.target;

			let bookContainer = element.parentElement.parentElement;

			if (bookContainer.classList.contains("not-read")) {
				bookContainer.classList.remove("not-read");
				bookContainer.classList.add("read");
			} else if (bookContainer.classList.contains("read")) {
				bookContainer.classList.remove("read");
				bookContainer.classList.add("not-read");
			}
			let index = bookContainer.getAttribute("data-index");
			currentBooks[index].is_read = element.checked;

			const newReadStatusData = {
				is_read: currentBooks[index].is_read,
			};

			const fetchURL = `/api/books/${book.id}`;
			const response = await fetch(fetchURL, {
				method: "PUT",
				body: JSON.stringify(newReadStatusData),
				headers: { "Content-Type": "application/json" },
			});
			if (response.ok) {
				renderBooks();
				// // direct logged-in user to home page
				// document.location.replace("/");
			} else {
				alert("Failed to update book read status.");
			}

			// renderBooks();
		});

		bookCard.append(
			closeBtn,
			bookTitle,
			bookAuthor,
			pagesCount,
			bookEdition,
			publishDate,
			readToggleLabel,
			toggleControlLabel
		);
		bookContainer.appendChild(bookCard);
	}
};
