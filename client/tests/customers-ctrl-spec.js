describe('customers-ctrl', function () {
  beforeEach(module('customersApp'))

  var $controller

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_
  }))

  describe('total', function () {
    it('total of customers', function () {
      var $scope = {}
      var controller = $controller('CustomersCtrl', { $scope: $scope });
      $scope.customers = ['Joao', 'Maria', 'Jose']
      $scope.getLastCustomer()
      expect($scope.lastCustomer).toBe('Jose')
    })
  })
})