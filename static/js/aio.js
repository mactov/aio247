angular.module('aio', [])
.controller('aioController', function($scope) {
    $scope.userRole = 'unknown';
    $scope.updateRoleToCustomer = function() {
        $scope.userRole = 'customer';
    };
	$scope.updateRoleToProvider = function() {
        $scope.userRole = 'provider';
    };
    $scope.showWelcome = function() {
        return ($scope.userRole == 'unknown');
    };
    $scope.userHasAccount = null;
    $scope.updateUserHasAccount = function() {
        $scope.userHasAccount = true;
    };
	$scope.updateUserHasNoAccount = function() {
        $scope.userHasAccount = false;
    };
    $scope.showAccount = function() {
        return ($scope.userHasAccount == null && $scope.userRole != 'unknown');
    };
});