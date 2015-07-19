angular.module('customerApp')
  .controller('CustomerslistCtrl', function ($scope) {
					
					$scope.Name = "";
					$scope.Password = "";
					$scope.Customers = {};
					$scope.myData = new Firebase("https://customersapp.firebaseio.com/Customers");			
					$scope.myData.on('value' , function(snapshot){
						$scope.Customers = snapshot.val();
						$scope.$apply();
					});		
				
		});
		
