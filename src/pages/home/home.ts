import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { TodoDetailPage } from '../todo-detail/todo-detail';
import { Data } from '../../providers/data/data';
import { EditPage } from '../edit/edit';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public items = [];
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = todos;
      }
 
    });
 
  }
 
  ionViewDidLoad(){
 
  }
 
  addToDo(){
 
    let addModal = this.modalCtrl.create(AddPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveToDo(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveToDo(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
 
  viewList(item){
  	 this.navCtrl.push(TodoDetailPage, {
    item: item
  });
 
  }
 
  delete(item) {
        var index = this.items.indexOf(item, 0);
        if (index > -1) {
            this.items.splice(index, 1);
            this.dataService.save(this.items);
        }
    }

  edit(item){
    console.log('picked item:', item);
    let addModal = this.modalCtrl.create(EditPage, {
      selectedItem: item
    });
    addModal.onDidDismiss((item) => {
      if(item){
        this.dataService.save(this.items);
        console.log('returned item:', item)
      }
    });
    addModal.present();
    }

}