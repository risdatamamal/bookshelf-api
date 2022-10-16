const { addBookHandler } = require('./handler');

/* eslint-disable linebreak-style */
const routes = [
  {
    method: 'GET',
    path: '/',
    // eslint-disable-next-line no-unused-vars
    handler: (_request, _h) => 'Homepage',
  },
  {
    method: '*',
    path: '/',
    // eslint-disable-next-line no-unused-vars
    handler: (_request, _h) => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: 'POST',
    path: '/books',
    // eslint-disable-next-line no-unused-vars
    handler: addBookHandler,
  },
  {
    method: '*',
    path: '/about',
    // eslint-disable-next-line no-unused-vars
    handler: (_request, _h) => 'Halaman tidak dapat diakses dengan method',
  },
  {
    method: '*',
    path: '/{any*}',
    // eslint-disable-next-line no-unused-vars
    handler: (_request, _h) => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
