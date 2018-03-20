import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";

@IonicPage()
@Component({
  selector: "page-modal",
  templateUrl: "modal.html"
})
export class ModalPageSobre {
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ModalPageSobre");
  }

  openLinkedinPage() {
    const browser = this.iab.create(
      "https://www.linkedin.com/in/andersonpds/",
      "_self"
    );
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
