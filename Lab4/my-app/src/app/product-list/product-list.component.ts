import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductComponent,
    CommonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList: Product[] = [
    {
      id: 1,
      name: "Смартфон Apple iPhone 13 128Gb Midnight черный",
      description: `технология NFC: Да
      цвет: черный
      тип экрана: OLED, Super Retina XDR
      диагональ: 6.1 дюйм
      размер оперативной памяти: 4 ГБ
      процессор: 6-ядерный Apple A15 Bionic
      объем встроенной памяти: 128.0 ГБ
      емкость аккумулятора: 3095.0 мАч`,
      rating: 5,
      price: 290000,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large"
    },
    {
      id: 2,
      name: "Смартфон Apple iPhone 14 128Gb черный",
      description: `технология NFC: Да
      цвет: черный
      тип экрана: OLED, Super Retina XDR display
      диагональ: 6.1 дюйм
      размер оперативной памяти: 6 ГБ
      процессор: 6-ядерный Apple A15 Bionic
      объем встроенной памяти: 128.0 ГБ
      емкость аккумулятора: 3279.0 мАч`,
      rating: 5,
      price: 320000,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=preview-large"
    },

  ]

  getProductList(){
    console.log(this.productList)
    return this.productList;
  }
}
