import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: any []=[];
  public total: number = 0;

  constructor(private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.getItems();
  }

  removeItem(item: any){
    this.cartService.removeItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }

  editQuant(){

  }

  doTotalSum(){

  }

  getItems(){
    this.cartService.getItems().subscribe(res=>{
      this.items = res;
      this.total = this.cartService.doTotalSum();
    });
  }

  goToProducts(){
    this.router.navigate(['products']);
  }
}
