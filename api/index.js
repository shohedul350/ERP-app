const authRoutes = require('./authRoute');

const routes = [
  {
    path: '/api',
    handler: authRoutes,
  },

];

module.exports = (app) => {
  routes.forEach((r) => {
    if (r.path === '/') {
      app.get(r.path, r.handler);
    } else {
      app.use(r.path, r.handler);
    }
  });
};
