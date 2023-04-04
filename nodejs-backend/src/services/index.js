const users = require("./users/users.service.js");
const products = require("./products/products.service.js");
const payments = require("./payments/payments.service.js");
const delivery = require("./delivery/delivery.service.js");
const shoppingorder = require("./shoppingorder/shoppingorder.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(products);
  app.configure(payments);
  app.configure(delivery);
  app.configure(shoppingorder);
  // ~cb-add-configure-service-name~
};
