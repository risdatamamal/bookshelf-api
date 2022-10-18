const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
  {
    method: '*',
    path: '/',
    // eslint-disable-next-line no-unused-vars
    handler: (_request, _h) => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: '*',
    path: '/{any*}',
    // eslint-disable-next-line no-unused-vars
    handler: (_request, _h) => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
