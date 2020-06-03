import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MakeLoanComponent } from './make-loan/make-loan.component';
import { ViewLoanProgramsComponent } from './view-loan-programs/view-loan-programs.component';
// import { HeaderComponent } from './header/header.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddLoanProgramsComponent } from './add-loan-programs/add-loan-programs.component';
import { ViewLpgAdminComponent } from './view-lpg-admin/view-lpg-admin.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { EditLoanComponent } from './edit-loan/edit-loan.component';
import { ViewApplicantDetailsComponent } from './view-applicant-details/view-applicant-details.component';
import { AuthGaurd } from './auth.guard';
import { GetDetailsComponent } from './get-details/get-details.component';
import { LoanLoginComponent } from './loan-login/loan-login.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
imports: [
    RouterModule.forRoot([
      {path :'home', component : HomeComponent},
      {path: '', redirectTo:'/home', pathMatch: 'full'},
      {path :'login', component : LoginComponent},
    //   {path :'header', component : HeaderComponent},
      {path :'make-loan', component : MakeLoanComponent},
      {path :'add-client', component : AddClientComponent, canActivate:[AuthGaurd] ,
      data:{roles:['ROLE_ADMIN']}},
      {path :'add-loan-programs', component : AddLoanProgramsComponent, canActivate:[AuthGaurd] ,
      data:{roles:['ROLE_ADMIN']}},
      {path :'view-lpg-admin', component : ViewLpgAdminComponent, canActivate:[AuthGaurd] ,
      data:{roles:['ROLE_ADMIN']}},
      {path :'get-details', component : GetDetailsComponent},
      {path :'loan-login', component : LoanLoginComponent, canActivate:[AuthGaurd] ,
      data:{roles:['ROLE_CUSTOMER']}},
      {path :'check-status', component : CheckStatusComponent, canActivate:[AuthGaurd] ,
      data:{roles:['ROLE_CUSTOMER']}},
      {path :'view-client', component : ViewClientComponent, canActivate:[AuthGaurd] ,
      data:{roles:['ROLE_ADMIN']}},
      {path :'edit-loan', component : EditLoanComponent, canActivate:[AuthGaurd] ,
      data:{roles:['ROLE_ADMIN']}},
      {path :'view-customer', component : ViewCustomerComponent, canActivate:[AuthGaurd] ,
      data:{roles:['ROLE_ADMIN']}},
      {path :'view-applicant-details', component : ViewApplicantDetailsComponent,canActivate:[AuthGaurd] ,
      data:{roles:['ROLE_APPROVAL']}},
      {path :'view-loan-programs', component : ViewLoanProgramsComponent},
      {path : '**', component: PageNotFoundComponent}
    ])
  ],
  exports:[
      RouterModule
  ]
})
export class AppRoutingModule { }