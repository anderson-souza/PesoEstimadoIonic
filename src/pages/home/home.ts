import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tituloBotao = 'Calcular Altura'
  idade = 0
  comprimentoPerna = 0
  sexo
  constructor(public navCtrl: NavController) {
    
  }

  logEvent(){
    console.log("Idade: " + this.idade + ". Comprimento Perna: " + this.comprimentoPerna + "Sexo: " + this.sexo);
  }

}
