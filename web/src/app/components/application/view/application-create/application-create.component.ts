import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationEntity } from '../../model/application.entity';
import { ApplicationService } from '../../service/application.service';

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.css']
})
export class ApplicationCreateComponent implements OnInit {

  data: ApplicationEntity = new ApplicationEntity();

  constructor(private readonly service: ApplicationService, private readonly router: Router) { }
  ngOnInit() { }

  onSubmit() {
    this.service.create(this.data).subscribe(d => {
      if (d) {
        this.data = d;
        this.router.navigate(['/application/list']);
      }
    });   
  }
}
