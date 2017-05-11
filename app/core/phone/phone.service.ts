import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {downgradeInjectable} from '@angular/upgrade/static';
import {PhoneData} from './PhoneData';
declare const angular: angular.IAngularStatic;


// Remember where you see an Injectable somewhere else there is a provider

@Injectable()
export class Phone {
  constructor(private http: Http) {
  }

  query(): Observable<PhoneData[]> {
    return this.http.get(`phones/phones.json`)
      .map((res: Response) => res.json());
  }

  get(id: string): Observable<PhoneData> {
    return this.http.get(`phones/${id}.json`)
      .map((res: Response) => res.json());
  }
}

// In order for AngularJS to see the service, we must downgrade it

angular.module('core.phone').factory('phone', downgradeInjectable(Phone));
