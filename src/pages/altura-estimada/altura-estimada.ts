import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PacienteSingleton } from "./../../singleton/PacienteSingleton";
import { Component, ViewChild } from "@angular/core";
import {
  ActionSheetController,
  IonicPage,
  NavController,
  NavParams,
  Content,
  ModalController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-altura-estimada",
  templateUrl: "altura-estimada.html"
})
export class AlturaEstimadaPage {
  @ViewChild(Content) content: Content;
  nomePagina = "Altura Estimada";
  tituloBotao = "Calcular altura estimada";
  pacienteSingleton = PacienteSingleton.getInstance();
  formValidator: FormGroup;
  calculoRealizado: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public formBuilder: FormBuilder
  ) {
    this.formValidator = formBuilder.group({
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

  calcularAlturaEstimada() {
    this.calculoRealizado = true;
    if (this.formValidator.valid) {
      this.pacienteSingleton.calcularAlturaEstimada();
    }
  }

  proximaAba() {
    this.navCtrl.parent.select(1);
    this.content.scrollToTop();
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Opções",
      buttons: [
        {
          text: "Como o cálculo foi realizado?",
          handler: () => {
            console.log("Clicou no botão cálculo");
            this.presentModalCalculo();
          }
        },
        {
          text: "Sobre",
          handler: () => {
            console.log("Clicou no botão Sobre");
            this.presentModalSobre();
          }
        },
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Clicou no botão cancelar");
          }
        }
      ]
    });
    actionSheet.present();
  }

  presentModalSobre() {
    let modal = this.modalCtrl.create("ModalPageSobre");
    modal.present();
  }

  presentModalCalculo() {
    let modal = this.modalCtrl.create("ModalCalculoPage");
    modal.present();
  }
}
