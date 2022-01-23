import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProducts() {
    this.router.navigate(['/products']);
  }

  goToCustomers() {
    this.router.navigate(['customers'])
  }

  goToSuppliers() {
    
  }

  goToSales() {
    
  }
  goToPurchases() {
    
  }
  goToOthers() {
    
  }

}
