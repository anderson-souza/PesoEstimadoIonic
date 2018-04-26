import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-calculo',
  templateUrl: 'modal-calculo.html',
})
export class ModalCalculoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCalculoPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
