import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Content } from "ionic-angular";
import { PacienteSingleton } from "../../singleton/PacienteSingleton";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
/*
 * TODO:
 *  Validar campos
 *  Bloquear calculo do peso se condições não forem satisfeitas
 *
 */
@IonicPage()
@Component({
  selector: "page-peso-estimado",
  templateUrl: "peso-estimado.html"
})
export class PesoEstimadoPage {
  @ViewChild(Content) content: Content;
  nomePagina = "Peso Estimado";
  tituloBotao = "Calcular peso estimado";
  pacienteSingleton = PacienteSingleton.getInstance();
  formValidator: FormGroup;
  calculoRealizado: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {this.formValidator = formBuilder.group({
    sexo: ["", Validators.required],
    idade: [
      "",
      Validators.compose([
        Validators.pattern("^[0-9]+"),
        Validators.required,
        Validators.min(0)
      ])
    ],
    compPerna: [
      "",
      Validators.compose([
        Validators.pattern("^[0-9]+"),
        Validators.required,
        Validators.min(0)
      ])
    ]
  });
}

  proximaAba() {
    this.navCtrl.parent.select(2);
    this.content.scrollToTop();
  }
}
