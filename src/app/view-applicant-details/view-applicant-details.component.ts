import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantService } from '../applicant.service';
import { ClientService } from '../client.service';

export let applicant = {
  "fullName": "",
  "password": "",
  "email": "",
  "gender": "",
  "dob": "",
  "role": "",
  "adharNo": 0,
  "mobileNo": 0,
  "applicant": [{
    "loanType": "",
    "loanAmount": 0,
    "applicationStatus": ""
  }]
}

@Component({
  selector: 'app-view-applicant-details',
  templateUrl: './view-applicant-details.component.html',
  styleUrls: ['./view-applicant-details.component.css']
})
export class ViewApplicantDetailsComponent implements OnInit {

  user;
  message: string;
  message1: string; 
  searchValue;
  pageNo = 0;
  itemsPerPage = 2;
  totalItems ;
  fieldName;

  constructor(private clientService : ClientService,private applicantService: ApplicantService,
    private router:Router ) {
      this.getApplicant(this.fieldName);
   }

  ngOnInit() : void{
    this.clientService.getApplicantByPage(this.pageNo , this.itemsPerPage , null).subscribe(response => {
      console.log(response);
      this.user = response.content;
      this.totalItems = response.totalElements;
    });
  }
  getApplicant(fieldName){
    this.clientService.getApplicantByPage(this.pageNo , this.itemsPerPage, fieldName).subscribe(response => {
      console.log(response);
      this.user = response.content;
      this.totalItems = response.totalElements;
    });
  }

  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getApplicant(null);
  }
  getSortedData(){
    console.log(this.fieldName);
    this.getApplicant(this.fieldName); 
  }

  
  selectApprove(applicant) {
    this.applicantService.updateApprove(applicant).subscribe(response => {
      console.log(response);
      if (response.error === false) {
        this.getApplicant(this.fieldName);
        this.message1 = response.message;
        setTimeout(() => {
          this.message1 = null;
        }, 5000);
      }
    });
  }

  selectReject(applicant) {
    this.applicantService.updateReject(applicant).subscribe(response => {
      console.log(response);
      if (response.error === false) {
        this.getApplicant(this.fieldName);
        this.message = response.message;
        setTimeout(() => {
          this.message = null;
        }, 5000);
      }
    });
  }


}
