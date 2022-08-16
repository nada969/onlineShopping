import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.scss']
})
export class ProListComponent implements OnInit {

  // cardI:any[]=[];
  // card: any;

  // infoReceived1: string[]=[];
 

  // constructor(private cardservice:CardsService, private dservice: CardsService) { }

  // ngOnInit(): void {
  //   this.getcardI()
  // }

  // getcardI(){
  //   this.cardservice.getcard().subscribe(
  //     data ​=> {
  //       this.cardI = data;
  //       console.log('Data: ', this.cardI)
  //   },
  //   err => {
  //       console.log('Error: ', err)
  //   },
  //   () => console.log('Complete')
  //   )
  // }

  // getInfoFromService1(){

  //   this.infoReceived1 = this.dservice.getInfo1()

  // }

  constructor(){}
  ngOnInit(): void {
    
  }
}
