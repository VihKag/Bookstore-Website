// api.js
const BASE_URL = 'https://localhost:7105';

const API_BOOK = {
  crudBook: `${BASE_URL}/api/book`,
};

const API_AUTHOR = {
    crudAuthor: `${BASE_URL}/api/author`,
  };

const API_CATEGORY = {
  crudCategory: `${BASE_URL}/api/category`,
}

const API_PUBLISHER = {
  crudPublisher: `${BASE_URL}/api/publisher`,
}

const API_USER = {
  crudUser: `${BASE_URL}/api/user`,
}

export {BASE_URL, API_AUTHOR, API_BOOK, API_CATEGORY, API_PUBLISHER, API_USER};