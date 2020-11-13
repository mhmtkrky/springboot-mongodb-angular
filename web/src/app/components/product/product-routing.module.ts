import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './view/product-create/product-create.component';
import { ProductEditComponent } from './view/product-edit/product-edit.component';
import { ProductListComponent } from './view/product-list/product-list.component';
import { ProductComponent } from './view/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [{
      path: 'list',
      component: ProductListComponent
    },
    {
      path: 'create',
      component: ProductCreateComponent
    },
    {
      path: 'edit/:id',
      component: ProductEditComponent
    }]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
