import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductEntity } from '../../product/model/product.entity';
import { ProductService } from '../../product/service/product.service';
import { RegisterProduct } from '../model/register.product';

@Component({
  selector: 'app-product-redirect-set',
  templateUrl: './product-redirect-set.component.html',
  styleUrls: ['./product-redirect-set.component.css']
})
export class ProductRedirectSetComponent implements OnInit {

  applicationId: any;
  productList: ProductEntity[];
  data: RegisterProduct = new RegisterProduct();

  constructor(private readonly activeRoute: ActivatedRoute
    , private readonly router: Router
    , private readonly productService: ProductService) { }

  ngOnInit() {
    this.getId();
  }

  getId() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      this.applicationId = paramMap.get('id');
      if (this.applicationId) {
        this.data.applicationId = this.applicationId;
        this.getProduct();
      }
    });
  }

  getProduct() {
    this.productService.getList().subscribe(d => {
      if (d && d.length) {
        this.productList = d.filter(i => !i.used);
      }
    });
  }

  onSubmit() {
    this.productService.register(this.data).subscribe(d => {
      if (d) {
        this.router.navigate(['/product-redirect/list', this.applicationId]);
      }
    });
  }

  back() {
    this.router.navigate(['/product-redirect/list', this.applicationId]);
  }
}
