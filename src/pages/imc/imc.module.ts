import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ImcPage} from "./imc";
import {TooltipsModule} from "ionic-tooltips";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [ImcPage],
  imports: [
    IonicPageModule.forChild(ImcPage),
    TooltipsModule,
    BrowserAnimationsModule
  ]
})
export class ImcPageModule {
}
