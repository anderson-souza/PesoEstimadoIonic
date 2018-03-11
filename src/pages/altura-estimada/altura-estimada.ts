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
  idade = null
  comprimentoPerna = null
  sexo = null
  alturaEstimada = 0
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public  data: DataProvider) {
  }

  proximaAba(){
    this.data.paramData = 'Passei um dado daora show viado'
    this.navCtrl.parent.select(1);
    this.content.scrollToTop();
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
