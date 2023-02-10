const { createProxyMiddleware } = require('http-proxy-middleware');

const API_URL = 'https://cubical-backend-server.onrender.com';

module.exports = function (app) {
app.use(
    '/adminAddRoom',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/room`;
      }
    })
  );
  app.use(
    '/displayRooms',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/room`;
      }
    })
  );
  app.use(
    '/deleteRooms',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/room/${req.query.id}`;
      }
    })
  );
  app.use(
    '/updateRooms',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/room/${req.query.id}`;
      }
    })
  );
  app.use(
    '/getUpdateRooms',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/room/${req.query.id}`;
      }
    })
  );
  app.use(
    '/dologin',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/login`;
      }
    })
  );

  app.use(
    '/refreshToken',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/refreshToken`;
      }
    })
  );

  /* ---- Service Type ---- */
  app.use(
    '/getServicesTypeList',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/service-type`;
      }
    })
  );

  app.use(
    '/addNewServiceType',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/service-type`;
      }
    })
  );

  app.use(
    '/deleteServiceType',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/service-type/${req.query.i}`;
      }
    })
  );

  app.use(
    '/updateServiceType',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/service-type/${req.query.i}`;
      }
    })
  );
  /* ---- ./Service Type ---- */

  /* ---- Service List ---- */
  app.use(
    '/getServicesList',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/services`;
      }
    })
  );

  app.use(
    '/addNewService',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/services`;
      }
    })
  );

  app.use(
    '/deleteService',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/services/${req.query.i}`;
      }
    })
  );

  app.use(
    '/updateService',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/services/${req.query.i}`;
      }
    })
  );
  /* ---- ./Service List ---- */

  /* ---- Contractor List ---- */
  app.use(
    '/getContractorsList',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/contractors`;
      }
    })
  );

  app.use(
    '/deleteContractor',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/contractors/${req.query.i}`;
      }
    })
  );
  
  app.use(
    '/updateContractor',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/contractors/${req.query.i}`;
      }
    })
  );

  app.use(
    '/addNewContractor',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return `/api/v1/entrance/contractors`;
      }
    })
  );
  /* ---- ./Contractor List ---- */

};