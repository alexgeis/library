//BOOK CONSTRUCTOR
export const Book = function ({
	title,
	author,
	isbn,
	pages,
	edition,
	publish_date,
	is_read,
}) {
	return {
		title,
		author,
		isbn,
		pages,
		edition,
		publish_date,
		is_read,
		// insertion_date: new Date().toLocaleString(),
	};
};

// CLASS VERSION //
// class Book {
// 	constructor(title, author, pages, language, publishDate, readStatus) {
// 		this.title = title;
// 		this.author = author;
// 		this.pages = pages;
// 		this.language = language;
// 		this.publishDate = publishDate;
// 		this.readStatus = readStatus;
// 		this.insertion_date = new Date().toLocaleString();
// 	}
// }
