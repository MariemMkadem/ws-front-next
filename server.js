const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const app = next({ dir: './src', dev });
const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});

app.prepare().then(() => {
  const server = express();
  server.use(handler).listen(PORT, err => {
    if (err) throw err;
    /* eslint-disable */
    console.log(`> 🎉🎉🎉🎉🎉 Ready on http://localhost:${PORT}`);
  });
});
