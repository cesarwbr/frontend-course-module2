function CustomerCardDirective () {
  return {
    restrict: 'E',
    scope: {
      customer: '=data'
    },
    templateUrl: '/app/views/customer.html',
    replace: true
  }
}

export default CustomerCardDirective
