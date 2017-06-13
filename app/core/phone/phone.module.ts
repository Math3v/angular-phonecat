'use strict';
declare const System: any;

System.import('/tsc-output/core/phone/phone.service.js').then(m => {
  angular.module('core.phone').
    factory('Phone', ['$resource', function($resource) {
      return new m.Phone($resource);
    }])
});

// Define the `core.phone` module
angular.module('core.phone', ['ngResource']);
