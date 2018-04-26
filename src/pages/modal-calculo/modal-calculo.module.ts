import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ModalCalculoPage} from './modal-calculo';

@NgModule({
  declarations: [
    ModalCalculoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCalculoPage),
  ],
})
export class ModalCalculoPageModule {
}
