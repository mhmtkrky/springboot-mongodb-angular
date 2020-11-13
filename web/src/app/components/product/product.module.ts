import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './view/product-list/product-list.component';
import { ProductComponent } from './view/product.component';
import { ProductCreateComponent } from './view/product-create/product-create.component';
import { FormsModule } from '@angular/forms';
import { ProductEditComponent } from './view/product-edit/product-edit.component';


@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductCreateComponent, ProductEditComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ], entryComponents: [ProductCreateComponent, ProductEditComponent]
})
export class ProductModule { }
