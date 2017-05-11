declare const angular: angular.IAngularStatic;
import {Phone} from '../core/phone/phone.service';
import {PhoneData} from '../core/phone/PhoneData';

class PhoneListController {
  phones: PhoneData[];
  orderProp: string;

  // Without annotations this stuff can look pretty ugly
  static $inject = ['phone'];

  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
}
angular.module('phoneList').component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  controller: PhoneListController
});
