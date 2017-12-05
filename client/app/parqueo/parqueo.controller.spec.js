'use strict';

describe('Component: ParqueoComponent', function () {

  // load the controller's module
  beforeEach(module('paraisoCiclistaApp'));

  var ParqueoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ParqueoComponent = $componentController('parqueo', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
