angular.module('customerApp')
  .controller('RegisterCtrl', function ($scope) {
				
					$scope.Name = "";
					$scope.Password = "";
					$scope.verifyPassword = "";		
						
					$scope.isEmpty = false;	
					$scope.isEquals = true;		
					$scope.isExists = false;

					$scope.myData = new Firebase("https://customersapp.firebaseio.com/Customers");
					var size = 0 ;
					var strArr = {};				
					
					$scope.saveUser = function(){
						if($scope.Name == "" || $scope.Password == "" ||$scope.verifyPassword == ""  ){
							alert('Insert all *** to contionue!');		
							$scope.isEmpty = true;	
							return ;	
						}
						$scope.isEmpty = false;			
						if($scope.Password !=$scope.verifyPassword){
							alert('Password and verifyPassword are not equals, try again please!');
							$scope.isEquals = false;
							return ;	
						}
						$scope.isEquals = true;							
						if(checkIfUserExists()){
							alert('Username already exists , Try a different username.');
							$scope.isExists = true;
							return ;
						}
						$scope.isExists = false;
						$scope.myData.push({Name: $scope.Name, Password: $scope.Password});
						$scope.Name = "";
						$scope.Password = "";	
						$scope.verifyPassword = "";			
						alert('You have successfully signed.' + $scope.Name);
						window.location.href="index.html"
						
					};
					
					function checkAllChild(parent){
						var back = false ;	
						$scope.myData.child(parent).once('value', function(snapshot) {
					
						var name = snapshot.child('Name').val(); 
				
						var exists = ($scope.Name == name);	
						if (exists) {
							back = true;
						}	
				});	
				return back;		
			}
		
			function checkIfUserExists() {
				var result = false,i;			
				for(i=0;i<size;i++){
					result = checkAllChild(strArr[i]);	
						if(result) break;				
				}
				return result;			
			}
			$scope.myData.on('child_added', function(snapshot) {	
				strArr[size] = snapshot.name();	
				size++;
			});							
		
		});
		
