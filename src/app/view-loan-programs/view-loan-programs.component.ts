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
  selector: 'app-view-loan-programs',
  templateUrl: './view-loan-programs.component.html',
  styleUrls: ['./view-loan-programs.component.css']
})
export class ViewLoanProgramsComponent implements OnInit {
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

}
