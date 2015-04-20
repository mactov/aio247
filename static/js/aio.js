var aioApp = angular.module('aio', []);

aioApp.controller('welcomeController', function($scope) {
    $scope.userRole = 'unknown';
    $scope.updateRoleToCustomer = function() {
    $scope.userRole = 'customer';
    };
	$scope.updateRoleToProvider = function() {
    $scope.userRole = 'provider';
    };
}