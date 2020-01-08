import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasestudyFuramaComponent } from './casestudy-furama/casestudy-furama.component';
import { FormsModule } from '@angular/forms';
import { AddCusComponent } from './add-cus/add-cus.component';
import { ListCusComponent } from './list-cus/list-cus.component';
import { EditCusComponent } from './edit-cus/edit-cus.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AddCtComponent } from './add-ct/add-ct.component';
import { EditCtComponent } from './edit-ct/edit-ct.component';
import { ListCtComponent } from './list-ct/list-ct.component';
import { AddExComponent } from './add-ex/add-ex.component';
import { ListExComponent } from './list-ex/list-ex.component';
import { EditExComponent } from './edit-ex/edit-ex.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { AddCdComponent } from './add-cd/add-cd.component';
import { EditCdComponent } from './edit-cd/edit-cd.component';
import { ListCdComponent } from './list-cd/list-cd.component'


@NgModule({
  declarations: [
    AppComponent,
    CasestudyFuramaComponent,
    AddCusComponent,
    ListCusComponent,
    EditCusComponent,
    AddEmpComponent,
    EditEmpComponent,
    ListEmpComponent,
    AddCtComponent,
    EditCtComponent,
    ListCtComponent,
    AddExComponent,
    ListExComponent,
    EditExComponent,
    AddCdComponent,
    EditCdComponent,
    ListCdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
