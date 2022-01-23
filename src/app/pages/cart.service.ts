import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems: any [] = [];
  public products = new BehaviorSubject<any>([]);

  constructor() { }

  getItems(){
    return this.products.asObservable();
  }

  addItem(item: any){
    this.cartItems.push(item);
    this.products.next(this.cartItems);
    this.doTotalSum();
  }

  doTotalSum(): number{
    let total = 0;
    this.cartItems.forEach((item:any)=>{
      total += item.price;
    });
    return total;
  }

  removeItem(item: any){
    console.log(this.cartItems);
    let pos = this.cartItems.indexOf(item);
    console.log(this.cartItems[pos]);
    this.cartItems.splice(pos, 1);
    this.products.next(this.cartItems);
  }

  removeAllCart(){
    this.cartItems = [];
    this.products.next(this.cartItems);
  }
}
