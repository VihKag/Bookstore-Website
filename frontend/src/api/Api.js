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

const API_CATEGORY = {
  getCategory: `${BASE_URL}/api/category`,
  postCategory: `${BASE_URL}/api/category`,
  putCategory: `${BASE_URL}/api/category`,
  getCategoryById: `${BASE_URL}/api/category`,
  getCategoryByName: `${BASE_URL}/api/category`,
}

const API_PUBLISHER = {
  getPublisher: `${BASE_URL}/api/publisher`,
  postPublisher: `${BASE_URL}/api/publisher`,
  putPublisher: `${BASE_URL}/api/publisher`,
  getCategoryById: `${BASE_URL}/api/category`,
  getCategoryByName: `${BASE_URL}/api/category`,
}

const API_USER = {
  getUser: `${BASE_URL}/api/user`,
  putUser: `${BASE_URL}/api/user`,
  deleteUserById: `${BASE_URL}/api/user`,
  getUserById: `${BASE_URL}/api/user`,
}

export {BASE_URL, API_AUTHOR, API_BOOK, API_CATEGORY, API_PUBLISHER, API_USER};