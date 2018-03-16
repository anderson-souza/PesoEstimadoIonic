import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPageSobre } from './modal';

@NgModule({
  declarations: [
    ModalPageSobre,
  ],
  imports: [
    IonicPageModule.forChild(ModalPageSobre),
  ],
})
export class ModalPageModule {}
