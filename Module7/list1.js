'use strict';

var list1 = angular.module('myApp')
.controller('List1Ctrl', ['$scope', 'myService', '$routeParams',
  function($scope, myService, $routeParams) {
    
  $scope.coffees = myService;
  $scope.reptar = $routeParams.id;

  function findReviews(data, targetId){
    var categoryArray = data;
    for(var i = 0; i < categoryArray.length; i++){
      if(categoryArray[i].id == targetId){
        return(categoryArray[i].reviews);
      }
    }
  }

  function findName(data, targetId){
    var categoryArray = data;
    for(var i = 0; i < categoryArray.length; i++){
      if(categoryArray[i].id == targetId){
        return(categoryArray[i].brand);
      }
    }
  }
  $scope.selectedReviews = findReviews($scope.coffees, $scope.reptar);
  $scope.brandName = findName($scope.coffees, $scope.reptar);
}]);