import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from '../loan.service';

// export interface Loan{
//   loanNo: number;
//   loanType:string;
//   period:string;
//   loanAmount:string;
//   rateOfInterest:string;
// }
@Component({
  selector: 'app-view-lpg-admin',
  templateUrl: './view-lpg-admin.component.html',
  styleUrls: ['./view-lpg-admin.component.css']
})
export class ViewLpgAdminComponent implements OnInit {

 
  message:string;
  loans;
  pageNo = 0;
itemsPerPage = 2;
totalItems ;
fieldName;
searchValue;

  constructor( private loanService: LoanService,
    private router:Router) { 
    this.getLoans(null);
  }
  ngOnInit() : void{
    this.loanService.getDataByPage(this.pageNo , this.itemsPerPage, null).subscribe(response => {
      console.log(response);
      this.loans = response.content;
      this.totalItems = response.totalElements;
    });
  }
  getLoans(fieldName){
    this.loanService.getDataByPage(this.pageNo , this.itemsPerPage, fieldName).subscribe(response => {
      console.log(response);
      this.loans = response.content;
      this.totalItems = response.totalElements;
    });
  }

  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getLoans(this.fieldName);
  }
  getSortedData(){
    console.log(this.fieldName);
    this.getLoans(this.fieldName); 
  }

  selectLoan(loan){
    this.router.navigate(['./edit-loan'],{queryParams:loan});
  }

    deleteLoan(loan){
      this.loanService.deleteData(loan).subscribe(response =>{
        console.log(response);
        if(response.error === false){
          this.getLoans(null);
          this.message = response.message;
          setTimeout(() =>{
            this.message = null;
          },5000);
        }
      });
    }
}
