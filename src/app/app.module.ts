import { InAppBrowser } from "@ionic-native/in-app-browser";
import { ImcPageModule } from "./../pages/imc/imc.module";
import { PesoEstimadoPageModule } from "./../pages/peso-estimado/peso-estimado.module";
import { AlturaEstimadaPageModule } from "./../pages/altura-estimada/altura-estimada.module";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { PacienteSingleton } from "./../singleton/PacienteSingleton";

import { MyApp } from "./app.component";
import { TabsPage } from "./../pages/tabs/tabs";
import { TabelaImcProvider } from '../providers/tabela-imc/tabela-imc';

@NgModule({
  declarations: [MyApp, TabsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AlturaEstimadaPageModule,
    PesoEstimadoPageModule,
    ImcPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TabsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PacienteSingleton,
    InAppBrowser,
    TabelaImcProvider
  ]
})
export class AppModule {}
