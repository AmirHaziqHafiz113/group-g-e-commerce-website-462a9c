const assert = require('assert');
const app = require('../../src/app');

describe('\'delivery\' service', () => {
  it('registered the service', () => {
    const service = app.service('delivery');

    assert.ok(service, 'Registered the service (delivery)');
  });
});
