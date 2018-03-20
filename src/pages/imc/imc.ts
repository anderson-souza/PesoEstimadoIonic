import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PacienteSingleton } from "../../singleton/PacienteSingleton";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

@IonicPage()
@Component({
  selector: "page-imc",
  templateUrl: "imc.html"
})
export class ImcPage {
  nomePagina = "IMC";
  tituloBotao = "Calcular IMC";
  pacienteSingleton = PacienteSingleton.getInstance();
  formValidator: FormGroup;
  calculoRealizado: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.formValidator = formBuilder.group({
      peso: [
        "",
        Validators.compose([
          Validators.pattern("^[0-9]+"),
          Validators.required,
          Validators.min(0)
        ])
      ],
      altura: [
        "",
        Validators.compose([
          Validators.pattern("^[0-9]+(.[0-9]{1,2})?$"),
          Validators.required,
          Validators.min(0)
        ])
      ]
    });
  }

  calcularIMC() {
    this.calculoRealizado = true;
    if (this.formValidator.valid) {
      this.pacienteSingleton.calcularIMC();
    }
  }
}
