import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerI } from 'src/app/models/customer.interface';
import { CustomerDNI } from 'src/app/models/customerDNI.interface';
import { CustomersService } from 'src/app/services/firebase/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  tipoDoc = "";
  customer: any = <any>{}

  constructor(
    private dialog:MatDialogRef<CustomerDetailsComponent>,
    private  customerService:CustomersService
    ) { }

  ngOnInit(): void {
    this.getCustomerData()
  }

  getCustomerData(){
    let x = this.customerService.custChange.subscribe((e)=>{
      switch (e.tipoDoc) {
        case '1':
          this.tipoDoc="DNI";
          this.customer= <CustomerDNI>e;
          break;
        case '6':
          this.tipoDoc="RUC";
          this.customer= <CustomerI>e;
          break;
      }
    });
    x.unsubscribe();
  }

  closeForm(){
    this.dialog.close();
  }
}
