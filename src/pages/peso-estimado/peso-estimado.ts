import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-peso-estimado',
  templateUrl: 'peso-estimado.html',
})
export class PesoEstimadoPage {

  sexo = null
  etnia = null
  alturaJoelho = null
  circunferenciaBraco = null
  tituloBotao = "Calcular"
  pesoEstimado = 0

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sexo = this.navParams.get('sexo')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesoEstimadoPage');
  }

  calcularPesoEstimado(){
    if(this.sexo != null && this.etnia != null){
      if(this.sexo == "Masculino"){
        if(this.etnia == "Branco"){ //Homem Branco
          this.pesoEstimado = (this.alturaJoelho * 1.19) + (this.circunferenciaBraco * 3.21) - 86.82;
        } else { //Homem Negro
          this.pesoEstimado = (this.alturaJoelho * 1.09) + (this.circunferenciaBraco * 3.14) - 83.72;
        }
      } else {
        if(this.etnia == "Branco"){ //Mulher Branca
          this.pesoEstimado = (this.alturaJoelho * 1.01) + (this.circunferenciaBraco * 2.81) - 66.04;
        } else{ //Mulher Negra
          this.pesoEstimado = (this.alturaJoelho * 1.24) + (this.circunferenciaBraco * 2.81) - 82.48;
        }
      }
      this.pesoEstimado = Math.round(this.pesoEstimado);
    }
  }

  limparCampos(){
    this.sexo = null
    this.etnia = null
    this.alturaJoelho = null
    this.circunferenciaBraco = null
    this.pesoEstimado = 0
  }
}
