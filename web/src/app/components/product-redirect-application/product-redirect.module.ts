import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRedirectRoutingModule } from './product-redirect-routing.module';
import { ProductRedirectListComponent } from './product-redirect-list/product-redirect-list.component';
import { ProductRedirectSetComponent } from './product-redirect-set/product-redirect-set.component';
import { ProductRedirectComponent } from './product-redirect.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductRedirectListComponent, ProductRedirectSetComponent, ProductRedirectComponent],
  imports: [
    CommonModule,
    ProductRedirectRoutingModule,
    FormsModule
  ]
})
export class ProductRedirectModule { }
