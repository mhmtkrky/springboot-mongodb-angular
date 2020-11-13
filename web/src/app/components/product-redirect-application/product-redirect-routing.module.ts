import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ProductRedirectListComponent } from './product-redirect-list/product-redirect-list.component';
import { ProductRedirectSetComponent } from './product-redirect-set/product-redirect-set.component';
import { ProductRedirectComponent } from './product-redirect.component';

const routes: Routes = [
  {
    path: '',
    component: ProductRedirectComponent,
    children: [{
      path: 'list/:id',
      component: ProductRedirectListComponent
    },
    {
      path: 'set/:id',
      component: ProductRedirectSetComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRedirectRoutingModule { }
