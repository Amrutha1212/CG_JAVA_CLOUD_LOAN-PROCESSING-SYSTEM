import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { NgForm } from '@angular/forms';
export let apply ={
  "fullName":"",
  "password":"",
  "email":"",
  "gender":"",
  "dob":"",
  "role":"",
  "adharNo":0,
  "mobileNo":0,
  "applicant":[{
                 "loanType":"",
                "loanAmount":0,
                 "applicationStatus":""
  }]

}

@Component({
  selector: 'app-make-loan',
  templateUrl: './make-loan.component.html',
  styleUrls: ['./make-loan.component.css']
})
export class MakeLoanComponent implements OnInit {
  defValue="Requested";
  defaultValue = "ROLE_CUSTOMER";
  defaultVal = "Qwerty@123";
  // clientService: any;
  message: any;
  message1 : any;
  constructor(private clientService : ClientService) { }
  
  ngOnInit() {
  }

  postCustomer(form:NgForm){
    apply.fullName=form.value.fullName;
    apply.email=form.value.email;
    apply.password=form.value.password;
    apply.gender=form.value.gender;
    apply.mobileNo=form.value.mobileNo;
    apply.adharNo=form.value.adharNo;
    apply.role=form.value.role;
    apply.dob=form.value.dob;
    apply.applicant[0].loanType=form.value.loanType;
    apply.applicant[0].loanAmount=form.value.loanAmount;
    apply.applicant[0].applicationStatus=form.value.applicationStatus;

    this.clientService.postData(apply).subscribe(response =>{
      console.log(response);
      if(response.error ===false){
        this.message=response.message;
        setTimeout(() =>{
          this.message= null;
        },10000);
        form.reset();
      }
      
      else if(response.error ===true){
        this.message1=response.message;
        setTimeout(() =>{
          this.message1= null;
        },10000);
      }

      // form.reset();
    });
    
  }



}
