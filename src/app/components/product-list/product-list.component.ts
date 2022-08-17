import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/pages/product';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  HotCoffee: Product[] = [];
  Coldcoffee: Product[] = []; 
  Finaltoken : any = '';
  
  constructor(private _http: HttpClient, private _login:LoginService) {
    this.Finaltoken = 'Bearer '+ this._login.getToken();
    
  }

  ngOnInit(): void {
    this.getAllColdProducts();
    this.getAllHotProducts();
  
  }

  getAllHotProducts() {
    let url = "https://shopping-app-bm.herokuapp.com/products?category=hot coffee";
    

    this._http.get(url, {headers :{'Authorization': this.Finaltoken}}).subscribe(
      
        (products: any) => {
          console.log(products);
          this.HotCoffee = products;
          for(let i = 0; i<this.HotCoffee.length; i++) {
            this.HotCoffee[i].category_name = 'Hot';
          }

        },
        error => {
          console.log(error);
          alert('somthing went wrong!' + error);
        });
  }

  getAllColdProducts() {
    
    let url = "https://shopping-app-bm.herokuapp.com/products?category=iced coffee";

    this._http.get(url, {headers :{'Authorization': this.Finaltoken}}).subscribe(
      
        (products: any) => {
          console.log(products);
          this.Coldcoffee = products;
          for(let i = 0; i<this.Coldcoffee.length; i++) {
            this.Coldcoffee[i].category_name = 'Iced';
          }

        },
        error => {
          console.log(error);
          alert('somthing went wrong!' + error);
        });
  }

}
