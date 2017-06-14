export class Phone {

  resource: angular.resource.IResourceService;
  
  constructor($resource: angular.resource.IResourceService) {
    this.resource = $resource;
  }

  getPhoneResource() {
    return this.resource('phones/:phoneId.json', {}, {
      query: {
        method: 'GET',
        params: {phoneId: 'phones'},
        isArray: true
      }
    });
  }
}
