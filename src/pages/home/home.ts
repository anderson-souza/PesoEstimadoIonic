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
    }
  }

  logEvent(){
    console.log("Idade: " + this.idade + ". Comprimento Perna: " + this.comprimentoPerna + "Sexo: " + this.sexo);
  }

  limparCampos(){
    this.idade = 0
    this.comprimentoPerna = 0
    this.sexo = ''
  }
}
