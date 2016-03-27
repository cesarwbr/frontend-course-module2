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

app.controller('CustomersCtrl', function($scope) {
  $scope.customers = [
      {id: 1, name: 'Joao', total: 5.996},
      {id: 2, name: 'Maria', total: 10.994},
      {id: 3, name: 'Jose', total: 10.99},
      {id: 4, name: 'Cesar', total: 15.994},
  ];
});
