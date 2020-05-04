<!DOCTYPE html>
<html data-ng-app="formSubmit">
<head>
	<meta charset="UTF-8">
	<title>AngularJS Post Form Spring MVC example</title>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script type="text/javascript">
	var app = angular.module('formSubmit', []);
	
	app.controller('FormSubmitController',[ '$scope', '$http', function($scope, $http) {
			
		$scope.list = [];
			$scope.headerText = 'AngularJS Post Form Spring MVC example: Submit below form';
			$scope.submit = function() {
				
				var formData = {
						"name" : $scope.name,
						"location" : $scope.location,
						"phone" : $scope.phone	
				};
				
				var response = $http.post('PostFormData.htm', formData);
				response.success(function(data, status, headers, config) {
					$scope.list.push(data);
				});
				
				
				//Empty list data after process
				$scope.list = [];
				
			};
		}]);
</script>
</head>
<body data-ng-app="formSubmit">
	<form data-ng-submit="submit()" data-ng-controller="FormSubmitController">
		<h3>{{headerText}}</h3>
		<p>Name: <input type="text" data-ng-model="name"></p>
		<p>Location: <input type="text" data-ng-model="location"></p>
		<p>Phone: <input type="text" data-ng-model="phone"></p>
		<input type="submit" id="submit" value="Submit" /><br>	
		
		<h4>You submitted below data through post:</h4>
		 <pre>Form data ={{list}}</pre>
	</form>
</body>
</html>