app.filter('checkmark', function() {
    return function(input) {
        var check = input > 10 ? '\u2713' : '\u2718';
        return input + ' ' + check;
    };
});

$scope.customers = [
    {id: 1, name: 'Joao', total: 5.996},
    {id: 2, name: 'Maria', total: 10.994},
    {id: 3, name: 'Jose', total: 10.99},
    {id: 4, name: 'Cesar', total: 15.994},
];

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


app.factory('customersFactory', function($http) {
    var factory = {};

    factory.getCustomers = function() {
        return $http.get('http://localhost:3000/api/customer');
    };

    return factory;
});

app.directive('customerCard', function() {
    return {
        restrict: 'E',
        scope: {
            customer: '='
        },
        transclude: true,
        replace: true,
        templateUrl: '/app/views/customer-card.html',
        link: function(scope, element, attrs) {
            element.on('click', function() {
                alert('click');
            });
        },
        controller: function($scope) {
            console.log('controller');
        }
    };
});
