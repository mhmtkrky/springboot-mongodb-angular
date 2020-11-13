import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductEntity } from '../../model/product.entity';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: any;
  data: ProductEntity;

  constructor(private readonly service: ProductService
    , private readonly router: Router
    , private readonly activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getId();
  }

  getId() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      if (this.id) {
        this.getData();
      }
    });
  }

  getData() {
    if (this.id) {
      this.service.getById(this.id).subscribe(d => {
        if (d) {
          this.data = d;
        }
      });
    }
  }

  onSubmit() {
    this.service.update(this.data).subscribe(d => {
      if (d) {
        this.data = d;
        this.router.navigate(['/product/list']);
      }
    });
  }
}
