//BOOK CONSTRUCTOR
const Book = function (title, author, pages, language, publishDate, readStatus) {
	return {
        title,
        author,
        pages,
        language,
        publishDate,
        readStatus,
        insertion_date = new Date().toLocaleString();
    }
}

// CLASS VERSION OF ABOVE CODE 84-93//
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
