<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>AncherPJ</title>
</head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

<body>
	<h3>Welcome..!</h3>
	Hi<a href="test/success.htm?status='status' ">Click</a> here to Test.<br/>
	<!-- <div ng-app="AJS" ng-controller="AJSCon">
		
		Enter name:<input style='background-color:{{name}}' type="text" ng-model="name" > {{name}}
		{{fname}}--{{lname}}
		<ul>
			<li ng-repeat="x in names">
			{{x.name}}--{{x.country}}
			</li>
		</ul>
	</div> -->
	
	<form ng-app="" name="myForm">
    Email:  <input type="email" name="myAddress" ng-model="text">
    		<span ng-show="myForm.myAddress.$error.email">Not a valid e-mail address</span>
	</form>
	
	<script src="AJS.js"></script>
	<script src="AJSCon.js"></script>
	<!-- <div ng-app="" ng-init="myCol='lightblue'">

		<input style="background-color:{{myCol}}" ng-model="myCol" value="{{myCol}}">

	</div> -->
	
	
	
</body>
</html>