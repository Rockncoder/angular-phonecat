import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {HttpModule} from '@angular/http';
import {Phone} from './core/phone/phone.service';
import {PhoneListComponent} from './phone-list/phone-list.component';
import {routeParamsProvider} from './ajs-upgraded-providers';
import {PhoneDetailComponent} from './phone-detail/phone-detail.component';
import {FormsModule} from "@angular/forms";
import {CheckmarkPipe} from './core/checkmark/checkmark.pipe';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  providers: [
    Phone,
    routeParamsProvider
  ],
  entryComponents: [
    PhoneListComponent,
    PhoneDetailComponent
  ],
})
export class AppModule {
  ngDoBootstrap() {
  }
}
