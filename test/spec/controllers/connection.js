'use strict';

describe('Controller: ConnectionCtrl', function () {

  // load the controller's module
  beforeEach(module('customerApp'));

  var ConnectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConnectionCtrl = $controller('ConnectionCtrl', {
      $scope: scope
    });
  }));

  it('should return false when username/password are empty: ', function () {
     scope.userName = "";
     scope.userPassword = "";
     scope.connection();
     expect(scope.isEmpty).toBe(true);
     scope.userName = "_";
     scope.userPassword = "";
     scope.connection();
     expect(scope.isEmpty).toBe(true);
     scope.userName = "";
     scope.userPassword = "_";
     scope.connection();
     expect(scope.isEmpty).toBe(true);
     scope.userName = "_";
     scope.userPassword = "_";
     scope.connection();
     expect(scope.isEmpty).toBe(false); 
  });
});
