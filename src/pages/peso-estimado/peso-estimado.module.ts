import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PesoEstimadoPage} from './peso-estimado';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TooltipsModule} from 'ionic-tooltips';

@NgModule({
  declarations: [
    PesoEstimadoPage,
  ],
  imports: [
    IonicPageModule.forChild(PesoEstimadoPage),
    TooltipsModule,
    BrowserAnimationsModule,
  ],
})
export class PesoEstimadoPageModule {
}
