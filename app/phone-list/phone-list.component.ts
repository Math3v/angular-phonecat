class PhoneListController {
  phones: any[];
  orderProp: string;
  query: string;

  static $inject = ['Phone', 'PhoneService'];

  constructor(Phone: any, phoneService: any) {
    this.orderProp = 'age';
    phoneService.getPhones().subscribe(response => {
      this.phones = response.json();
    })
  }
}

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });
