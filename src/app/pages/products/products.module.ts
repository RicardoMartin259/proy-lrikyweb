import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProdfilterPipe } from 'src/app/pipes/prodfilter.pipe';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { ResultsComponent } from './results/results.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProdfilterPipe,
    CategoriesComponent,
    ResultsComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  providers: []
})
export class ProductsModule { }
