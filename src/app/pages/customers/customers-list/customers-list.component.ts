import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerI } from 'src/app/models/customer.interface';
import { CustomersService } from 'src/app/services/firebase/customers.service';
import { CustomerNewComponent } from '../customer-new/customer-new.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import Swal from 'sweetalert2';
import { CustomerDNI } from 'src/app/models/customerDNI.interface';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: any[]=[];
  

  constructor(
    private customerService: CustomersService, 
    private router: Router,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  copiar(doc: string){
    navigator.clipboard.writeText(doc);
  }

  getCustomers(){
    this.customerService.getCustomers().then((data)=>{
      data.forEach((element :any) => {
        this.customers.push({... element.data()});
      });
    });
  }

  createCustForm(){
    let tipoDoc="";
    Swal.fire({
      title: '¿Que tipo de cliente desea crear?',
      icon: 'warning',
      iconColor: '#ee6002',
      showDenyButton: true,
      confirmButtonColor: '#6200ee',
      denyButtonColor: '#008b00',
      confirmButtonText: 'Persona Natural',
      denyButtonText: 'Persona Juridica',
    }).then((result) => {
      if (result.isConfirmed) {
        tipoDoc = "1";
      }else if (result.isDenied){
        tipoDoc = "6";
      }
      if(tipoDoc.length >= 1){
        this.customerService.createNewCust(tipoDoc,false);
        const dialogConf = new MatDialogConfig();
        dialogConf.disableClose = true;
        dialogConf.autoFocus = true;
        dialogConf.width = "55%";
        this.dialog.open(CustomerNewComponent, dialogConf);
      }
    })
  }

  editCustForm(customer: CustomerI){
    this.customerService.sendCustomerForEdit(customer);
    const dialogConf = new MatDialogConfig();
    dialogConf.disableClose = true;
    dialogConf.autoFocus = true;
    dialogConf.width = "55%";
    this.dialog.open(CustomerNewComponent, dialogConf);
  }

  seeCustDetails(customer: CustomerI){
    this.customerService.sendCustomerForEdit(customer);
    const dialogConf = new MatDialogConfig();
    dialogConf.autoFocus = true;
    dialogConf.width = "50%";
    this.dialog.open(CustomerDetailsComponent, dialogConf);
  }

  confirmDeleteCustomer(customer: CustomerI|CustomerDNI){
    Swal.fire({
      title: '¿Está seguro?',
      text: "¿Desea eliminar al cliente: " + 
        customer.numDoc +
        "? ¡Esta acción no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, eliminar!',
      cancelButtonText: '¡No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService.deleteCustomer(customer.numDoc);
        Swal.fire(
          '¡Eliminado!',
          'El cliente '+ customer.numDoc +' ha sido eliminado.',
          'success'
        )
      }
    })
  }
}
