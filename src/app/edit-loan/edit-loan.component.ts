import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoanService } from '../loan.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {



  loanToUpdate;

  constructor(private route : ActivatedRoute,
    private loanService:LoanService,
    private router : Router) { 
    this.route.queryParams.subscribe(data=>{
      this.loanToUpdate=data;
      console.log(this.loanToUpdate);
    });
  }
updateLoan(form:NgForm){
  this.loanService.updateData(form.value).subscribe(response=>{
    console.log(response);
    if(response.error === false){
      form.reset();
      this.router.navigateByUrl('/view-lpg-admin');
          }
  });
}


  ngOnInit() {
  }

}
