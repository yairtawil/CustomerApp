'use strict';

/**
 * @ngdoc function
 * @name customerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the customerAppApp
 */
angular.module('customerApp')
  .controller('ConnectionCtrl', function ($scope) {

		$scope.userName = "";
		$scope.userPassword = "";
		
		$scope.isEmpty = false;	
		
		$scope.size = 0 ;
		$scope.strArr = {};
		$scope.myData = new Firebase("https://customersapp.firebaseio.com/Customers");		
		$scope.connection = function(){	
				if($scope.userName == "" || $scope.userPassword == ""){
					alert('Insert all *** to contionue!');		
					$scope.isEmpty = true;
				}
				else{
					$scope.isEmpty = false;	
					checkIfUserExists();	
				}				
		};
		
		function checkAllChild(parent){
			var back = false ;	
				$scope.myData.child(parent).once('value', function(snapshot) {
	
				var name = snapshot.child('Name').val(); 
				var pass = snapshot.child('Password').val();
				
				var exists = ($scope.userPassword == pass && $scope.userName == name);	
				if (exists) {
					back = true;
				}	
			});	
			return back;		
		}
		
		function checkIfUserExists() {
			var result = false,i;			
			for(i=0;i<$scope.size;i++){
				result = checkAllChild($scope.strArr[i]);	
					if(result) break;				
			}
			if(result){			
				window.location.href = "wellcome.html";	
			} 		
			else{		
				alert("Username / password incorrect. Try again!");	
			} 			
		}
		$scope.myData.on('child_added', function(snapshot) {	
			$scope.strArr[$scope.size] = snapshot.name();	
			$scope.size++;
		});
	
  });
