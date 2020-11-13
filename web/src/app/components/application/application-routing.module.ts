import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationCreateComponent } from './view/application-create/application-create.component';
import { ApplicationEditComponent } from './view/application-edit/application-edit.component';
import { ApplicationListComponent } from './view/application-list/application-list.component';
import { ApplicationComponent } from './view/application.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [{
      path: 'list',
      component: ApplicationListComponent
    },
    {
      path: 'create',
      component: ApplicationCreateComponent
    },
    {
      path: 'edit/:id',
      component: ApplicationEditComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
