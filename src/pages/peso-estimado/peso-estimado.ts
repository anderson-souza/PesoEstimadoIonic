import { DataProvider } from './../../providers/data/data';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { PacienteSingleton } from '../../singleton/PacienteSingleton';

@IonicPage()
@Component({
  selector: 'page-peso-estimado',
  templateUrl: 'peso-estimado.html',
})
export class PesoEstimadoPage {

  nomePagina = "Peso Estimado"
  tituloBotao = "Calcular peso estimado"
  pacienteSingleton = PacienteSingleton.getInstance();
  @ViewChild(Content) content: Content;

  public localData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calcularPesoEstimado(){
    if(this.pacienteSingleton.sexo != null && this.pacienteSingleton.etnia != null){
      if(this.pacienteSingleton.sexo == "Masculino"){
        if(this.pacienteSingleton.etnia == "Branco"){ //Homem Branco
          this.pacienteSingleton.pesoEstimado = (this.pacienteSingleton.comprimentoPerna * 1.19) + (this.pacienteSingleton.circunferenciaBraco * 3.21) - 86.82;
        } else { //Homem Negro
          this.pacienteSingleton.pesoEstimado = (this.pacienteSingleton.comprimentoPerna * 1.09) + (this.pacienteSingleton.circunferenciaBraco * 3.14) - 83.72;
        }
      } else {
        if(this.pacienteSingleton.etnia == "Branco"){ //Mulher Branca
          this.pacienteSingleton.pesoEstimado = (this.pacienteSingleton.comprimentoPerna * 1.01) + (this.pacienteSingleton.circunferenciaBraco * 2.81) - 66.04;
        } else{ //Mulher Negra
          this.pacienteSingleton.pesoEstimado = (this.pacienteSingleton.comprimentoPerna * 1.24) + (this.pacienteSingleton.circunferenciaBraco * 2.81) - 82.48;
        }
      }
      this.pacienteSingleton.pesoEstimado = Math.round(this.pacienteSingleton.pesoEstimado);
    }
  }

  proximaAba(){
    this.navCtrl.parent.select(2);
    this.content.scrollToTop();
  }

}
