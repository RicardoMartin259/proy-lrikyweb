import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initializeApp } from 'firebase/app'
//import { getFirestore, getDocs } from 'firebase/firestore/lite';
import { onSnapshot, query, where, collection, getFirestore, getDocs } from 'firebase/firestore'
import { environment } from 'src/environments/environment'; 

const app = initializeApp(environment.firebase);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  collName = 'products';
  public searchProduct = new BehaviorSubject<any>('');
  
  constructor() { }

  async getCities(): Promise<any> {
    
    const querySnapshot = await getDocs(collection(db, this.collName));
    /*querySnapshot.forEach((doc) => {
      console.log(`${doc.id}`);
      console.log(doc.data());
      console.log(doc)
    });*/
    return querySnapshot;
  }

  searchFor(value: string){
    this.searchProduct.next(value);
  }
  
  
}
