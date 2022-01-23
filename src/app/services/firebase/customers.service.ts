import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initializeApp } from 'firebase/app';
import { setDoc, doc, collection, getFirestore, getDocs, deleteDoc, where, query } from 'firebase/firestore';
import { environment } from 'src/environments/environment'; 
import { CustomerI } from 'src/app/models/customer.interface';
import { CustomerDNI } from 'src/app/models/customerDNI.interface';

const app = initializeApp(environment.firebase);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customer: CustomerI|CustomerDNI|any  = <CustomerI|CustomerDNI>{};

  private customerObj = new BehaviorSubject<CustomerI|CustomerDNI>(this.customer);
  custChange = this.customerObj.asObservable();

  private _mood= new BehaviorSubject<boolean>(false);
  _moodChange = this._mood.asObservable();

  private _custDoc= new BehaviorSubject<string>('');
  _custDocChange = this._custDoc.asObservable();

  constructor() { }

  async saveDoc(customer: CustomerI|CustomerDNI){
    await setDoc(doc(db,"customers",customer.numDoc),customer);
    this.customer = null;
  }

  async getCustomers(): Promise<any>{
    const q = query(collection(db, "customers"), where("tipoDoc","==","6"));
    const r = query(collection(db, "customers"));
    const querySnapshot = await getDocs(r);
    return querySnapshot;
  }

  async deleteCustomer(cust: string){
    await deleteDoc(doc(db, "customers", cust));
  }

  createNewCust(tipoDoc:string, mood: boolean){
    this._mood.next(mood);
    this._custDoc.next(tipoDoc);
  }

  sendCustomerForEdit(customer: CustomerI | CustomerDNI){
    this._mood.next(true);
    this._custDoc.next(customer.tipoDoc);
    this.customerObj.next(customer);
  }
  
  seeCustomerDetails(customer: CustomerI){
    this.customerObj.next(customer);
  }
}
