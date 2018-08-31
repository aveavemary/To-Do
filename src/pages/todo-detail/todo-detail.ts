import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-todo-detail',
  templateUrl: 'todo-detail.html',
})
export class TodoDetailPage {

   todo;
  date;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.todo = this.navParams.get('item').todo;
    this.date = this.navParams.get('item').date;
  }
 
}