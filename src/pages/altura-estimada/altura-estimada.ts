import { PacienteSingleton } from './../../singleton/PacienteSingleton';
import { DataProvider } from './../../providers/data/data';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Tabs } from 'ionic-angular/navigation/nav-interfaces';

@IonicPage()
@Component({
  selector: 'page-altura-estimada',
  templateUrl: 'altura-estimada.html',
})
export class AlturaEstimadaPage {

  nomePagina = "Altura Estimada"
  tituloBotao = "Calcular altura estimada"
  pacienteSingleton = PacienteSingleton.getInstance();
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public  data: DataProvider) {
  }

  proximaAba(){
    this.data.paramData = 'Passei um dado daora show viado'
    this.navCtrl.parent.select(1);
    this.content.scrollToTop();
  }

  calcularAlturaEstimada(){
    if(this.pacienteSingleton.sexo != null){
      if(this.pacienteSingleton.sexo == "Masculino"){
        this.pacienteSingleton.alturaEstimada = (2.02 * this.pacienteSingleton.comprimentoPerna) - (0.04 * this.pacienteSingleton.idade) + 64.19;
      } else{
        this.pacienteSingleton.alturaEstimada = (1.83 * this.pacienteSingleton.comprimentoPerna) - (0.24 * this.pacienteSingleton.idade) + 84.88;
      }
      this.pacienteSingleton.alturaEstimada = Math.round(this.pacienteSingleton.alturaEstimada)
      this.pacienteSingleton.alturaEstimada /= 100
    }
  }
}
