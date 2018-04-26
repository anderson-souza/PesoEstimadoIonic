import {Component, ViewChild} from "@angular/core";
import {Content, IonicPage, NavController, NavParams} from "ionic-angular";
import {PacienteSingleton} from "../../singleton/PacienteSingleton";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  ) {
    this.formValidator = formBuilder.group({
      sexo: ["", Validators.required],
      etnia: ["", Validators.required],
      compPerna: [
        "",
        Validators.compose([
          Validators.pattern("^[0-9]+"),
          Validators.required,
          Validators.min(0)
        ])
      ],
      circBraco: [
        "",
        Validators.compose([
          Validators.pattern("^[0-9]+"),
          Validators.required,
          Validators.min(0)
        ])
      ]
    });
  }

  calcularPesoEstimado() {
    this.calculoRealizado = true;
    if (this.formValidator.valid) {
      this.pacienteSingleton.calcularPesoEstimado();
    }
  }

  proximaAba() {
    this.navCtrl.parent.select(2);
    this.content.scrollToTop();
  }
}
