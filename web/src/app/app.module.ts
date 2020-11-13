import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  { path: 'product', loadChildren: () => import('./../app/components/product/product.module').then(m => m.ProductModule) },
  { path: 'application', loadChildren: () => import('./../app/components/application/application.module').then(m => m.ApplicationModule) },
  { path: 'product-redirect', loadChildren: () => import('./../app/components/product-redirect-application/product-redirect.module').then(m => m.ProductRedirectModule) },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
