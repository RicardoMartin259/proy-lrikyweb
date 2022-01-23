import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any []=[];
  public filterprods: string = '';
  
  constructor(private router: Router,
    private prodService: ProductsService,
    private cartService: CartService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProds();
    this.prodService.searchProduct.subscribe( value => this.filterprods = value);
  }

  goToLubs() {
    this.router.navigate(['/']);
  }

  getProds(): any{
    this.prodService.getCities().then((data)=>{
      data.forEach((element: any) => {
        this.products.push(
          {
            id: element.id,
            ... element.data()
          }
        );
      });
    });
  }

  goDetails(id: string){
    alert("going for details of: " + id);
  }

  addItem(product: any){
    this.cartService.addItem(product);
    this.toastr.success('Se agregó el producto','',{timeOut: 2000 ,positionClass: 'toast-bottom-right'});
  }
}
