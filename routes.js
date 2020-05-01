const routes = require('next-routes');

// API:
// routes.add([name], pattern = /name, page = name)
// Arguments:
// name - Route name
// pattern - Route pattern (like express, see path-to-regexp)
// page - Page inside ./pages to be rendered

module.exports = routes().add('example', '/example1/examplepath', 'example');
