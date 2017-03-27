import angular from 'angular'
import 'angular-route'

// local
import CustomersCtrl from './controllers/customers-ctrl'
import OrdersCtrl from './controllers/orders-ctrl'
import CustomersFactory from './services/customers-factory'
import CustomerCardDirective from './directives/customer-card-directive'
import CheckmarkFilter from './filters/checkmark-filter'
import AppConfig from './config'

angular.module('customersApp', ['ngRoute'])
  .config(AppConfig)
  .controller('OrdersCtrl', OrdersCtrl)
  .controller('CustomersCtrl', CustomersCtrl)
  .factory('CustomersFactory', CustomersFactory)
  .directive('customerCard', CustomerCardDirective)
  .filter('checkmark', CheckmarkFilter)

