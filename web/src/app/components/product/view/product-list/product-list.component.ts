import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEntity } from '../../model/product.entity';
import { ProductService } from '../../service/product.service';
import { ProductCreateComponent } from '../product-create/product-create.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  data: ProductEntity[];

  constructor(private readonly service: ProductService, private readonly router: Router) { }

  ngOnInit() {
    this.getData();
  }

  delete(id: number) {
    this.service.delete(id)
      .subscribe(
        data => {
          this.getData()
        },
        error => console.log(error));
  }

  create() {
    this.router.navigate(['product/create']);
  }

  edit(id: number) {
    this.router.navigate(['product/edit', id]);
  }

  getData() {
    this.service.getList().subscribe(d => {
      if (d && d.length > 0) {
        this.data = d;
      }
    });
  }
}
