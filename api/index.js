const authRoutes = require('./authRoute');
const profileRoutes = require('./profileRoute');
const productRoutes = require('./productRoute');
const customerRoutes = require('./customerRoute');

const routes = [
  {
    path: '/api',
    handler: authRoutes,
  },
  {
    path: '/api',
    handler: profileRoutes,
  },
  {
    path: '/api',
    handler: productRoutes,
  },
  {
    path: '/api',
    handler: customerRoutes,
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
