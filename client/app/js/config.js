function AppConfig ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'CustomersCtrl',
        controllerAs: 'customers',
        templateUrl: '/app/views/customers.html'
    })
    .when('/orders', {
        controller: 'OrdersCtrl',
        controllerAs: 'orders',
        templateUrl: '/app/views/orders.html'
    })
}

export default AppConfig
