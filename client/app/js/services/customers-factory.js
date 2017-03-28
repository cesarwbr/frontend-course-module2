function CustomersFactory ($http) {
  var factory = {};

  factory.getCustomers = function() {
    return $http.get('http://localhost:3000/api/customer');
  };

  return factory;
}

export default CustomersFactory
