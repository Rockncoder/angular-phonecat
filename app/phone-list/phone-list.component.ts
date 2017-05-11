declare const angular: angular.IAngularStatic;
import {downgradeComponent} from '@angular/upgrade/static';

import {Phone} from '../core/phone/phone.service';
import {PhoneData} from '../core/phone/PhoneData';
import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'phone-list',
  templateUrl: 'phone-list.template.html'
})
export class PhoneListComponent {
  phones: PhoneData[];
  query: string;
  orderProp: string;

  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

  getPhones(): PhoneData[] {
    return this.sortPhones(this.filterPhones(this.phones));
  }

  private filterPhones(phones: PhoneData[]) {
    if (phones && this.query) {
      return phones.filter(phone => {
        let name = phone.name.toLowerCase();
        let snippet = phone.snippet.toLowerCase();
        return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
      });
    }
    return phones;
  }

  private sortPhones(phones: PhoneData[]) {
    if (phones && this.orderProp) {
      return phones
        .slice(0) // Make a copy
        .sort((a, b) => {
          if (a[this.orderProp] < b[this.orderProp]) {
            return -1;
          } else if ([b[this.orderProp] < a[this.orderProp]]) {
            return 1;
          } else {
            return 0;
          }
        });
    }
    return phones;
  }
}

angular.module('phoneList')
  .directive(
    'phoneList',
    downgradeComponent({component: PhoneListComponent}) as angular.IDirectiveFactory
  );
