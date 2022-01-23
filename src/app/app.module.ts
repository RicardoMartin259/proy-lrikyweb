import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomersListComponent } from './pages/customers/customers-list/customers-list.component';
import { CustomerNewComponent } from './pages/customers/customer-new/customer-new.component';
import { CustomerDetailsComponent } from './pages/customers/customer-details/customer-details.component';

import { HttpClientModule } from '@angular/common/http';
import { NgMatModule } from './shared/ng-mat/ng-mat.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersListComponent,
    CustomerNewComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore())
    //initializeApp(environment.firebase),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMatModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomerNewComponent, 
    CustomerDetailsComponent
  ]
})
export class AppModule { }
