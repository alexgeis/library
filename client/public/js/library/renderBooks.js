const renderBooks = async function (searchTerm = "") {
	const bookContainer = document.querySelector(".book-card-container");
	bookContainer.innerHTML = "";

	const currentBooksData = await fetch("/api/books");
	let currentBooks = await currentBooksData.json();

	const lowerSearchTerm = searchTerm.toLowerCase();
	if (lowerSearchTerm !== "" && typeof lowerSearchTerm === "string") {
		const filteredCurrentBooks = currentBooks.filter((book) => {
			return (
				book.title.toLowerCase().includes(lowerSearchTerm) ||
				book.author.toLowerCase().includes(lowerSearchTerm)
			);
		});
		currentBooks = filteredCurrentBooks;
	}

	for (let i = 0; i < currentBooks.length; i++) {
		const book = currentBooks[i];
		const bookCard = document.createElement("div");

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
		closeBtn.addEventListener("click", async function () {
			const fetchURL = `/api/books/${book.id}`;
			const response = await fetch(fetchURL, {
				method: "DELETE",
			});
			if (response.ok) {
				renderProgressBar();
				renderBooks();
			} else {
				alert("Failed to delete book.");
			}
		});
		// EDIT BUTTON
		const editBtn = document.createElement("span");
		editBtn.classList.add("material-icons", "edit-book-form-open");
		editBtn.textContent = " edit ";
		editBtn.addEventListener("click", async function (event) {
			// SHOW EDIT FORM
			document
				.querySelector(".edit_book_section")
				.setAttribute("style", "display: block;");

			let bookCardChildren = Array.from(event.target.parentElement.childNodes);

			let existingBookInfo = {
				title: bookCardChildren[2].textContent,
				author: bookCardChildren[3].textContent.split(" ")[1],
				isbn: bookCardChildren[4].textContent.split(" ")[1],
				pages: bookCardChildren[5].textContent.split(" ")[3],
				edition: bookCardChildren[6].textContent.split(" ")[1],
				publish_date: bookCardChildren[7].textContent.split(" ")[1],
				is_read: bookCardChildren[9].firstChild.checked,
				book_id: book.id,
			};

			// POPULATE INPUTS WITH DEFAULT CONTENT
			document.querySelector("#b-title-edit").value = existingBookInfo.title;
			document.querySelector("#b-author-edit").value = existingBookInfo.author;
			document.querySelector("#b-isbn-edit").value = existingBookInfo.isbn;
			document.querySelector("#b-pages-edit").value = existingBookInfo.pages;
			document.querySelector("#b-edition-edit").value =
				existingBookInfo.edition;
			document.querySelector("#b-publishing_date-edit").value =
				existingBookInfo.publish_date;
			document.querySelector("#b-read_status-edit").value =
				existingBookInfo.is_read;

			document.querySelector("#edit-book-id").dataset.bookId =
				existingBookInfo.book_id;
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
		const bookIsbn = document.createElement("span");
		bookIsbn.classList.add("book-isbn");
		const labelIsbn = document.createElement("span");
		labelIsbn.classList.add("b-label");
		labelIsbn.textContent = "ISBN: ";
		const isbnDisplay = document.createElement("span");
		isbnDisplay.classList.add("isbn");
		isbnDisplay.textContent = book.isbn;
		bookIsbn.append(labelIsbn, isbnDisplay);
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
				renderProgressBar();
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
			editBtn,
			bookTitle,
			bookAuthor,
			bookIsbn,
			pagesCount,
			bookEdition,
			publishDate,
			readToggleLabel,
			toggleControlLabel
		);
		bookContainer.appendChild(bookCard);
	}
};
