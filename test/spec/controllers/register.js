'use strict';

describe('Controller: RegisterCtrl', function () {

  // load the controller's module
  beforeEach(module('customerApp'));

  var RegisterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterCtrl = $controller('RegisterCtrl', {
      $scope: scope
    });
  }));

  it('should return false when username/password are empty: ', function () {
     scope.Name = "";
     scope.Password = "";
     scope.verifyPassword = "";   
     scope.saveUser();
     expect(scope.isEmpty).toBe(true);
  });

  
});
