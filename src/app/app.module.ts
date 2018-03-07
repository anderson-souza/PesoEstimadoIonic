import { ImcPage } from './../pages/imc/imc';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PesoEstimadoPage } from '../pages/peso-estimado/peso-estimado'
import { AlturaEstimadaPage } from '../pages/altura-estimada/altura-estimada'
import { TabsPage } from './../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PesoEstimadoPage,
    AlturaEstimadaPage,
    TabsPage,
    ImcPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PesoEstimadoPage,
    AlturaEstimadaPage,
    TabsPage,
    ImcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
