import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlturaEstimadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-altura-estimada',
  templateUrl: 'altura-estimada.html',
})
export class AlturaEstimadaPage {

  tituloBotao = 'Calcular Altura'
  idade = null
  comprimentoPerna = null
  sexo = null
  alturaEstimada = 0

  constructor(public navCtrl: NavController) {
    
  }

  calcularAlturaEstimada(){
    if(this.sexo != null){
      if(this.sexo == "Masculino"){
        this.alturaEstimada = (2.02 * this.comprimentoPerna) - (0.04 * this.idade) + 64.19;
      } else{
        this.alturaEstimada = (1.83 * this.comprimentoPerna) - (0.24 * this.idade) + 84.88;
      }
      this.alturaEstimada = Math.round(this.alturaEstimada)
      this.alturaEstimada /= 100
    }
  }

  logEvent(){
    console.log("Idade: " + this.idade + ". Comprimento Perna: " + this.comprimentoPerna + "Sexo: " + this.sexo);
  }

  limparCampos(){
    this.idade = null
    this.comprimentoPerna = null
    this.sexo = null
  }
}
