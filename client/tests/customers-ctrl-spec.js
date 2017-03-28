describe('customers-ctrl', function () {
  beforeEach(module('customersApp'))

  var $controller

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_
  }))

  describe('total', function () {
    it('total of customers', function () {
      var vm = $controller('CustomersCtrl');

      vm.customers = ['Joao', 'Maria', 'Jose']
      vm.getLastCustomer()
      expect(vm.lastCustomer).toBe('Jose')
    })
  })
})