import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/pages/cart.service';
import { ProductsService } from 'src/app/pages/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public totalItems: number = 10;
  searchValue: string = '';

  constructor(private cartService: CartService,
    private prodService: ProductsService) { }

  ngOnInit(): void {
    this.cartService.getItems().subscribe(res=>{
      this.totalItems = res.length;
    });
  }

  searchFor(value: string){
    this.prodService.searchFor(value);
  }

}
