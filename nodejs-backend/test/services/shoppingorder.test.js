const assert = require('assert');
const app = require('../../src/app');

describe('\'shoppingorder\' service', () => {
  it('registered the service', () => {
    const service = app.service('shoppingorder');

    assert.ok(service, 'Registered the service (shoppingorder)');
  });
});
