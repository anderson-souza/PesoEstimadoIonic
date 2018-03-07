import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlturaEstimadaPage } from './altura-estimada';

@NgModule({
  declarations: [
    AlturaEstimadaPage,
  ],
  imports: [
    IonicPageModule.forChild(AlturaEstimadaPage),
  ],
  entryComponents: [
    AlturaEstimadaPage
  ]
})
export class AlturaEstimadaPageModule {}
