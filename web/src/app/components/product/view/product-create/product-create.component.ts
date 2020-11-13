import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEntity } from '../../model/product.entity';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  data: ProductEntity = new ProductEntity();

  constructor(private readonly service: ProductService, private readonly router: Router) { }

  ngOnInit() { }


  onSubmit() {
    this.service.create(this.data).subscribe(d => {
      if (d) {
        this.data = d;
        this.router.navigate(['/product/list']);
      }
    });
  }
}
