import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {

  nomePagina = "IMC"
  peso = null
  altura = null
  imc = null
  tituloBotao = "Calcular IMC"

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImcPage');
  }

  ionViewDidEnter(){
   console.log("Entrou na página do IMC")
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: 'Preencha todos os campos antes de efetuar o calculo',
      buttons: ['OK']
    });
    alert.present();
  }

  limparCampos(){
    this.imc = null
    this.peso = null
    this.altura = null
  }

  calcularIMC() {
    if(this.peso == null || this.altura == null){
      this.presentAlert()
    } else {
      this.imc = Math.round((this.peso / (this.altura * this.altura))*100) / 100
    }
    
  }

}
