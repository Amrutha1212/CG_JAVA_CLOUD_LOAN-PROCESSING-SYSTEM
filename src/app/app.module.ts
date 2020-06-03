import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
 import { FormsModule } from "@angular/forms";
 import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MakeLoanComponent } from './make-loan/make-loan.component';
import { ViewLoanProgramsComponent } from './view-loan-programs/view-loan-programs.component';
import { HeaderComponent } from './header/header.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddLoanProgramsComponent } from './add-loan-programs/add-loan-programs.component';
import { ViewLpgAdminComponent } from './view-lpg-admin/view-lpg-admin.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditLoanComponent } from './edit-loan/edit-loan.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { ViewApplicantDetailsComponent } from './view-applicant-details/view-applicant-details.component';

import { ClientService } from './client.service';
import { RequestInterceptor } from './request.interceptor';
import { GetDetailsComponent } from './get-details/get-details.component';
import { LoanLoginComponent } from './loan-login/loan-login.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MakeLoanComponent,
    ViewLoanProgramsComponent,
    HeaderComponent,
    AddClientComponent,
    AddLoanProgramsComponent,
    ViewLpgAdminComponent,
    ViewClientComponent,
    EditLoanComponent,
    SearchPipePipe,
    ViewApplicantDetailsComponent,
    GetDetailsComponent,
    LoanLoginComponent,
    CheckStatusComponent,
    ViewCustomerComponent,
    PageNotFoundComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [
    ClientService,
    {
 provide : HTTP_INTERCEPTORS,
 useClass : RequestInterceptor,
 multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
