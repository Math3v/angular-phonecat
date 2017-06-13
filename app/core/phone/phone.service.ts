class PhoneService {

  resource: angular.resource.IResourceService;
  
  static $inject = ['$resource'];

  constructor($resource: angular.resource.IResourceService) {
    this.resource = $resource;
  }

  get() {
    return this.resource('phones/:phoneId.json', {}, {
      query: {
        method: 'GET',
        params: {phoneId: 'phones'},
        isArray: true
      }
    });
  }
}

angular.
  module('core.phone').
  factory('Phone', ['$resource', function($resource) {
    return new PhoneService($resource).get();
  }]);
