declare const angular: angular.IAngularStatic;
import {Phone} from '../core/phone/phone.service';
import {PhoneData} from '../core/phone/PhoneData';

class PhoneDetailController {
  phone: PhoneData;
  mainImageUrl: string;
  static $inject = ['$routeParams', 'phone'];

  constructor($routeParams: angular.route.IRouteParamsService, phone: Phone) {
    let phoneId = $routeParams['phoneId'];
    phone.get(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
angular.module('phoneDetail').component('phoneDetail', {
  templateUrl: 'phone-detail/phone-detail.template.html',
  controller: PhoneDetailController
});
