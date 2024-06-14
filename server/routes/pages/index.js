const { Router } = require('express');
const mainRouter = require('./main-pages');
const favoritesRouter = require('./favorites-pages');
const aboutRouter = require('./about-pages');
const faqRouter = require('./faq-pages');
const searchRouter = require('./search-pages');
const myaccountRouter = require('./myaccount-pages')
const NotFoundRouter = require('./notFound-pages');


const router = Router();

module.exports = (params) => {
  router.use(mainRouter(params));
  router.use(favoritesRouter(params));
  router.use(aboutRouter(params));
  router.use(faqRouter(params));
  router.use(myaccountRouter(params));
  router.use(searchRouter(params));
  router.use(NotFoundRouter(params));
  return router;
};
