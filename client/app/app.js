var angular = require('angular');
require('angular-route');

var app = angular.module('customersApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'CustomersCtrl',
        templateUrl: '/app/views/customers.html'
    })
    .when('/orders', {
        controller: 'OrdersCtrl',
        templateUrl: '/app/views/orders.html'
    });
});

app.controller('OrdersCtrl', function($scope) {
  $scope.customerId = 4;
});

app.controller('CustomersCtrl', function($scope, CustomersFactory) {
  $scope.name = 'test';
  CustomersFactory.getCustomers().success(function(data) {
    $scope.customers = data;
  });
});

app.factory('CustomersFactory', function($http) {
  var factory = {};

  factory.getCustomers = function() {
    return $http.get('http://localhost:3000/api/customer');
  };

  return factory;
});

app.directive('customerCard', function(CustomersFactory) {
  return {
    restrict: 'E',
    scope: {
      newData: '=data'
    },
    templateUrl: '/app/views/customer.html',
    transclude: true,
    replace: true,
    controller: function($scope) {
      console.log($scope.newData.name);
    },
    link: function(scope, element, attrs) {
      element.on('click', function() {
        alert('click');
      });
    }
  };
});

app.filter('checkmark', function() {
  return function(input) {
    var check = input > 10 ? '\u2713' : '\u2718';

    return input + ' ' + check;
  };
});
