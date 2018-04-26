import {ImcPage} from "./../imc/imc";
import {AlturaEstimadaPage} from "./../altura-estimada/altura-estimada";
import {PesoEstimadoPage} from "./../peso-estimado/peso-estimado";
import {Component} from "@angular/core";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = AlturaEstimadaPage;
  tab2Root = PesoEstimadoPage;
  tab3Root = ImcPage;

  constructor() {
  }
}
