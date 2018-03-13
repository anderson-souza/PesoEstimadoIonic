import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PacienteSingleton } from "../../singleton/PacienteSingleton";
/**
 * TODO:
 * Validação dos campos de Altura e Peso
 * Enfatizar faixa do IMC do paciente
 * Bloquear botão se as condições para calculo não forem satisfeitas
 */
@IonicPage()
@Component({
  selector: "page-imc",
  templateUrl: "imc.html"
})
export class ImcPage {
  nomePagina = "IMC";
  tituloBotao = "Calcular IMC";
  pacienteSingleton = PacienteSingleton.getInstance();

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
