import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-modal",
  templateUrl: "modal.html"
})
export class ModalPageSobre {
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ModalPageSobre");
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
