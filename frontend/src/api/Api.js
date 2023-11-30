// api.js
const BASE_URL = 'https://localhost:7105';

const API_BOOK = {
  postBook: `${BASE_URL}/api/book`,
  putBook: `${BASE_URL}/api/book`,
  getBookByIsbn: `${BASE_URL}/api/book`,
  getBooksByCategory: `${BASE_URL}/api/book`,
  getBooksByAuthor: `${BASE_URL}/api/book`,
  getBooksByPublisher: `${BASE_URL}/api/book`,
};

const API_AUTHOR = {
    getAuthor: `${BASE_URL}/api/author`,
    postAuthor: `${BASE_URL}/api/author`,
    putAuthor: `${BASE_URL}/api/book`,
    getBooksByCategory: `${BASE_URL}/api/book`,
    getBooksByAuthor: `${BASE_URL}/api/book`,
    getBooksByPublisher: `${BASE_URL}/api/book`,
    searchBooks:`${BASE_URL}/api/book`
  };
export {BASE_URL, API_AUTHOR, API_BOOK};