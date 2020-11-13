import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationEntity } from '../../model/application.entity';
import { ApplicationService } from '../../service/application.service';

@Component({
  selector: 'app-application-edit',
  templateUrl: './application-edit.component.html',
  styleUrls: ['./application-edit.component.css']
})
export class ApplicationEditComponent implements OnInit {

  id: any;
  data: ApplicationEntity;

  constructor(private readonly service: ApplicationService
    , private readonly router: Router
    , private readonly activeRoute: ActivatedRoute) { }

    ngOnInit() {
      this.getId();
      this.getData();
    }
  
    getId() {
      this.activeRoute.paramMap.subscribe(paramMap => {
        this.id = paramMap.get('id');
        if (!this.id) {
          //Error
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
          this.router.navigate(['/application/list']);
        }
      });
    }
  }