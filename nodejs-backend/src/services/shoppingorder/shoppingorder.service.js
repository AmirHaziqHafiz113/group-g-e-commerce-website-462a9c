const { Shoppingorder } = require('./shoppingorder.class');
const createModel = require('../../models/shoppingorder.model');
const hooks = require('./shoppingorder.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/shoppingorder', new Shoppingorder(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('shoppingorder');

  service.hooks(hooks);
};