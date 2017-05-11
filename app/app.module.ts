import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {HttpModule} from '@angular/http';    // <<< We need the Angular HTTP module now
import {Phone} from './core/phone/phone.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule,
  ],
  providers: [
    Phone
  ]
})
export class AppModule {
  ngDoBootstrap() {
  }
}
