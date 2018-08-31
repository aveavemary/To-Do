import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { HomePage } from '../../pages/home/home';


@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  selectedItem: any;
 
  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams) {
      this.selectedItem = this.navParams.get('selectedItem');
  }
 
  saveToDo(){
 
   console.log('saved item: ', this.selectedItem);
 
    this.view.dismiss(this.selectedItem);
 
  }
 
  close(){
    this.view.dismiss();
  }
}