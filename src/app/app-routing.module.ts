import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCusComponent } from './list-cus/list-cus.component';
import { AddCusComponent } from './add-cus/add-cus.component';
import { EditCusComponent } from './edit-cus/edit-cus.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { ListCtComponent } from './list-ct/list-ct.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { AddCtComponent } from './add-ct/add-ct.component';
import { EditCtComponent } from './edit-ct/edit-ct.component';
import { ListExComponent } from './list-ex/list-ex.component';
import { AddExComponent } from './add-ex/add-ex.component';
import { EditExComponent } from './edit-ex/edit-ex.component';


const routes: Routes = [
  { path: '', component: ListCusComponent, pathMatch: 'full' },
  { path: 'list-cus', component: ListCusComponent },
  { path: 'add-cus', component: AddCusComponent },
  { path: 'update-cus', component: EditCusComponent },

  { path: '', component: ListEmpComponent, pathMatch: 'full' },
  { path: 'list-emp', component: ListEmpComponent },
  { path: 'add-emp', component: AddEmpComponent },
  { path: 'update-emp', component: EditEmpComponent },

  { path: '', component: ListCtComponent, pathMatch: 'full' },
  { path: 'list-ct', component: ListCtComponent },
  { path: 'add-ct', component: AddCtComponent },
  { path: 'update-ct', component: EditCtComponent },

  { path: '', component: ListExComponent, pathMatch: 'full' },
  { path: 'list-ex', component: ListExComponent },
  { path: 'add-ex', component: AddExComponent },
  { path: 'update-ex', component: EditExComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
