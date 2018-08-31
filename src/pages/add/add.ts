import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

	todo: string;
  date: string;
 
  constructor(public navCtrl: NavController, public view: ViewController) {
 
  }
 
  saveToDo(){
 
    let newItem = {
      todo: this.todo,
      date: this.date
    };
 
    this.view.dismiss(newItem);
 
  }
 
  close(){
    this.view.dismiss();
  }
 
}