import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationEntity } from '../../application/model/application.entity';
import { ApplicationService } from '../../application/service/application.service';
import { ProductEntity } from '../../product/model/product.entity';
import { ProductService } from '../../product/service/product.service';
import { RegisterProduct } from '../model/register.product';

@Component({
  selector: 'app-product-redirect-list',
  templateUrl: './product-redirect-list.component.html',
  styleUrls: ['./product-redirect-list.component.css']
})
export class ProductRedirectListComponent implements OnInit {

  data: RegisterProduct = new RegisterProduct();
  application: ApplicationEntity;
  products: ProductEntity[];
  applicationId: any;

  constructor(private readonly productService: ProductService
    , private readonly applicationService: ApplicationService
    , private readonly router: Router
    , private readonly activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getId();
  }

  getId() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      this.applicationId = paramMap.get('id');
      if (this.applicationId) {
        this.data.applicationId = this.applicationId;
        this.getApplication();
      }
    });
  }

  getApplication() {
    this.applicationService.getById(this.applicationId).subscribe(d => {
      if (d) {
        this.application = d;
        this.products = this.application.products;
      }
    });
  }

  back() {
    this.router.navigate(['/application/list']);
  }

  deleteRegister(id) {
    this.data.productId = id;
    this.productService.deleteRegister(this.data).subscribe(d => {
      if (d) {
        this.getApplication();
      }
    });
  }

  register(id) {
    this.router.navigate(['product-redirect/set', id]);
  }
}
