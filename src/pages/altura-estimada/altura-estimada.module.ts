import {TooltipsModule} from "ionic-tooltips";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {AlturaEstimadaPage} from "./altura-estimada";

@NgModule({
  declarations: [AlturaEstimadaPage],
  imports: [
    IonicPageModule.forChild(AlturaEstimadaPage),
    TooltipsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [AlturaEstimadaPage]
})
export class AlturaEstimadaPageModule {
}
