import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './view/application.component';
import { ApplicationListComponent } from './view/application-list/application-list.component';
import { ApplicationEditComponent } from './view/application-edit/application-edit.component';
import { ApplicationCreateComponent } from './view/application-create/application-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApplicationComponent, ApplicationListComponent, ApplicationEditComponent, ApplicationCreateComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule
  ], entryComponents: [ApplicationEditComponent, ApplicationCreateComponent]
})
export class ApplicationModule { }
