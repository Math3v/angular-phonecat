'use strict';

System.import('/tsc-output/core/phone/phone.service.js').then(m => {
  angular.module('core.phone').
    factory('Phone', ['$resource', function($resource) {
      return new m.PhoneService($resource).get();
    }])
});

// Define the `core.phone` module
angular.module('core.phone', ['ngResource']);
