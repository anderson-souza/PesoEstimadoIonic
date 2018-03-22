import { TabelaImcProvider } from "./../../providers/tabela-imc/tabela-imc";
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
  public tabelaIMC: Array<TabelaImcProvider>;

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

  ionViewDidLoad() {
    this.tabelaIMC = [
      new TabelaImcProvider("abaixo de 16", "Magreza Grave"),
      new TabelaImcProvider("16 - 16.9", "Magreza moderada"),
      new TabelaImcProvider("17.0 - 18.4", "Magreza leve"),
      new TabelaImcProvider("18.5 - 24.9", "Saudável"),
      new TabelaImcProvider("25.0 - 29.9", "Sobrepeso"),
      new TabelaImcProvider("30.0 - 34.9", "Obesidade Grau I"),
      new TabelaImcProvider("35.0 - 39.9", "Obesidade Grau II"),
      new TabelaImcProvider("acima de 40", "Obesidade Grau III")
    ];
  }

  calcularIMC() {
    this.calculoRealizado = true;
    if (this.formValidator.valid) {
      this.pacienteSingleton.calcularIMC();
    }
  }
}
