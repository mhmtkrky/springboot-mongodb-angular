import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationEntity } from '../../model/application.entity';
import { ApplicationService } from '../../service/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css'],
})
export class ApplicationListComponent implements OnInit {

  data: ApplicationEntity[];

  constructor(private readonly service: ApplicationService, private readonly router: Router) { }

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
    this.router.navigate(['application/create']);
  }

  edit(id: number) {
    this.router.navigate(['application/edit', id]);
  }

  getData() {
    this.service.getList().subscribe(d => {
      if (d && d.length > 0) {
        this.data = d;
      }
    });
  }

  register(id) {
    this.router.navigate(['product-redirect/list', id]);
  }
}
