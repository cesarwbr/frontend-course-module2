function CustomersCtrl ($scope, CustomersFactory) {
  var vm = this
  CustomersFactory.getCustomers().then(function(data) {
    vm.customers = data.data
    vm.customersTotal = data.data.length
  })

  vm.getLastCustomer = getLastCustomer

  function getLastCustomer () {
    vm.lastCustomer = vm.customers[vm.customers.length - 1]

    return vm.lastCustomer
  }
}

export default CustomersCtrl