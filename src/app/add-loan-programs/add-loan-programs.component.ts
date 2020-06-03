import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-loan-programs',
  templateUrl: './add-loan-programs.component.html',
  styleUrls: ['./add-loan-programs.component.css']
})
export class AddLoanProgramsComponent implements OnInit {

  constructor(private loanService: LoanService) { }

  ngOnInit() {
  }
  message:string;
  postLoans(form:NgForm){
    this.loanService.postData(form.value).subscribe(response=>{
      console.log(response);
      if(response.error ===false){
        this.message=response.message;
        setTimeout(() =>{
          this.message= null;
        },5000);
      }
      form.reset();
    });
  }
}
