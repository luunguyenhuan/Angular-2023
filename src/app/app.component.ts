import { Component } from '@angular/core';
import { Product } from './common/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
export class AppComponent {
  title = 'hello-angular';
}
**/
// Đây là chú thích
/** Đây cũng là chú thích  **/

export class AppComponent {
  product : Product = {
    name: 'huan',
    quantity: 200,
    price: 1500
  }
}
