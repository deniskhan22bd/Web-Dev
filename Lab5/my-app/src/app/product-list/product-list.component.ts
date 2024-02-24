import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [...products];
  category: string | undefined;

  constructor(
    private route: ActivatedRoute
  ) { 
    this.products = products
  }


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.category = params['category'];
      this.products = products.filter(product => product.category === this.category);
    });
  }

  
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  removeProduct(id : number){
    this.products = this.products.filter(product => product.id !== id);
  }

  like(id: number){
    const product = this.products.find(product => product.id === id)
    if(product){
      product.likes++;
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/