import { ImcPageModule } from './../pages/imc/imc.module';
import { PesoEstimadoPageModule } from './../pages/peso-estimado/peso-estimado.module';
import { AlturaEstimadaPageModule } from './../pages/altura-estimada/altura-estimada.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PacienteSingleton } from './../singleton/PacienteSingleton';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from './../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AlturaEstimadaPageModule,
    PesoEstimadoPageModule,
    ImcPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PacienteSingleton
  ]
})
export class AppModule {}
