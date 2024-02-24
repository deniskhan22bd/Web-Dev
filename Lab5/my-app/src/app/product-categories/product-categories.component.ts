import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.css'
})
export class ProductCategoriesComponent {
  category = {
    'phones' : 'phones',
    'laptops' : 'laptops',
    'furniture' : 'furniture',
    'homeItems' : 'homeItems'
  }
}
