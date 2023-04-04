const { Delivery } = require('./delivery.class');
const createModel = require('../../models/delivery.model');
const hooks = require('./delivery.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/delivery', new Delivery(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('delivery');

  service.hooks(hooks);
};