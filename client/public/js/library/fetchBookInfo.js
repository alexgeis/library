const fetchBookInfo = async (query) => {
	const libUrlAPI = "http://openlibrary.org/search.json?q=";
	const cleanQueryStr = query.split(" ").join("+");
	const libAPIQueryStr = libUrlAPI + cleanQueryStr;

	const responseLibraryData = await fetch(libAPIQueryStr);
	const responseLibrary = await responseLibraryData.json();

	console.log(responseLibrary);
	return responseLibrary;
};

fetchBookInfo("lord of the rings");
